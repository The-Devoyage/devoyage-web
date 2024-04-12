"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3848],{9468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(4848),a=n(8453);const r={id:"configure-context",title:"Configure Context"},s=void 0,c={id:"usage/configure-context",title:"Configure Context",description:"Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API.",source:"@site/gateway/04-usage/04-context.md",sourceDirName:"04-usage",slug:"/usage/configure-context",permalink:"/gateway/usage/configure-context",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/gateway/04-usage/04-context.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"configure-context",title:"Configure Context"},sidebar:"gatewaySidebar",previous:{title:"File Serving",permalink:"/gateway/usage/file-serving"}},i={},l=[{value:"Context From Headers",id:"context-from-headers",level:2},{value:"Custom Global Context",id:"custom-global-context",level:2},{value:"Access Context Data",id:"access-context-data",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API."}),"\n",(0,o.jsx)(t.h2,{id:"context-from-headers",children:"Context From Headers"}),"\n",(0,o.jsxs)(t.p,{children:["Extract data from incoming request headers and have it shared with the entire Federated API by providing the key names of the headers you want to share to the Gateway Context Helper provided by ",(0,o.jsx)(t.code,{children:"@the-devoyage/micro-auth-helpers"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'// Gateway/server.ts\n\nconst apolloServer = new ApolloServer({\n  gateway,\n  context: async ({ req }) =>\n    await Helpers.Gateway.GenerateContext({\n      headers: ["Content-Type", "Authorization", "CustomKey"], // Provide they key names here.\n      req,\n    }),\n});\n'})}),"\n",(0,o.jsx)(t.h2,{id:"custom-global-context",children:"Custom Global Context"}),"\n",(0,o.jsx)(t.p,{children:"Inject custom context to share unique data globally within the API."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'// Gateway/server.ts\n\nconst apolloServer = new ApolloServer({\n  gateway,\n  context: async ({ req }) =>\n    await Helpers.Gateway.GenerateContext({\n      req,\n      inject: {\n        bigDog: "Bongo",\n        smallDog: "Oakley",\n      },\n    }),\n});\n'})}),"\n",(0,o.jsx)(t.h2,{id:"access-context-data",children:"Access Context Data"}),"\n",(0,o.jsx)(t.p,{children:"Now you may access these data points from anywhere within the Federated API."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// Accounts Service\n\ngetMyAccount: async (_parent, _args, context) => {\n  const token = context.Autorization;\n  const customKey = context.CustomKey;\n  const bigDog = context.bigDog;\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(6540);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);