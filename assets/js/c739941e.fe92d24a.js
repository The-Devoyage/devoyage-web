"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"content-and-layouts",title:"Contents and Layouts"},l=void 0,i={unversionedId:"usage/content-and-layouts",id:"usage/content-and-layouts",title:"Contents and Layouts",description:"If you want to use triggered content, you must create a content using the graphql api on this server.",source:"@site/mailer/03-usage/04-content-and-layouts.md",sourceDirName:"03-usage",slug:"/usage/content-and-layouts",permalink:"/mailer/usage/content-and-layouts",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/mailer/03-usage/04-content-and-layouts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"content-and-layouts",title:"Contents and Layouts"},sidebar:"mailerSidebar",previous:{title:"Triggered Content",permalink:"/mailer/usage/triggered-content"}},u={},s=[{value:"Content",id:"content",level:3},{value:"Layouts",id:"layouts",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to use triggered content, you must create a content using the graphql api on this server."),(0,r.kt)("h3",{id:"content"},"Content"),(0,r.kt)("p",null,"Content are pre-designed HTML that can be sent as standalone emails or be dynamically inserted into pre-designed HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout"),"s."),(0,r.kt)("p",null,"From the GraphQL Playground/Sandbox you can manipulate content:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Content"),(0,r.kt)("li",{parentName:"ul"},"Update Content"),(0,r.kt)("li",{parentName:"ul"},"Delete Content"),(0,r.kt)("li",{parentName:"ul"},"Get Content")),(0,r.kt)("h3",{id:"layouts"},"Layouts"),(0,r.kt)("p",null,"Layouts are pre-designed HTML templates that are saved to the GraphQL Mailer Database. Layouts do not contain dynamic variables, but can be injected with ",(0,r.kt)("inlineCode",{parentName:"p"},"Content"),", which is described below. Layouts MUST can contain a variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"{{content}}")," which will allow a Content to be injected into the template."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Layout - Admins are able to create layouts. Requires User Role of 1.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get Layouts - Get a paginated and filterable list of layouts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update Layout - Admins are able to update layouts. Requires user role of 1.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete Layout - Admins are able to delete layouts. Requires user role of 1."))))}p.isMDXComponent=!0}}]);