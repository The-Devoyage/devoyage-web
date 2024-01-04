"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[955],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(8126);const i={toc:[]};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.W,{product:"graphql-gateway",to:"https://thedevoyage.gumroad.com/l/graphql-gateway",mdxType:"LicenseAlert"}))}s.isMDXComponent=!0;const l={id:"intro",title:"GraphQL Gateway"},c=void 0,u={unversionedId:"intro",id:"intro",title:"GraphQL Gateway",description:"The Gateway service is the entry/exit point for a Federated API. Meaning, all requests must travel through the Gateway in order to access the data or other services within the API.",source:"@site/gateway/01-intro.md",sourceDirName:".",slug:"/intro",permalink:"/gateway/intro",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/gateway/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"GraphQL Gateway"},sidebar:"gatewaySidebar",next:{title:"Authorization By Default",permalink:"/gateway/features/authorization-by-default"}},d={},p=[{value:"A Centralized Entry Point",id:"a-centralized-entry-point",level:2},{value:"Security is Key",id:"security-is-key",level:2},{value:"Authorization Built In",id:"authorization-built-in",level:2},{value:"Handle It All",id:"handle-it-all",level:2}],h={toc:p};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s,{mdxType:"SupportAlert"}),(0,n.kt)("p",null,"The Gateway service is the entry/exit point for a Federated API. Meaning, all requests must travel through the Gateway in order to access the data or other services within the API."),(0,n.kt)("h2",{id:"a-centralized-entry-point"},"A Centralized Entry Point"),(0,n.kt)("p",null,"A Federated API consists of multiple micro services, meaning each service is an API or standalone service itself. The Gateway has the important job of acting as a central point to access each service, instead of having to access each Federated service individually. This means you can request data that exists in multiple locations from one simple access point."),(0,n.kt)("h2",{id:"security-is-key"},"Security is Key"),(0,n.kt)("p",null,'With a gateway acting as the main highway to each individual service, you can close off all other "roads" that lead to these external services. In return, each service of the API is naturally more secure as there is only one way in, and one way out -- Through The Gateway.'),(0,n.kt)("h2",{id:"authorization-built-in"},"Authorization Built In"),(0,n.kt)("p",null,"With all requests entering the API through a centralized point of access, it becomes a great place to perform some security checks. This GraphQL Gateway is ready to authorize requests by default, making one less thing for you to worry about when building your API."),(0,n.kt)("p",null,"Each request that enters the gateway is checked for a access token. If the token is valid, an authorization status is created to be used throughout the Federated API. Think of it as your passport getting stamped on the way into visiting a foreign country."),(0,n.kt)("h2",{id:"handle-it-all"},"Handle It All"),(0,n.kt)("p",null,"Not all requests are created equally. Some requests carry data to update a database. Some requests are looking to get data from the database. Others are carrying files that need to be saved to a hard drive. Each request looks and acts a bit differently, and this GraphQL Gateway is ready to handle the most common scenarios out of the box."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GraphQL Requests"),(0,n.kt)("li",{parentName:"ul"},"Restful Proxy")))}y.isMDXComponent=!0},8126:(e,t,a)=>{a.d(t,{W:()=>o});var r=a(7294),n=a(9960);const o=e=>{let{product:t,to:a,message:o,btnTxt:i}=e;return r.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o||r.createElement("span",null,"Want to support `@the-devoyage/",t,"`?"),r.createElement(n.Z,{to:a},r.createElement("button",{className:"button button--primary"},i||"Purchase MIT License")))}}}]);