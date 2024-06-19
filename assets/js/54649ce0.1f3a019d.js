"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1453],{879:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),r=i(8453);const o={id:"service-imports",title:"Imports"},s=void 0,a={id:"the-service/service-imports",title:"Imports",description:"Importing Entities and Data Organization",source:"@site/subgraph/03-the-service/03-imports.md",sourceDirName:"03-the-service",slug:"/the-service/service-imports",permalink:"/subgraph/the-service/service-imports",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/03-the-service/03-imports.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"service-imports",title:"Imports"},sidebar:"subgraphSidebar",previous:{title:"Port",permalink:"/subgraph/the-service/service-port"},next:{title:"Cors Options",permalink:"/subgraph/the-service/cors-options"}},c={},l=[{value:"Importing Entities and Data Organization",id:"importing-entities-and-data-organization",level:2},{value:"The Import File",id:"the-import-file",level:3}];function p(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"importing-entities-and-data-organization",children:"Importing Entities and Data Organization"}),"\n",(0,n.jsx)(t.p,{children:"As your configuration file expands, the service file may become unwieldy. While consolidating all configuration into a single file is acceptable for smaller applications, as your application grows, separating logic into multiple files becomes advantageous."}),"\n",(0,n.jsx)(t.p,{children:"Subgraph supports the ability to define entities in separate files, offering a tidy and organized approach to configuration."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[service]\nname = "my_service"\nport = 3030\nimports = [\n  "./todo.toml",\n  "./todo_history.toml",\n  "./todo_access.toml",\n  "./user_connections.toml",\n  "./user.toml"\n]\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Note"})," - This syntax only supports the ability to import Entities. Anything with ",(0,n.jsx)(t.code,{children:"service.entities"}),"\nas the table prefix is valid to move to another file."]}),"\n",(0,n.jsx)(t.h3,{id:"the-import-file",children:"The Import File"}),"\n",(0,n.jsxs)(t.p,{children:["Working with an import file can help to declutter a complex config file. Within an import file, you will no longer need to\nprovide the ",(0,n.jsx)(t.code,{children:"service"})," prefix. The key ",(0,n.jsx)(t.code,{children:"[[service.entities]]"})," simply becomes ",(0,n.jsx)(t.code,{children:"[[entities]]"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'# Import file represents an entity\n[[entities]] # Note, no longer prefix with `service.`\nname = "product"\nrequired = true\nfields = [\n  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"], exclude_from_output = true  },\n  { name = "uuid", scalar = "UUID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },\n  { name = "title", scalar = "String", required = true },\n  { name = "description", scalar = "String", required = true },\n]\n\n## Any nested `entities` properties can be defined here.\n[[entities.guards]]\n...\n[[entities.data_source]]\n...\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);