"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[955],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,p=d["".concat(c,".").concat(h)]||d[h]||y[h]||o;return r?a.createElement(p,i(i({ref:t},u),{},{components:r})):a.createElement(p,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1113:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return y},metadata:function(){return h},toc:function(){return f}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(8126),s=["components"],c={toc:[]};function l(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.W,{product:"graphql-gateway",to:"https://thedevoyage.gumroad.com/l/graphql-gateway",mdxType:"LicenseAlert"}))}l.isMDXComponent=!0;var u=["components"],y={id:"gateway-intro",title:"GraphQL Gateway"},d=void 0,h={unversionedId:"gateway-intro",id:"gateway-intro",title:"GraphQL Gateway",description:"The Gateway service is the entry/exit point for a Federated API. Meaning, all requests must travel through the Gateway in order to access the data or other services within the API.",source:"@site/gateway/01-intro.md",sourceDirName:".",slug:"/gateway-intro",permalink:"/devoyage-web/gateway/gateway-intro",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage/gateway/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"gateway-intro",title:"GraphQL Gateway"},sidebar:"gatewaySidebar",next:{title:"Authorization By Default",permalink:"/devoyage-web/gateway/Features/gateway-features-authorization-by-default"}},p={},f=[{value:"A Centralized Entry Point",id:"a-centralized-entry-point",level:2},{value:"Security is Key",id:"security-is-key",level:2},{value:"Authorization Built In",id:"authorization-built-in",level:2},{value:"Handle It All",id:"handle-it-all",level:2}],m={toc:f};function g(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"SupportAlert"}),(0,o.kt)("p",null,"The Gateway service is the entry/exit point for a Federated API. Meaning, all requests must travel through the Gateway in order to access the data or other services within the API."),(0,o.kt)("h2",{id:"a-centralized-entry-point"},"A Centralized Entry Point"),(0,o.kt)("p",null,'A Federated API consists of multiple "micro" services, meaning each service is an API itself. The Gateway has the important job of acting as a central point to access each service, instead of having to access each Federated service individually. This means you can request data that exists in multiple locations from one simple access point.'),(0,o.kt)("h2",{id:"security-is-key"},"Security is Key"),(0,o.kt)("p",null,'With a gateway acting as the main highway to each individual service, you can close off all other "roads" that lead to these external services. In return, each service of the API is naturally more secure as there is only one way in, and one way out -- Through The Gateway.'),(0,o.kt)("h2",{id:"authorization-built-in"},"Authorization Built In"),(0,o.kt)("p",null,"With all requests entering the API through a centralized point of access, it becomes a great place to perform some security checks. The GraphQL Gateway is ready to authorize requests by default, making one less thing for you to worry about when building your API."),(0,o.kt)("p",null,"Each request that enters the gateway is checked for a secure token. If the token is valid, an authorization status is created to be used throughout the Federated API. Think of it as your passport getting stamped on the way into visiting a foreign country."),(0,o.kt)("h2",{id:"handle-it-all"},"Handle It All"),(0,o.kt)("p",null,"Not all requests are created equally. Some requests carry data to update a database. Some requests are looking to get data from the database. Others are carrying files that need to be saved to a hard drive. Each request looks and acts a bit differently, and the GraphQL Gateway is ready to handle the most common scenarios out of the box."),(0,o.kt)("p",null,"Our GraphQL Gateway is ready to handle everything form the common Query to File Uploads by default, baring some quick configuration."))}g.isMDXComponent=!0},8126:function(e,t,r){r.d(t,{W:function(){return o}});var a=r(7294),n=r(9960),o=function(e){var t=e.product,r=e.to;return a.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},"Want to use `@the-devoyage/",t,"` in production?",a.createElement(n.Z,{to:r},a.createElement("button",{className:"button button--primary"},"Purchase MIT License")))}}}]);