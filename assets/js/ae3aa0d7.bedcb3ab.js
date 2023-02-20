"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[5819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"subgraph-v0.0.3-reusable-resolvers",title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",authors:["nick"],tags:["subgraph"],date:new Date("2023-02-04T00:00:00.000Z")},i=void 0,l={permalink:"/blog/subgraph-v0.0.3-reusable-resolvers",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.3/index.md",source:"@site/blog/subgraph-v0.0.3/index.md",title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",description:"Hello all! Thanks for joining.",date:"2023-02-04T00:00:00.000Z",formattedDate:"February 4, 2023",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:2,hasTruncateMarker:!1,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{slug:"subgraph-v0.0.3-reusable-resolvers",title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",authors:["nick"],tags:["subgraph"],date:"2023-02-04T00:00:00.000Z"},prevItem:{title:"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator",permalink:"/blog/subgraph-v0.0.4-versatile-typings"}},s={authorsImageUrls:[void 0]},u=[{value:"Reusable Resolvers",id:"reusable-resolvers",level:2},{value:"The New Resolver",id:"the-new-resolver",level:2},{value:"Define The Entity (or Entities)",id:"define-the-entity-or-entities",level:3},{value:"Run The service",id:"run-the-service",level:3},{value:"The Find Many Resolver",id:"the-find-many-resolver",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello all! Thanks for joining."),(0,a.kt)("p",null,"Today I'd like to share a quick update for ",(0,a.kt)("inlineCode",{parentName:"p"},"@the-devoyage/subgraph"),", a GraphQL API Generator with the goal of simplicity.\xa0"),(0,a.kt)("p",null,"Define to run is the motto so far, which references the ease of running this API Generator. Define the schema to run the API. It should be that easy to start an API up."),(0,a.kt)("p",null,"In version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.0.3")," we are adding the ability to Find Many which is one of the reusable resolvers that is created for you when you start the service. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1675543551/The-Devoyage/CRUD_GraphQL_aaooqr.png",alt:"GraphQL Resolvers CRUD"})),(0,a.kt)("h2",{id:"reusable-resolvers"},"Reusable Resolvers"),(0,a.kt)("p",null,"The idea of an API Generator is to make creating a standardized API easy. Many parts of creating an API can be automated, including the creation of resolvers. "),(0,a.kt)("p",null,"The core of an API revolves around CRUD operations (Create, Read, Update, Delete) which can easily be automated considering there are really not many variations to consider."),(0,a.kt)("p",null,"The Devoyage's ",(0,a.kt)("inlineCode",{parentName:"p"},"subgraph")," project (The API Generator) has the goal of automating a variety of these operations for each defined entity. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find One/Many"),(0,a.kt)("li",{parentName:"ul"},"Create One/Many"),(0,a.kt)("li",{parentName:"ul"},"Delete One/Many"),(0,a.kt)("li",{parentName:"ul"},"Update One/Many")),(0,a.kt)("p",null,"This means there will be a total of 8 reusable resolvers created for each defined entity as this project proceeds."),(0,a.kt)("h2",{id:"the-new-resolver"},"The New Resolver"),(0,a.kt)("p",null,"Version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.0.3")," takes a step at closing the gap to including all 8 of these automated resolvers by including the ",(0,a.kt)("inlineCode",{parentName:"p"},"Find Many")," resolver. Let's take a look!"),(0,a.kt)("h3",{id:"define-the-entity-or-entities"},"Define The Entity (or Entities)"),(0,a.kt)("p",null,'First define the entity in the config file. Remember the motto - "Define to Run".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[service]\nservice_name = "pets"\n\n[service.database_config]\nmongo_uri = "mongodb://user:pass@127.0.0.1:27017/db"\nmongo_db = "myDb"\n\n[[service.entities]]\nname = "Dog"\n\n[service.entities.database_config]\nmongo_collection = "dogs"\n\n[[service.entities.fields]]\nname = "_id"\nscalar = "ObjectID"\nrequired = true\n\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n\n[[service.entities.fields]]\nname = "weight"\nscalar = "Int"\nrequired = false\n')),(0,a.kt)("h3",{id:"run-the-service"},"Run The service"),(0,a.kt)("p",null,"Step 1 is easy. Step 2 is even easier. Start the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"subgraph --config ./config.toml --port 5011\n")),(0,a.kt)("h3",{id:"the-find-many-resolver"},"The Find Many Resolver"),(0,a.kt)("p",null,"Check out the schema, the find many resolver is now included as a choice for querying your new API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  get_dogs(get_dogs_input: get_dogs_input!): [Dog!]!\n  ...resolvers\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It's a small step toward the goal and I am glad you are here to follow along. If you're interested in checking out the code or trying out this proof of concept, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"Subgraph Project")," on GitHub!"))}c.isMDXComponent=!0}}]);