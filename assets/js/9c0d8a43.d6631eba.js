"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[2501],{8188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(4848),s=n(8453);const r={id:"entity-guards",title:"Entity Guards"},a=void 0,o={id:"entities/entity-guards",title:"Entity Guards",description:"Entity Access with Guards",source:"@site/subgraph/05-entities/04-guards.md",sourceDirName:"05-entities",slug:"/entities/entity-guards",permalink:"/subgraph/entities/entity-guards",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/04-guards.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"entity-guards",title:"Entity Guards"},sidebar:"subgraphSidebar",previous:{title:"Required Entities",permalink:"/subgraph/entities/required-entities"},next:{title:"Exclude From Output",permalink:"/subgraph/entities/exclude-from-output"}},u={},c=[{value:"Entity Access with Guards",id:"entity-access-with-guards",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"entity-access-with-guards",children:"Entity Access with Guards"}),"\n",(0,i.jsxs)(t.p,{children:["Limiting who can access an entity can be done by providing a ",(0,i.jsx)(t.code,{children:"guard"})," at the entity level. As you can read about\nin the guards section of this dicumentation, guards allow you to prevent access to the API quickly and easily."]}),"\n",(0,i.jsx)(t.p,{children:"Guards that evaluate to a truthy condition will prevent a request from being successful."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[[service.entities]]\nname = "Espresso"\n\n[[service.entities.guards]]\nname = "invalid_name"\nif_expr = \'\'\'\n    input("query" "first_name") == "nick"\n\'\'\'\nthen_msg = "Invalid Name - Permission Denied"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Guards have access to common or even custom contextual data that allows for unique authorization to be applied to\nany service. Check out the Guards section of the docs to learn more."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);