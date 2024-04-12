"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1423],{5829:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=i(4848),r=i(8453);const a={id:"auth-config",title:"The Auth Configuration"},s=void 0,o={id:"auth-service/auth-config",title:"The Auth Configuration",description:"Enabling the Auth Service",source:"@site/subgraph/06-auth-service/02-auth-config.md",sourceDirName:"06-auth-service",slug:"/auth-service/auth-config",permalink:"/subgraph/auth-service/auth-config",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/06-auth-service/02-auth-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"auth-config",title:"The Auth Configuration"},sidebar:"subgraphSidebar",previous:{title:"Auth Service Introduction",permalink:"/subgraph/auth-service/auth-service"},next:{title:"The Subgraph User",permalink:"/subgraph/auth-service/subgraph-user"}},c={},h=[{value:"Enabling the Auth Service",id:"enabling-the-auth-service",level:2},{value:"Requesting Party",id:"requesting-party",level:3},{value:"Requesting Party Name",id:"requesting-party-name",level:3},{value:"Requesting Party Origin",id:"requesting-party-origin",level:3},{value:"Data Source",id:"data-source",level:3},{value:"Private Key",id:"private-key",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"enabling-the-auth-service",children:"Enabling the Auth Service"}),"\n",(0,n.jsx)(t.p,{children:"By providing a valid configuration, the auth service is automatically enabled."}),"\n",(0,n.jsx)(t.p,{children:"There are several required and optional properties that can be provided in order to\nconfigure the service securely."}),"\n",(0,n.jsx)(t.p,{children:"It is suggested to use environment variables as shown below, which allows you to deploy a consistent configuration\nacross a variety of environments."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[service.auth]\nrequesting_party = "$TRICERATASK_RP" #"localhost"\nrequesting_party_name = "$TRICERATASK_RPN" #"triceratask.com"\nrequesting_party_origin = "$TRICERATASK_RPO" #"http://localhost:5173" #Origin of the client. http://localhost:5173\ndata_source = "triceratask_ds"\nprivate_key = "$TRICERATASK_PRIVATE_KEY" # Generate a private key using CLI Options\n'})}),"\n",(0,n.jsx)(t.h3,{id:"requesting-party",children:"Requesting Party"}),"\n",(0,n.jsxs)(t.p,{children:["The string value for the ",(0,n.jsx)(t.code,{children:"requesting_party"})," property represents the domain of the origin that is performing the request."]}),"\n",(0,n.jsxs)(t.p,{children:["It is important to ensure the domain matches the ",(0,n.jsx)(t.code,{children:"requesting_party_origin"})," or authentication/authorization is likely to fail."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'requesting_party = "localhost"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"requesting-party-name",children:"Requesting Party Name"}),"\n",(0,n.jsx)(t.p,{children:"While a required field, this field serves as a general identifier to the client when displaying names to the user."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'requesting_party_name = "triceratask.com"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"requesting-party-origin",children:"Requesting Party Origin"}),"\n",(0,n.jsxs)(t.p,{children:["The origin is strictly enforced during the authentication process. The domain of the origin must match the ",(0,n.jsx)(t.code,{children:"requesting_party"})," property."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'requesting_party_origin = "http://localhost:3000" # The location of the client side app.\n'})}),"\n",(0,n.jsx)(t.h3,{id:"data-source",children:"Data Source"}),"\n",(0,n.jsx)(t.p,{children:"Saving the user data is a vital step in the authentication process. Simply point the auth service to a valid data source in\norder to persist your user data."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'data_source = "triceratask_ds"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"private-key",children:"Private Key"}),"\n",(0,n.jsx)(t.p,{children:"When using the auth service, a new private/public key pair will be generated each time a the service starts. This will\ncause your users to log in again following a restart, as the key will be different. Users do not need to register\nagain following a restart."}),"\n",(0,n.jsx)(t.p,{children:"You may provide a custom private key which persists between restarts and prevents a forced log out of the user."}),"\n",(0,n.jsx)(t.p,{children:"This is also useful when syncing authentication between multiple applications."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'private_key = "$TRICERATASK_PRIVATE_KEY"\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE"})," You may generate a random private/public key pair using the CLI Options."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);