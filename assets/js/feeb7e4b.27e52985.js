"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[8199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const i={id:"exclude-from-input",title:"Exclude Input Proprerties"},a=void 0,u={unversionedId:"entities/fields/exclude-from-input",id:"entities/fields/exclude-from-input",title:"Exclude Input Proprerties",description:"The Exclude From Input Field",source:"@site/subgraph/05-entities/02-fields/06-exclude-from-input.md",sourceDirName:"05-entities/02-fields",slug:"/entities/fields/exclude-from-input",permalink:"/subgraph/entities/fields/exclude-from-input",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/02-fields/06-exclude-from-input.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"exclude-from-input",title:"Exclude Input Proprerties"},sidebar:"subgraphSidebar",previous:{title:"Required Fields",permalink:"/subgraph/entities/fields/required-fields"},next:{title:"Exclude From Output",permalink:"/subgraph/entities/fields/exclude-from-output"}},o={},p=[{value:"The Exclude From Input Field",id:"the-exclude-from-input-field",level:2},{value:"Exclude &quot;All&quot;",id:"exclude-all",level:3},{value:"Exclude Custom",id:"exclude-custom",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-exclude-from-input-field"},"The Exclude From Input Field"),(0,l.kt)("p",null,"While designing APIs, it might be needed to exclude certain properties\nfrom graphql inputs for security or access reasons."),(0,l.kt)("p",null,"For example, you may not want to allow a user to update specific properties that\nshould stay consistent throughout the API process."),(0,l.kt)("p",null,"By providing options to this string array, you can effectivly limit input types from\ncontaining the field property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'# Exclude ID from All Inputs.\n[[entities]]\nname = "user"\nfields = [\n  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"] }\n]\n')),(0,l.kt)("h3",{id:"exclude-all"},'Exclude "All"'),(0,l.kt)("p",null,"Passing the value ",(0,l.kt)("inlineCode",{parentName:"p"},'"All"')," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude_from_input")," property allows users to\nexclude a value from every related graphql input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'# Exclude ID from All Inputs.\n[[entities]]\nname = "user"\nfields = [\n  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"] },\n  { name = "first_name", scalar = "String", required = true }\n]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"# The schema generated:\ninput get_user_input {\n  first_name: String!\n}\n")),(0,l.kt)("h3",{id:"exclude-custom"},"Exclude Custom"),(0,l.kt)("p",null,"You can also specify which inputs to exclude a the field from."),(0,l.kt)("p",null,"The following example removes the capability to provide a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," when Creating,\nor Updating a user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'# Exclude ID from All Inputs.\n[[entities]]\nname = "user"\nfields = [\n  { name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },\n  { name = "first_name", scalar = "String", required = true }\n]\n')))}c.isMDXComponent=!0}}]);