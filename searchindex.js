Search.setIndex({docnames:["CHANGELOG","README","clear_repo","command_executor","container_image_pusher","entrypoints_reference","exceptions","iib_operations","image_untagger","index","manifest_list_merger","merge_manifest_list","modules_reference","operator_pusher","push_docker","quay_api_client","quay_client","quay_session","remove_repo","signature_handler","signature_remover","tag_docker","tag_images","untag_images","utilities"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["CHANGELOG.rst","README.rst","clear_repo.rst","command_executor.rst","container_image_pusher.rst","entrypoints_reference.rst","exceptions.rst","iib_operations.rst","image_untagger.rst","index.rst","manifest_list_merger.rst","merge_manifest_list.rst","modules_reference.rst","operator_pusher.rst","push_docker.rst","quay_api_client.rst","quay_client.rst","quay_session.rst","remove_repo.rst","signature_handler.rst","signature_remover.rst","tag_docker.rst","tag_images.rst","untag_images.rst","utilities.rst"],objects:{"pubtools._quay":[[2,0,0,"-","clear_repo"],[3,0,0,"-","command_executor"],[4,0,0,"-","container_image_pusher"],[6,0,0,"-","exceptions"],[7,0,0,"-","iib_operations"],[8,0,0,"-","image_untagger"],[10,0,0,"-","manifest_list_merger"],[11,0,0,"-","merge_manifest_list"],[13,0,0,"-","operator_pusher"],[14,0,0,"-","push_docker"],[15,0,0,"-","quay_api_client"],[16,0,0,"-","quay_client"],[17,0,0,"-","quay_session"],[18,0,0,"-","remove_repo"],[19,0,0,"-","signature_handler"],[20,0,0,"-","signature_remover"],[21,0,0,"-","tag_docker"],[22,0,0,"-","tag_images"],[23,0,0,"-","untag_images"]],"pubtools._quay.clear_repo":[[2,1,1,"","clear_repositories"]],"pubtools._quay.command_executor":[[3,2,1,"","ContainerExecutor"],[3,2,1,"","Executor"],[3,2,1,"","LocalExecutor"],[3,2,1,"","RemoteExecutor"]],"pubtools._quay.command_executor.ContainerExecutor":[[3,3,1,"","__exit__"],[3,3,1,"","__init__"],[3,3,1,"","_add_file"],[3,3,1,"","_run_cmd"],[3,3,1,"","skopeo_login"]],"pubtools._quay.command_executor.Executor":[[3,3,1,"","__enter__"],[3,3,1,"","__exit__"],[3,3,1,"","skopeo_inspect"],[3,3,1,"","skopeo_login"],[3,3,1,"","tag_images"]],"pubtools._quay.command_executor.LocalExecutor":[[3,3,1,"","__init__"],[3,3,1,"","_run_cmd"]],"pubtools._quay.command_executor.RemoteExecutor":[[3,3,1,"","__init__"],[3,3,1,"","_run_cmd"]],"pubtools._quay.container_image_pusher":[[4,2,1,"","ContainerImagePusher"]],"pubtools._quay.container_image_pusher.ContainerImagePusher":[[4,3,1,"","__init__"],[4,3,1,"","copy_multiarch_push_item"],[4,3,1,"","copy_source_push_item"],[4,3,1,"","push_container_images"],[4,3,1,"","run_merge_workflow"],[4,3,1,"","run_tag_images"]],"pubtools._quay.exceptions":[[6,2,1,"","BadPushItem"],[6,2,1,"","InvalidRepository"],[6,2,1,"","InvalidTargetSettings"],[6,2,1,"","ManifestTypeError"],[6,2,1,"","RegistryAuthError"],[6,2,1,"","SigningError"]],"pubtools._quay.iib_operations":[[7,1,1,"","task_iib_add_bundles"],[7,1,1,"","task_iib_build_from_scratch"],[7,1,1,"","task_iib_remove_operators"],[7,1,1,"","verify_target_settings"]],"pubtools._quay.image_untagger":[[8,2,1,"","ImageUntagger"]],"pubtools._quay.image_untagger.ImageUntagger":[[8,3,1,"","__init__"],[8,3,1,"","construct_tag_digest_mappings"],[8,3,1,"","get_lost_digests"],[8,3,1,"","get_repository_tags_mapping"],[8,3,1,"","set_quay_client"],[8,3,1,"","untag_images"]],"pubtools._quay.manifest_list_merger":[[10,2,1,"","ManifestListMerger"]],"pubtools._quay.manifest_list_merger.ManifestListMerger":[[10,3,1,"","__init__"],[10,3,1,"","_add_missing_architectures"],[10,3,1,"","get_missing_architectures"],[10,3,1,"","merge_manifest_lists"],[10,3,1,"","merge_manifest_lists_selected_architectures"],[10,3,1,"","set_quay_clients"]],"pubtools._quay.operator_pusher":[[13,2,1,"","OperatorPusher"]],"pubtools._quay.operator_pusher.OperatorPusher":[[13,3,1,"","__init__"],[13,3,1,"","_get_immutable_tag"],[13,3,1,"","build_index_images"],[13,3,1,"","get_deprecation_list"],[13,3,1,"","get_existing_index_images"],[13,3,1,"","iib_add_bundles"],[13,3,1,"","iib_remove_operators"],[13,3,1,"","public_bundle_ref"],[13,3,1,"","pubtools_iib_get_common_args"],[13,3,1,"","push_index_images"],[13,3,1,"","pyxis_get_ocp_versions"],[13,3,1,"","version_items_mapping"]],"pubtools._quay.push_docker":[[14,2,1,"","PushDocker"]],"pubtools._quay.push_docker.PushDocker":[[14,3,1,"","__init__"],[14,3,1,"","check_repos_validity"],[14,3,1,"","generate_backup_mapping"],[14,3,1,"","get_docker_push_items"],[14,3,1,"","get_operator_push_items"],[14,3,1,"","get_repo_metadata"],[14,3,1,"","remove_old_signatures"],[14,3,1,"","rollback"],[14,3,1,"","run"],[14,3,1,"","verify_target_settings"]],"pubtools._quay.quay_api_client":[[15,2,1,"","QuayApiClient"]],"pubtools._quay.quay_api_client.QuayApiClient":[[15,3,1,"","__init__"],[15,3,1,"","delete_repository"],[15,3,1,"","delete_tag"]],"pubtools._quay.quay_client":[[16,2,1,"","QuayClient"]],"pubtools._quay.quay_client.QuayClient":[[16,3,1,"","__init__"],[16,3,1,"","_authenticate_quay"],[16,3,1,"","_parse_and_validate_image_url"],[16,3,1,"","_request_quay"],[16,3,1,"","get_manifest"],[16,3,1,"","get_manifest_digest"],[16,3,1,"","get_repository_tags"],[16,3,1,"","upload_manifest"]],"pubtools._quay.quay_session":[[17,2,1,"","QuaySession"]],"pubtools._quay.quay_session.QuaySession":[[17,3,1,"","__init__"],[17,3,1,"","_api_url"],[17,3,1,"","delete"],[17,3,1,"","get"],[17,3,1,"","post"],[17,3,1,"","put"],[17,3,1,"","request"],[17,3,1,"","set_auth_token"]],"pubtools._quay.remove_repo":[[18,1,1,"","remove_repositories"]],"pubtools._quay.signature_handler":[[19,2,1,"","BasicSignatureHandler"],[19,2,1,"","ContainerSignatureHandler"],[19,2,1,"","OperatorSignatureHandler"],[19,2,1,"","SignatureHandler"]],"pubtools._quay.signature_handler.BasicSignatureHandler":[[19,3,1,"","__init__"],[19,3,1,"","sign_claim_messages"]],"pubtools._quay.signature_handler.ContainerSignatureHandler":[[19,3,1,"","construct_item_claim_messages"],[19,3,1,"","construct_variant_claim_messages"],[19,3,1,"","sign_container_images"]],"pubtools._quay.signature_handler.OperatorSignatureHandler":[[19,3,1,"","construct_index_image_claim_messages"],[19,3,1,"","sign_operator_images"],[19,3,1,"","sign_task_index_image"]],"pubtools._quay.signature_handler.SignatureHandler":[[19,3,1,"","__init__"],[19,3,1,"","create_manifest_claim_message"],[19,3,1,"","filter_claim_messages"],[19,3,1,"","get_signatures_from_pyxis"],[19,3,1,"","get_signatures_from_radas"],[19,3,1,"","get_tagged_image_digests"],[19,3,1,"","remove_duplicate_claim_messages"],[19,3,1,"","src_quay_client"],[19,3,1,"","upload_signatures_to_pyxis"],[19,3,1,"","validate_radas_messages"]],"pubtools._quay.signature_remover":[[20,2,1,"","SignatureRemover"]],"pubtools._quay.signature_remover.SignatureRemover":[[20,3,1,"","__init__"],[20,3,1,"","get_index_image_signatures"],[20,3,1,"","get_repository_digests"],[20,3,1,"","get_signatures_from_pyxis"],[20,3,1,"","quay_client"],[20,3,1,"","remove_repository_signatures"],[20,3,1,"","remove_signatures_from_pyxis"],[20,3,1,"","remove_tag_signatures"],[20,3,1,"","set_quay_client"]],"pubtools._quay.tag_docker":[[21,2,1,"","TagDocker"]],"pubtools._quay.tag_docker.TagDocker":[[21,3,1,"","__init__"],[21,3,1,"","check_input_validity"],[21,3,1,"","copy_tag_sign_images"],[21,3,1,"","get_image_details"],[21,3,1,"","is_arch_relevant"],[21,3,1,"","manifest_list_remove_archs"],[21,3,1,"","merge_manifest_lists_sign_images"],[21,3,1,"","quay_client"],[21,3,1,"","run"],[21,3,1,"","run_untag_images"],[21,3,1,"","tag_add_calculate_archs"],[21,3,1,"","tag_remove_calculate_archs"],[21,3,1,"","tag_remove_calculate_archs_multiarch_image"],[21,3,1,"","tag_remove_calculate_archs_source_image"],[21,3,1,"","untag_image"],[21,3,1,"","verify_input_data"],[21,3,1,"","verify_target_settings"]],"pubtools._quay.tag_images":[[22,1,1,"","tag_images"]],"pubtools._quay.untag_images":[[23,1,1,"","untag_images"]],"pubtools._quay.utils":[[24,0,0,"-","misc"]],"pubtools._quay.utils.misc":[[24,1,1,"","add_args_env_variables"],[24,1,1,"","capture_stdout"],[24,1,1,"","get_external_container_repo_name"],[24,1,1,"","get_internal_container_repo_name"],[24,1,1,"","get_pyxis_ssl_paths"],[24,1,1,"","log_step"],[24,1,1,"","retry"],[24,1,1,"","run_entrypoint"],[24,1,1,"","run_with_retries"],[24,1,1,"","setup_arg_parser"],[24,1,1,"","setup_entry_point_cli"],[24,1,1,"","task_status"],[24,1,1,"","timestamp"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"0":[22,23,24],"1":[11,21,22,23],"10":24,"120":22,"123456":22,"127":[22,23],"2":[1,17,21,23],"20":24,"2222":[22,23],"3":[1,17],"34":22,"4":24,"401":16,"404":0,"5":[1,19],"6":1,"case":[3,4,10,14,19,20,21,23,24],"class":[4,6,8,10,11,12,13,14,15,16,17,19,20,21],"default":[3,20,22,24],"export":[2,11,18,22,23],"final":16,"function":[0,1,3,4,5,24],"int":[3,17,22,24],"new":[3,7,10,11,13,14,19,20,21],"public":13,"return":[0,3,8,10,13,14,15,16,17,19,20,21,24],"static":[10,13],"transient":4,"true":[3,19,21],"try":[12,17],"var":[3,22],"while":2,A:[16,17],For:[14,24],If:[3,10,13,14,16,19,20,21,22,24],In:[4,19,20,21,24],It:[1,4,13,21,24],No:[3,4,13,21],The:[1,3,4,5,10,12,13,14,15,19,20,21,23],There:[4,19],These:[1,7],To:3,Will:22,__enter__:3,__exit__:3,__init__:[3,4,8,10,13,14,15,16,17,19,20,21],_add_fil:3,_add_missing_architectur:10,_api_url:17,_authenticate_quai:16,_get_immutable_tag:13,_parse_and_validate_image_url:16,_pushitem:[14,21],_quai:[2,3,4,6,7,8,10,13,14,15,16,17,18,19,20,21,22,23,24],_request_quai:16,_run_cmd:3,abl:24,accept:[3,13],accept_unknown_host:3,access:[3,13,14,19,20,21],act:21,action:[7,24],actual:24,ad:[0,1,13,14,15,16,20,21],add:[0,3,7,10,13,14,16,17,21,24],add_arch:21,add_args_env_vari:24,addit:17,addition:20,address:[10,16],adher:19,advis:12,after:[14,17,24],afterward:20,again:24,against:17,alias:24,all:[0,2,3,4,7,10,13,14,16,18,19,20,21,22],all_arch:[3,4,22],allow:[0,14],along:18,alreadi:[14,19,21],also:[4,14,16,19,20],alter:24,altern:10,alternatv:19,although:20,amd64:0,among:[19,22],an:[3,6,8,10,13,14,16,19,20,21,22,23,24],ani:[14,19,24],answer:8,api:[0,3,8,9,10,12,16,17,20],appli:[3,7,13,17],applic:16,approach:3,appropri:21,ar:[0,1,3,4,6,8,10,13,14,16,19,20,21,24],arch:[0,4,7,10,13,19,21,22],architectur:[3,4,7,10,13,20,21,22],aren:19,arg:[2,3,4,7,8,10,13,14,15,16,17,18,19,20,21,22,23,24],argument:[3,4,13,16,17,21,24],argumentpars:24,arriv:19,assign:14,assum:[3,10,22],attempt:[3,16,17,24],auth:[16,17],authent:[0,2,3,6,8,15,16,17,18,20,22,23,24],avail:22,avoid:14,backoff:17,backoff_factor:17,backup:14,backup_tag:14,bad:6,badpushitem:6,base:[0,8,16,19,20,21,22],base_url:3,basi:1,basicsignaturehandl:[19,21],batch:19,bearer:17,becaus:3,been:[15,16],befor:[0,14,24],being:[6,19,20],between:[17,21],blob:19,bool:[3,4,8,16,17,19,21,22,23],both:[3,4,13],buffer:24,build:[0,7,10,13],build_index_imag:13,build_tag:13,built:[10,13],bundl:[7,13,14],ca:17,calcul:[8,16,21],call:[0,1,3,13],callabl:24,can:[1,2,3,5,11,12,13,14,15,16,18,19,22,23],captur:[0,24],capture_stdout:24,categori:24,cert:22,cert_path:3,certain:[20,21],certif:[0,3,22,24],chang:0,changelog:9,check:[0,6,14,19,21],check_input_valid:21,check_repos_valid:14,children:19,chunk:[19,20],claim:[0,14,19,20,21],claim_mesag:19,claim_messag:[14,19,20],claims_messag:14,classmethod:[4,13,14,19,21],cleanup:3,clear:[0,5,9,18],clear_repo:2,clear_repositori:2,cli:[1,5],client:[3,8,9,10,12,17,22],cmd:3,code:[0,1,24],codebas:6,com:[2,13,16,18,19,22],comet:14,comma:[2,18],command:[0,9,12,13,22],command_executor:3,common:[3,7,13,19],compar:14,compat:3,compens:4,complet:16,concret:3,condit:21,configur:24,connect:[3,10,22],consid:19,consist:[14,24],constitut:24,constraint:[0,21],construct:[0,13,17,19,20],construct_index_image_claim_messag:19,construct_item_claim_messag:19,construct_tag_digest_map:8,construct_variant_claim_messag:19,consum:24,contact:[7,13],contain:[0,1,3,6,7,8,9,10,12,13,14,16,19,21,22,24],container_exec:22,container_imag:22,container_image_push:4,container_signature_handl:14,containerexecutor:3,containerimagepush:4,containerpushitem:[4,13,14,19,21],containersignaturehandl:[14,19],contanersignaturehandl:14,content:[1,9,14],context:[3,24],contributor:12,convent:0,copi:[3,4,7,20,21,22],copy_multiarch_push_item:4,copy_source_push_item:4,copy_tag_sign_imag:21,correct:[4,13,21],could:[14,19],creat:[0,7,8,13,14,19,20,21],create_manifest_claim_messag:19,credenti:3,criteria:[19,20],crt:[2,18,20],crtfile:[2,18],csv:[2,13,18],current:[0,14,19,20],custom:[1,3,8,10,13,19,24],data:[0,3,10,11,13,14,16,19,21,24],date:0,de:19,decid:8,declar:0,decor:24,defin:24,definit:[0,24],delet:[0,2,15,16,17,18,20,21],delete_repositori:15,delete_tag:15,delimet:[0,24],demux:3,denot:3,depend:[0,24],deprec:[0,7,13,14],deprecation_list:[7,13],descend:3,describ:[13,24],dest:[11,21,22],dest_detail:21,dest_imag:10,dest_manifest_list:10,dest_quay_cli:10,dest_quay_password:[10,11],dest_quay_us:11,dest_quay_usernam:10,dest_ref:[3,4,11,22],destin:[3,4,10,11,14,19,21,22],destination_repo:19,detail:[9,13,16],determin:[4,8],dict:[3,4,7,10,13,14,16,19,20,21,24],dictionari:[7,8,13,14,16,24],differ:[1,3,4,14,21],digest:[0,4,8,13,14,16,19,20,23],digest_tag_map:8,directli:1,disabl:[0,17,22],distribut:16,doc:[12,15,16,19],docker:[0,1,2,3,4,8,9,10,12,13,16,17,18,20,22,23],docker_cert_path:22,docker_refer:19,docker_timeout:22,docker_url:22,docker_verify_tl:22,document:0,doe:8,doesn:[16,20,21],don:[0,3,14,19],done:[3,6,14],download:[3,22],drop:0,duplic:[0,14,19],dure:[0,14],e:24,each:[3,17,19],effect:20,element:21,elig:[10,20],eligible_arch:10,enabl:17,encount:6,end:1,endpoint:[16,17],entir:24,entry_tupl:24,entrypoint:[0,2,4,9,10,11,12,14,18,19,20,21,22,23,24],env:[2,11,18,22,23,24],environ:[3,13,22,24],environ_var:24,err_msg:3,error:[0,3,16,19,24],error_msg:3,evalu:[4,21],even:23,event:[0,24],everi:24,exact:20,exampl:24,exc_tb:3,exc_typ:3,exc_valu:3,except:[0,9,12,14,16],exclud:20,exclude_arch:21,exclude_by_claim:20,exec:[22,23],execut:[0,3,13,22],executor:[9,12,21],exist:[0,3,13,14,19,20,21,24],existing_index_imag:14,expand:24,expect:[1,4,13,16,20,21,24],extern:[0,2,10,13,18,19,20,24],external_nam:24,external_repo:0,extra:[0,13,22],extract:16,factor:17,fail:[0,3],failur:14,fallback:24,fals:[3,8,16,17,21,22,23],fetch:[13,14],file:[2,3,18,20,22,23],file_nam:3,filenam:[22,23],fill:21,filter:[14,19],filter_claim_messag:19,filter_exist:19,find:[20,21],first:[4,21,24],five:21,fix:0,flag:[22,23],follow:[10,19,21],forc:23,form:24,format:[14,16,20,24],forward:14,found:[13,15,16,22],from:[0,1,2,3,7,8,10,13,14,15,16,19,20,21,22,23,24],full:[12,13,14,15,16,17,20,21],g:24,gather:[3,16,20],gener:[1,3,13,14,17,24],generate_backup_map:14,get:[0,8,10,11,13,14,15,16,17,19,20,24],get_cert_key_path:24,get_deprecation_list:13,get_docker_push_item:14,get_existing_index_imag:13,get_external_container_repo_nam:24,get_image_detail:21,get_index_image_signatur:20,get_internal_container_repo_nam:24,get_lost_digest:8,get_manifest:[0,16],get_manifest_digest:16,get_missing_architectur:10,get_operator_push_item:14,get_pyxis_ssl_path:24,get_repo_metadata:14,get_repository_digest:20,get_repository_tag:16,get_repository_tags_map:8,get_signatures_from_pyxi:[19,20],get_signatures_from_rada:19,get_tagged_image_digest:19,github:19,give:24,given:[8,13,16,19,20,21],goe:14,h:[2,11,18,22,23],ha:[3,6,14,20],handl:[4,7,10,13,14,16,19,21],handler:[9,12,21],happen:0,hash:16,hasn:[6,19],hat:1,have:[0,14,15,16],header:16,helper:[17,24],henc:1,hoc:1,hold:[14,17],hook:[0,24],host:[0,3,8,10,15,16,20,22,23],hostnam:[2,3,8,10,17,18,22],http:[0,2,8,10,15,16,17,18,19,22,23],httperror:16,hub:[7,14,19,21],hubproxi:[7,14,19,21],id:[7,13,14,19,20,21],ii_claim_messag:14,ii_claims_messag:14,iib:[0,1,9,12,13,14,19],iib_add_bundl:13,iib_oper:7,iib_remove_oper:13,iib_result:[13,14,19],iiblib:13,imag:[0,1,2,3,5,7,9,10,11,12,13,14,15,16,18,19,20,21,24],image2:22,image_nam:19,image_ref:[3,19],image_untagg:8,imagedata:14,imagedetail:21,imageuntagg:8,immut:13,implement:[0,3,15,16,19,20,24],includ:[7,14,20],incorrect:[6,14],increas:24,index:[0,7,9,13,14,19,20],index_imag:[7,13,19],index_image_tag:7,indic:16,initi:[0,3,4,8,10,13,14,15,16,17,19,20,21],inject:22,input:[3,21,24],insid:[0,3,22],inspect:[3,21],instal:[0,1],instanc:[3,7,8,10,14,19,20,21,24],instead:16,interest:0,intermedi:0,intern:[1,19,20,24],internal_nam:24,invalidrepositori:6,invalidtargetset:6,investig:21,invoc:[1,3],invok:[1,5,11,14,24],io:[1,3,10,11,15,16,20,22,23,24],is_arch_relev:21,isn:13,isol:12,issu:[0,4,6,16],item:[4,6,13,14,19,21],iter:[19,20],its:[0,6,15,16,21,24],itself:18,json:[3,16],just:[14,20],kei:[0,2,3,7,13,14,18,19,20,22,23,24],key_filenam:3,keyfil:[2,18],known:22,krb:[2,18],kwarg:[16,17],last:[8,21,23,24],less:0,level:5,librari:[1,15,16],limit:[19,20],list:[0,3,4,5,8,9,12,13,14,16,19,20,21,22,23],local:[3,22],localexecutor:3,locat:[3,7],log:24,log_step:24,logger:0,logic:[3,4,7,8,10,19],login:[0,2,3,18,22,23],lost:8,lower:[0,3],machin:22,made:[10,14,24],mai:[1,3,8,14,16,20,21,22,23,24],main:[3,10,14,21],maintain:3,make:0,manag:[1,3,24],mandatori:19,manifest:[0,3,4,5,6,8,9,12,14,16,19,20,21],manifest_digest:[19,20],manifest_list:16,manifest_list_merg:10,manifest_list_remove_arch:21,manifestclaimshandl:19,manifestlistmerg:[10,11],manifesttypeerror:[6,16],map:[8,13,14],master:[5,19],match:[14,20],max_manifest_digests_per_search_request:[19,20],max_retry_wait:24,maximum:24,md:19,mean:3,mechan:14,media:[14,16,19],media_typ:[16,19],memori:[19,20],merg:[0,4,5,9,10,21],merge_manifest_list:10,merge_manifest_lists_selected_architectur:10,merge_manifest_lists_sign_imag:21,merger:[9,12],messag:[0,3,14,19,20,24],messagehandlertimeoutexcept:19,metadata:[14,21],method:[0,3,10,12,14,16,17,19,20,21,24],misc:24,miss:[6,10,14],missing_arch:10,mix:3,modif:10,modifi:[12,24],modul:9,more:[4,15,16,20],mostli:1,multi:19,multiarch:[3,4,20,21],multiatch:22,multipl:[0,2,8,10,18,19,20,22,23,24],must:[3,11,19,21,22,23,24],name:[1,3,7,13,14,19,20,21,24],namedtupl:[14,21],namespac:[2,18,20,22,24],namespc:16,necessari:[4,7,14,15,16,21,24],need:[1,3,4,10,19,22],never:20,newer:10,newli:[14,19,20],non:[0,4],none:[0,3,8,10,13,15,16,17,19,20,21,22,23],note:[3,4,10,19,20,24],noth:24,now:24,number:[17,24],oauth:[2,8,18,23],oauth_token:[2,18,23],object:[13,15,16,17,24],occur:[6,21],ocp:13,old:[7,10,14],older:[3,10],omit:3,ommit:10,onc:16,one:[8,10,14,19],ones:[14,21],onli:[0,1,3,10,14,15,16,19,20,21,22],op:3,openshift:13,oper:[0,1,3,4,8,9,10,12,14,16,19,21,22,23],operator_push:13,operator_signature_handl:14,operatorpush:13,operatorsignaturehandl:[14,19],opm:[13,14],option:[0,3,16,20,24],order:[0,20],org:[2,18],organ:[0,2,18],os:10,osb:0,other:[1,3,10],otherwis:[16,21,24],out:[13,14,19,21],outdat:14,output:[0,3,24],outsid:12,over:22,overrul:23,overview:9,overwrit:[0,11],overwritten:[10,14,21],own:0,page:9,pagin:0,pair:14,param:3,paramet:[0,3,4,13,14,21,24],parent:3,pars:[3,13,14,24],parsed_arg:24,part:[0,1,4,13,14,19,24],particular:20,pass:6,password:[2,3,8,10,11,16,18,20,22,23],path:[2,3,18,20,22,23,24],per:0,perform:[1,3,4,7,13,14,15,16,19,20,21,22,23,24],perman:0,permiss:22,pip:1,point:[19,24],port:[3,22,23],possibl:[20,21],post:[3,16,17,19],pre:[3,14],preced:[3,22],prefer:16,prepar:[4,21],presenc:7,present:[3,10,21],preserv:14,previou:13,primari:[3,14],primarili:17,princip:[2,18],privat:[3,22],procedur:16,process:[3,6,14],prod:[14,21],product:[13,24],programmat:[1,5],proton:0,prototyp:0,provid:[3,5,8,13,16,19,22,24],proxi:[7,14,19,21],pub:[0,1,7,14,19,21],public_bundle_ref:13,pubtool:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],pubtools_iib_get_common_arg:13,pull:[10,19],pull_url:14,push:[0,1,4,6,9,12,13,19,21],push_container_imag:4,push_dock:[0,14],push_index_imag:13,push_item:[4,13,14,19,21],pushaddiibbundl:[7,19],pushdock:[14,21],pusher:[9,12],pushiibbuildfromscratch:[7,19],pushremoveiiboper:[7,19],put:[16,17],py:1,pyrsist:0,python:[0,1,16],pyxi:[0,1,2,13,14,18,19,20,24],pyxis_get_ocp_vers:13,pyxis_serv:[2,18,20],pyxis_ssl_cert:24,pyxis_ssl_crtfil:[2,18,20],pyxis_ssl_kei:24,pyxis_ssl_keyfil:[2,18,20],qpid:0,quai:[0,1,2,3,4,5,8,10,11,12,13,14,18,20,21,22,23,24],quay_api_cli:15,quay_api_token:[2,8,18,20,23],quay_client:[8,13,16,20,21],quay_client_inst:13,quay_host:20,quay_org:[2,18],quay_password:[2,8,11,18,20,22,23],quay_sess:17,quay_us:[2,8,18,20,22,23],quayapicli:15,quayclient:[3,8,10,13,16,19,20,21],quaysess:17,queri:[15,16,17],question:8,r:1,rada:[1,6,14,19],rais:[0,14,16,19,24],rang:13,raw:[3,16],rcm:1,re:14,reach:24,read:0,receiv:[16,19],recreat:20,red:1,redhat:13,reduc:[19,20],ref:[8,11,22],refer:[3,4,8,9,13,14,16,19,20,21],referenc:[8,15,19],refus:23,regist:24,registri:[0,1,3,6,15,16,19,20,22],registry_password:[3,22],registry_usernam:[3,22],registryautherror:[6,16],reimplement:3,reject:22,relat:[1,4,7,13,14,24],releas:0,relev:21,remain:21,remot:[3,22,23],remote_exec:22,remoteexecutor:3,remov:[0,2,5,7,8,9,12,13,14,15,19,21,23],remove_arch:[20,21],remove_dupl:19,remove_duplicate_claim_messag:19,remove_last:[8,21,23],remove_old_signatur:14,remove_repo:18,remove_repositori:18,remove_repository_signatur:20,remove_signatures_from_pyxi:20,remove_tag_signatur:20,repo1:[2,18],repo2:[2,18],repo:[0,5,8,9,14,16,19,20,21,23,24],repositori:[0,2,6,8,14,15,16,18,19,20,24],represent:0,request:[0,15,16,17,19],requir:[0,3,6,8,9,10,15,16,17,19,20],resid:[2,15,18,20],resourc:14,respect:4,respons:[14,15,16,17,19,24],rest:[2,8,15,16,17,18,23],restrict:21,result:[3,11,13,14,16,19],retri:[0,4,17,24],retun:10,right:7,rollback:[0,14],rollback_tag:14,run:[0,3,4,14,21,22,24],run_entrypoint:24,run_merge_workflow:4,run_tag_imag:4,run_untag_imag:21,run_with_retri:24,s:[1,3,8,11,14,15,16,19,20,21,22,23,24],same:[3,14,16,19,20,21],satisfi:21,scenario:21,script:[1,23],search:[9,19,20],second:[3,17,21,24],secret:3,seek:12,send:[0,3,19],sent:19,separ:[2,18],serv:1,server:[2,16,17,18,22],servic:[1,2,17,18,19,20],session:[9,12,16],set:[0,1,4,6,7,8,10,13,14,17,19,20,21,24],set_auth_token:17,set_quay_cli:[8,10,20],setup:9,setup_arg_pars:24,setup_entry_point_cli:24,shell:3,should:[3,4,8,10,12,13,16,20,21,22,24],sig_key_id:19,sign:[0,6,7,13,14,19,20,21],sign_claim_messag:19,sign_container_imag:19,sign_operator_imag:19,sign_task_index_imag:19,signatu:7,signatur:[0,2,7,9,12,14,18,21],signature_data:19,signature_handl:[19,21],signature_kei:19,signature_messag:19,signature_remov:[14,20],signaturehandl:[19,20],signatureremov:[14,20],signatures_to_remov:20,signing_kei:[7,13,19],signingerror:[6,19],sigstor:[0,19],simpl:4,simpli:[12,24],singl:[0,4,19,21],size:[19,20],skeleton:0,skip:0,skopeo:[0,1,3,21],skopeo_inspect:3,skopeo_login:3,sock:[3,22],socket:22,some:[1,22,23],someth:14,sort:4,sourc:[0,2,3,4,6,7,8,10,11,13,14,15,16,17,18,19,20,21,22,23,24],source_detail:21,source_ml:4,source_quay_host:22,source_quay_password:[11,22],source_quay_us:[11,22],source_ref:[3,4,11,22],spec:16,specif:[14,15,16,17,19,21],specifi:[0,2,3,8,10,11,13,14,16,18,19,20,21,22,23,24],src:[11,23],src_imag:10,src_manifest_list:10,src_quay_client:[10,19],src_quay_host:10,src_quay_password:10,src_quay_usernam:10,ssh:[3,22,23],ssh_key_filenam:22,ssh_password:22,ssh_reject_unknown_host:22,ssh_remote_host:22,ssh_remote_host_port:22,ssh_usernam:22,ssl:[0,2,17,18,20,24],stage:[13,14,21],standalon:1,standard:[1,3,10,16,19],start:10,state:14,statu:[16,24],stderr:3,stdin:3,stdout:[3,24],step:[19,21,24],step_nam:24,store:3,str:[2,3,4,7,8,10,13,14,15,16,17,18,19,20,21,22,23,24],strategi:4,stream:[3,24],string:[3,16],structur:[13,19],sturctur:[19,20],style:3,sub:21,subclass:21,succe:24,suffic:4,suffix:13,summar:[13,14,19,21],support:[0,1,3,4,13,16,17,20],swagger:15,sy:24,t:[0,3,6,13,14,16,19,20,21],tag:[0,1,4,5,7,8,9,10,11,12,13,14,15,16,19,20,23,24],tag_add_calculate_arch:21,tag_digest_map:8,tag_dock:21,tag_imag:[3,22],tag_remove_calculate_arch:21,tag_remove_calculate_archs_multiarch_imag:21,tag_remove_calculate_archs_source_imag:21,tag_suffix:[13,19],tagdock:21,taggign:0,take:[22,24],target:[0,3,4,6,7,13,14,19,21,22,24],target_nam:[7,14,19,21],target_set:[4,7,13,14,19,20,21,24],task:[0,7,13,14,19,21,24],task_id:[7,13,14,19,21],task_iib_add_bundl:7,task_iib_build_from_scratch:7,task_iib_remove_oper:7,task_statu:24,text:3,than:[3,4],thei:[8,14],them:[4,8,13,14,19,20,21],thi:[1,3,4,7,10,11,13,14,16,17,19,20,21,23],those:[14,19],though:[15,16],throughout:[3,6],time:[16,19,24],timeout:[0,3,22],timestamp:[0,24],tl:[3,22],tmp:3,togeth:3,token2:22,token:[0,2,8,11,15,16,17,18,22,23],toler:[0,3],tolerate_err:3,tool:1,transform:24,tri:24,tupl:[3,8,13,14,16,21,24],twice:3,two:[4,10,11,14],txt:[0,1],type:[3,4,6,14,16,19],umb:[0,1,19],understand:12,unix:[3,22],unknown:[3,22],unlik:1,unnecessari:[0,20],untag:[0,5,8,9,21],untag_imag:[8,21,23],untagg:[0,9,12],until:24,unus:21,up:[0,24],updat:0,upload:[10,11,14,16,19,21],upload_manifest:16,upload_signatures_to_pyxi:19,upon:3,url:[3,13,15,16,17,19,20,22],us:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24],usag:[0,2,11,12,18,22,23],user:[1,2,11,18,19,20,22,23],usernam:[0,2,3,8,10,11,16,18,22,23],util:[1,9,12,20],v1:16,v2:16,v2ch1:0,v2ch2:0,v2s1:[0,16],v2s2:16,valid:[4,6,7,13,14,16,22],validate_radas_messag:19,valu:[0,2,4,6,13,14,17,18,21,24],valueerror:16,variabl:[2,11,13,18,22,23,24],variat:19,variou:[1,3,24],verif:[3,17,22],verifi:[7,14,17,21,22],verify_input_data:21,verify_target_set:[7,14,21],verify_tl:3,versatil:20,version:[0,3,13,14,19],version_items_map:13,via:[0,3,4,19,22],visibl:[13,19,24],vnd:16,wa:[6,13,14,19,24],wai:[14,19,20],wait:24,wait_time_increas:24,wasn:21,well:[8,10,19],were:[8,13,14,19,21],when:[0,3,6,8,13,16,20,21,22,23],where:21,whether:[3,4,8,16,19,21,22,23],which:[1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,21,22,24],whole:21,whose:[10,16,19,20,21],without:[16,22,24],work:21,workflow:[1,4,10,12,13,14,19,21],would:[1,8,10,20,21],written:3,wrong:14,xmlrpc:[0,7,14,19,21],yet:[14,19],yield:[19,20]},titles:["ChangeLog","Overview","Clear repo","Command Executor","Container image pusher","Entrypoints reference","Exceptions","IIB operations","Image untagger","pubtools-quay\u2019s documentation","Manifest list merger","Merge manifest lists","Modules reference","Operator Pusher","Push Docker","Quay API Client","Quay Client","Quay Session","Remove repo","Signature Handler","Signature Remover","Tag Docker","Tag images","Untag images","Utilities"],titleterms:{"0":0,"01":0,"02":0,"03":0,"04":0,"1":0,"10":0,"11":0,"14":0,"18":0,"2":0,"20":0,"2021":0,"2022":0,"23":0,"28":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"class":3,"function":7,api:[2,15,18,22,23],argument:[2,11,18,22,23],base:3,changelog:0,children:3,clear:2,cli:[2,11,18,22,23],client:[15,16],command:3,contain:4,detail:1,docker:[14,21],document:9,entrypoint:[5,7],exampl:[2,11,18,22,23],except:6,executor:3,handler:19,iib:7,imag:[4,8,22,23],indic:9,list:[10,11],main:7,manifest:[10,11],merg:11,merger:10,modul:12,name:[2,11,18,22,23],oper:[7,13],overview:1,pubtool:9,push:14,pusher:[4,13],quai:[9,15,16,17],refer:[2,5,11,12,18,22,23],remov:[18,20],repo:[2,18],requir:1,s:9,session:17,setup:1,signatur:[19,20],tabl:9,tag:[21,22],untag:23,untagg:8,util:24}})