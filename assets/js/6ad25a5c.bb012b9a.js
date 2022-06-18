"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[5182],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"configure-context",title:"Configure Context"},l=void 0,s={unversionedId:"usage/configure-context",id:"usage/configure-context",title:"Configure Context",description:"Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API.",source:"@site/gateway/04-usage/04-context.md",sourceDirName:"04-usage",slug:"/usage/configure-context",permalink:"/gateway/usage/configure-context",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/gateway/04-usage/04-context.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"configure-context",title:"Configure Context"},sidebar:"gatewaySidebar",previous:{title:"File Serving",permalink:"/gateway/usage/file-serving"}},u={},p=[{value:"Context From Headers",id:"context-from-headers",level:2},{value:"Custom Global Context",id:"custom-global-context",level:2},{value:"Access Context Data",id:"access-context-data",level:2}],d={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API."),(0,a.kt)("h2",{id:"context-from-headers"},"Context From Headers"),(0,a.kt)("p",null,"Extract data from incoming request headers and have it shared with the entire Federated API by providing the key names of the headers you want to share to the Gateway Context Helper provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@the-devoyage/micro-auth-helpers"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Gateway/server.ts\n\nconst apolloServer = new ApolloServer({\n  gateway,\n  context: async ({ req }) =>\n    await Helpers.Gateway.GenerateContext({\n      headers: ["Content-Type", "Authorization", "CustomKey"], // Provide they key names here.\n      req,\n    }),\n});\n')),(0,a.kt)("h2",{id:"custom-global-context"},"Custom Global Context"),(0,a.kt)("p",null,"Inject custom context to share unique data globally within the API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Gateway/server.ts\n\nconst apolloServer = new ApolloServer({\n  gateway,\n  context: async ({ req }) =>\n    await Helpers.Gateway.GenerateContext({\n      req,\n      inject: {\n        bigDog: "Bongo",\n        smallDog: "Oakley",\n      },\n    }),\n});\n')),(0,a.kt)("h2",{id:"access-context-data"},"Access Context Data"),(0,a.kt)("p",null,"Now you may access these data points from anywhere within the Federated API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Accounts Service\n\ngetMyAccount: async (_parent, _args, context) => {\n  const token = context.Autorization;\n  const customKey = context.CustomKey;\n  const bigDog = context.bigDog;\n};\n")))}y.isMDXComponent=!0}}]);