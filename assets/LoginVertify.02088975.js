import{_ as c,r as d,u as r,o as l,a as _,c as f,b as e,w as u,v as m,d as v}from"./index.b171e68b.js";const y={name:"LoginVertify",setup(){const s=d(""),o=d(""),i=r();function t(){v.put("/v1/user/login/verify",{account:s.value,verify_code:o.value}).then(n=>{n.data.message==="\u6210\u529F"&&(document.cookie=`h_MqhC49RxFRI6pR3Z_token=${n.data.access_token};`,i.push("/"))})}return l(()=>{s.value=window.sessionStorage.getItem("H_temp_mail_store")}),{verifyCode:o,verify:t}}},h={class:"container"},p={class:"row justify-content-center"},b={class:"col-md-6"},w={class:"card shadow-sm rounded-4 overflow-hidden mt-5"},g=e("div",{class:"card-header bg-white d-flex justify-content-between align-items-center py-3"},[e("h5",{class:"mb-0"}," \u767B\u5165\u9A57\u8B49 ")],-1),x={class:"card-body display-12 fw-normal"},k={class:"mb-3"},C=e("label",{for:"add_mail",class:"form-label"},"\u9A57\u8B49\u78BC",-1),R={class:"d-flex justify-content-end"};function V(s,o,i,t,n,j){return _(),f("div",h,[e("div",p,[e("div",b,[e("div",w,[g,e("div",x,[e("div",k,[C,u(e("input",{id:"add_mail","onUpdate:modelValue":o[0]||(o[0]=a=>t.verifyCode=a),type:"email",class:"form-control"},null,512),[[m,t.verifyCode]])]),e("div",R,[e("button",{class:"btn btn-primary",onClick:o[1]||(o[1]=(...a)=>t.verify&&t.verify(...a))}," \u9A57\u8B49 ")])])])])])])}const M=c(y,[["render",V]]);export{M as default};
