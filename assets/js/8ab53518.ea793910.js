"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[6142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"query-the-server",title:"Roles and Identities"},s=void 0,i={unversionedId:"features/query-the-server",id:"features/query-the-server",title:"Roles and Identities",description:"This server limits access by roles. Admin have more power than general users, as it should be.",source:"@site/accounts/02-features/04-roles-and-identity.md",sourceDirName:"02-features",slug:"/features/query-the-server",permalink:"/accounts/features/query-the-server",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/accounts/02-features/04-roles-and-identity.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"query-the-server",title:"Roles and Identities"},sidebar:"accountsSidebar",previous:{title:"Request Account(s) Data",permalink:"/accounts/features/request-account-data"},next:{title:"Setup The Accounts Server",permalink:"/accounts/setup"}},c={},l=[{value:"Roles and Identity",id:"roles-and-identity",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This server limits access by roles. Admin have more power than general users, as it should be."),(0,a.kt)("h2",{id:"roles-and-identity"},"Roles and Identity"),(0,a.kt)("p",null,"Each request that enters the server will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," header that allows or denies access to aspects of this API based on the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," property."),(0,a.kt)("p",null,"The simple header is an easy way for you to provide the relevant information needed to approve or deny access."))}p.isMDXComponent=!0}}]);