"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?",slug:"subgraph-v0.0.5-api-vs-car",authors:["nick"],tags:["subgraph"],date:new Date("2023-02-26T00:00:00.000Z")},i=void 0,s={permalink:"/blog/subgraph-v0.0.5-api-vs-car",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.5/index.md",source:"@site/blog/subgraph-v0.0.5/index.md",title:"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?",description:"Hello all, and thanks for joining.",date:"2023-02-26T00:00:00.000Z",formattedDate:"February 26, 2023",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:5.375,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?",slug:"subgraph-v0.0.5-api-vs-car",authors:["nick"],tags:["subgraph"],date:"2023-02-26T00:00:00.000Z"},prevItem:{title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",permalink:"/blog/subgraph-v0.0.7-http-with-chat-gpt"},nextItem:{title:"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator",permalink:"/blog/subgraph-v0.0.4-versatile-typings"}},l={authorsImageUrls:[void 0]},u=[{value:"API vs Car, yes a Car",id:"api-vs-car-yes-a-car",level:2},{value:"The Jobs of an API",id:"the-jobs-of-an-api",level:3},{value:"Create - The Factory",id:"create---the-factory",level:4},{value:"Read - The Grocery Run",id:"read---the-grocery-run",level:4},{value:"Update - The Shop",id:"update---the-shop",level:4},{value:"Delete - The Dump",id:"delete---the-dump",level:4},{value:"Subgraph - A GraphQL API Generator",id:"subgraph---a-graphql-api-generator",level:2},{value:"Define to Run",id:"define-to-run",level:3},{value:"v0.0.5 - Subgraph",id:"v005---subgraph",level:3}],p={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hello all, and thanks for joining."),(0,r.kt)("p",null,"Today, we start a conversation about what an API does at a basic level while talking about the newest release of project ",(0,r.kt)("inlineCode",{parentName:"p"},"Subgraph"),", a GraphQL API Generator built with Rust."),(0,r.kt)("p",null,"Your next startup idea will most likely resolve around tech; It's 2023! So before you set out to hire that next developer, it is important that you might understand some basics about the empire you are creating."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1677423235/The-Devoyage/API_VS_CAR_keho8m.png",alt:"API Vs Car"})),(0,r.kt)("h2",{id:"api-vs-car-yes-a-car"},"API vs Car, yes a Car"),(0,r.kt)("p",null,"As you may already know, data is your most valuable asset."),(0,r.kt)("p",null,"I am not saying it would be fun, but a company can recover from a broken application. Loss of code, bugs, and crashes can (and will) happen. But nothing is worse than if you loose the data itself."),(0,r.kt)("p",null,"Realizing this, we can compare an API to a Car. Yes, that shiny mode of transportation that gets you everywhere. The core job of an API is to move data. "),(0,r.kt)("p",null,"Not unlike a car, as long as data can safely get from point A to point B, the API has done it's job. Meaning, that for most cases, any car will do. "),(0,r.kt)("h3",{id:"the-jobs-of-an-api"},"The Jobs of an API"),(0,r.kt)("p",null,"In most situations, your car is not that different from my car. In fact, they are almost identical aside from some minor bells and whistles."),(0,r.kt)("p",null,'At a high overview, the job of an API is pretty basic, move data! There are four basic reasons for data transportation and they boil down to the acronym, "CRUD". '),(0,r.kt)("p",null,'"CRUD" stands for Create -- Read -- Update -- Delete. The basic responsibilities of an API.'),(0,r.kt)("h4",{id:"create---the-factory"},"Create - The Factory"),(0,r.kt)("p",null,"Hop in your car, and let's take a trip down to the industrial district. Grab some supplies because we are going to create something new at the factory."),(0,r.kt)("p",null,"Just like a car might transport raw materials to the factory in order to create something new, we can send data from our shiny new website to the database (through the API) to create a new asset in our database."),(0,r.kt)("h4",{id:"read---the-grocery-run"},"Read - The Grocery Run"),(0,r.kt)("p",null,"Grab your reusable grocery bags and shopping list, it's time to do the weekly food run."),(0,r.kt)("p",null,"Your users will expect to be able to view data from the database. When your website needs to get some data, you will request that data through the API. It's just like that weekly grocery run that keeps us all fed and happy."),(0,r.kt)("h4",{id:"update---the-shop"},"Update - The Shop"),(0,r.kt)("p",null,"My new bike has broken. Load it into the trunk and take it to the shop for me!"),(0,r.kt)("p",null,"It's not enough that you can create or read items from the database. You are going to have to update these items, just like we fixed my bike by adding a nice new wicker basket to the front."),(0,r.kt)("p",null,"The API is going to be responsible to take those update instructions all the way from your website to the database. That way, you can edit those assets you have created."),(0,r.kt)("h4",{id:"delete---the-dump"},"Delete - The Dump"),(0,r.kt)("p",null,"Each spring, my family does a clean out -- Spring Cleaning. We load things we don't need into our vehicle and take them on down to the dump (or donation facility)!"),(0,r.kt)("p",null,"Your website will need to do something very similar. It will send some data through the API, which instructs the database to delete some items."),(0,r.kt)("h2",{id:"subgraph---a-graphql-api-generator"},"Subgraph - A GraphQL API Generator"),(0,r.kt)("p",null,"The job of an API is to transfer data. A shiny new car is nice, but a clunker can also get you from point A to point B. An API is a vehicle that can be built, updated, or replaced as needed!"),(0,r.kt)("p",null,"Many times, we sit down with our development team to build this vehicle (API) part by part, piece by piece, from the ground up. Only to realize we are building the same thing over and over, solving the same issues the same way again and again."),(0,r.kt)("p",null,"Since these basic tasks of an API are mainly universal, an API Generator such as Project ",(0,r.kt)("inlineCode",{parentName:"p"},"Subgraph")," might be a solution that helps you to build your next API. "),(0,r.kt)("p",null,"Currently, the project is a proof of concept. Define a simple configuration to run the API. Instant data transportation in a classy, speedy, and modern vehicle."),(0,r.kt)("h3",{id:"define-to-run"},"Define to Run"),(0,r.kt)("p",null,"The goal is simple -- Since APIs are generally similar, we should be able to generate an API based on the data we currently have or want to have in our database."),(0,r.kt)("p",null,"We define a simple configuration, and the generator handles the creation of the four main responsibilities of an API - Create, Read, Update, Delete. "),(0,r.kt)("p",null,"Let's take a look at the ~20 lines of code needed to start your next API."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define The Config")),(0,r.kt)("p",null,"Name your service, connect your database, and define your data. Simple."),(0,r.kt)("p",null,"Below, my API will be able to Create, Read, Update, and Delete ",(0,r.kt)("inlineCode",{parentName:"p"},"Restaurants"),". Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Restaurant")," has two data points including a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"rating"),". It's pretty simple but with this config I'll be able to perform the four responsibilities of an API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Name Your Service\n[service]\nservice_name = "Restaurants"\n\n# Connect your Mongo DB\n[service.database_config]\nmongo_uri = "mongodb://user:pass@127.0.0.1:27017/db"\nmongo_db = "myDb"\n\n# Describe Your Data\n[[service.entities]]\nname = "Restaurant"\n\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n\n[[service.entities.fields]]\nname = "rating"\nscalar = "Int"\nrequired = true \n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Starting the API ")),(0,r.kt)("p",null,"Spinning this bad boy up is a One Line Command for your Developers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subgraph --config ./my-config.toml --port 5000\n")),(0,r.kt)("h3",{id:"v005---subgraph"},"v0.0.5 - Subgraph"),(0,r.kt)("p",null,"Thanks for checking out this crazy simple description of an API and the Subgraph API Generator!"),(0,r.kt)("p",null,"Version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.0.5")," is officially released and while it is still a proof of concept, it provides some new features that take us one step closer to an official release."),(0,r.kt)("p",null,"In this new version, we are able to define configuration to block or allow access by domain! In tech terms, we can define some simple CORS Configuration. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify Allowed HTTP Methods"),(0,r.kt)("li",{parentName:"ul"},"Declare Allowed Origins"),(0,r.kt)("li",{parentName:"ul"},"Allow Specific Headers")),(0,r.kt)("p",null,"Aside from these tech terms, it allows you to lock your server down from a security prospective. It's a small step forward for project ",(0,r.kt)("inlineCode",{parentName:"p"},"Subgraph")," and I am happy to share the progress with you."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you are interested in ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/the-devoyage/subgraph"},"Checking Out The Code"),", it's open source! Download it to try it, view it, or submit your contributions as the project grows. "),(0,r.kt)("p",null,"Thanks All!"))}h.isMDXComponent=!0}}]);