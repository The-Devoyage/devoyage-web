"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3130],{350:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=r(4848),s=r(8453);const a={id:"examples-objects-arrays",title:"Objects and Arrays"},i=void 0,c={id:"examples/examples-objects-arrays",title:"Objects and Arrays",description:"",source:"@site/subgraph/12-examples/07-objects-and_arrays.md",sourceDirName:"12-examples",slug:"/examples/examples-objects-arrays",permalink:"/subgraph/examples/examples-objects-arrays",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/12-examples/07-objects-and_arrays.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"examples-objects-arrays",title:"Objects and Arrays"},sidebar:"subgraphSidebar",previous:{title:"Mixed Data Sources",permalink:"/subgraph/examples/examples-mixed-data-sources"},next:{title:"Chat GPT",permalink:"/subgraph/examples/examples-chatgpt"}},u={},o=[];function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[service]\nname = "beers"\n\n[[service.data_sources]]\n[service.data_sources.Mongo]\nname = "beers_ds"\nuri = "mongodb://sun:sun@127.0.0.1:27017/sun"\ndb = "sun"\n\n[[service.entities]]\nname = "Beer"\n\n[[service.entities.fields]]\nname = "_id"\nscalar = "ObjectID"\nrequired = true\nexclude_from_input = ["CreateOne"]\n\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n\n[[service.entities.fields]]\nname = "cities"\nscalar = "String"\nrequired = true\nlist = true\n\n[[service.entities.fields]]\nname = "comments"\nscalar = "Object"\nrequired = true\nlist = true\nfields = [\n    { name = "user", scalar = "String", required = true },\n    { name = "comment", scalar = "String", required = true },\n]\n\n[[service.entities.fields]]\nname = "scores"\nscalar = "Int"\nlist = true\n\n[[service.entities.fields]]\nname = "attributes"\nscalar = "Object"\nrequired = true\nfields = [\n    { name = "ibu", scalar = "Int", required = true },\n    { name = "abv", scalar = "Int", required = true },\n    { name = "type", scalar = "String", required = true },\n    { name = "address", scalar = "Object", required = true, fields = [\n        { name = "street", scalar = "String", required = true },\n        { name = "city", scalar = "String", required = true },\n        { name = "state", scalar = "String", required = true },\n        { name = "zip", scalar = "String", required = true },\n    ]},\n]\n'})})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);