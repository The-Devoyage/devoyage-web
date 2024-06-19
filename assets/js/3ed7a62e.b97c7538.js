"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3430],{9853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(4848),r=n(8453);const s={id:"examples-webauthn-auth",title:"WebAuthN & Auth API"},u=void 0,o={id:"examples/examples-webauthn-auth",title:"WebAuthN & Auth API",description:"",source:"@site/subgraph/12-examples/12-auth.md",sourceDirName:"12-examples",slug:"/examples/examples-webauthn-auth",permalink:"/subgraph/examples/examples-webauthn-auth",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/12-examples/12-auth.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"examples-webauthn-auth",title:"WebAuthN & Auth API"},sidebar:"subgraphSidebar",previous:{title:"Guards",permalink:"/subgraph/examples/examples-guards"},next:{title:"Licensing",permalink:"/subgraph/licensing"}},i={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-toml",children:'[service]\nname = "auth"\n\n[[service.data_sources]]\n[service.data_sources.Mongo]\nname = "users_data_source"\nuri = "mongodb://user:pass@127.0.0.1:27017/subgraph_mongo"\ndb = "my_db"\n\n[service.auth]\nrequesting_party = "localhost"\nrequesting_party_name = "demo"\nrequesting_party_origin = "http://localhost:8000"\ndata_source = "users_data_source"\n\n[[service.entities]]\nname = "product"\nfields = [\n  { name = "_id", scalar = "ObjectID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]},\n  { name = "name", scalar = "String", required = true },\n  { name = "created_by", scalar = "UUID", required = false },\n]\n\n\n# Only the user who created the product may query or mutate the product.\n[[service.entities.guards]]\nname = "not_owned"\nif_expr = "token_data(\\"user_uuid\\") != input(\\"created_by\\")"\nthen_msg = "Permission Denied - You can only manage your own user."\n'})})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function u(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);