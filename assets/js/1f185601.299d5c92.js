"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1588],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6970:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={id:"query-the-server",title:"Query The Server"},s=void 0,l={unversionedId:"usage/query-the-server",id:"usage/query-the-server",title:"Query The Server",description:"Querying this server is easy and only requires a single header to be present with each request.",source:"@site/accounts/04-usage/01-query-the-server.md",sourceDirName:"04-usage",slug:"/usage/query-the-server",permalink:"/accounts/usage/query-the-server",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/accounts/04-usage/01-query-the-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"query-the-server",title:"Query The Server"},sidebar:"accountsSidebar",previous:{title:"Setup The Accounts Server",permalink:"/accounts/setup"},next:{title:"Auth Flow",permalink:"/accounts/usage/auth-flow"}},c={},p=[{value:"The Context Header",id:"the-context-header",level:2},{value:"Roles and Identity",id:"roles-and-identity",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Querying this server is easy and only requires a single header to be present with each request."),(0,o.kt)("p",null,"The server should sit behind a federated gateway. Query the gateway to query the server. Use the Apollo Sandbox for generated documentation on available resolvers and queries."),(0,o.kt)("h2",{id:"the-context-header"},"The Context Header"),(0,o.kt)("p",null,"All routes within this service require a ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," header to be passed with the request. The ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," header should be stringified JSON of the type Context. Be sure to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Context extends Record<string, any> {\n  auth: {\n    account: { _id: string; email: string } | null;\n    user: {\n      _id: string;\n      role: number;\n      email: string;\n    } | null;\n    isAuth: boolean;\n  };\n  // ...your context\n}\n")),(0,o.kt)("h2",{id:"roles-and-identity"},"Roles and Identity"),(0,o.kt)("p",null,"As you see above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," header provides the service with information about the authorized user's role and identity. Authorization should take place in the Gateway, as this service does not handle authorization."),(0,o.kt)("p",null,"While the user and account ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," properties remain fairly straight forward, the ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," property must conform a bit to integer standards."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Admin === 1"),(0,o.kt)("li",{parentName:"ul"},"General User === 10")))}h.isMDXComponent=!0}}]);