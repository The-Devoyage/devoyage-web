"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1757],{69:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(4848),r=t(8453);const s={id:"examples-sqlite",title:"Simple SQLite"},i=void 0,l={id:"examples/examples-sqlite",title:"Simple SQLite",description:"",source:"@site/subgraph/12-examples/03-sqlite.md",sourceDirName:"12-examples",slug:"/examples/examples-sqlite",permalink:"/subgraph/examples/examples-sqlite",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/12-examples/03-sqlite.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"examples-sqlite",title:"Simple SQLite"},sidebar:"subgraphSidebar",previous:{title:"Simple MySQL",permalink:"/subgraph/examples/examples-mysql"},next:{title:"Simple Postgres",permalink:"/subgraph/examples/examples-postgres"}},o={},c=[];function p(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[service]\nname = "espresso"\nport = 3030\nlog_level = "debug"\n\n[[service.data_sources]]\n[service.data_sources.SQL]\nname = "caffeine_data_source"\nuri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"\ndialect = "SQLITE"\n\n[[service.entities]]\nname = "Coffee"\nfields = [\n{ name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },\n{ name = "name", scalar = "String", required = true },\n{ name = "price", scalar = "Int", required = true },\n{ name = "available", scalar = "Boolean", required = true }\n]\n\n[[service.entities]]\nname = "Espresso"\nfields = [\n{ name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },\n{ name = "name", scalar = "String", required = true },\n{ name = "price", scalar = "Int", required = true },\n{ name = "available", scalar = "Boolean", required = true }\n]\n'})})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);