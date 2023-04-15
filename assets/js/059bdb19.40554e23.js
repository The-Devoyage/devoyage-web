"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",slug:"subgraph-v0.0.7-http-with-chat-gpt",authors:["nick"],tags:["subgraph"],date:new Date("2023-04-14T00:00:00.000Z")},i=void 0,s={permalink:"/blog/subgraph-v0.0.7-http-with-chat-gpt",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.7/index.md",source:"@site/blog/subgraph-v0.0.7/index.md",title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",description:"Hello all -- Thanks for joining!",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:4.12,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",slug:"subgraph-v0.0.7-http-with-chat-gpt",authors:["nick"],tags:["subgraph"],date:"2023-04-14T00:00:00.000Z"},nextItem:{title:"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?",permalink:"/blog/subgraph-v0.0.5-api-vs-car"}},l={authorsImageUrls:[void 0]},p=[{value:"v0.0.7 and the Chat GPT API",id:"v007-and-the-chat-gpt-api",level:2},{value:"HTTP Data Source",id:"http-data-source",level:3},{value:"Object Support",id:"object-support",level:3},{value:"List Options",id:"list-options",level:3},{value:"New Features",id:"new-features",level:3},{value:"The Chat GPT Config",id:"the-chat-gpt-config",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hello all -- Thanks for joining!"),(0,r.kt)("p",null,"Today we are going to use the Chat GPT API to show off the newest release from the subgraph project, which is a tool built to help you start up a well rounded API in a matter of minutes."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"@The-Devoyage/subgraph")," project is a proof-of-concept implementation written in Rust for generating a dynamic API from a single\nconfiguration/schema.\nThe subgraph allows you to define entities, data sources, and resolvers in a single TOML configuration. "),(0,r.kt)("p",null,"The configuration specifies how the API should be generated around the data you need, existing or not. Subgraph generates CRUD operations from the entities you define and allows you\nto connect many data sources to a single API, including HTTP and MongoDB (SQL support coming in the future!). In this way, you can create an API in no time, which can be used to\nmanipulate and find data, and even map third-party RESTful APIs to GraphQL automatically."),(0,r.kt)("p",null,"Let's dive into the new HTTP Data Source configurations which will allow us to connect to almost any third party RESTful API, such as the Chat GPT API."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1681523977/Subgraph_Logo_2_gff26m.png",alt:"Subgraph"})),(0,r.kt)("h2",{id:"v007-and-the-chat-gpt-api"},"v0.0.7 and the Chat GPT API"),(0,r.kt)("h3",{id:"http-data-source"},"HTTP Data Source"),(0,r.kt)("p",null,"The HTTP data source is a powerful feature in Subgraph that enables data retrieval from external APIs. With this data source, you can easily connect your Subgraph GraphQL server to any REST API and map the API endpoints to\nyour GraphQL schema. This allows you to consolidate data from multiple sources into a single GraphQL endpoint. The HTTP data source provides various methods to retrieve data, such as GET, POST, PUT, PATCH, DELETE,\nand allows for custom headers to be set. This feature simplifies the process of fetching data from external sources and reduces the amount of boilerplate code needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.data_sources]]\n[service.data_sources.HTTP]\nname = "chat_gpt"\nurl = "https://api.openai.com/"\ndefault_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]\n')),(0,r.kt)("h3",{id:"object-support"},"Object Support"),(0,r.kt)("p",null,'In Subgraph, Scalars are the primitive data types such as String, Int, and Boolean. However, there are situations where we need to represent more complex types or groupings of primitive Scalars. This is where Object types come into play.\nAn Object "Scalar" is a custom type that can be defined in the configuration for the schema, representing a complex type that can be used as a type itself. For example, you might have an object scalar representing a comment, with\nits creator, content, and any other desired attributes.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.entities.fields]]\nname = "usage"\nscalar = "Object"\nexclude_from_input = ["CreateOne"] \nrequired = true\nfields = [\n    { name = "prompt_tokens", scalar = "Int", required = true },\n    { name = "completion_tokens", scalar = "Int", required = true },\n    { name = "total_tokens", scalar = "Int", required = true },\n]\n')),(0,r.kt)("h3",{id:"list-options"},"List Options"),(0,r.kt)("p",null,"Lists or Arrays are one of the most commonly used data types in programming languages. Similarly, in Subgraph, lists can be defined as an array of a certain data types. This allows for a collection of values\nto be returned as a single response. Lists can be defined in the configuration file by marking the field as a list (as shown below). Lists can also be nested inside objects, allowing for more complex data structures to be\nrepresented. Lists are useful when you need to return multiple instances of a certain data type, such as a list of products or a list of blog posts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.entities.fields]]\nname = "messages"\nscalar = "Object"\nrequired = true\nlist = true\nfields = [\n  {name = "role", scalar = "String", required = true}, \n  {name = "content", scalar = "String", required = true}\n]\nexclude_from_output = true\n')),(0,r.kt)("h3",{id:"new-features"},"New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP Data Source - Easily map a HTTP API into this GraphQL API."),(0,r.kt)("li",{parentName:"ul"},"Update One Resolver - Update Mongo documents or send HTTP Put/Patch Request"),(0,r.kt)("li",{parentName:"ul"},"Objects and Lists - Support for more complex data structures."),(0,r.kt)("li",{parentName:"ul"},"Exclude From Input/Output - Allows fields to be shared or mapped exclusivly to resolvers input/output."),(0,r.kt)("li",{parentName:"ul"},"Environment Variable Support - Use environment variables directly inside your config with the ",(0,r.kt)("inlineCode",{parentName:"li"},"$")," suffix.")),(0,r.kt)("h2",{id:"the-chat-gpt-config"},"The Chat GPT Config"),(0,r.kt)("p",null,"Let's get down to the nitty gritty and hit the Chat GPT Completions endpoint with a Subgraph Service."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/the-devoyage/subgraph/releases"},"release")," of subgraph."),(0,r.kt)("li",{parentName:"ol"},"Get an Open AI API Key and set it as an environment variable.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"EXPORT OPENAI_KEY=paste_key_here\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/The-Devoyage/subgraph/blob/2209c412f3f4fd0664a7963edba1d9830ec8e50c/examples/chat-gpt.toml"},"Chat GPT Service Config Example"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the API."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./subgraph -c ./chat-gpt.toml -p 5012\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Check out the Sandbox and send some mutations!")),(0,r.kt)("p",null,"Open browser and navigate to the port that the service was started on. ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5012")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1680991221/Screenshot_from_2023-04-08_17-00-02_xidwxl.png",alt:"Sandbox"})),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"There is still a lot of work in order to get to v0.1.0 - Error handling, SQL Compatibility, Various Scalar Support, GraphQL Subscriptions... just to name a few."),(0,r.kt)("p",null,"So keep tuned, as v0.0.8 is under way."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"@the-devoyage/subgraph")," - Check out the repo, grab a ticket, let's build."))}c.isMDXComponent=!0}}]);