"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,b=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={id:"authorization",title:"Authorization"},a=void 0,u={unversionedId:"auth-service/authorization",id:"auth-service/authorization",title:"Authorization",description:"Once the auth service is enabled, a biscuit token is required in order to send query or mutation",source:"@site/subgraph/06-auth-service/06-authorization.md",sourceDirName:"06-auth-service",slug:"/auth-service/authorization",permalink:"/subgraph/auth-service/authorization",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/06-auth-service/06-authorization.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"authorization",title:"Authorization"},sidebar:"subgraphSidebar",previous:{title:"Authentication Process",permalink:"/subgraph/auth-service/authentication-process"},next:{title:"Guards",permalink:"/subgraph/category/guards"}},c={},s=[{value:"Utilizing the Biscuit Token",id:"utilizing-the-biscuit-token",level:2},{value:"The Authorization Header",id:"the-authorization-header",level:3}],l={toc:s};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once the auth service is enabled, a biscuit token is required in order to send query or mutation\nrequests to any and all of the resolvers in the Subgraph API."),(0,i.kt)("h2",{id:"utilizing-the-biscuit-token"},"Utilizing the Biscuit Token"),(0,i.kt)("p",null,'In the last chapter, we discussed how to authenticate a user. Once authenticated,\nthe service provides a "biscuit" token, which functions similarly to a JWT based\nauthentication.'),(0,i.kt)("p",null,"This token is attached to subsequent network requests in order to allow the identified\nuser to access private resolvers."),(0,i.kt)("h3",{id:"the-authorization-header"},"The Authorization Header"),(0,i.kt)("p",null,"Attach the received token to the authorization header in order to access the API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Headers\nAuthorization: $TOKEN\nContent-Type: application/json\n")))}h.isMDXComponent=!0}}]);