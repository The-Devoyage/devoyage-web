"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(r),h=a,b=g["".concat(l,".").concat(h)]||g[h]||c[h]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"subgraph-v0.0.4-versatile-typings",title:"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator",authors:["nick"],tags:["subgraph"],date:new Date("2023-02-20T00:00:00.000Z")},i=void 0,s={permalink:"/blog/subgraph-v0.0.4-versatile-typings",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.4/index.md",source:"@site/blog/subgraph-v0.0.4/index.md",title:"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator",description:"Hello all! Thanks for joining!",date:"2023-02-20T00:00:00.000Z",formattedDate:"February 20, 2023",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:2.91,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{slug:"subgraph-v0.0.4-versatile-typings",title:"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator",authors:["nick"],tags:["subgraph"],date:"2023-02-20T00:00:00.000Z"},prevItem:{title:"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?",permalink:"/blog/subgraph-v0.0.5-api-vs-car"},nextItem:{title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",permalink:"/blog/subgraph-v0.0.3-reusable-resolvers"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello all! Thanks for joining!"),(0,a.kt)("p",null,"Today, the goal is to share the idea of versatile typings for an API Generator. "),(0,a.kt)("p",null,"In version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.0.4")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"subgraph")," API Generator Project, I am happy to introduce the (mongo) Object Id Scalar. This means it's now possible to instantly start an API ",(0,a.kt)("inlineCode",{parentName:"p"},"Subgraph")," Instance with the capabilities to find Mongo Documents by their Object ID! One simple step forward for this POC GraphQL API Generator written in Rust."),(0,a.kt)("p",null,"In case you are new to ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Subgraph"),', "Define to Run", is the motto. Define a simple configuration, and start the API. The code does the rest by generating resolvers and database connections -- An instantly generated API.  '),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1676924961/The-Devoyage/INTUITIVE_SCALARS_4_ttaqvh.png",alt:"GraphQL Versatile Typings"})),(0,a.kt)("p",null,"So, what kind of scalars are we including in this API Generator? Let's take a look."))}c.isMDXComponent=!0}}]);