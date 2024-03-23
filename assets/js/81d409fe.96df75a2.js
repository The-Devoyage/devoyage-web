"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8249:(e,t,a)=>{a.d(t,{U:()=>i});var n=a(7294),r=a(9960);const i=()=>n.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",flexDirection:"column"}},n.createElement("div",{className:"avatar"},n.createElement("a",{className:"avatar__photo-link avatar__photo avatar__photo--lg",href:"https://medium.com/@thedevoyage"},n.createElement("img",{alt:"Nick McLean Profile Image",src:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"})),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},"Nick McLean"),n.createElement("small",{className:"avatar__subtitle padding-bottom--md"},"Thanks for following along. If you would like to keep up to date make sure to check in frequently and/or follow us below!"),n.createElement("div",null,[{to:"https://medium.com/@thedevoyage",label:"Medium"},{to:"https://twitter.com/thedevoyage",label:"Twitter"},{to:"https://thedevoyage.slack.com",label:"Slack"},{to:"https://thedevoyage.gumroad.com/subscribe",label:"Newsletter"}].map((e=>n.createElement(r.Z,{to:e.to,key:e.to},n.createElement("button",{className:"button button--primary margin-right--md",style:{color:"#fff",backgroundColor:"var(--ifm-color-dark-blue)"}},e.label))))))))},8126:(e,t,a)=>{a.d(t,{W:()=>i});var n=a(7294),r=a(9960);const i=e=>{let{product:t,to:a,message:i,btnTxt:l}=e;return n.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},i||n.createElement("span",null,"Want to support `@the-devoyage/",t,"`?"),n.createElement(r.Z,{to:a},n.createElement("button",{className:"button button--primary"},l||"Purchase MIT License")))}},8018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(8126),l=a(8249);const o={title:"Subgraph - A Rust Powered GraphQL API Generator",slug:"subgraph-v0.0.14-scalable-graphql-api",authors:["nick"],tags:["subgraph"],date:new Date("2024-03-21T00:00:00.000Z"),description:"Spin up scalable and flexible GraphQL APIs with Subgraph, a Rust Based GraphQL Engine.",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1711036382/subgraphv14_jnpclv.png",keywords:["graphql","subgraph","api","rust","backend","server","json"]},s=void 0,p={permalink:"/blog/subgraph-v0.0.14-scalable-graphql-api",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.14/index.md",source:"@site/blog/subgraph-v0.0.14/index.md",title:"Subgraph - A Rust Powered GraphQL API Generator",description:"Spin up scalable and flexible GraphQL APIs with Subgraph, a Rust Based GraphQL Engine.",date:"2024-03-21T00:00:00.000Z",formattedDate:"March 21, 2024",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:5.495,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Subgraph - A Rust Powered GraphQL API Generator",slug:"subgraph-v0.0.14-scalable-graphql-api",authors:["nick"],tags:["subgraph"],date:"2024-03-21T00:00:00.000Z",description:"Spin up scalable and flexible GraphQL APIs with Subgraph, a Rust Based GraphQL Engine.",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1711036382/subgraphv14_jnpclv.png",keywords:["graphql","subgraph","api","rust","backend","server","json"]},prevItem:{title:"Unlocking the Rusty Treasure Trove: Crafting Next-Gen APIs with 6 Powerhouse Crates!",permalink:"/blog/6-creates-for-graphql-in-rust"},nextItem:{title:"Create an Instant Passkey/Auth Server with Subgraph",permalink:"/blog/passkey-auth-server-with-subgraph"}},u={authorsImageUrls:[void 0]},c=[{value:"Building a Scalable API with Subgraph",id:"building-a-scalable-api-with-subgraph",level:2},{value:"Organizing Your Data",id:"organizing-your-data",level:2},{value:"Interaction with Data",id:"interaction-with-data",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Filtering with Resolver Inputs",id:"filtering-with-resolver-inputs",level:3},{value:"Subgraph v0.0.14",id:"subgraph-v0014",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome Voyager."),(0,r.kt)("p",null,"Thank you for joining! Today, we're delving into Subgraph, a Rust-based GraphQL tool designed to simplify the creation of scalable backends."),(0,r.kt)("p",null,"Building applications can often feel overwhelming, especially when tackling server-side logic that requires scalability,\nsecurity, and flexibility. Subgraph aims to ease this challenge by emphasizing data ownership and DevOps control."),(0,r.kt)("p",null,"With Subgraph, you retain control of your data and servers, allowing you to deploy according to your preferences.\nIt serves as a vital layer in the stack, facilitating interaction with your rows, documents, tables, and more. Instead of\nfocusing on architecting scalable backends, Subgraph enables you to dedicate your time to building interfaces around logically organized data."),(0,r.kt)("p",null,"The latest release, Subgraph v0.0.14, introduces exciting new features that bring this tool closer to being a comprehensive solution for your next application."),(0,r.kt)("p",null,"I'm thrilled to have you join us on this journey! It's important to note that Subgraph is currently in a pre-alpha release state and is not yet suitable for critical production environments. However, if you create something innovative, I'd love to hear about your experience!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1711036382/subgraphv14_jnpclv.png",alt:"feature image"})),(0,r.kt)("h2",{id:"building-a-scalable-api-with-subgraph"},"Building a Scalable API with Subgraph"),(0,r.kt)("p",null,'The objective is clear: let\'s construct a scalable web server to deliver data for a user interface. But what exactly defines "scalability"?'),(0,r.kt)("p",null,"Creating a web server might seem straightforward, but ensuring it remains adaptable and maintainable over time presents its own set of challenges. Scalability encompasses more than just horizontal and vertical deployments; it extends to various aspects of application design and architecture."),(0,r.kt)("p",null,"Key considerations for achieving scalability include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organization of Data"),": Structuring data and its relationships in a logical and reusable manner."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distributed Access Controls"),": Establishing rules governing who can access specific data points across the entire API, minimizing redundancy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interacting with Data"),": Designing methods to request, filter, and receive data from the API in a consistent and understandable format.")),(0,r.kt)("p",null,"In this article, we'll focus on data organization and interaction. However, for a comprehensive understanding of how Subgraph can aid in distributed access control and other API-related topics, I encourage you to explore the ",(0,r.kt)("a",{parentName:"p",href:"https://www.thedevoyage.com/subgraph/intro"},"Subgraph documentation"),"."),(0,r.kt)("h2",{id:"organizing-your-data"},"Organizing Your Data"),(0,r.kt)("p",null,"If you want to follow along in your own IDE, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://www.thedevoyage.com/subgraph/quickstart"},"Quick Start")," to learn how to download Subgraph. Below, I will skip ahead to step two, writing\nthe configuration file so that we can see how Subgraph helps you to organize data logically."),(0,r.kt)("p",null,"Subgraph's magic stems from a configuration file that you manage. There is no true code or build process - only a simple config."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In ",(0,r.kt)("inlineCode",{parentName:"strong"},"myconfig.toml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Define the service\n[service]\nname = "parks"\nport = 3030\n\n# Tell subgraph where your data lives.\n# Subgraph supports combining multiple data sources together.\n# Built in clients include Mongo, SqLite, MySql, Postgres, and HTTP (external APIs).\n[[service.data_sources]]\n[service.data_sources.SQL]\nname = "my_sql_parks_db"\nuri = "sqlite:/home/mypath/Desktop/DEV/dbs/my_sqlite_database.db"\ndialect = "SQLITE"\n\n# An entity is a table(sql) or collection(mongo) in your database.\n# Defining an entity automatically creates CRU(d) methods to consume.\n[[service.entities]]\nname = "park"\nfields = [\n    { name = "id", scalar = "Int", required = true },\n    { name = "name", scalar = "String", required = true },\n    { name = "town", scalar = "String", required = true },\n    { name = "playground", scalar = "Boolean", required = true },\n]\n')),(0,r.kt)("p",null,"Start the server with a simple command in the terminal: ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph --config ./myconfig.toml")," and navigate to the specified port\nto explore using the built in GraphQL SandBox - ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3030"),"."),(0,r.kt)("p",null,"Once defined, Subgraph creates resolvers so that you can start interacting with the database through the API."),(0,r.kt)("h2",{id:"interaction-with-data"},"Interaction with Data"),(0,r.kt)("p",null,"For each entity, Subgraph creates five different resolvers which allow you to interact with the API. Each generated resolver\nis logically named based on the entity and the action."),(0,r.kt)("h3",{id:"resolvers"},"Resolvers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find One - ",(0,r.kt)("inlineCode",{parentName:"li"},"get_park")),(0,r.kt)("li",{parentName:"ul"},"Find Many - ",(0,r.kt)("inlineCode",{parentName:"li"},"get_parks")),(0,r.kt)("li",{parentName:"ul"},"Create One - ",(0,r.kt)("inlineCode",{parentName:"li"},"create_park")),(0,r.kt)("li",{parentName:"ul"},"Update One","*"," - ",(0,r.kt)("inlineCode",{parentName:"li"},"update_park")),(0,r.kt)("li",{parentName:"ul"},"Update Many - ",(0,r.kt)("inlineCode",{parentName:"li"},"update_parks"))),(0,r.kt)("p",null,"*","The update one resolver is only available in dialects that nativly support ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT 1")," clauses."),(0,r.kt)("p",null,"Using the generated resolvers, you can start to perform queries and mutations from the sandbox or your user interface."),(0,r.kt)("h3",{id:"filtering-with-resolver-inputs"},"Filtering with Resolver Inputs"),(0,r.kt)("p",null,"Each resolver automatically generates inputs based on the entity field definitions, allowing you to find and filter results based on any\ncriteria that the entity specifies. Inputs are logically named with the same standards as the resolver."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},'Find a park with the name of "Clyde Warren Park".'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetPark {\n  get_park(get_park_input: { query: { name: "Clyde Warren Park" } }) {\n    id\n    name\n  }\n}\n')),(0,r.kt)("p",null,"Subgraph provides several filters that allow you to easily find the data you need such as Regex Filters and Conditional (Less Than, Greater Than) Filters."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},'Find a park with a name LIKE "Clyde...."'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetPark {\n  get_park(get_park_input: { query: { LIKE: { name: "Clyde%" } } }) {\n    id\n    name\n  }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Find many parks with an ",(0,r.kt)("inlineCode",{parentName:"em"},"id")," that is Greater Than 20."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetParks {\n  get_parks(get_parks_input: { query: { GT: { id: 20 } } }) {\n    id\n    name\n  }\n}\n")),(0,r.kt)("p",null,"Additionally, mixing and matching filters becomes possible with ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," operators which recurisvly utilize the generated inputs."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Find many parks that have an ",(0,r.kt)("inlineCode",{parentName:"em"},"id")," that is Greater Than 20 and Less Than 40"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetParks {\n  get_parks(\n    get_parks_input: {\n      query: { AND: [{ GT: { id: 20 } }, { LT: { id: 40 } }] }\n    }\n  ) {\n    id\n    name\n  }\n}\n")),(0,r.kt)("p",null,"Large data becomes easy to mananage with database level limit based pagination baked into the generated query."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Find many parks that have an ",(0,r.kt)("inlineCode",{parentName:"em"},"id")," that is Greater Than 20 and only return the second page."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetParks {\n  get_parks(\n    get_parks_input: {\n      query: { AND: [{ GT: { id: 20 } }, { LT: { id: 40 } }] }\n      opts: { per_page: 10, page: 2 }\n    }\n  ) {\n    id\n    name\n  }\n}\n")),(0,r.kt)("h2",{id:"subgraph-v0014"},"Subgraph v0.0.14"),(0,r.kt)("p",null,"Thank you for taking a moment to explore some of the new features in v0.0.14 of Subgraph! This tool simplifies the process of describing the data within your database, creating an intuitive and flexible interface for interacting with that data."),(0,r.kt)("p",null,"With just over a year of development under its belt, this project has made significant strides in developing tooling that enables easy and standardized API generation."),(0,r.kt)("p",null,"If you're excited about the direction of the project, please consider showing your support by giving the ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"repository")," a Star!"),(0,r.kt)(i.W,{product:"subgraph",to:"https://thedevoyage.gumroad.com/l/subgraph",btnTxt:"Early Alpha Release",mdxType:"LicenseAlert"}),(0,r.kt)(l.U,{mdxType:"BlogFooter"}))}h.isMDXComponent=!0}}]);