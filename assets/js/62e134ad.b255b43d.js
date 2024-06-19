"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[8743],{9017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=r(4848),o=r(8453);const i={id:"exclude-from-output",title:"Exclude From Output"},s=void 0,u={id:"entities/fields/exclude-from-output",title:"Exclude From Output",description:"The Response Object",source:"@site/subgraph/05-entities/02-fields/07-exclude-from-output.md",sourceDirName:"05-entities/02-fields",slug:"/entities/fields/exclude-from-output",permalink:"/subgraph/entities/fields/exclude-from-output",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/02-fields/07-exclude-from-output.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"exclude-from-output",title:"Exclude From Output"},sidebar:"subgraphSidebar",previous:{title:"Exclude Input Proprerties",permalink:"/subgraph/entities/fields/exclude-from-input"},next:{title:"Field Guards",permalink:"/subgraph/entities/fields/field-guards"}},d={},l=[{value:"The Response Object",id:"the-response-object",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"the-response-object",children:"The Response Object"}),"\n",(0,n.jsx)(t.p,{children:"After execution, Subgraph returns the entity to the user. It may be desired to\nexclude sensitive or private information from ever leaving the API."}),"\n",(0,n.jsxs)(t.p,{children:["This can be done by providing a truthy value to the ",(0,n.jsx)(t.code,{children:"exclude_from_output"})," property."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"exclude_from_output"})," property allows you to specify if the field can be resolved. You may choose to use this to\nensure private data is not included in the response object."]}),"\n",(0,n.jsx)(t.p,{children:"For example, you may want to specify an ID property and a UUID property. The ID property would remain as an internal\nidentifier while allowing a shareable identifier to be released to the client side application."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'{ name = "id", scalar = "Int", required = true, exclude_from_output = true  }\n{ name = "uuid", scalar = "Int", required = true }\n'})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>u});var n=r(6540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);