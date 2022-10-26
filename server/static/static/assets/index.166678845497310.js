var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var K=(e,t,c)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,y=(e,t)=>{for(var c in t||(t={}))x.call(t,c)&&K(e,c,t[c]);if(H)for(var c of H(t))ee.call(t,c)&&K(e,c,t[c]);return e},q=(e,t)=>Y(e,Z(t));import{d as j,c as z,J,t as N,_ as O,k as r,m as F,p as b,q as o,w as l,y as s,D as i,O as U,P as $,r as se,E as T,A as _,U as oe,v as B,z as R,e as te,V as le,S as ue}from"./index.1666788454973.js";import{r as C}from"./api.16667884549734.js";import{t as ne}from"./api.16667884549732.js";import{T as ae,m as ie}from"./TagSelect.1666788454973.js";import{R as re}from"./rsa.1666788454973.js";import"./Api.1666788454973.js";import"./assert.1666788454973.js";const de=j({name:"Info",props:{visible:{type:Boolean},title:{type:String},info:{type:[Boolean,Object]}},setup(e,{emit:t}){const c=z({dialogVisible:!1});J(()=>e.visible,v=>{c.dialogVisible=v});const d=()=>{t("update:visible",!1),t("close")};return q(y({},N(c)),{close:d})}}),pe={class:"row"},ce=s("span",{class:"title"},"redis_version(\u7248\u672C):",-1),me={class:"value"},_e={class:"row"},fe=s("span",{class:"title"},"tcp_port(\u7AEF\u53E3):",-1),he={class:"value"},Fe={class:"row"},ge=s("span",{class:"title"},"redis_mode(\u6A21\u5F0F):",-1),ve={class:"value"},be={class:"row"},Ee=s("span",{class:"title"},"os(\u5BBF\u4E3B\u64CD\u4F5C\u7CFB\u7EDF):",-1),we={class:"value"},ye={class:"row"},Ce=s("span",{class:"title"},"uptime_in_days(\u8FD0\u884C\u5929\u6570):",-1),Be={class:"value"},De={class:"row"},Ae=s("span",{class:"title"},"executable(\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84):",-1),ke={class:"value"},Ve={class:"row"},Se=s("span",{class:"title"},"config_file(\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84):",-1),Ie={class:"value"},qe={class:"row"},Te=s("span",{class:"title"},"connected_clients(\u5DF2\u8FDE\u63A5\u5BA2\u6237\u7AEF\u6570):",-1),Ue={class:"value"},$e={class:"row"},Re=s("span",{class:"title"},"blocked_clients(\u6B63\u5728\u7B49\u5F85\u963B\u585E\u547D\u4EE4\u5BA2\u6237\u7AEF\u6570):",-1),Pe={class:"value"},Me={class:"title"},Le={class:"value"},je={class:"row"},ze=s("span",{class:"title"},"total_commands_processed(\u603B\u5904\u7406\u547D\u4EE4\u6570):",-1),Ne={class:"value"},Oe={class:"row"},He=s("span",{class:"title"},"instantaneous_ops_per_sec(\u5F53\u524Dqps):",-1),Ke={class:"value"},Je={class:"row"},Ge=s("span",{class:"title"},"total_net_input_bytes(\u7F51\u7EDC\u5165\u53E3\u6D41\u91CF\u5B57\u8282\u6570):",-1),Qe={class:"value"},We={class:"row"},Xe=s("span",{class:"title"},"total_net_output_bytes(\u7F51\u7EDC\u51FA\u53E3\u6D41\u91CF\u5B57\u8282\u6570):",-1),Ye={class:"value"},Ze={class:"row"},xe=s("span",{class:"title"},"expired_keys(\u8FC7\u671Fkey\u7684\u603B\u6570\u91CF):",-1),es={class:"value"},ss={class:"row"},os=s("span",{class:"title"},"instantaneous_ops_per_sec(\u5F53\u524Dqps):",-1),ts={class:"value"},ls={class:"row"},us=s("span",{class:"title"},"aof_enabled(\u662F\u5426\u542F\u7528aof):",-1),ns={class:"value"},as={class:"row"},is=s("span",{class:"title"},"loading(\u662F\u5426\u6B63\u5728\u8F7D\u5165\u6301\u4E45\u5316\u6587\u4EF6):",-1),rs={class:"value"},ds={class:"row"},ps=s("span",{class:"title"},"cluster_enabled(\u662F\u5426\u542F\u7528\u96C6\u7FA4\u6A21\u5F0F):",-1),cs={class:"value"},ms={class:"row"},_s=s("span",{class:"title"},"used_memory(\u5206\u914D\u5185\u5B58\u603B\u91CF):",-1),fs={class:"value"},hs={class:"row"},Fs=s("span",{class:"title"},"maxmemory(\u6700\u5927\u5185\u5B58\u914D\u7F6E):",-1),gs={class:"value"},vs={class:"row"},bs=s("span",{class:"title"},"used_memory_rss(\u5DF2\u5206\u914D\u7684\u5185\u5B58\u603B\u91CF\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u89D2\u5EA6):",-1),Es={class:"value"},ws={class:"row"},ys=s("span",{class:"title"},"mem_fragmentation_ratio(used_memory_rss\u548Cused_memory \u4E4B\u95F4\u7684\u6BD4\u7387):",-1),Cs={class:"value"},Bs={class:"row"},Ds=s("span",{class:"title"},"used_memory_peak(\u5185\u5B58\u6D88\u8017\u5CF0\u503C):",-1),As={class:"value"},ks={class:"row"},Vs=s("span",{class:"title"},"total_system_memory(\u4E3B\u673A\u603B\u5185\u5B58):",-1),Ss={class:"value"},Is={class:"row"},qs=s("span",{class:"title"},"used_cpu_sys(\u7531Redis\u670D\u52A1\u5668\u6D88\u8017\u7684\u7CFB\u7EDFCPU):",-1),Ts={class:"value"},Us={class:"row"},$s=s("span",{class:"title"},"used_cpu_user(\u7531Redis\u670D\u52A1\u5668\u6D88\u8017\u7684\u7528\u6237CPU):",-1),Rs={class:"value"},Ps={class:"row"},Ms=s("span",{class:"title"},"used_cpu_sys_children(\u7531\u540E\u53F0\u8FDB\u7A0B\u6D88\u8017\u7684\u7CFB\u7EDFCPU):",-1),Ls={class:"value"},js={class:"row"},zs=s("span",{class:"title"},"used_cpu_user_children(\u7531\u540E\u53F0\u8FDB\u7A0B\u6D88\u8017\u7684\u7528\u6237CPU):",-1),Ns={class:"value"};function Os(e,t,c,d,v,E){const p=r("el-collapse-item"),h=r("el-collapse"),g=r("el-dialog");return F(),b("div",null,[o(g,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=f=>e.dialogVisible=f),"show-close":!0,width:"35%",onClose:t[1]||(t[1]=f=>e.close())},{default:l(()=>[o(h,null,{default:l(()=>[o(p,{title:"Server(Redis\u670D\u52A1\u5668\u7684\u4E00\u822C\u4FE1\u606F)",name:"server"},{default:l(()=>[s("div",pe,[ce,s("span",me,i(e.info.Server.redis_version),1)]),s("div",_e,[fe,s("span",he,i(e.info.Server.tcp_port),1)]),s("div",Fe,[ge,s("span",ve,i(e.info.Server.redis_mode),1)]),s("div",be,[Ee,s("span",we,i(e.info.Server.os),1)]),s("div",ye,[Ce,s("span",Be,i(e.info.Server.uptime_in_days),1)]),s("div",De,[Ae,s("span",ke,i(e.info.Server.executable),1)]),s("div",Ve,[Se,s("span",Ie,i(e.info.Server.config_file),1)])]),_:1}),o(p,{title:"Clients(\u5BA2\u6237\u7AEF\u8FDE\u63A5)",name:"client"},{default:l(()=>[s("div",qe,[Te,s("span",Ue,i(e.info.Clients.connected_clients),1)]),s("div",$e,[Re,s("span",Pe,i(e.info.Clients.blocked_clients),1)])]),_:1}),o(p,{title:"Keyspace(key\u4FE1\u606F)",name:"keyspace"},{default:l(()=>[(F(!0),b(U,null,$(e.info.Keyspace,(f,u)=>(F(),b("div",{class:"row",key:u},[s("span",Me,i(u)+": ",1),s("span",Le,i(f),1)]))),128))]),_:1}),o(p,{title:"Stats(\u7EDF\u8BA1)",name:"state"},{default:l(()=>[s("div",je,[ze,s("span",Ne,i(e.info.Stats.total_commands_processed),1)]),s("div",Oe,[He,s("span",Ke,i(e.info.Stats.instantaneous_ops_per_sec),1)]),s("div",Je,[Ge,s("span",Qe,i(e.info.Stats.total_net_input_bytes),1)]),s("div",We,[Xe,s("span",Ye,i(e.info.Stats.total_net_output_bytes),1)]),s("div",Ze,[xe,s("span",es,i(e.info.Stats.expired_keys),1)]),s("div",ss,[os,s("span",ts,i(e.info.Stats.instantaneous_ops_per_sec),1)])]),_:1}),o(p,{title:"Persistence(\u6301\u4E45\u5316)",name:"persistence"},{default:l(()=>[s("div",ls,[us,s("span",ns,i(e.info.Persistence.aof_enabled),1)]),s("div",as,[is,s("span",rs,i(e.info.Persistence.loading),1)])]),_:1}),o(p,{title:"Cluster(\u96C6\u7FA4)",name:"cluster"},{default:l(()=>[s("div",ds,[ps,s("span",cs,i(e.info.Cluster.cluster_enabled),1)])]),_:1}),o(p,{title:"Memory(\u5185\u5B58\u6D88\u8017\u76F8\u5173\u4FE1\u606F)",name:"memory"},{default:l(()=>[s("div",ms,[_s,s("span",fs,i(e.info.Memory.used_memory_human),1)]),s("div",hs,[Fs,s("span",gs,i(e.info.Memory.maxmemory),1)]),s("div",vs,[bs,s("span",Es,i(e.info.Memory.used_memory_rss_human),1)]),s("div",ws,[ys,s("span",Cs,i(e.info.Memory.mem_fragmentation_ratio),1)]),s("div",Bs,[Ds,s("span",As,i(e.info.Memory.used_memory_peak_human),1)]),s("div",ks,[Vs,s("span",Ss,i(e.info.Memory.total_system_memory_human),1)])]),_:1}),o(p,{title:"CPU",name:"cpu"},{default:l(()=>[s("div",Is,[qs,s("span",Ts,i(e.info.CPU.used_cpu_sys),1)]),s("div",Us,[$s,s("span",Rs,i(e.info.CPU.used_cpu_user),1)]),s("div",Ps,[Ms,s("span",Ls,i(e.info.CPU.used_cpu_sys_children),1)]),s("div",js,[zs,s("span",Ns,i(e.info.CPU.used_cpu_user_children),1)])]),_:1})]),_:1})]),_:1},8,["title","modelValue"])])}var Hs=O(de,[["render",Os]]);const Ks=j({name:"RedisEdit",components:{TagSelect:ae},props:{visible:{type:Boolean},projects:{type:Array},redis:{type:[Boolean,Object]},title:{type:String}},setup(e,{emit:t}){const c=se(null),d=z({dialogVisible:!1,projects:[],envs:[],sshTunnelMachineList:[],form:{id:null,tagId:null,tatPath:null,name:null,mode:"standalone",host:"",password:null,db:"",project:null,projectId:null,envId:null,env:null,remark:"",enableSshTunnel:null,sshTunnelMachineId:null},dbList:[0],pwd:"",btnLoading:!1,rules:{projectId:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE",trigger:["change","blur"]}],envId:[{required:!0,message:"\u8BF7\u9009\u62E9\u73AF\u5883",trigger:["change","blur"]}],host:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E3B\u673Aip:port",trigger:["change","blur"]}],db:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E93\u53F7",trigger:["change","blur"]}],mode:[{required:!0,message:"\u8BF7\u9009\u62E9\u6A21\u5F0F",trigger:["change","blur"]}]}});J(e,async u=>{d.dialogVisible=u.visible,d.dialogVisible&&(d.projects=u.projects,u.redis?(d.form=y({},u.redis),v(d.form.db)):(d.envs=[],d.form={db:"0",enableSshTunnel:-1},d.dbList=[]),p())});const v=u=>{d.dbList=u.split(",").map(m=>Number.parseInt(m))},E=()=>{d.form.db=d.dbList.length==0?"":d.dbList.join(",")},p=async()=>{if(d.form.enableSshTunnel==1&&d.sshTunnelMachineList.length==0){const u=await ie.list.request({pageNum:1,pageSize:100});d.sshTunnelMachineList=u.list}},h=async()=>{d.pwd=await C.getRedisPwd.request({id:d.form.id})},g=async()=>{c.value.validate(async u=>{if(u){const m=y({},d.form);if(m.mode=="sentinel"&&m.host.split("=").length!=2){T.error("sentinel\u6A21\u5F0Fhost\u9700\u4E3A: mastername=sentinelhost:sentinelport\u6A21\u5F0F");return}m.password=await re(m.password),C.saveRedis.request(m).then(()=>{T.success("\u4FDD\u5B58\u6210\u529F"),t("val-change",d.form),d.btnLoading=!0,setTimeout(()=>{d.btnLoading=!1},1e3),f()})}else return T.error("\u8BF7\u6B63\u786E\u586B\u5199\u4FE1\u606F"),!1})},f=()=>{t("update:visible",!1),t("cancel")};return q(y({},N(d)),{redisForm:c,changeDb:E,getSshTunnelMachines:p,getPwd:h,btnOk:g,cancel:f})}}),Js={class:"dialog-footer"};function Gs(e,t,c,d,v,E){const p=r("tag-select"),h=r("el-form-item"),g=r("el-input"),f=r("el-option"),u=r("el-select"),m=r("el-link"),w=r("el-popover"),P=r("el-checkbox"),D=r("el-col"),M=r("el-form"),A=r("el-button"),L=r("el-dialog");return F(),b("div",null,[o(L,{title:e.title,modelValue:e.dialogVisible,"onUpdate:modelValue":t[12]||(t[12]=a=>e.dialogVisible=a),"before-close":e.cancel,"close-on-click-modal":!1,"destroy-on-close":!0,width:"38%"},{footer:l(()=>[s("div",Js,[o(A,{onClick:t[11]||(t[11]=a=>e.cancel())},{default:l(()=>[_("\u53D6 \u6D88")]),_:1}),o(A,{type:"primary",loading:e.btnLoading,onClick:e.btnOk},{default:l(()=>[_("\u786E \u5B9A")]),_:1},8,["loading","onClick"])])]),default:l(()=>[o(M,{model:e.form,ref:"redisForm",rules:e.rules,"label-width":"85px"},{default:l(()=>[o(h,{prop:"tagId",label:"\u6807\u7B7E:",required:""},{default:l(()=>[o(p,{"tag-id":e.form.tagId,"onUpdate:tag-id":t[0]||(t[0]=a=>e.form.tagId=a),"tag-path":e.form.tagPath,"onUpdate:tag-path":t[1]||(t[1]=a=>e.form.tagPath=a),style:{width:"100%"}},null,8,["tag-id","tag-path"])]),_:1}),o(h,{prop:"name",label:"\u540D\u79F0:",required:""},{default:l(()=>[o(g,{modelValue:e.form.name,"onUpdate:modelValue":t[2]||(t[2]=a=>e.form.name=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165redis\u540D\u79F0","auto-complete":"off"},null,8,["modelValue"])]),_:1}),o(h,{prop:"mode",label:"mode:",required:""},{default:l(()=>[o(u,{style:{width:"100%"},modelValue:e.form.mode,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.mode=a),placeholder:"\u8BF7\u9009\u62E9\u6A21\u5F0F"},{default:l(()=>[o(f,{label:"standalone",value:"standalone"}),o(f,{label:"cluster",value:"cluster"}),o(f,{label:"sentinel",value:"sentinel"})]),_:1},8,["modelValue"])]),_:1}),o(h,{prop:"host",label:"host:",required:""},{default:l(()=>[o(g,{modelValue:e.form.host,"onUpdate:modelValue":t[4]||(t[4]=a=>e.form.host=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165host:port\uFF1Bsentinel\u6A21\u5F0F\u4E3A: mastername=sentinelhost:port\uFF0C\u82E5\u96C6\u7FA4\u6216\u54E8\u5175\u9700\u8BBE\u591A\u4E2A\u8282\u70B9\u53EF\u4F7F\u7528','\u5206\u5272","auto-complete":"off",type:"textarea"},null,8,["modelValue"])]),_:1}),o(h,{prop:"password",label:"\u5BC6\u7801:"},{default:l(()=>[o(g,{type:"password","show-password":"",modelValue:e.form.password,"onUpdate:modelValue":t[6]||(t[6]=a=>e.form.password=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801, \u4FEE\u6539\u64CD\u4F5C\u53EF\u4E0D\u586B",autocomplete:"new-password"},oe({_:2},[e.form.id&&e.form.id!=0?{name:"suffix",fn:l(()=>[o(w,{onHide:t[5]||(t[5]=a=>e.pwd=""),placement:"right",title:"\u539F\u5BC6\u7801",width:200,trigger:"click",content:e.pwd},{reference:l(()=>[o(m,{onClick:e.getPwd,underline:!1,type:"primary",class:"mr5"},{default:l(()=>[_("\u539F\u5BC6\u7801")]),_:1},8,["onClick"])]),_:1},8,["content"])]),key:"0"}:void 0]),1032,["modelValue"])]),_:1}),o(h,{prop:"db",label:"\u5E93\u53F7:",required:""},{default:l(()=>[o(u,{onChange:e.changeDb,modelValue:e.dbList,"onUpdate:modelValue":t[7]||(t[7]=a=>e.dbList=a),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u53EF\u64CD\u4F5C\u5E93\u53F7",style:{width:"100%"}},{default:l(()=>[(F(),b(U,null,$([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],a=>o(f,{key:a,label:a,value:a},null,8,["label","value"])),64))]),_:1},8,["onChange","modelValue"])]),_:1}),o(h,{prop:"remark",label:"\u5907\u6CE8:"},{default:l(()=>[o(g,{modelValue:e.form.remark,"onUpdate:modelValue":t[8]||(t[8]=a=>e.form.remark=a),modelModifiers:{trim:!0},"auto-complete":"off",type:"textarea"},null,8,["modelValue"])]),_:1}),o(h,{prop:"enableSshTunnel",label:"SSH\u96A7\u9053:"},{default:l(()=>[o(D,{span:3},{default:l(()=>[o(P,{onChange:e.getSshTunnelMachines,modelValue:e.form.enableSshTunnel,"onUpdate:modelValue":t[9]||(t[9]=a=>e.form.enableSshTunnel=a),"true-label":1,"false-label":-1},null,8,["onChange","modelValue"])]),_:1}),e.form.enableSshTunnel==1?(F(),B(D,{key:0,span:2},{default:l(()=>[_(" \u673A\u5668: ")]),_:1})):R("",!0),e.form.enableSshTunnel==1?(F(),B(D,{key:1,span:19},{default:l(()=>[o(u,{style:{width:"100%"},modelValue:e.form.sshTunnelMachineId,"onUpdate:modelValue":t[10]||(t[10]=a=>e.form.sshTunnelMachineId=a),placeholder:"\u8BF7\u9009\u62E9SSH\u96A7\u9053\u673A\u5668"},{default:l(()=>[(F(!0),b(U,null,$(e.sshTunnelMachineList,a=>(F(),B(f,{key:a.id,label:`${a.ip}:${a.port} [${a.name}]`,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):R("",!0)]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","before-close"])])}var Qs=O(Ks,[["render",Gs]]);const Ws=j({name:"RedisList",components:{Info:Hs,RedisEdit:Qs},setup(){const e=z({tags:[],redisTable:[],total:0,currentId:null,currentData:null,query:{tagPath:null,pageNum:1,pageSize:10,clusterId:null},redisInfo:{url:""},clusterInfoDialog:{visible:!1,redisId:0,info:"",nodes:[]},clusters:[{id:0,name:"\u5355\u673A"}],infoDialog:{title:"",visible:!1,info:{Server:{},Keyspace:{},Clients:{},CPU:{},Memory:{}}},redisEditDialog:{visible:!1,data:null,title:"\u65B0\u589Eredis"}});te(async()=>{p()});const t=u=>{e.query.pageNum=u,p()},c=u=>{!u||(e.currentId=u.id,e.currentData=u)},d=async()=>{try{await ue.confirm("\u786E\u5B9A\u5220\u9664\u8BE5redis?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await C.delRedis.request({id:e.currentId}),T.success("\u5220\u9664\u6210\u529F"),e.currentData=null,e.currentId=null,p()}catch{}},v=async u=>{var m=u.host;u.ip&&(m=u.ip.split("@")[0]);const w=await C.redisInfo.request({id:u.id,host:m});e.infoDialog.info=w,e.infoDialog.title=`'${m}' info`,e.infoDialog.visible=!0},E=async u=>{const m=await C.clusterInfo.request({id:u.id});e.clusterInfoDialog.info=m.clusterInfo,e.clusterInfoDialog.nodes=m.clusterNodes,e.clusterInfoDialog.redisId=u.id,e.clusterInfoDialog.visible=!0},p=async()=>{const u=await C.redisList.request(e.query);e.redisTable=u.list,e.total=u.total},h=async()=>{e.tags=await ne.getAccountTags.request(null)},g=async(u=!1)=>{u?(e.redisEditDialog.data=null,e.redisEditDialog.title="\u65B0\u589Eredis"):(e.redisEditDialog.data=e.currentData,e.redisEditDialog.title="\u4FEE\u6539redis"),e.redisEditDialog.visible=!0},f=()=>{e.currentId=null,e.currentData=null,p()};return q(y({},N(e)),{dateFormat:le,getTags:h,search:p,handlePageChange:t,choose:c,info:v,onShowClusterInfo:E,deleteRedis:d,editRedis:g,valChange:f})}}),Xs={style:{float:"right"}},Ys=s("i",null,null,-1);function Zs(e,t,c,d,v,E){const p=r("el-button"),h=r("el-option"),g=r("el-select"),f=r("el-radio"),u=r("el-table-column"),m=r("el-link"),w=r("el-table"),P=r("el-pagination"),D=r("el-row"),M=r("el-card"),A=r("info"),L=r("el-input"),a=r("el-divider"),k=r("question-filled"),V=r("el-icon"),S=r("el-tooltip"),G=r("el-tag"),Q=r("el-dialog"),W=r("redis-edit");return F(),b("div",null,[o(M,null,{default:l(()=>[o(p,{type:"primary",icon:"plus",onClick:t[0]||(t[0]=n=>e.editRedis(!0)),plain:""},{default:l(()=>[_("\u6DFB\u52A0")]),_:1}),o(p,{type:"primary",icon:"edit",disabled:e.currentId==null,onClick:t[1]||(t[1]=n=>e.editRedis(!1)),plain:""},{default:l(()=>[_("\u7F16\u8F91")]),_:1},8,["disabled"]),o(p,{type:"danger",icon:"delete",disabled:e.currentId==null,onClick:e.deleteRedis,plain:""},{default:l(()=>[_("\u5220\u9664")]),_:1},8,["disabled","onClick"]),s("div",Xs,[o(g,{onFocus:e.getTags,modelValue:e.query.tagPath,"onUpdate:modelValue":t[2]||(t[2]=n=>e.query.tagPath=n),placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E",filterable:"",clearable:""},{default:l(()=>[(F(!0),b(U,null,$(e.tags,n=>(F(),B(h,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["onFocus","modelValue"]),o(p,{class:"ml5",onClick:e.search,type:"success",icon:"search"},null,8,["onClick"])]),o(w,{data:e.redisTable,onCurrentChange:e.choose,stripe:""},{default:l(()=>[o(u,{label:"\u9009\u62E9",width:"60px"},{default:l(n=>[o(f,{modelValue:e.currentId,"onUpdate:modelValue":t[3]||(t[3]=I=>e.currentId=I),label:n.row.id},{default:l(()=>[Ys]),_:2},1032,["modelValue","label"])]),_:1}),o(u,{prop:"tagPath",label:"\u6807\u7B7E\u8DEF\u5F84","min-width":"150","show-overflow-tooltip":""}),o(u,{prop:"name",label:"\u540D\u79F0","min-width":"100"}),o(u,{prop:"host",label:"host:port","min-width":"150","show-overflow-tooltip":""}),o(u,{prop:"mode",label:"mode","min-width":"100"}),o(u,{prop:"remark",label:"\u5907\u6CE8","min-width":"120","show-overflow-tooltip":""}),o(u,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"160"},{default:l(n=>[_(i(e.dateFormat(n.row.createTime)),1)]),_:1}),o(u,{prop:"creator",label:"\u521B\u5EFA\u4EBA","min-width":"100"}),o(u,{label:"\u66F4\u591A","min-width":"130",fixed:"right"},{default:l(n=>[n.row.mode=="standalone"||n.row.mode=="sentinel"?(F(),B(m,{key:0,type:"primary",onClick:I=>e.info(n.row),underline:!1},{default:l(()=>[_("\u5355\u673A\u4FE1\u606F")]),_:2},1032,["onClick"])):R("",!0),n.row.mode=="cluster"?(F(),B(m,{key:1,onClick:I=>e.onShowClusterInfo(n.row),type:"success",underline:!1},{default:l(()=>[_("\u96C6\u7FA4\u4FE1\u606F")]),_:2},1032,["onClick"])):R("",!0)]),_:1})]),_:1},8,["data","onCurrentChange"]),o(D,{style:{"margin-top":"20px"},type:"flex",justify:"end"},{default:l(()=>[o(P,{style:{"text-align":"right"},onCurrentChange:e.handlePageChange,total:e.total,layout:"prev, pager, next, total, jumper","current-page":e.query.pageNum,"onUpdate:current-page":t[4]||(t[4]=n=>e.query.pageNum=n),"page-size":e.query.pageSize},null,8,["onCurrentChange","total","current-page","page-size"])]),_:1})]),_:1}),o(A,{visible:e.infoDialog.visible,"onUpdate:visible":t[5]||(t[5]=n=>e.infoDialog.visible=n),title:e.infoDialog.title,info:e.infoDialog.info},null,8,["visible","title","info"]),o(Q,{width:"1000px",title:"\u96C6\u7FA4\u4FE1\u606F",modelValue:e.clusterInfoDialog.visible,"onUpdate:modelValue":t[7]||(t[7]=n=>e.clusterInfoDialog.visible=n)},{default:l(()=>[o(L,{type:"textarea",autosize:{minRows:12,maxRows:12},modelValue:e.clusterInfoDialog.info,"onUpdate:modelValue":t[6]||(t[6]=n=>e.clusterInfoDialog.info=n)},null,8,["modelValue"]),o(a,{"content-position":"left"},{default:l(()=>[_("\u8282\u70B9\u4FE1\u606F")]),_:1}),o(w,{data:e.clusterInfoDialog.nodes,stripe:"",size:"small",border:""},{default:l(()=>[o(u,{prop:"nodeId",label:"nodeId","min-width":"300"},{header:l(()=>[_(" nodeId "),o(S,{class:"box-item",effect:"dark",content:"\u8282\u70B9id",placement:"top"},{default:l(()=>[o(V,null,{default:l(()=>[o(k)]),_:1})]),_:1})]),_:1}),o(u,{prop:"ip",label:"ip","min-width":"180"},{header:l(()=>[_(" ip "),o(S,{class:"box-item",effect:"dark",content:"ip:port1@port2\uFF1Aport1\u6307redis\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u901A\u4FE1\u7684\u7AEF\u53E3\uFF0Cport2\u5219\u662F\u96C6\u7FA4\u5185\u90E8\u8282\u70B9\u95F4\u901A\u4FE1\u7684\u7AEF\u53E3",placement:"top"},{default:l(()=>[o(V,null,{default:l(()=>[o(k)]),_:1})]),_:1})]),default:l(n=>[o(G,{onClick:I=>e.info({id:e.clusterInfoDialog.redisId,ip:n.row.ip}),effect:"plain",type:"success",size:"small",style:{cursor:"pointer"}},{default:l(()=>[_(i(n.row.ip),1)]),_:2},1032,["onClick"])]),_:1}),o(u,{prop:"flags",label:"flags","min-width":"110"}),o(u,{prop:"masterSlaveRelation",label:"masterSlaveRelation","min-width":"300"},{header:l(()=>[_(" masterSlaveRelation "),o(S,{class:"box-item",effect:"dark",content:"\u5982\u679C\u8282\u70B9\u662Fslave\uFF0C\u5E76\u4E14\u5DF2\u77E5master\u8282\u70B9\uFF0C\u5219\u4E3Amaster\u8282\u70B9ID\uFF1B\u5426\u5219\u4E3A\u7B26\u53F7'-'",placement:"top"},{default:l(()=>[o(V,null,{default:l(()=>[o(k)]),_:1})]),_:1})]),_:1}),o(u,{prop:"pingSent",label:"pingSent","min-width":"130","show-overflow-tooltip":""},{default:l(n=>[_(i(n.row.pingSent==0?0:new Date(parseInt(n.row.pingSent)).toLocaleString()),1)]),_:1}),o(u,{prop:"pongRecv",label:"pongRecv","min-width":"130","show-overflow-tooltip":""},{default:l(n=>[_(i(n.row.pongRecv==0?0:new Date(parseInt(n.row.pongRecv)).toLocaleString()),1)]),_:1}),o(u,{prop:"configEpoch",label:"configEpoch","min-width":"130"},{header:l(()=>[_(" configEpoch "),o(S,{class:"box-item",effect:"dark",content:"\u8282\u70B9\u7684epoch\u503C\uFF08\u5982\u679C\u8BE5\u8282\u70B9\u662F\u4ECE\u8282\u70B9\uFF0C\u5219\u4E3A\u5176\u4E3B\u8282\u70B9\u7684epoch\u503C\uFF09\u3002\u6BCF\u5F53\u8282\u70B9\u53D1\u751F\u5931\u8D25\u5207\u6362\u65F6\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\uFF0C\u72EC\u7279\u7684\uFF0C\u9012\u589E\u7684epoch\u3002",placement:"top"},{default:l(()=>[o(V,null,{default:l(()=>[o(k)]),_:1})]),_:1})]),_:1}),o(u,{prop:"linkState",label:"linkState","min-width":"100"}),o(u,{prop:"slot",label:"slot","min-width":"100"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),o(W,{onValChange:e.valChange,tags:e.tags,title:e.redisEditDialog.title,visible:e.redisEditDialog.visible,"onUpdate:visible":t[8]||(t[8]=n=>e.redisEditDialog.visible=n),redis:e.redisEditDialog.data,"onUpdate:redis":t[9]||(t[9]=n=>e.redisEditDialog.data=n)},null,8,["onValChange","tags","title","visible","redis"])])}var ao=O(Ws,[["render",Zs]]);export{ao as default};
