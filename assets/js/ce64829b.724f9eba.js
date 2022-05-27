"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[575],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=l(n),y=a,d=g["".concat(s,".").concat(y)]||g[y]||p[y]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3740:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"gateway-usage-configure-context",title:"Configure Context"},s=void 0,l={unversionedId:"Usage/gateway-usage-configure-context",id:"Usage/gateway-usage-configure-context",title:"Configure Context",description:"Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API.",source:"@site/gateway/04-Usage/04-context.md",sourceDirName:"04-Usage",slug:"/Usage/gateway-usage-configure-context",permalink:"/gateway/Usage/gateway-usage-configure-context",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage/gateway/04-Usage/04-context.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"gateway-usage-configure-context",title:"Configure Context"},sidebar:"gatewaySidebar",previous:{title:"File Serving",permalink:"/gateway/Usage/gateway-usage-file-serving"}},u={},p=[{value:"Context From Headers",id:"context-from-headers",level:2},{value:"Custom Global Context",id:"custom-global-context",level:2},{value:"Access Context Data",id:"access-context-data",level:2}],g={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API."),(0,o.kt)("h2",{id:"context-from-headers"},"Context From Headers"),(0,o.kt)("p",null,"Extract data from incoming request headers and have it shared with the entire Federated API by providing the key names of the headers you want to share to the Gateway Context Helper provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"@the-devoyage/micro-auth-helpers"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Gateway/server.ts\n\nconst apolloServer = new ApolloServer({\n  gateway,\n  context: async ({ req }) =>\n    await Helpers.Gateway.GenerateContext({\n      headers: ["Content-Type", "Authorization", "CustomKey"], // Provide they key names here.\n      req,\n    }),\n});\n')),(0,o.kt)("h2",{id:"custom-global-context"},"Custom Global Context"),(0,o.kt)("p",null,"Inject custom context to share unique data globally within the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Gateway/server.ts\n\nconst apolloServer = new ApolloServer({\n  gateway,\n  context: async ({ req }) =>\n    await Helpers.Gateway.GenerateContext({\n      req,\n      inject: {\n        bigDog: "Bongo",\n        smallDog: "Oakley",\n      },\n    }),\n});\n')),(0,o.kt)("h2",{id:"access-context-data"},"Access Context Data"),(0,o.kt)("p",null,"Now you may access these data points from anywhere within the Federated API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Accounts Service\n\ngetMyAccount: async (_parent, _args, context) => {\n  const token = context.Autorization;\n  const customKey = context.CustomKey;\n  const bigDog = context.bigDog;\n};\n")))}y.isMDXComponent=!0}}]);