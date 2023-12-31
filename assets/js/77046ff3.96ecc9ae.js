"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={id:"datasource_name",title:"Data Source Name"},i=void 0,s={unversionedId:"data-sources/datasource_name",id:"data-sources/datasource_name",title:"Data Source Name",description:"As mentioned in the previous page, Data Sources allow you to connect Subgraph to your Data.",source:"@site/subgraph/04-data-sources/01-data_source_name.md",sourceDirName:"04-data-sources",slug:"/data-sources/datasource_name",permalink:"/subgraph/data-sources/datasource_name",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/04-data-sources/01-data_source_name.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"datasource_name",title:"Data Source Name"},sidebar:"subgraphSidebar",previous:{title:"Data Sources",permalink:"/subgraph/category/data-sources"},next:{title:"SqLite Data Source",permalink:"/subgraph/data-sources/sqlite-ds"}},c={},u=[{value:"An Identifier for a Data Source",id:"an-identifier-for-a-data-source",level:3}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As mentioned in the previous page, Data Sources allow you to connect Subgraph to your Data."),(0,n.kt)("p",null,"All data sources are similar but depending on which dialect or type of source you are configuring, there are some specifics. Let's start with some basics."),(0,n.kt)("h3",{id:"an-identifier-for-a-data-source"},"An Identifier for a Data Source"),(0,n.kt)("p",null,"As your API grows, you may need to interact with multiple data sources. Entiteis that are defined might come from a variety of sources. The provided ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," allows you to later route specific data to a specific data source."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.data_sources]]\n[service.data_sources.SQL]\nname = "sqlite_source" # Any descriptive identifier for this source.\nuri = "sqlite:/home/username/sqlite_file.db"\ndialect = "SQLITE"\n\n[[service.data_sources]]\n[service.data_sources.Mongo]\nname = "My_Mongo_Source" # Any descriptive identifier for this source.\nuri = "mongodb://user:pass@127.0.0.1:27017/databasename"\ndb = "databasename"\n')))}d.isMDXComponent=!0}}]);