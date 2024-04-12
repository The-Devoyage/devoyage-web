"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[6521],{8661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const i={id:"resolvers",title:"Resolvers"},a=void 0,o={id:"usage/resolvers",title:"Resolvers",description:"Once running, Subgrpah exposes several methods to interact with data within your API. There are one or more",source:"@site/subgraph/13-usage/01-resolvers.md",sourceDirName:"13-usage",slug:"/usage/resolvers",permalink:"/subgraph/usage/resolvers",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/13-usage/01-resolvers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"resolvers",title:"Resolvers"},sidebar:"subgraphSidebar",previous:{title:"Usage",permalink:"/subgraph/category/usage"},next:{title:"Resolver Inputs",permalink:"/subgraph/usage/resolver-inputs"}},l={},c=[{value:"Methods of Interaction",id:"methods-of-interaction",level:2},{value:"Creating a Query",id:"creating-a-query",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Once running, Subgrpah exposes several methods to interact with data within your API. There are one or more\nways to Create, Read, and Modify data."}),"\n",(0,r.jsx)(n.h2,{id:"methods-of-interaction",children:"Methods of Interaction"}),"\n",(0,r.jsx)(n.p,{children:"Subgraph creates and optionally exposes five resolvers for each entity defined. Each resolver is created\nusing a logical functioin name combining the action with the entity name."}),"\n",(0,r.jsxs)(n.p,{children:["Replacing ",(0,r.jsx)(n.code,{children:"x"})," with the name of the entity, the resolvers are as followed:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create One - ",(0,r.jsx)(n.code,{children:"create_x"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find One - ",(0,r.jsx)(n.code,{children:"find_x"})]}),"\n",(0,r.jsxs)(n.li,{children:["Find Many - ",(0,r.jsx)(n.code,{children:"find_xs"})]}),"\n",(0,r.jsxs)(n.li,{children:["Update One - ",(0,r.jsx)(n.code,{children:"update_x"})]}),"\n",(0,r.jsxs)(n.li,{children:["Update Many - ",(0,r.jsx)(n.code,{children:"update_xs"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-query",children:"Creating a Query"}),"\n",(0,r.jsx)(n.p,{children:"With this automated naming convention, writing queries becomes predictable and intuitive."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"{\n    query GetUser($get_user_input: get_user_input) {\n        get_user(get_user_input: $get_user_input) {\n            first_name\n            last_name\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);