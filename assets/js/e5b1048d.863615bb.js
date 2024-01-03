"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[8973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8249:(e,t,a)=>{a.d(t,{U:()=>o});var r=a(7294),n=a(9960);const o=()=>r.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",flexDirection:"column"}},r.createElement("div",{className:"avatar"},r.createElement("a",{className:"avatar__photo-link avatar__photo avatar__photo--lg",href:"https://medium.com/@thedevoyage"},r.createElement("img",{alt:"Nick McLean Profile Image",src:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"})),r.createElement("div",{className:"avatar__intro"},r.createElement("div",{className:"avatar__name"},"Nick McLean"),r.createElement("small",{className:"avatar__subtitle padding-bottom--md"},"Thanks for following along. If you would like to keep up to date make sure to check in frequently and/or follow us below!"),r.createElement("div",null,[{to:"https://medium.com/@thedevoyage",label:"Medium"},{to:"https://twitter.com/thedevoyage",label:"Twitter"},{to:"https://thedevoyage.slack.com",label:"Slack"},{to:"https://thedevoyage.gumroad.com/subscribe",label:"Newsletter"}].map((e=>r.createElement(n.Z,{to:e.to,key:e.to},r.createElement("button",{className:"button button--primary margin-right--md",style:{color:"#fff",backgroundColor:"var(--ifm-color-dark-blue)"}},e.label))))))))},2519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(8249);const l={slug:"subgraph-v0.0.3-reusable-resolvers",title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",authors:["nick"],tags:["subgraph"],date:new Date("2023-02-04T00:00:00.000Z")},i=void 0,s={permalink:"/blog/subgraph-v0.0.3-reusable-resolvers",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.3/index.md",source:"@site/blog/subgraph-v0.0.3/index.md",title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",description:"Hello all! Thanks for joining.",date:"2023-02-04T00:00:00.000Z",formattedDate:"February 4, 2023",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:2.035,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{slug:"subgraph-v0.0.3-reusable-resolvers",title:"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust",authors:["nick"],tags:["subgraph"],date:"2023-02-04T00:00:00.000Z"},prevItem:{title:"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator",permalink:"/blog/subgraph-v0.0.4-versatile-typings"}},u={authorsImageUrls:[void 0]},c=[{value:"Reusable Resolvers",id:"reusable-resolvers",level:2},{value:"The New Resolver",id:"the-new-resolver",level:2},{value:"Define The Entity (or Entities)",id:"define-the-entity-or-entities",level:3},{value:"Run The service",id:"run-the-service",level:3},{value:"The Find Many Resolver",id:"the-find-many-resolver",level:3}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hello all! Thanks for joining."),(0,n.kt)("p",null,"Today I'd like to share a quick update for ",(0,n.kt)("inlineCode",{parentName:"p"},"@the-devoyage/subgraph"),", a GraphQL API Generator with the goal of simplicity."),(0,n.kt)("p",null,"Define to run is the motto so far, which references the ease of running this API Generator. Define the schema to run the API. It should be that easy to start an API up."),(0,n.kt)("p",null,"In version ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.0.3")," we are adding the ability to Find Many which is one of the reusable resolvers that is created for you when you start the service."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1675543551/The-Devoyage/CRUD_GraphQL_aaooqr.png",alt:"GraphQL Resolvers CRUD"})),(0,n.kt)("h2",{id:"reusable-resolvers"},"Reusable Resolvers"),(0,n.kt)("p",null,"The idea of an API Generator is to make creating a standardized API easy. Many parts of creating an API can be automated, including the creation of resolvers."),(0,n.kt)("p",null,"The core of an API revolves around CRUD operations (Create, Read, Update, Delete) which can easily be automated considering there are really not many variations to consider."),(0,n.kt)("p",null,"The Devoyage's ",(0,n.kt)("inlineCode",{parentName:"p"},"subgraph")," project (The API Generator) has the goal of automating a variety of these operations for each defined entity."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Find One/Many"),(0,n.kt)("li",{parentName:"ul"},"Create One/Many"),(0,n.kt)("li",{parentName:"ul"},"Delete One/Many"),(0,n.kt)("li",{parentName:"ul"},"Update One/Many")),(0,n.kt)("p",null,"This means there will be a total of 8 reusable resolvers created for each defined entity as this project proceeds."),(0,n.kt)("h2",{id:"the-new-resolver"},"The New Resolver"),(0,n.kt)("p",null,"Version ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.0.3")," takes a step at closing the gap to including all 8 of these automated resolvers by including the ",(0,n.kt)("inlineCode",{parentName:"p"},"Find Many")," resolver. Let's take a look!"),(0,n.kt)("h3",{id:"define-the-entity-or-entities"},"Define The Entity (or Entities)"),(0,n.kt)("p",null,'First define the entity in the config file. Remember the motto - "Define to Run".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[service]\nservice_name = "pets"\n\n[service.database_config]\nmongo_uri = "mongodb://user:pass@127.0.0.1:27017/db"\nmongo_db = "myDb"\n\n[[service.entities]]\nname = "Dog"\n\n[service.entities.database_config]\nmongo_collection = "dogs"\n\n[[service.entities.fields]]\nname = "_id"\nscalar = "ObjectID"\nrequired = true\n\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n\n[[service.entities.fields]]\nname = "weight"\nscalar = "Int"\nrequired = false\n')),(0,n.kt)("h3",{id:"run-the-service"},"Run The service"),(0,n.kt)("p",null,"Step 1 is easy. Step 2 is even easier. Start the service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"subgraph --config ./config.toml --port 5011\n")),(0,n.kt)("h3",{id:"the-find-many-resolver"},"The Find Many Resolver"),(0,n.kt)("p",null,"Check out the schema, the find many resolver is now included as a choice for querying your new API."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  get_dogs(get_dogs_input: get_dogs_input!): [Dog!]!\n  ...resolvers\n}\n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"It's a small step toward the goal and I am glad you are here to follow along. If you're interested in checking out the code or trying out this proof of concept, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"Subgraph Project")," on GitHub!"),(0,n.kt)(o.U,{mdxType:"BlogFooter"}))}h.isMDXComponent=!0}}]);