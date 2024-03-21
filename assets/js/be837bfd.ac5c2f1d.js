"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||c[y]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"primary-keys",title:"Primary Keys"},o=void 0,s={unversionedId:"entities/fields/primary-keys",id:"entities/fields/primary-keys",title:"Primary Keys",description:"The primary_key Field Configuration",source:"@site/subgraph/05-entities/02-fields/13-primary-keys.md",sourceDirName:"05-entities/02-fields",slug:"/entities/fields/primary-keys",permalink:"/subgraph/entities/fields/primary-keys",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/02-fields/13-primary-keys.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"primary-keys",title:"Primary Keys"},sidebar:"subgraphSidebar",previous:{title:"Virtual Fields",permalink:"/subgraph/entities/fields/virtual-fields"},next:{title:"Entity Data Source",permalink:"/subgraph/category/entity-data-source"}},l={},u=[{value:"The <code>primary_key</code> Field Configuration",id:"the-primary_key-field-configuration",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-primary_key-field-configuration"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"primary_key")," Field Configuration"),(0,a.kt)("p",null,"By default, primary keys are assumed to be ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," for sql based data sources and ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," for mongo based data sources."),(0,a.kt)("p",null,"Use this configuration to override the primary key that is used to return results after update. Update flow in Subgraph\nstarts by performing a query to aggregate a list of items in the database that will be updated. This query will return the primary key."),(0,a.kt)("p",null,"Following the update, Subgraph uses the primary keys in a query to return the correct updated results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.entities]]\nname = "coffee_order"\ndata_source = { from = "coffee_data_source" }\nfields = [\n  { name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },\n  { name = "coffee_id", scalar = "Int", default_value = "1", primary_key = true },\n  { name = "status", scalar = "String", default_value = "\\"pending\\"" },\n]\n')))}c.isMDXComponent=!0}}]);