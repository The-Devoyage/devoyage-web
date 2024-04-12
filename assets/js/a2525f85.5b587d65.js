"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[2091],{2763:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=n(4848),i=n(8453);const l={id:"field-scalar",title:"Scalar Types"},t=void 0,r={id:"entities/fields/field-scalar",title:"Scalar Types",description:"Field Scalar Types",source:"@site/subgraph/05-entities/02-fields/03-scalar-type.md",sourceDirName:"05-entities/02-fields",slug:"/entities/fields/field-scalar",permalink:"/subgraph/entities/fields/field-scalar",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/02-fields/03-scalar-type.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"field-scalar",title:"Scalar Types"},sidebar:"subgraphSidebar",previous:{title:"Field Name",permalink:"/subgraph/entities/fields/field-name"},next:{title:"List Fields",permalink:"/subgraph/entities/fields/list-fields"}},c={},d=[{value:"Field Scalar Types",id:"field-scalar-types",level:2},{value:"String Scalar",id:"string-scalar",level:3},{value:"Integer Scalar",id:"integer-scalar",level:3},{value:"Boolean Scalar",id:"boolean-scalar",level:3},{value:"DateTime Scalar",id:"datetime-scalar",level:3},{value:"UUID Scalar",id:"uuid-scalar",level:3},{value:"ObjectID Scalar",id:"objectid-scalar",level:3},{value:"Object Scalar",id:"object-scalar",level:3}];function o(e){const a={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"field-scalar-types",children:"Field Scalar Types"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"Required"})}),"\n",(0,s.jsxs)(a.p,{children:["A scalar describes the associated data type for the field, such as an integer or string. In addition\nto the ",(0,s.jsx)(a.code,{children:"name"})," property, scalar type is required to define a field."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "id", scalar = "Int" }\n]\n'})}),"\n",(0,s.jsx)(a.p,{children:"There are many scalar types that subgraph supports."}),"\n",(0,s.jsx)(a.h3,{id:"string-scalar",children:"String Scalar"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "description", scalar = "String" }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"integer-scalar",children:"Integer Scalar"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "id", scalar = "Int" }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"boolean-scalar",children:"Boolean Scalar"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "is_visible", scalar = "Boolean" }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"datetime-scalar",children:"DateTime Scalar"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "created_at", scalar = "DateTime" }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"uuid-scalar",children:"UUID Scalar"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "uuid", scalar = "UUID" }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"objectid-scalar",children:"ObjectID Scalar"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Comment"\nfields = [\n    { name = "_id", scalar = "ObjectID" }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"object-scalar",children:"Object Scalar"}),"\n",(0,s.jsx)(a.p,{children:"The object scalar is a unique scalar for Mongo and HTTP Data Sources. It allows for nested\nextensions to an entity."}),"\n",(0,s.jsx)(a.p,{children:"To define a field that is an object, you must provide a nested array of fields to describe the\nobject, as shown below."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "User"\nfields = [\n    { name = "address", scalar = "Object", fields = [\n        { name = "first_line", scalar = "String" },\n        { name = "second_line", scalar = "String" },\n        { name = "zip_code", scalar = "Int" },\n        { name = "city", scalar = "String" },\n        { name = "state", scalar = "Int" },\n    ] }\n]\n'})})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>r});var s=n(6540);const i={},l=s.createContext(i);function t(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);