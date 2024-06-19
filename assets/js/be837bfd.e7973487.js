"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[5190],{9228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=r(4848),a=r(8453);const n={id:"primary-keys",title:"Primary Keys"},s=void 0,o={id:"entities/fields/primary-keys",title:"Primary Keys",description:"The primary_key Field Configuration",source:"@site/subgraph/05-entities/02-fields/13-primary-keys.md",sourceDirName:"05-entities/02-fields",slug:"/entities/fields/primary-keys",permalink:"/subgraph/entities/fields/primary-keys",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/02-fields/13-primary-keys.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"primary-keys",title:"Primary Keys"},sidebar:"subgraphSidebar",previous:{title:"Virtual Fields",permalink:"/subgraph/entities/fields/virtual-fields"},next:{title:"Entity Data Source",permalink:"/subgraph/category/entity-data-source"}},d={},u=[{value:"The <code>primary_key</code> Field Configuration",id:"the-primary_key-field-configuration",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h2,{id:"the-primary_key-field-configuration",children:["The ",(0,i.jsx)(t.code,{children:"primary_key"})," Field Configuration"]}),"\n",(0,i.jsxs)(t.p,{children:["By default, primary keys are assumed to be ",(0,i.jsx)(t.code,{children:"id"})," for sql based data sources and ",(0,i.jsx)(t.code,{children:"_id"})," for mongo based data sources."]}),"\n",(0,i.jsx)(t.p,{children:"Use this configuration to override the primary key that is used to return results after update. Update flow in Subgraph\nstarts by performing a query to aggregate a list of items in the database that will be updated. This query will return the primary key."}),"\n",(0,i.jsx)(t.p,{children:"Following the update, Subgraph uses the primary keys in a query to return the correct updated results."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-toml",children:'[[service.entities]]\nname = "coffee_order"\ndata_source = { from = "coffee_data_source" }\nfields = [\n  { name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },\n  { name = "coffee_id", scalar = "Int", default_value = "1", primary_key = true },\n  { name = "status", scalar = "String", default_value = "\\"pending\\"" },\n]\n'})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var i=r(6540);const a={},n=i.createContext(a);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);