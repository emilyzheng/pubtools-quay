import os
import tempfile
import uuid
import subprocess
import logging
import json
import base64
from dataclasses import dataclass
from concurrent import futures
from concurrent.futures.thread import ThreadPoolExecutor

from .quay_client import QuayClient
from .utils.misc import get_internal_container_repo_name, log_step
from .command_executor import LocalExecutor
from .quay_api_client import QuayApiClient
from .exceptions import ManifestTypeError

LOG = logging.getLogger("pubtools.quay")


@dataclass
class DigestSecurityManifest:
    """Class for keeping track of which digest is associated with which security manifest."""

    digest: str
    security_manifest_path: str


class SecurityManifestPusher:
    """Class that pushes container security manifests."""

    def __init__(self, push_items: list, target_settings: dict):
        """
        Initialize.

        Args:
            push_items ([ContainerPushItem]):
                List of push items.
            target_settings (dict):
                Target settings.
        """
        self.push_items = push_items
        self.target_settings = target_settings
        # TODO: change this to whatever is decided
        self.cosign_private_key_path = self.target_settings["cosign_private_key_path"]
        self.cosign_public_key_path = self.target_settings["cosign_public_key_path"]
        self.quay_host = self.target_settings.get("quay_host", "quay.io").rstrip("/")

        self._src_quay_client = None
        self._dest_quay_api_client = None

    @property
    def src_quay_client(self):
        """Create and access QuayClient for source image."""
        if self._src_quay_client is None:
            self._src_quay_client = QuayClient(
                self.target_settings["source_quay_user"],
                self.target_settings["source_quay_password"],
                self.target_settings.get("source_quay_host") or self.quay_host,
            )
        return self._src_quay_client

    @property
    def dest_quay_api_client(self):
        """Create and access QuayApiClient for dest image."""
        if self._dest_quay_api_client is None:
            self._dest_quay_api_client = QuayApiClient(
                self.target_settings["dest_quay_api_token"], self.quay_host
            )
        return self._dest_quay_api_client

    def cosign_get_security_manifest(self, image_ref: str, output_file: str) -> bool:
        """
        Use cosign to get security manifest from an image and save it to a file.

        Args:
            image_ref (str):
                Image reference to get the manifest from.
            output_file (str):
                File where to save the manifest.
        Returns (bool):
            Whether the manifest was gathered successfully (True) or not (False).
        """
        cmd = ["cosign", "download", "sbom", image_ref, "--output-file", output_file]
        LOG.info(f"Running command '{' '.join(cmd)}'")
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

        if result.returncode:
            LOG.warning(f"Command {' '.join(cmd)} has failed: {result.stdout}")
            return False

        return True

    def cosign_get_existing_attestation(
        self, image_ref: str, output_file: str, rekor_url: str = None
    ) -> bool:
        """
        Use cosign to verify and get an attestation, if it exists.

        Args:
            image_ref (str):
                Image reference to get the manifest from.
            output_file (str):
                File where to save the attestation.
            rekor_url (str):
                URL of the rekor instance to use. If unset, default will be used.
        Returns (bool):
            Whether the attestation was gathered successfully (True) or not (False).
        """
        cmd = [
            "cosign",
            "verify-attestation",
            "--key",
            self.cosign_public_key_path,
            image_ref,
            "--output-file",
            output_file,
        ]
        if rekor_url:
            cmd.insert(2, f"--rekor-url={rekor_url}")
        LOG.info(f"Running command '{' '.join(cmd)}'")
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

        if result.returncode:
            LOG.warning(f"Command {' '.join(cmd)} has failed: {result.stdout}")
            return False

        return True

    def cosign_attest_security_manifest(
        self, security_manifest_path: str, image_ref: str, rekor_url: str = None
    ):
        """
        Use cosign to attest a security manifest and push the created image to the destination.

        Args:
            security_manifest_path (str):
                Path to the security manifest.
            image_ref (str):
                Image to which the security manifest should be attested to.
            rekor_url (str):
                URL of the rekor instance to use. If unset, default will be used.
        Raises:
            RuntimeError:
                If the command fails.
        """
        cmd = [
            "cosign",
            "attest",
            "--predicate",
            security_manifest_path,
            "--key",
            self.cosign_private_key_path,
            "-y",
            image_ref,
        ]
        if rekor_url:
            cmd.insert(2, f"--rekor-url={rekor_url}")
        LOG.info(f"Running command '{' '.join(cmd)}'")
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

        if result.returncode:
            LOG.error(f"Command {' '.join(cmd)} has failed: {result.stdout}")
            raise RuntimeError(f"Creating attestation to image {image_ref} has failed")

    def cosign_triangulate_attestation_image(self, image_ref: str, dir_path: str) -> str:
        """
        Use cosign to get the reference to the attestation image.

        Args:
            image_ref (str):
                Image whose attestation image reference to get.
            dir_path (str):
                Path where a file containing the reference should be created.
        Returns (str):
            Reference of the attestation image.
        Raises:
            RuntimeError:
                If the command fails.
        """
        reference_file = os.path.join(dir_path, f"attestation_reference_{uuid.uuid4().hex}.json")
        cmd = [
            "cosign",
            "triangulate",
            "--type=attestation",
            image_ref,
            "--output-file",
            reference_file,
        ]
        LOG.info(f"Running command '{' '.join(cmd)}'")
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

        if result.returncode:
            LOG.error(f"Command {' '.join(cmd)} has failed: {result.stdout}")
            raise RuntimeError(f"Getting attestation image to image {image_ref} has failed")

        with open(reference_file, "r") as f:
            return f.read().strip()

    def get_security_manifest_from_attestation(self, file_path: str) -> dict:
        """
        Parse image attestation and extract a security manifest.

        Args:
            file_path (str):
                Path of a file containing the attestation.
        Returns (dict):
            Parsed attestation.
        """
        with open(file_path, "r") as f:
            attestation = json.load(f)
        data = json.loads(base64.b64decode(attestation["payload"]))["predicate"]["Data"]

        return json.loads(data)

    def security_manifest_get_products(self, security_manifest: dict) -> set[str]:
        """
        Get a list of products from an already uploaded security manifest.

        Products are expected to be in format:
        "properties":[
            {
                "name": "product",
                "value": "product-1",
            },
            {
                "name": "product",
                "value": "product-2",
            },
        ]

        Args:
            security_manifest (dict):
                Security manifest extracted from an attestation.

        Returns (set[str]):
            List of products.
        """
        products = set()
        for property in security_manifest.get("properties", []):
            if property["name"] == "product":
                products.add(property["value"])

        return products

    def get_destination_repos(self, item: object) -> list[str]:
        """
        Get a list of destination refs (without tag/digest) of a push item.

        Args:
            item (ContainerPushItem):
                Push item.
        Returns ([str]):
            List of destination repositories (refs without tag/digest).
        """
        dest_repos = []
        image_schema = "{host}/{namespace}/{repo}"

        for repo in sorted(item.metadata["tags"].keys()):
            internal_repo = get_internal_container_repo_name(repo)
            dest_repo = image_schema.format(
                host=self.quay_host,
                namespace=self.target_settings["quay_namespace"],
                repo=internal_repo,
            )
            dest_repos.append(dest_repo)

        return list(set(dest_repos))

    def security_manifest_add_products(self, security_manifest_path: str, products: set) -> str:
        """
        Add product names of the shipped image to the security manifest.

        Modified manifest will be saved to a new file in the same directory.

        Args:
            security_manifest_path (str):
                Path to the extracted security manifest.
            products (set[str]):
                Products to add to the security manifest.
        Returns (str):
            Path to a file containing the modified security manifest.
        """
        with open(security_manifest_path, "r") as f1:
            security_manifest = json.load(f1)

        security_manifest["properties"] = []
        for product in products:
            security_manifest["properties"].append({"name": "product", "value": product})

        modified_security_manifest_path = os.path.join(
            os.path.dirname(security_manifest_path),
            f"full_security_manifest_{uuid.uuid4().hex}.json",
        )
        with open(modified_security_manifest_path, "w") as f2:
            json.dump(security_manifest, f2, indent=4)

        return modified_security_manifest_path

    def delete_existing_attestation(self, image_ref: str, dir_path: str):
        """
        Delete an existing attestation image.

        This may be necessary if a new product name is to be added to an existing security manifest.
        By default, 'cosign attest' appends the new security manifest to the existing attestation,
        making it offer two manifests instead of one. It is also unable to replace an existing
        attestation by itself. So the attestation image needs to be removed manually before being
        reuploaded with the complete list of products.

        Args:
            image_ref (str):
                Image whose attestation image should be removed.
            dir_path (str):
                Path to a directory where temporary files may be created.
        """
        LOG.info(f"Removing attestation image of image {image_ref}")
        attestation_image_ref = self.cosign_triangulate_attestation_image(image_ref, dir_path)

        tag = attestation_image_ref.split(":")[-1]
        repo_path = attestation_image_ref.split(":")[0]
        # Take only last two parts of the url, which are namespace + repo
        repository = "/".join(repo_path.split("/")[-2:])
        self.dest_quay_api_client.delete_tag(repository, tag)

    def merge_and_push_security_manifest(
        self,
        item,
        image_manifest: DigestSecurityManifest,
        destination_repos: list[str],
        dir_path: str,
    ):
        """
        Add products to security manifest and create an attestation.

        It's possible that a push item will not contain a product name. In this case, it will not
        be included in the security manifest. This may happen with the PushDocker method.
        Args:
            item (ContainerPushItem):
                Push item.
            image_manifest (DigestSecurityManifest):
                Image manifest that will be attested.
            destination_repos ([str]):
                Destination paths (without a tag) where the attestation will be pushed.
            dir_path (str):
                Directory path where artifacts will be created.

        """
        if item.metadata.get("product_name"):
            products = set([item.metadata["product_name"]])
        else:
            products = set()

        for repo in destination_repos:
            image_ref = f"{repo}@{image_manifest.digest}"
            attestation_file = os.path.join(dir_path, f"attestation_{uuid.uuid4().hex}.json")
            attestation_exist = self.cosign_get_existing_attestation(
                image_ref, attestation_file, self.target_settings.get("cosign_rekor_url", None)
            )

            if attestation_exist:
                LOG.info(f"Existing attestation file found for image {image_ref}")
                existing_security_manifest = self.get_security_manifest_from_attestation(
                    attestation_file
                )
                existing_products = self.security_manifest_get_products(existing_security_manifest)

                # It is assumed that images with the same digest must have the same
                # content of security manifests
                if len(products - existing_products) == 0:
                    LOG.info(
                        "No new product will be added to the existing security manifest. Skipping "
                        f"the security manifest upload for image {image_ref}."
                    )
                    continue
                LOG.info(
                    f"Image {image_ref} already has an attestation. A new attestation will "
                    "be uploaded containing all product names."
                )

                self.delete_existing_attestation(image_ref, dir_path)
                products = products | existing_products

            if products:
                full_security_manifest_path = self.security_manifest_add_products(
                    image_manifest.security_manifest_path, products
                )
            else:
                LOG.warning(
                    f"Push item {item} doesn't contain a product name. A new attestation "
                    "will be created without this information."
                )
                full_security_manifest_path = image_manifest.security_manifest_path

            self.cosign_attest_security_manifest(
                full_security_manifest_path,
                image_ref,
                self.target_settings.get("cosign_rekor_url", None),
            )

    def get_source_item_security_manifests(
        self, item: object, dir_path: str
    ) -> list[DigestSecurityManifest]:
        """
        Get security manifest of a source image.

        Source image has only one architecture, so at most one security manifest will be present.
        Based on testing, source images don't seem to contain security manifests, so failure to
        extract it doesn't result in an error.

        Args:
            item (ContainerPushItem):
                Push item of a source image.
            dir_path (str):
                Directory path where the manifest file should be created.
        Returns [DigestSecurityManifest]:
            Extracted security manifest.
        """
        source_ref = item.metadata["pull_url"]
        digest = self.src_quay_client.get_manifest_digest(source_ref)
        security_manifest_path = os.path.join(
            dir_path, f"security_manifest_source_{uuid.uuid4().hex}.json"
        )

        result = self.cosign_get_security_manifest(source_ref, security_manifest_path)
        if not result:
            LOG.warning(f"Source image {source_ref} doesn't contain a security manifest")
            return []

        return [
            DigestSecurityManifest(digest=digest, security_manifest_path=security_manifest_path)
        ]

    def get_multiarch_item_security_manifests(
        self, item: object, dir_path: str
    ) -> list[DigestSecurityManifest]:
        """
        Get security manifests of a multiarch image.

        Each architecture has its own security manifest. Older images don't have security manifests,
        so failure to extract them doesn't result in an error.

        Args:
            item (ContainerPushItem):
                Push item of a multiarch image.
            dir_path (str):
                Directory path where the manifest files should be created.
        Returns [DigestSecurityManifest]:
            Extracted security manifests.
        """
        image_manifests = []
        source_ref = item.metadata["pull_url"]
        # Get only repo so that we can attach arch digests to it
        source_repo = source_ref.split(":")[0]
        manifest_list = self.src_quay_client.get_manifest(
            source_ref, media_type=QuayClient.MANIFEST_LIST_TYPE
        )

        for arch in manifest_list["manifests"]:
            image_ref = f"{source_repo}@{arch['digest']}"
            security_manifest_path = os.path.join(
                dir_path,
                f"security_manifest_{arch['platform']['architecture']}_{uuid.uuid4().hex}.json",
            )

            result = self.cosign_get_security_manifest(image_ref, security_manifest_path)
            if not result:
                LOG.warning(
                    f"Image {source_ref} with architecture {arch['platform']['architecture']}"
                    " doesn't contain a security manifest"
                )
            else:
                image_manifests.append(
                    DigestSecurityManifest(
                        digest=arch["digest"], security_manifest_path=security_manifest_path
                    )
                )

        # I wonder if this should be treated as an error
        if image_manifests and len(image_manifests) != len(manifest_list["manifests"]):
            LOG.error(
                f"Only some architectures of multiarch image {source_ref} have a security manifest"
            )

        return image_manifests

    def push_item_security_manifests(self, item: object):
        """
        Generate and push container security manifest images of a push item.

        Args:
            item (ContainerPushItem):
                Push item.
        """
        is_source_image = (
            item.metadata["build"].get("extra", {}).get("image", {}).get("sources_for_nvr", False)
        )
        try:
            self.src_quay_client.get_manifest(
                item.metadata["pull_url"], media_type=QuayClient.MANIFEST_LIST_TYPE
            )
        except ManifestTypeError:
            is_multiach_image = False
        else:
            is_multiach_image = True

        with tempfile.TemporaryDirectory(prefix="security_manifest_") as tmp_dir:
            if is_source_image:
                digest_manifests = self.get_source_item_security_manifests(item, tmp_dir)
            elif is_multiach_image:
                digest_manifests = self.get_multiarch_item_security_manifests(item, tmp_dir)
            # if it's something like v2s1, it definitely doesn't have a security manifest
            else:
                LOG.warning(
                    f"Push item {item} contains neither source image nor multiarch image. "
                    "Skipping the push of security manifest images."
                )
                digest_manifests = []

            destination_repos = self.get_destination_repos(item)
            for digest_manifest in digest_manifests:
                self.merge_and_push_security_manifest(
                    item, digest_manifest, destination_repos, tmp_dir
                )

    @log_step("Push container security manifests")
    def push_security_manifests(self):
        """
        Attest and push security manifest for each push item in parallel.

        Skopeo login is performed before the workflow is started for each push item. Cosign can
        only get the credentials from the default Docker auth config file, so skopeo is used
        to set the correct value. This has to be done at runtime because the credentials are
        target-specific.
        """
        num_thread_security_manifest_push = self.target_settings.get(
            "num_thread_security_manifest_push", 5
        )

        with LocalExecutor() as executor:
            executor.skopeo_login(
                self.quay_host,
                self.target_settings["dest_quay_user"],
                self.target_settings["dest_quay_password"],
            )

        with ThreadPoolExecutor(max_workers=num_thread_security_manifest_push) as executor:
            future_results = [
                executor.submit(self.push_item_security_manifests, item) for item in self.push_items
            ]
            for future in futures.as_completed(future_results):
                if future.exception():
                    raise future.exception()  # pragma: no cover