"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7110],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8249:(e,t,a)=>{a.d(t,{U:()=>o});var n=a(7294),r=a(9960);const o=()=>n.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",flexDirection:"column"}},n.createElement("div",{className:"avatar"},n.createElement("a",{className:"avatar__photo-link avatar__photo avatar__photo--lg",href:"https://medium.com/@thedevoyage"},n.createElement("img",{alt:"Nick McLean Profile Image",src:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"})),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},"Nick McLean"),n.createElement("small",{className:"avatar__subtitle padding-bottom--md"},"Thanks for following along. If you would like to keep up to date make sure to check in frequently and/or follow us below!"),n.createElement("div",null,[{to:"https://medium.com/@thedevoyage",label:"Medium"},{to:"https://twitter.com/thedevoyage",label:"Twitter"},{to:"https://thedevoyage.slack.com",label:"Slack"},{to:"https://thedevoyage.gumroad.com/subscribe",label:"Newsletter"}].map((e=>n.createElement(r.Z,{to:e.to,key:e.to},n.createElement("button",{className:"button button--primary margin-right--md",style:{color:"#fff",backgroundColor:"var(--ifm-color-dark-blue)"}},e.label))))))))},8126:(e,t,a)=>{a.d(t,{W:()=>o});var n=a(7294),r=a(9960);const o=e=>{let{product:t,to:a,message:o,btnTxt:i}=e;return n.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o||n.createElement("span",null,"Want to support `@the-devoyage/",t,"`?"),n.createElement(r.Z,{to:a},n.createElement("button",{className:"button button--primary"},i||"Purchase MIT License")))}},6899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=(a(8249),a(8126));const i={title:"Subgraph v0.0.9 - Instant GraphQL API - Joined Types and Guards",slug:"subgraph-v0.0.9-joins-and-guards",authors:["nick"],tags:["subgraph"],date:new Date("2023-06-18T00:00:00.000Z"),description:"Joining types and guards now available for Subgraph, an instant dynamic API.",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png",keywords:["graphql","subgraph","api","api generator"]},s=void 0,l={permalink:"/blog/subgraph-v0.0.9-joins-and-guards",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.9/index.md",source:"@site/blog/subgraph-v0.0.9/index.md",title:"Subgraph v0.0.9 - Instant GraphQL API - Joined Types and Guards",description:"Joining types and guards now available for Subgraph, an instant dynamic API.",date:"2023-06-18T00:00:00.000Z",formattedDate:"June 18, 2023",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:5.645,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Subgraph v0.0.9 - Instant GraphQL API - Joined Types and Guards",slug:"subgraph-v0.0.9-joins-and-guards",authors:["nick"],tags:["subgraph"],date:"2023-06-18T00:00:00.000Z",description:"Joining types and guards now available for Subgraph, an instant dynamic API.",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png",keywords:["graphql","subgraph","api","api generator"]},prevItem:{title:"Subgraph v0.0.13 - Instant API Generation At Your Fingertips with Subgraph",permalink:"/blog/subgraph-v0.0.13-instant-api-at-your-fingertips"},nextItem:{title:'Three Fancy Bash Directory Jumpers to "Avoid The Path"',permalink:"/blog/fancy-bash-directory-jumpers"}},u={authorsImageUrls:[void 0]},p=[{value:"Guards, Joins, and the New Stuff",id:"guards-joins-and-the-new-stuff",level:2},{value:"Guards (alpha release)",id:"guards-alpha-release",level:3},{value:"Joins",id:"joins",level:3},{value:"Spin It Up",id:"spin-it-up",level:2},{value:"The Data Source",id:"the-data-source",level:3},{value:"Start the API",id:"start-the-api",level:3},{value:"Example Configurations",id:"example-configurations",level:3},{value:"Wrapping Up - What&#39;s Next?",id:"wrapping-up---whats-next",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hello All! Thanks for Joining!"),(0,r.kt)("p",null,"Today, I am super excited to share the most recent update for Subgraph, an application written in Rust that creates an Instant GraphQL API."),(0,r.kt)("p",null,"Here is the low down: Provide a simple configuration, spin it up, and send those network requests. Your API is running in minutes not\nmonths saving you time and money."),(0,r.kt)("p",null,"This dynamic application gets fed a configuration file to describe your data in order to instantly spin up a usable GraphQL Server. Version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.0.9"),"\ntakes a few huge steps to make your API even more powerful with Joins and Guards."),(0,r.kt)("p",null,"Let's take a look at the new features and write a quick API in order to demonstrate how Subgraph can benefit your next project."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png",alt:"Subgraph SQL"})),(0,r.kt)("h2",{id:"guards-joins-and-the-new-stuff"},"Guards, Joins, and the New Stuff"),(0,r.kt)("p",null,"Version v0.0.9 introduces a diverse range of new capabilities, improvements, and fixes. Among these are two exciting features called Guards and Joins, designed\nto empower you in building a robust API for any upcoming project."),(0,r.kt)("h3",{id:"guards-alpha-release"},"Guards (alpha release)"),(0,r.kt)("p",null,"Protecting your API is a must and Subgraph aims to make it easy to guard your data from a variety of prospectives. The first version of\nguards allows you to block access at four different points in the life cycle of a request by writing simple boolean evaluations. No complex\nlogic, framework, or code needed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Service Guards - Stop access to the entire server."),(0,r.kt)("li",{parentName:"ol"},"Resolver Guards - Prevent access on a per operation basis."),(0,r.kt)("li",{parentName:"ol"},"Entity Guards - Protect specific entities of your service."),(0,r.kt)("li",{parentName:"ol"},"Field Guards - Scope access down to a field of an entity.")),(0,r.kt)("p",null,"As mentioned above, guards are boolean evaluations that are simple to write. Evaluate a truthy condition and the access to the server is blocked with\ncustom error messages. Let's take a look at defining a service with a simple guard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[service]\nservice_name = "coffee_shops"\n\n[[service.guards]]\nname = "role"\nif_expr = "headers(\\"role\\") != \\"Admin\\"" # When true, we block access to the entire server.\nthen_msg = "Invalid Role - You may not request from this service."\n')),(0,r.kt)("p",null,"As you can see above with the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers()")," function, there are built-in methods to access datapoints that are useful for validating access. Currently,\nyou can access ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," values as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," (the GraphQL input itself) values. The guards feature is an alpha release with plans to\ninclude other built-in methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," values! Keep tuned as these are developed and rolled out."),(0,r.kt)("h3",{id:"joins"},"Joins"),(0,r.kt)("p",null,"Maybe one of the more exciting features for ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.0.9"),", joins allow you to connect entities together quickly and easily bringing the power of GraphQL\ninto the simplicity of the Subgraph config."),(0,r.kt)("p",null,"First, define a few entities in the config file. Our comment entity below will have a property called ",(0,r.kt)("inlineCode",{parentName:"p"},"created_by")," which will\njoin to a user type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[service]\nservice_name = "my_subgraph"\n\n[[service.entities]]\nname = "User"\nfields = [\n  { name = "_id", scalar = "ObjectID", required = true },\n  { name = "name", scalar = "String", required = true },\n]\n\n[[service.entities]]\nname = "Comment"\nfields = [\n  { name = "_id", scalar = "ObjectID", required = true },\n  { name = "content", scalar = "String", required = true },\n  { name = "created_by", scalar = "ObjectID", required = true }\n]\n')),(0,r.kt)("p",null,"Now we just need to tell Subgraph to join the ",(0,r.kt)("inlineCode",{parentName:"p"},"created_by")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Comment")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),". Simply update the field definition and Subgraph\nhandles the rest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'{ name = "created_by", scalar = "ObjectID", required = true, as_type = "User", join_on = "_id" }\n')),(0,r.kt)("p",null,"Send the network request and you now are able to instantly grab the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," that created each comment."),(0,r.kt)("p",null,"Example Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": "54321",\n  "content": "Joining data is simple!",\n  "created_by": {\n    "_id": "12345",\n    "name": "Bongo"\n  }\n}\n')),(0,r.kt)("p",null,"Joins can be applied to any entity in a Subgraph from any data source. This means you can join SqLite to Mongo or Postgres to an\nexternal HTTP API. Associating entities simple and easy without the headache is the idea!"),(0,r.kt)("h2",{id:"spin-it-up"},"Spin It Up"),(0,r.kt)("p",null,"Believe it or not, the above configuration is just about complete."),(0,r.kt)("p",null,"Subgraph only needs to know two things at minimum\nincluding where your data lives and what your data looks like. The entities above describe what the data looks like, so let's add\nthe configuration to inform Subgraph of where your data lives."),(0,r.kt)("h3",{id:"the-data-source"},"The Data Source"),(0,r.kt)("p",null,"Subgraph supports five different data sources, meaning you can pull in data from five different types of data interfaces. It supports MongoDB, MySQL,\nPostgres, SQLite, and HTTP Data sources (external third party APIs). Today we will use a Mongo Database."),(0,r.kt)("p",null,"Add the Data Source to the configuration and Subgraph will automatically connect each entity to the first available configuration. Of course,\nif you have multiple data sources, you can associate each entity with the appropriate data source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.data_sources]]\n[service.data_sources.Mongo]\nname = "my_data_source"\nuri = "mongodb://user:password@127.0.0.1:27017/db_name"\ndb = "db_name"\n')),(0,r.kt)("h3",{id:"start-the-api"},"Start the API"),(0,r.kt)("p",null,"Once added, run the command to start your API. To view the Sandbox, use your browser to navigate to the port that you used to start the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subgraph -c ./my_config.toml -p 5000\n")),(0,r.kt)("p",null,"Sandbox would be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000")," in the browser."),(0,r.kt)("p",null,"Feel free to define the port in your config file to save time!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[service]\nservice_name = "my_subgraph"\nport = 5000\n')),(0,r.kt)("h3",{id:"example-configurations"},"Example Configurations"),(0,r.kt)("p",null,"Like many Rust projects out there, Subgraph provides a folder of example configurations that you can use as reference to write your own!"),(0,r.kt)("p",null,"Check out these ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/The-Devoyage/subgraph/tree/master/examples"},"Example Configurations"),". The configuration file is currently required\nto be written in TOML or Tom's Obvious Minimal Language. Feel free to reference the ",(0,r.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"TOML Documentation")," if needed."),(0,r.kt)("h2",{id:"wrapping-up---whats-next"},"Wrapping Up - What's Next?"),(0,r.kt)("p",null,"Thanks for taking a moment to check out the new features! If you are interested in spinning up your own Subgraph using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@the-devoyage/subgraph"),"\nproject, take a look at the documentation found in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"Repository"),". If you find this project\nintriguing, consider starring the repository to express your support."),(0,r.kt)("p",null,"The next version is already under way with an extremely important update -- Integration Testing will allow us to increase quality and consistency between releases\nallowing you to depend Subgraph on the next level. Up on deck includes delete resolvers and improvements to guards/authorization/authentication!"),(0,r.kt)("p",null,"Lastly, if you are interested in the project, we have officially launched a support option on Gumroad! This provides an excellent opportunity for you to contribute\nto the progression towards Version 1. We offer various levels of support, ranging from quick and easy donations to full-fledged feature requests."),(0,r.kt)(o.W,{product:"subgraph",to:"https://thedevoyage.gumroad.com/l/subgraph",btnTxt:"Support on Gumroad",mdxType:"LicenseAlert"}),(0,r.kt)("p",null,"Again -- Thanks for taking a few minutes to check out the new features and following along!"))}d.isMDXComponent=!0}}]);