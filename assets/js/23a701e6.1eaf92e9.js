"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3134],{5246:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=s(4848),r=s(8453);const o={id:"pg-ds",title:"Postgres Data Source"},n=void 0,c={id:"data-sources/pg-ds",title:"Postgres Data Source",description:"Defining a Postgres Data Source",source:"@site/subgraph/04-data-sources/06-postgres-ds.md",sourceDirName:"04-data-sources",slug:"/data-sources/pg-ds",permalink:"/subgraph/data-sources/pg-ds",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/04-data-sources/06-postgres-ds.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"pg-ds",title:"Postgres Data Source"},sidebar:"subgraphSidebar",previous:{title:"HTTP Data Sources",permalink:"/subgraph/data-sources/http-data-sources"},next:{title:"Multiple Data Sources",permalink:"/subgraph/data-sources/multiple-data-sources"}},i={},d=[{value:"Defining a Postgres Data Source",id:"defining-a-postgres-data-source",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"defining-a-postgres-data-source",children:"Defining a Postgres Data Source"}),"\n",(0,a.jsxs)(t.p,{children:["Defining a connection to a Postgres DB can be done by providing a URI and Dialect in addition to the required ",(0,a.jsx)(t.code,{children:"name"})," of the data source."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-toml",children:'[[service.data_sources]]\n[service.data_sources.SQL]\nname = "restaurants"\nuri = "postgre://root:rootroot@localhost:5432/mydb"\ndialect = "POSTGRES"\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var a=s(6540);const r={},o=a.createContext(r);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);