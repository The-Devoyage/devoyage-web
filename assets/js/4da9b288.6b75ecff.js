"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7541],{8975:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(4848),s=t(8453);const i={id:"query-the-server",title:"Query The Server"},d=void 0,o={id:"usage/query-the-server",title:"Query The Server",description:"The server should sit behind a federated gateway. Query the gateway to query the server. Use the Apollo Sandbox for generated documentation on available resolvers and queries.",source:"@site/media/03-usage/01-query-the-server.md",sourceDirName:"03-usage",slug:"/usage/query-the-server",permalink:"/media/usage/query-the-server",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/media/03-usage/01-query-the-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"query-the-server",title:"Query The Server"},sidebar:"mailerSidebar",previous:{title:"Setup The Server",permalink:"/media/setup"},next:{title:"Upload and Serve Files",permalink:"/media/usage/upload-and-serve-files"}},a={},u=[{value:"Required Headers",id:"required-headers",level:2},{value:"Extended Properties/Required Services",id:"extended-propertiesrequired-services",level:3}];function l(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The server should sit behind a federated gateway. Query the gateway to query the server. Use the Apollo Sandbox for generated documentation on available resolvers and queries."}),"\n",(0,n.jsx)(r.h2,{id:"required-headers",children:"Required Headers"}),"\n",(0,n.jsxs)(r.p,{children:["All routes within this service require a ",(0,n.jsx)(r.code,{children:"context"})," header to be passed with the request. The ",(0,n.jsx)(r.code,{children:"context"})," header should be stringified JSON of the type Context. Be sure to include the ",(0,n.jsx)(r.code,{children:"auth"})," property."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"interface Context extends Record<string, any> {\n  auth: {\n    account: { _id: string; email: string } | null;\n    user: {\n      _id: string;\n      role: number;\n      email: string;\n    } | null;\n    isAuth: boolean;\n  };\n  // ...context\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"extended-propertiesrequired-services",children:"Extended Properties/Required Services"}),"\n",(0,n.jsx)(r.p,{children:"The media service extends federated entities from external services. The following federated services and properties are required in order to run this service."}),"\n",(0,n.jsx)(r.p,{children:"User"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"_id"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["If you want to run this service without the ",(0,n.jsx)(r.code,{children:"User"})," entity, it is possible with minimal updating to the code base."]})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(6540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);