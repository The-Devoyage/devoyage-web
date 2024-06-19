"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[6747],{9130:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=t(4848),n=t(8453);const a={id:"service-guards",title:"Service Guards"},i=void 0,o={id:"the-service/service-guards",title:"Service Guards",description:"Guards can be applied at the service level, allowing guards to be shared for every entity and every operation. They are used to add fine",source:"@site/subgraph/03-the-service/06-guards.md",sourceDirName:"03-the-service",slug:"/the-service/service-guards",permalink:"/subgraph/the-service/service-guards",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/03-the-service/06-guards.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"service-guards",title:"Service Guards"},sidebar:"subgraphSidebar",previous:{title:"Cors Options",permalink:"/subgraph/the-service/cors-options"},next:{title:"License Key",permalink:"/subgraph/the-service/license-key"}},c={},u=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/subgraph/category/guards",children:"Guards"})," can be applied at the service level, allowing guards to be shared for every entity and every operation. They are used to add fine\ngrained access control to a service."]}),"\n",(0,s.jsxs)(r.p,{children:["Context applied at the service level becomes globally available to every property that uses the ",(0,s.jsx)(r.a,{href:"/subgraph/category/expressions",children:(0,s.jsx)(r.code,{children:"Expressions API"})}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-toml",children:'[[service.guards]]\nname = "require_user"\nif_expr = \'\'\'\n  len(context("user.id")) == 0\n\'\'\'\nthen_msg = "You must be logged in to perform this action."\n[[service.guards.context]]\nentity_name = "user"\nquery = \'\'\'\n  {\n    "get_users_input": {\n      "query": {\n        "uuid": {{user_uuid}}\n      }\n    }\n  }\n\'\'\'\nvariables = [\n  [ "{{user_uuid}}", "token_data(\\"user_uuid\\")" ]\n]\n'})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var s=t(6540);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);