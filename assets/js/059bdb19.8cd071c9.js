"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3751],{7207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(4848),s=a(8453),r=a(7547);const o={title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",slug:"subgraph-v0.0.7-http-with-chat-gpt",authors:["nick"],tags:["subgraph"],date:new Date("2023-04-14T00:00:00.000Z")},i=void 0,l={permalink:"/blog/subgraph-v0.0.7-http-with-chat-gpt",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.7/index.md",source:"@site/blog/subgraph-v0.0.7/index.md",title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",description:"Hello all -- Thanks for joining!",date:"2023-04-14T00:00:00.000Z",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:4.15,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",slug:"subgraph-v0.0.7-http-with-chat-gpt",authors:["nick"],tags:["subgraph"],date:"2023-04-14T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Subgraph v0.0.8 - Instant SQL API with Subgraph",permalink:"/blog/subgraph-v0.0.8-instant-sql-api"},nextItem:{title:"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?",permalink:"/blog/subgraph-v0.0.5-api-vs-car"}},h={authorsImageUrls:[void 0]},c=[{value:"v0.0.7 and the Chat GPT API",id:"v007-and-the-chat-gpt-api",level:2},{value:"HTTP Data Source",id:"http-data-source",level:3},{value:"Object Support",id:"object-support",level:3},{value:"List Options",id:"list-options",level:3},{value:"New Features",id:"new-features",level:3},{value:"The Chat GPT Config",id:"the-chat-gpt-config",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Hello all -- Thanks for joining!"}),"\n",(0,n.jsx)(t.p,{children:"Today we are going to use the Chat GPT API to show off the newest release from the subgraph project, which is a tool built to help you start up a well rounded API in a matter of minutes."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.github.com/the-devoyage/subgraph",children:"@The-Devoyage/subgraph"})," project is a proof-of-concept implementation written in Rust for generating a dynamic API from a single\nconfiguration/schema.\nThe subgraph allows you to define entities, data sources, and resolvers in a single TOML configuration."]}),"\n",(0,n.jsx)(t.p,{children:"The configuration specifies how the API should be generated around the data you need, existing or not. Subgraph generates CRUD operations from the entities you define and allows you\nto connect many data sources to a single API, including HTTP and MongoDB (SQL support coming in the future!). In this way, you can create an API in no time, which can be used to\nmanipulate and find data, and even map third-party RESTful APIs to GraphQL automatically."}),"\n",(0,n.jsx)(t.p,{children:"Let's dive into the new HTTP Data Source configurations which will allow us to connect to almost any third party RESTful API, such as the Chat GPT API."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://res.cloudinary.com/the-devoyage/image/upload/v1681523977/Subgraph_Logo_2_gff26m.png",alt:"Subgraph"})}),"\n",(0,n.jsx)(t.h2,{id:"v007-and-the-chat-gpt-api",children:"v0.0.7 and the Chat GPT API"}),"\n",(0,n.jsx)(t.h3,{id:"http-data-source",children:"HTTP Data Source"}),"\n",(0,n.jsx)(t.p,{children:"The HTTP data source is a powerful feature in Subgraph that enables data retrieval from external APIs. With this data source, you can easily connect your Subgraph GraphQL server to any REST API and map the API endpoints to\nyour GraphQL schema. This allows you to consolidate data from multiple sources into a single GraphQL endpoint. The HTTP data source provides various methods to retrieve data, such as GET, POST, PUT, PATCH, DELETE,\nand allows for custom headers to be set. This feature simplifies the process of fetching data from external sources and reduces the amount of boilerplate code needed."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[[service.data_sources]]\n[service.data_sources.HTTP]\nname = "chat_gpt"\nurl = "https://api.openai.com/"\ndefault_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]\n'})}),"\n",(0,n.jsx)(t.h3,{id:"object-support",children:"Object Support"}),"\n",(0,n.jsx)(t.p,{children:'In Subgraph, Scalars are the primitive data types such as String, Int, and Boolean. However, there are situations where we need to represent more complex types or groupings of primitive Scalars. This is where Object types come into play.\nAn Object "Scalar" is a custom type that can be defined in the configuration for the schema, representing a complex type that can be used as a type itself. For example, you might have an object scalar representing a comment, with\nits creator, content, and any other desired attributes.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[[service.entities.fields]]\nname = "usage"\nscalar = "Object"\nexclude_from_input = ["CreateOne"]\nrequired = true\nfields = [\n    { name = "prompt_tokens", scalar = "Int", required = true },\n    { name = "completion_tokens", scalar = "Int", required = true },\n    { name = "total_tokens", scalar = "Int", required = true },\n]\n'})}),"\n",(0,n.jsx)(t.h3,{id:"list-options",children:"List Options"}),"\n",(0,n.jsx)(t.p,{children:"Lists or Arrays are one of the most commonly used data types in programming languages. Similarly, in Subgraph, lists can be defined as an array of a certain data types. This allows for a collection of values\nto be returned as a single response. Lists can be defined in the configuration file by marking the field as a list (as shown below). Lists can also be nested inside objects, allowing for more complex data structures to be\nrepresented. Lists are useful when you need to return multiple instances of a certain data type, such as a list of products or a list of blog posts."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[[service.entities.fields]]\nname = "messages"\nscalar = "Object"\nrequired = true\nlist = true\nfields = [\n  {name = "role", scalar = "String", required = true},\n  {name = "content", scalar = "String", required = true}\n]\nexclude_from_output = true\n'})}),"\n",(0,n.jsx)(t.h3,{id:"new-features",children:"New Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"HTTP Data Source - Easily map a HTTP API into this GraphQL API."}),"\n",(0,n.jsx)(t.li,{children:"Update One Resolver - Update Mongo documents or send HTTP Put/Patch Request"}),"\n",(0,n.jsx)(t.li,{children:"Objects and Lists - Support for more complex data structures."}),"\n",(0,n.jsx)(t.li,{children:"Exclude From Input/Output - Allows fields to be shared or mapped exclusivly to resolvers input/output."}),"\n",(0,n.jsxs)(t.li,{children:["Environment Variable Support - Use environment variables directly inside your config with the ",(0,n.jsx)(t.code,{children:"$"})," suffix."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"the-chat-gpt-config",children:"The Chat GPT Config"}),"\n",(0,n.jsx)(t.p,{children:"Let's get down to the nitty gritty and hit the Chat GPT Completions endpoint with a Subgraph Service."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Download the latest ",(0,n.jsx)(t.a,{href:"https://www.github.com/the-devoyage/subgraph/releases",children:"release"})," of subgraph."]}),"\n",(0,n.jsx)(t.li,{children:"Get an Open AI API Key and set it as an environment variable."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"EXPORT OPENAI_KEY=paste_key_here\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Download the ",(0,n.jsx)(t.a,{href:"https://github.com/The-Devoyage/subgraph/blob/2209c412f3f4fd0664a7963edba1d9830ec8e50c/examples/chat-gpt.toml",children:"Chat GPT Service Config Example"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Start the API."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"./subgraph -c ./chat-gpt.toml -p 5012\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Check out the Sandbox and send some mutations!"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Open browser and navigate to the port that the service was started on. ",(0,n.jsx)(t.code,{children:"http://localhost:5012"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://res.cloudinary.com/the-devoyage/image/upload/v1680991221/Screenshot_from_2023-04-08_17-00-02_xidwxl.png",alt:"Sandbox"})}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,n.jsx)(t.p,{children:"There is still a lot of work in order to get to v0.1.0 - Error handling, SQL Compatibility, Various Scalar Support, GraphQL Subscriptions... just to name a few."}),"\n",(0,n.jsx)(t.p,{children:"So keep tuned, as v0.0.8 is under way."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.github.com/the-devoyage/subgraph",children:"@the-devoyage/subgraph"})," - Check out the repo, grab a ticket, let's build."]}),"\n",(0,n.jsx)(r.K,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7547:(e,t,a)=>{a.d(t,{K:()=>r});a(6540);var n=a(8774),s=a(4848);const r=()=>(0,s.jsx)("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",flexDirection:"column"},children:(0,s.jsxs)("div",{className:"avatar",children:[(0,s.jsx)("a",{className:"avatar__photo-link avatar__photo avatar__photo--lg",href:"https://medium.com/@thedevoyage",children:(0,s.jsx)("img",{alt:"Nick McLean Profile Image",src:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"})}),(0,s.jsxs)("div",{className:"avatar__intro",children:[(0,s.jsx)("div",{className:"avatar__name",children:"Nick McLean"}),(0,s.jsx)("small",{className:"avatar__subtitle padding-bottom--md",children:"Thanks for following along. If you would like to keep up to date make sure to check in frequently and/or follow us below!"}),(0,s.jsx)("div",{children:[{to:"https://medium.com/@thedevoyage",label:"Medium"},{to:"https://twitter.com/thedevoyage",label:"Twitter"},{to:"https://thedevoyage.slack.com",label:"Slack"},{to:"https://thedevoyage.gumroad.com/subscribe",label:"Newsletter"}].map((e=>(0,s.jsx)(n.A,{to:e.to,children:(0,s.jsx)("button",{className:"button button--primary margin-right--md",style:{color:"#fff",backgroundColor:"var(--ifm-color-dark-blue)"},children:e.label})},e.to)))})]})]})})},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);