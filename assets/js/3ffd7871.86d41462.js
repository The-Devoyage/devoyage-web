"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7939],{3074:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(4848),s=t(8453),r=t(7547);const i={title:"Subgraph v0.0.8 - Instant SQL API with Subgraph",slug:"subgraph-v0.0.8-instant-sql-api",authors:["nick"],tags:["subgraph"],date:new Date("2023-05-01T00:00:00.000Z"),description:"Create a nearly instant API for your SQL Database with Subgraph v0.0.8.",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1683081810/Subgraph_SQL_kteswo.png",keywords:["graphql","subgraph","api","api generator"]},o=void 0,l={permalink:"/blog/subgraph-v0.0.8-instant-sql-api",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.8/index.md",source:"@site/blog/subgraph-v0.0.8/index.md",title:"Subgraph v0.0.8 - Instant SQL API with Subgraph",description:"Create a nearly instant API for your SQL Database with Subgraph v0.0.8.",date:"2023-05-01T00:00:00.000Z",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"}],readingTime:5.615,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Subgraph v0.0.8 - Instant SQL API with Subgraph",slug:"subgraph-v0.0.8-instant-sql-api",authors:["nick"],tags:["subgraph"],date:"2023-05-01T00:00:00.000Z",description:"Create a nearly instant API for your SQL Database with Subgraph v0.0.8.",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1683081810/Subgraph_SQL_kteswo.png",keywords:["graphql","subgraph","api","api generator"]},unlisted:!1,prevItem:{title:'Three Fancy Bash Directory Jumpers to "Avoid The Path"',permalink:"/blog/fancy-bash-directory-jumpers"},nextItem:{title:"Subgraph v0.0.7 - Instant Chat GPT GraphQL API",permalink:"/blog/subgraph-v0.0.7-http-with-chat-gpt"}},d={authorsImageUrls:[void 0]},c=[{value:"Build a Quick API for your SQL Database",id:"build-a-quick-api-for-your-sql-database",level:2},{value:"1. Create the Database",id:"1-create-the-database",level:3},{value:"2. Write the Subgraph Config",id:"2-write-the-subgraph-config",level:3},{value:"3. Start the API",id:"3-start-the-api",level:3},{value:"4. Query the API",id:"4-query-the-api",level:3},{value:"Subgraph v0.0.8",id:"subgraph-v008",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Hello All, Thanks for Joining!"}),"\n",(0,n.jsx)(a.p,{children:"Today we are creating instant APIs around SQL Databases of various dialects with Subgraph, a proof\nof concept tool that is made to assist speedy API development."}),"\n",(0,n.jsx)(a.p,{children:"All it takes to use subgraph is a config file that informs the service where your data is and what your data looks like. Define the\nconfig and start the API to create an instant API around your database."}),"\n",(0,n.jsx)(a.p,{children:"With the latest release, v0.0.8, we are taking a look at the newly added support for a few dialects of SQL. In addition to\nMongo and HTTP Data Sources, Subgraph now supports Postgres, MySQL, and SqLite. Let's take a minute and spin up a new\nAPI from scratch!"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://res.cloudinary.com/the-devoyage/image/upload/v1683081810/Subgraph_SQL_kteswo.png",alt:"Subgraph SQL"})}),"\n",(0,n.jsxs)(a.p,{children:["Check out the ",(0,n.jsx)(a.a,{href:"https://www.github.com/the-devoyage/subgrpah",children:"repo"}),"!"]}),"\n",(0,n.jsx)(a.h2,{id:"build-a-quick-api-for-your-sql-database",children:"Build a Quick API for your SQL Database"}),"\n",(0,n.jsx)(a.p,{children:"The goal with subgraph is pretty simple - Shorten the time it takes to plan, develop, and deploy an API. With subgraph,\nwe do not need to write routes, controllers, or resolvers from scratch. We do not need to deal with boiler plate, database\nconnections, or even validation."}),"\n",(0,n.jsx)(a.p,{children:"All we need to do is tell the Subgraph service where our data is and what it looks like. Subgraph takes care of the rest by\nconnecting to the database and creating the routes/resolvers. With this, you now can spend your time on the parts of\nyour business that might make a larger impact for your clients and sales."}),"\n",(0,n.jsx)(a.p,{children:"Let's see an example!"}),"\n",(0,n.jsx)(a.h3,{id:"1-create-the-database",children:"1. Create the Database"}),"\n",(0,n.jsx)(a.p,{children:"You own the database. You get to choose what type of database is best suited for your project. As mentioned above,\nSubgraph supports Mongo, Postgres, MySQL, and SqLite databases, making it easy for you to connect to your data."}),"\n",(0,n.jsx)(a.p,{children:"In this example we will create a SqLite DB and use Subgraph to generate an API around a few tables. Keep in mind, that connecting Subgraph\nto MySQL, Postgres, or even Mongo, is a very similar process."}),"\n",(0,n.jsx)(a.p,{children:"First, make sure you have SqLite installed on your system. The following guide is going to assume you are on a Linux machine."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo apt install sqlite3\n"})}),"\n",(0,n.jsx)(a.p,{children:"Creating a SqLite Database is as easy as creating a file in a folder. Let's create a database around Coffees!"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"touch caffeine.db\n"})}),"\n",(0,n.jsx)(a.p,{children:"Now, let's create a couple tables."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE coffee (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT NOT NULL,\n  price INTEGER NOT NULL,\n  available BOOLEAN NOT NULL\n);\n\nCREATE TABLE espresso (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT NOT NULL,\n  price INTEGER NOT NULL,\n  available BOOLEAN NOT NULL\n);\n"})}),"\n",(0,n.jsx)(a.p,{children:"This is all we will need to do to get started. We can now move on to Subgraph specific setup."}),"\n",(0,n.jsx)(a.h3,{id:"2-write-the-subgraph-config",children:"2. Write the Subgraph Config"}),"\n",(0,n.jsxs)(a.p,{children:["The config is all about your data. It tells Subgraph where to find your data and what it looks like. Writing the config file is\neasy, as it uses ",(0,n.jsx)(a.a,{href:"https://toml.io/en/",children:"TOML or Tom's Obvious Minimal Language"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Let's start by telling Subgraph where the data is. To do this, add a ",(0,n.jsx)(a.code,{children:"Data Source"})," to the configuration. You can add\nmultiple data sources, mix and match data sources, or just keep it basic with a single data source."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-toml",children:'[service]\nservice_name = "espresso"\n\n[[service.data_sources]]\n[service.data_sources.SQL]\nname = "caffeine_data_source" # Name the data source for reference later.\nuri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"\ndialect = "SQLITE"\n'})}),"\n",(0,n.jsx)(a.p,{children:"Now that Subgraph knows where the data is, we can inform subgraph what our data looks like. Start by defining an entity for each table. An\nEntity is a table in the database (collection for Mongo)."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-toml",children:'[[service.entities]]\nname = "Espresso"\n'})}),"\n",(0,n.jsxs)(a.p,{children:["In this case, the ",(0,n.jsx)(a.code,{children:"Espresso"})," table has four columns. Let's tell Subgraph."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-toml",children:'[[service.entities.fields]]\nname = "id"\nscalar = "Int"\nrequired = true\nexclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] # Don\'t allow uses to create or update the ID prop.\n\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n\n[[service.entities.fields]]\nname = "price"\nscalar = "Int"\nrequired = true\n\n[[service.entities.fields]]\nname = "available"\nscalar = "Boolean"\nrequired = true\n'})}),"\n",(0,n.jsx)(a.p,{children:"That's it! Let's do the same for the coffee table and take a look at the finished config."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-toml",children:'# The Finished Configuration:\n[service]\nservice_name = "espresso"\n\n[[service.data_sources]]\n[service.data_sources.SQL]\nname = "caffeine_data_source"\nuri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"\ndialect = "SQLITE"\n\n[[service.entities]]\nname = "Coffee"\n[[service.entities.fields]]\nname = "id"\nscalar= "Int"\nrequired = true\nexclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n[[service.entities.fields]]\nname = "price"\nscalar = "Int"\nrequired = true\n[[service.entities.fields]]\nname = "available"\nscalar = "Boolean"\nrequired = true\n\n[[service.entities]]\nname = "Espresso"\n[[service.entities.fields]]\nname = "id"\nscalar = "Int"\nrequired = true\nexclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n[[service.entities.fields]]\nname = "price"\nscalar = "Int"\nrequired = true\n[[service.entities.fields]]\nname = "available"\nscalar = "Boolean"\nrequired = true\n'})}),"\n",(0,n.jsx)(a.h3,{id:"3-start-the-api",children:"3. Start the API"}),"\n",(0,n.jsx)(a.p,{children:"In the previous step, we defined a Subgraph Configuration that tells the service about the data. The hard part is done in\nabout 50 lines of code. Now, let's start the service."}),"\n",(0,n.jsx)(a.p,{children:"First, make sure you downloaded the latest release (v0.0.8). The release is a binary, making it easy to run on a linux system.\nJust make sure to give it execution permissions."}),"\n",(0,n.jsxs)(a.p,{children:["Checkout the ",(0,n.jsx)(a.a,{href:"https://github.com/The-Devoyage/subgraph/releases",children:"releases"})," page on GitHub to download the binary."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"chmod +x subgraph\n"})}),"\n",(0,n.jsx)(a.p,{children:"Then, run subgraph and point it to your config file."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"./subgraph --config ./caffeine.toml --port 3030\n"})}),"\n",(0,n.jsx)(a.p,{children:"And that's it! Your new API is now running at the port specified. We can load up the playground and send some queries."}),"\n",(0,n.jsx)(a.h3,{id:"4-query-the-api",children:"4. Query the API"}),"\n",(0,n.jsx)(a.p,{children:"Load the playground at the specified port. The playground will let you construct and execute queries against your new API."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"# Navigate In Browser:\nhttp://localhost:3030\n"})}),"\n",(0,n.jsx)(a.p,{children:"Once loaded, drop in a mutation to insert a new espresso into the espresso table."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:'mutation createEspresso($input: create_espresso_input!) {\n  create_espresso(create_espresso_input: $input) {\n    id\n    name\n    price\n    available\n  }\n}\n\n{\n  "input": {\n    "name": "Katz Coffee",\n    "price": 15,\n    "available": true\n  }\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"Subgraph creates resolvers for each entity, making it easy for you to query the database. Currently, Subgraph supports\nFind One, Find Many, Update One, Update Many, and Create One resolvers. Delete operations coming soon!"}),"\n",(0,n.jsx)(a.h2,{id:"subgraph-v008",children:"Subgraph v0.0.8"}),"\n",(0,n.jsx)(a.p,{children:"Thanks for checking in on the progress. There is a lot of work to do in order to get to v1, a production ready environment!"}),"\n",(0,n.jsxs)(a.p,{children:["If you are a curios rusteacean and want to jump in, please feel free to check out the ",(0,n.jsx)(a.a,{href:"https://www.github.com/the-devoyage/subgraph",children:"source code"}),",\nand share your ideas about the future of the project."]}),"\n",(0,n.jsx)(a.p,{children:"Upcoming projects include Delete Operations, Authorization Support, Testing Integrations, Federation 2 Support, and Error Handling! Thanks\nfor keeping tuned and following along."}),"\n",(0,n.jsx)(r.K,{})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7547:(e,a,t)=>{t.d(a,{K:()=>r});t(6540);var n=t(8774),s=t(4848);const r=()=>(0,s.jsx)("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",flexDirection:"column"},children:(0,s.jsxs)("div",{className:"avatar",children:[(0,s.jsx)("a",{className:"avatar__photo-link avatar__photo avatar__photo--lg",href:"https://medium.com/@thedevoyage",children:(0,s.jsx)("img",{alt:"Nick McLean Profile Image",src:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"})}),(0,s.jsxs)("div",{className:"avatar__intro",children:[(0,s.jsx)("div",{className:"avatar__name",children:"Nick McLean"}),(0,s.jsx)("small",{className:"avatar__subtitle padding-bottom--md",children:"Thanks for following along. If you would like to keep up to date make sure to check in frequently and/or follow us below!"}),(0,s.jsx)("div",{children:[{to:"https://medium.com/@thedevoyage",label:"Medium"},{to:"https://twitter.com/thedevoyage",label:"Twitter"},{to:"https://thedevoyage.slack.com",label:"Slack"},{to:"https://thedevoyage.gumroad.com/subscribe",label:"Newsletter"}].map((e=>(0,s.jsx)(n.A,{to:e.to,children:(0,s.jsx)("button",{className:"button button--primary margin-right--md",style:{color:"#fff",backgroundColor:"var(--ifm-color-dark-blue)"},children:e.label})},e.to)))})]})]})})},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(6540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);