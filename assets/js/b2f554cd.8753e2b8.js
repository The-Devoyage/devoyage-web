"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"subgraph-v0.0.7-instant-sql-api","metadata":{"permalink":"/blog/subgraph-v0.0.7-instant-sql-api","editUrl":"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.8/index.md","source":"@site/blog/subgraph-v0.0.8/index.md","title":"Subgraph v0.0.8 - Instant SQL API with Subgraph","description":"Hello all, thanks for joining!","date":"2023-05-01T00:00:00.000Z","formattedDate":"May 1, 2023","tags":[{"label":"subgraph","permalink":"/blog/tags/subgraph"}],"readingTime":5.56,"hasTruncateMarker":true,"authors":[{"name":"Nick McLean","title":"Maintainer of The Devoyage","url":"https://medium.com/@thedevoyage","imageURL":"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg","key":"nick"}],"frontMatter":{"title":"Subgraph v0.0.8 - Instant SQL API with Subgraph","slug":"subgraph-v0.0.7-instant-sql-api","authors":["nick"],"tags":["subgraph"],"date":"2023-05-01T00:00:00.000Z"},"nextItem":{"title":"Subgraph v0.0.7 - Instant Chat GPT GraphQL API","permalink":"/blog/subgraph-v0.0.7-http-with-chat-gpt"}},"content":"Hello all, thanks for joining!\\n\\nToday we are creating instant APIs around SQL Databases of various dialects with Subgraph, a proof \\nof concept tool that is made to assist speedy API development.\\n\\nAll it takes to use subgraph is a config file that informs the service where your data is and what your data looks like. Define the\\nconfig and start the API to create an instant API around your database.\\n\\nWith the latest release, v0.0.8, we are taking a look at the newly added support for a few dialects of SQL. In addition to\\nMongo and HTTP Data Sources, Subgraph now supports Postgres, MySQL, and SqLite. Let\'s take a minute and spin up a new\\nAPI from scratch!\\n\\n![Subgraph SQL](https://res.cloudinary.com/the-devoyage/image/upload/v1683081810/Subgraph_SQL_kteswo.png)\\n\\n\x3c!--truncate--\x3e\\n\\n## Build a quick API for your SQL Database\\n\\nThe goal with subgraph is pretty simple - Shorten the time it takes to plan, develop, and deploy an API. With subgraph, \\nwe do not need to write routes, controllers, or resolvers from scratch. We do not need to deal with boiler plate, database\\nconnections, or even validation.\\n\\nAll we need to do is tell the Subgraph service where or data is and what it looks like. Subgraph takes care of the rest by\\nconnecting to the database and creating the routes/resolvers. With this, you now can spend your time on the parts of \\nyour business that might make a larger impact for your clients and sales.\\n\\nLet\'s see an example!\\n\\n### 1. Create the Database\\n\\nYou own the database. You get to choose what type of database is best suited for your project. As mentioned above, \\nSubgraph supports Mongo, Postgres, MySQL, and SqLite databases, making it easy for you to connect to your data.\\n\\nIn this example we will create a SqLite DB and use Subgraph to generate an API around a few tables. Keep in mind, that connecting Subgrpah\\nto MySQL, Postgres, or even Mongo, is a very similar process! \\n\\nFirst, make sure you have SqLite installed on your system. The following guide is going to assume you are on a Linux machine.\\n\\n```bash\\nsudo apt install sqlite3\\n```\\n\\nCreating a SqLite Database is as easy as creating a file in a folder. Let\'s create a database around Coffees!\\n\\n```\\ntouch caffeine.db\\n```\\n\\nNow, let\'s create a couple tables.\\n\\n```sql\\nCREATE TABLE coffee (\\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\\n  name TEXT NOT NULL,\\n  price INTEGER NOT NULL,\\n  available BOOLEAN NOT NULL\\n);\\n\\nCREATE TABLE espresso (\\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\\n  name TEXT NOT NULL,\\n  price INTEGER NOT NULL,\\n  available BOOLEAN NOT NULL\\n);\\n```\\n\\nThis is all we will need to do to get started. We can now move on to Subgraph specific setup.\\n\\n### 2. Write the Subgraph Config\\n\\nThe config is all about your data. It tells Subgraph where to find your data and what it looks like. Writing the config file is\\neasy, as it uses [TOML or Tom\'s Obvious Minimal Language](https://toml.io/en/).\\n\\nLet\'s start by telling Subgraph where the data is. To do this, add a `Data Source` to the configuration. You can add\\nmultiple data sources, mix and match data sources, or just keep it basic with a single data source.\\n\\n```toml\\n[service]\\nservice_name = \\"espresso\\"\\n\\n[[service.data_sources]]\\n[service.data_sources.SQL]\\nname = \\"caffeine_data_source\\" # Name the data source for reference later.\\nuri = \\"sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db\\"\\ndialect = \\"SQLITE\\"\\n```\\n\\nNow that Subgraph knows where the data is, we can inform subgraph what our data looks like. Start by defining an entity for each table. An\\nEntity is a table in the database (collection for Mongo).\\n\\n```toml\\n[[service.entities]]\\nname = \\"Espresso\\"\\n```\\n\\nIn this case, the `Espresso` table has four columns. Let\'s tell Subgraph.\\n\\n```toml\\n[[service.entities.fields]]\\nname = \\"id\\"\\nscalar = \\"Int\\"\\nrequired = true\\nexclude_from_input = [\\"CreateOne\\", \\"UpdateOne\\", \\"UpdateMany\\"] # Don\'t allow uses to create or update the ID prop.\\n\\n[[service.entities.fields]]\\nname = \\"name\\"\\nscalar = \\"String\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"price\\"\\nscalar = \\"Int\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"available\\"\\nscalar = \\"Boolean\\"\\nrequired = true\\n```\\n\\nThat\'s it! Let\'s do the same for the coffee table and take a look at the finished config!\\n\\n```toml\\n# The Finished Configuration:\\n[service]\\nservice_name = \\"espresso\\"\\n\\n[[service.data_sources]]\\n[service.data_sources.SQL]\\nname = \\"caffeine_data_source\\"\\nuri = \\"sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db\\"\\ndialect = \\"SQLITE\\"\\n\\n[[service.entities]]\\nname = \\"Coffee\\"\\n[[service.entities.fields]]\\nname = \\"id\\"\\nscalar= \\"Int\\"\\nrequired = true\\nexclude_from_input = [\\"CreateOne\\", \\"UpdateOne\\", \\"UpdateMany\\"] \\n[[service.entities.fields]]\\nname = \\"name\\"\\nscalar = \\"String\\"\\nrequired = true\\n[[service.entities.fields]]\\nname = \\"price\\"\\nscalar = \\"Int\\"\\nrequired = true\\n[[service.entities.fields]]\\nname = \\"available\\"\\nscalar = \\"Boolean\\"\\nrequired = true\\n\\n[[service.entities]]\\nname = \\"Espresso\\"\\n[[service.entities.fields]]\\nname = \\"id\\"\\nscalar = \\"Int\\"\\nrequired = true\\nexclude_from_input = [\\"CreateOne\\", \\"UpdateOne\\", \\"UpdateMany\\"] \\n[[service.entities.fields]]\\nname = \\"name\\"\\nscalar = \\"String\\"\\nrequired = true\\n[[service.entities.fields]]\\nname = \\"price\\"\\nscalar = \\"Int\\"\\nrequired = true\\n[[service.entities.fields]]\\nname = \\"available\\"\\nscalar = \\"Boolean\\"\\nrequired = true\\n```\\n\\n### 3. Start the API\\n\\nIn the previous step, we defined a Subgraph Configuration that tells the service about the data. The hard part is done in\\nabout 50 lines of code. Now, let\'s start the service.\\n\\nFirst, make sure you downloaded the latest release (v0.0.8). The release is a binary, making it easy to run on a linux system.\\nJust make sure to give it execution permissions.\\n\\nCheckout the [releases](https://github.com/The-Devoyage/subgraph/releases) page on GitHub to download the binary.\\n\\n```bash\\nchmod +x subgraph\\n```\\n\\nThen, run subgraph and point it to your config file.\\n\\n```bash\\n./subgraph --config ./caffeine.toml --port 3030\\n```\\n\\nAnd that\'s it! Your new API is now running at the port specified. We can load up the playground and send some queries.\\n\\n### 4. Query the API\\n\\nLoad the playground at the specified port. The playground will let you construct and execute queries againsts your new API.\\n\\n```\\n# Navigate In Browser:\\nhttp://localhost:3030\\n```\\n\\nOnce loaded, drop in a mutation to insert a new espresso into the espresso table.\\n\\n```graphql\\nmutation createEspresso($input: create_espresso_input!) {\\n  create_espresso(create_espresso_input: $input) {\\n    id\\n    name\\n    price\\n    available\\n  }\\n}\\n\\n{\\n  \\"input\\": {\\n    \\"name\\": \\"Katz Coffee\\",\\n    \\"price\\": 15,\\n    \\"available\\": true\\n  }\\n}\\n```\\n\\nSubgraph creates resolvers for each entity, making it easy for you to query the database. Currently, Subgraph supports\\nFind One, Find Many, Update One, Update Many, and Create One resolvers. Delete operations coming soon!\\n\\n## Subgraph v0.0.8\\n\\nThanks for checking in on the progress. There is a lot of work to do in order to get to v1, a production ready environment!\\n\\nIf you are a rusteacean and want to jump in, please feel free to check out the [source code](https://www.github.com/the-devoyage/subgraph),\\nand share your ideas about the future of the project.\\n\\nUpcoming projects include Delete Operations, Authorization Support, Testing Integrations, Federation 2 Support, and Error Handling! Thanks\\nfor keeping tuned and following along."},{"id":"subgraph-v0.0.7-http-with-chat-gpt","metadata":{"permalink":"/blog/subgraph-v0.0.7-http-with-chat-gpt","editUrl":"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.7/index.md","source":"@site/blog/subgraph-v0.0.7/index.md","title":"Subgraph v0.0.7 - Instant Chat GPT GraphQL API","description":"Hello all -- Thanks for joining!","date":"2023-04-14T00:00:00.000Z","formattedDate":"April 14, 2023","tags":[{"label":"subgraph","permalink":"/blog/tags/subgraph"}],"readingTime":4.12,"hasTruncateMarker":true,"authors":[{"name":"Nick McLean","title":"Maintainer of The Devoyage","url":"https://medium.com/@thedevoyage","imageURL":"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg","key":"nick"}],"frontMatter":{"title":"Subgraph v0.0.7 - Instant Chat GPT GraphQL API","slug":"subgraph-v0.0.7-http-with-chat-gpt","authors":["nick"],"tags":["subgraph"],"date":"2023-04-14T00:00:00.000Z"},"prevItem":{"title":"Subgraph v0.0.8 - Instant SQL API with Subgraph","permalink":"/blog/subgraph-v0.0.7-instant-sql-api"},"nextItem":{"title":"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?","permalink":"/blog/subgraph-v0.0.5-api-vs-car"}},"content":"Hello all -- Thanks for joining!\\n\\nToday we are going to use the Chat GPT API to show off the newest release from the subgraph project, which is a tool built to help you start up a well rounded API in a matter of minutes.\\n\\nThe [@The-Devoyage/subgraph](https://www.github.com/the-devoyage/subgraph) project is a proof-of-concept implementation written in Rust for generating a dynamic API from a single \\nconfiguration/schema.\\nThe subgraph allows you to define entities, data sources, and resolvers in a single TOML configuration. \\n\\nThe configuration specifies how the API should be generated around the data you need, existing or not. Subgraph generates CRUD operations from the entities you define and allows you\\nto connect many data sources to a single API, including HTTP and MongoDB (SQL support coming in the future!). In this way, you can create an API in no time, which can be used to \\nmanipulate and find data, and even map third-party RESTful APIs to GraphQL automatically.\\n\\nLet\'s dive into the new HTTP Data Source configurations which will allow us to connect to almost any third party RESTful API, such as the Chat GPT API.\\n\\n![Subgraph](https://res.cloudinary.com/the-devoyage/image/upload/v1681523977/Subgraph_Logo_2_gff26m.png)\\n\\n\x3c!--truncate--\x3e\\n## v0.0.7 and the Chat GPT API\\n\\n### HTTP Data Source\\n\\nThe HTTP data source is a powerful feature in Subgraph that enables data retrieval from external APIs. With this data source, you can easily connect your Subgraph GraphQL server to any REST API and map the API endpoints to \\nyour GraphQL schema. This allows you to consolidate data from multiple sources into a single GraphQL endpoint. The HTTP data source provides various methods to retrieve data, such as GET, POST, PUT, PATCH, DELETE, \\nand allows for custom headers to be set. This feature simplifies the process of fetching data from external sources and reduces the amount of boilerplate code needed.\\n\\n```toml\\n[[service.data_sources]]\\n[service.data_sources.HTTP]\\nname = \\"chat_gpt\\"\\nurl = \\"https://api.openai.com/\\"\\ndefault_headers = [{ name = \\"Authorization\\", value = \\"Bearer $OPENAI_KEY\\" }]\\n```\\n\\n### Object Support\\n\\nIn Subgraph, Scalars are the primitive data types such as String, Int, and Boolean. However, there are situations where we need to represent more complex types or groupings of primitive Scalars. This is where Object types come into play. \\nAn Object \\"Scalar\\" is a custom type that can be defined in the configuration for the schema, representing a complex type that can be used as a type itself. For example, you might have an object scalar representing a comment, with \\nits creator, content, and any other desired attributes.\\n\\n```toml\\n[[service.entities.fields]]\\nname = \\"usage\\"\\nscalar = \\"Object\\"\\nexclude_from_input = [\\"CreateOne\\"] \\nrequired = true\\nfields = [\\n    { name = \\"prompt_tokens\\", scalar = \\"Int\\", required = true },\\n    { name = \\"completion_tokens\\", scalar = \\"Int\\", required = true },\\n    { name = \\"total_tokens\\", scalar = \\"Int\\", required = true },\\n]\\n```\\n\\n### List Options\\n\\nLists or Arrays are one of the most commonly used data types in programming languages. Similarly, in Subgraph, lists can be defined as an array of a certain data types. This allows for a collection of values \\nto be returned as a single response. Lists can be defined in the configuration file by marking the field as a list (as shown below). Lists can also be nested inside objects, allowing for more complex data structures to be \\nrepresented. Lists are useful when you need to return multiple instances of a certain data type, such as a list of products or a list of blog posts.\\n\\n```toml\\n[[service.entities.fields]]\\nname = \\"messages\\"\\nscalar = \\"Object\\"\\nrequired = true\\nlist = true\\nfields = [\\n  {name = \\"role\\", scalar = \\"String\\", required = true}, \\n  {name = \\"content\\", scalar = \\"String\\", required = true}\\n]\\nexclude_from_output = true\\n```\\n\\n### New Features\\n\\n- HTTP Data Source - Easily map a HTTP API into this GraphQL API.\\n- Update One Resolver - Update Mongo documents or send HTTP Put/Patch Request\\n- Objects and Lists - Support for more complex data structures.\\n- Exclude From Input/Output - Allows fields to be shared or mapped exclusivly to resolvers input/output.\\n- Environment Variable Support - Use environment variables directly inside your config with the `$` suffix.\\n\\n## The Chat GPT Config\\n\\nLet\'s get down to the nitty gritty and hit the Chat GPT Completions endpoint with a Subgraph Service.\\n\\n1. Download the latest [release](https://www.github.com/the-devoyage/subgraph/releases) of subgraph.\\n2. Get an Open AI API Key and set it as an environment variable.\\n\\n```bash\\nEXPORT OPENAI_KEY=paste_key_here\\n```\\n\\n3. Download the [Chat GPT Service Config Example](https://github.com/The-Devoyage/subgraph/blob/2209c412f3f4fd0664a7963edba1d9830ec8e50c/examples/chat-gpt.toml)\\n\\n4. Start the API.\\n\\n```\\n./subgraph -c ./chat-gpt.toml -p 5012\\n```\\n\\n5. Check out the Sandbox and send some mutations!\\n\\nOpen browser and navigate to the port that the service was started on. `http://localhost:5012`\\n\\n![Sandbox](https://res.cloudinary.com/the-devoyage/image/upload/v1680991221/Screenshot_from_2023-04-08_17-00-02_xidwxl.png)\\n\\n## What\'s Next?\\n\\nThere is still a lot of work in order to get to v0.1.0 - Error handling, SQL Compatibility, Various Scalar Support, GraphQL Subscriptions... just to name a few.\\n\\nSo keep tuned, as v0.0.8 is under way.\\n\\n[@the-devoyage/subgraph](https://www.github.com/the-devoyage/subgraph) - Check out the repo, grab a ticket, let\'s build."},{"id":"subgraph-v0.0.5-api-vs-car","metadata":{"permalink":"/blog/subgraph-v0.0.5-api-vs-car","editUrl":"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.5/index.md","source":"@site/blog/subgraph-v0.0.5/index.md","title":"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?","description":"Hello all, and thanks for joining.","date":"2023-02-26T00:00:00.000Z","formattedDate":"February 26, 2023","tags":[{"label":"subgraph","permalink":"/blog/tags/subgraph"}],"readingTime":5.375,"hasTruncateMarker":true,"authors":[{"name":"Nick McLean","title":"Maintainer of The Devoyage","url":"https://medium.com/@thedevoyage","imageURL":"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg","key":"nick"}],"frontMatter":{"title":"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?","slug":"subgraph-v0.0.5-api-vs-car","authors":["nick"],"tags":["subgraph"],"date":"2023-02-26T00:00:00.000Z"},"prevItem":{"title":"Subgraph v0.0.7 - Instant Chat GPT GraphQL API","permalink":"/blog/subgraph-v0.0.7-http-with-chat-gpt"},"nextItem":{"title":"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator","permalink":"/blog/subgraph-v0.0.4-versatile-typings"}},"content":"Hello all, and thanks for joining.\\n\\nToday, we start a conversation about what an API does at a basic level while talking about the newest release of project `Subgraph`, a GraphQL API Generator built with Rust.\\n\\nYour next startup idea will most likely resolve around tech; It\'s 2023! So before you set out to hire that next developer, it is important that you might understand some basics about the empire you are creating.\\n\\n![API Vs Car](https://res.cloudinary.com/the-devoyage/image/upload/v1677423235/The-Devoyage/API_VS_CAR_keho8m.png)\\n\\n\x3c!--truncate--\x3e\\n## API vs Car, yes a Car\\n\\nAs you may already know, data is your most valuable asset.\\n\\nI am not saying it would be fun, but a company can recover from a broken application. Loss of code, bugs, and crashes can (and will) happen. But nothing is worse than if you loose the data itself.\\n\\nRealizing this, we can compare an API to a Car. Yes, that shiny mode of transportation that gets you everywhere. The core job of an API is to move data. \\n\\nNot unlike a car, as long as data can safely get from point A to point B, the API has done it\'s job. Meaning, that for most cases, any car will do. \\n\\n### The Jobs of an API\\n\\nIn most situations, your car is not that different from my car. In fact, they are almost identical aside from some minor bells and whistles.\\n\\nAt a high overview, the job of an API is pretty basic, move data! There are four basic reasons for data transportation and they boil down to the acronym, \\"CRUD\\". \\n\\n\\"CRUD\\" stands for Create -- Read -- Update -- Delete. The basic responsibilities of an API.\\n\\n#### Create - The Factory\\n\\nHop in your car, and let\'s take a trip down to the industrial district. Grab some supplies because we are going to create something new at the factory.\\n\\nJust like a car might transport raw materials to the factory in order to create something new, we can send data from our shiny new website to the database (through the API) to create a new asset in our database.\\n\\n#### Read - The Grocery Run\\n\\nGrab your reusable grocery bags and shopping list, it\'s time to do the weekly food run.\\n\\nYour users will expect to be able to view data from the database. When your website needs to get some data, you will request that data through the API. It\'s just like that weekly grocery run that keeps us all fed and happy.\\n\\n#### Update - The Shop\\n\\nMy new bike has broken. Load it into the trunk and take it to the shop for me!\\n\\nIt\'s not enough that you can create or read items from the database. You are going to have to update these items, just like we fixed my bike by adding a nice new wicker basket to the front.\\n\\nThe API is going to be responsible to take those update instructions all the way from your website to the database. That way, you can edit those assets you have created.\\n\\n#### Delete - The Dump\\n\\nEach spring, my family does a clean out -- Spring Cleaning. We load things we don\'t need into our vehicle and take them on down to the dump (or donation facility)!\\n\\nYour website will need to do something very similar. It will send some data through the API, which instructs the database to delete some items.\\n\\n## Subgraph - A GraphQL API Generator\\n\\nThe job of an API is to transfer data. A shiny new car is nice, but a clunker can also get you from point A to point B. An API is a vehicle that can be built, updated, or replaced as needed!\\n\\nMany times, we sit down with our development team to build this vehicle (API) part by part, piece by piece, from the ground up. Only to realize we are building the same thing over and over, solving the same issues the same way again and again.\\n\\nSince these basic tasks of an API are mainly universal, an API Generator such as Project `Subgraph` might be a solution that helps you to build your next API. \\n\\nCurrently, the project is a proof of concept. Define a simple configuration to run the API. Instant data transportation in a classy, speedy, and modern vehicle.\\n\\n### Define to Run\\n\\nThe goal is simple -- Since APIs are generally similar, we should be able to generate an API based on the data we currently have or want to have in our database.\\n\\nWe define a simple configuration, and the generator handles the creation of the four main responsibilities of an API - Create, Read, Update, Delete. \\n\\nLet\'s take a look at the ~20 lines of code needed to start your next API.\\n\\n1. Define The Config\\n\\nName your service, connect your database, and define your data. Simple.\\n\\nBelow, my API will be able to Create, Read, Update, and Delete `Restaurants`. Each `Restaurant` has two data points including a `name` and a `rating`. It\'s pretty simple but with this config I\'ll be able to perform the four responsibilities of an API.\\n\\n```toml\\n# Name Your Service\\n[service]\\nservice_name = \\"Restaurants\\"\\n\\n# Connect your Mongo DB\\n[service.database_config]\\nmongo_uri = \\"mongodb://user:pass@127.0.0.1:27017/db\\"\\nmongo_db = \\"myDb\\"\\n\\n# Describe Your Data\\n[[service.entities]]\\nname = \\"Restaurant\\"\\n\\n[[service.entities.fields]]\\nname = \\"name\\"\\nscalar = \\"String\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"rating\\"\\nscalar = \\"Int\\"\\nrequired = true \\n```\\n\\n2. Starting the API \\n\\nSpinning this bad boy up is a One Line Command for your Developers.\\n\\n```bash\\nsubgraph --config ./my-config.toml --port 5000\\n```\\n\\n### v0.0.5 - Subgraph\\n\\nThanks for checking out this crazy simple description of an API and the Subgraph API Generator!\\n\\nVersion `v0.0.5` is officially released and while it is still a proof of concept, it provides some new features that take us one step closer to an official release.\\n\\nIn this new version, we are able to define configuration to block or allow access by domain! In tech terms, we can define some simple CORS Configuration. \\n\\n- Specify Allowed HTTP Methods\\n- Declare Allowed Origins\\n- Allow Specific Headers\\n\\nAside from these tech terms, it allows you to lock your server down from a security prospective. It\'s a small step forward for project `Subgraph` and I am happy to share the progress with you.\\n\\n---\\n\\nIf you are interested in [Checking Out The Code](https://www.github.com/the-devoyage/subgraph), it\'s open source! Download it to try it, view it, or submit your contributions as the project grows. \\n\\nThanks All!"},{"id":"subgraph-v0.0.4-versatile-typings","metadata":{"permalink":"/blog/subgraph-v0.0.4-versatile-typings","editUrl":"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.4/index.md","source":"@site/blog/subgraph-v0.0.4/index.md","title":"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator","description":"Hello all! Thanks for joining!","date":"2023-02-20T00:00:00.000Z","formattedDate":"February 20, 2023","tags":[{"label":"subgraph","permalink":"/blog/tags/subgraph"}],"readingTime":2.91,"hasTruncateMarker":true,"authors":[{"name":"Nick McLean","title":"Maintainer of The Devoyage","url":"https://medium.com/@thedevoyage","imageURL":"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg","key":"nick"}],"frontMatter":{"slug":"subgraph-v0.0.4-versatile-typings","title":"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator","authors":["nick"],"tags":["subgraph"],"date":"2023-02-20T00:00:00.000Z"},"prevItem":{"title":"Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?","permalink":"/blog/subgraph-v0.0.5-api-vs-car"},"nextItem":{"title":"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust","permalink":"/blog/subgraph-v0.0.3-reusable-resolvers"}},"content":"Hello all! Thanks for joining!\\n\\nToday, the goal is to share the idea of versatile typings for an API Generator. \\n\\nIn version `v0.0.4` of the `subgraph` API Generator Project, I am happy to introduce the (mongo) Object Id Scalar. This means it\'s now possible to instantly start an API `Subgraph` Instance with the capabilities to find Mongo Documents by their Object ID! One simple step forward for this POC GraphQL API Generator written in Rust.\\n\\nIn case you are new to `Project Subgraph`, \\"Define to Run\\", is the motto. Define a simple configuration, and start the API. The code does the rest by generating resolvers and database connections -- An instantly generated API.  \\n\\n![GraphQL Versatile Typings](https://res.cloudinary.com/the-devoyage/image/upload/v1676924961/The-Devoyage/INTUITIVE_SCALARS_4_ttaqvh.png)\\n\\nSo, what kind of scalars are we including in this API Generator? Let\'s take a look.\\n\\n\x3c!--truncate--\x3e\\n## Versatile Typings\\n\\nCreating an API Generator needs to be versatile, yet simple. Two steps simple. \\n\\n1. Define the entities.\\n2. Let the code do it\'s job to create the API.\\n\\nThis means that the scalar type of each entity versatile enough to cover many circumstances.\\n\\n### The Typings\\n\\nWith `Subgraph v0.0.4` we have a simple set of options, as the project is still a proof of concept in its infancy. There are 4, mostly primitive, scalars to define entities.\\n\\n- Object ID (Mongo)\\n- String\\n- Int\\n- Boolean\\n\\nAs the project ramps up, more versatile options will be included.\\n\\n- Email\\n- Date\\n- DateTime\\n- Password\\n- Phone\\n- Objects\\n- Other Entities\\n- ... the list goes on!\\n\\nFor now, we can establish some base practices on implementing new scalars before diving into the deep end.\\n\\n### Defining an Entity\\n\\nI\'ll say it once, and I\'ll say it again. Define to Run is the motto.\\n\\nDefining an entity is the almost the only thing you need to do in order to start the API, aside from declaring some database configuration.\\n\\nBelow, we define an entity for our `Beers` service. It\'s the weekend somewhere.\\n\\nThe `Beer` entity has three properties including, `name`, `IBU`, and `inStock`. The ability to define more than one entity is just as simple, if so chosen.\\n\\n```\\n[service]\\n...\\n\\n[[service.entities]]\\nname = \\"Beer\\"\\n\\n[[service.entities.fields]]\\nname = \\"_id\\"\\nscalar = \\"ObjectID\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"name\\"\\nscalar = \\"String\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"IBU\\"\\nscalar = \\"Int\\"\\nrequired = false\\n\\n[[service.entities.fields]]\\nname = \\"inStock\\"\\nscalar = \\"Boolean\\"\\nrequired = true  \\n\\n[[service.entities]]\\n...\\n```\\n\\nIn about 50 lines of code, this little API can be started! Compare that to the hundreds or thousands of lines that might be written for a completely custom API that does nearly the exact same thing. \\n\\nNow that these couple lines have been written into a configuration file, the API can be spun up and queried.\\n\\n### Spin It Up\\n\\nOnce the entities are defined, the hard part is done. Starting the service can be done through a simple CLI Command.\\n\\n```bash\\nsubgraph --config ./config.toml --port 5000\\n```\\n\\nAnd like that... a brand new Beer API has been born! Checkout the sandbox hosted at the defined port, `http://localhost:5000`, to sample your server.\\n\\n---\\n\\nThanks for checking out the [Repo](https://www.github.com/the-devoyage/subgraph), and following along with this proof of concept. If you are interested in contributing or have some ideas, feel free to share on the `issues` tab.\\n\\nVersion `v0.0.5` is on it\'s way, with configurable CORS settings. If you like the project or want to keep up to date, follow along to get notifications of future releases."},{"id":"subgraph-v0.0.3-reusable-resolvers","metadata":{"permalink":"/blog/subgraph-v0.0.3-reusable-resolvers","editUrl":"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/subgraph-v0.0.3/index.md","source":"@site/blog/subgraph-v0.0.3/index.md","title":"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust","description":"Hello all! Thanks for joining.","date":"2023-02-04T00:00:00.000Z","formattedDate":"February 4, 2023","tags":[{"label":"subgraph","permalink":"/blog/tags/subgraph"}],"readingTime":2.005,"hasTruncateMarker":true,"authors":[{"name":"Nick McLean","title":"Maintainer of The Devoyage","url":"https://medium.com/@thedevoyage","imageURL":"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg","key":"nick"}],"frontMatter":{"slug":"subgraph-v0.0.3-reusable-resolvers","title":"Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust","authors":["nick"],"tags":["subgraph"],"date":"2023-02-04T00:00:00.000Z"},"prevItem":{"title":"Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator","permalink":"/blog/subgraph-v0.0.4-versatile-typings"}},"content":"Hello all! Thanks for joining.\\n\\nToday I\'d like to share a quick update for `@the-devoyage/subgraph`, a GraphQL API Generator with the goal of simplicity.\xa0\\n\\nDefine to run is the motto so far, which references the ease of running this API Generator. Define the schema to run the API. It should be that easy to start an API up.\\n\\nIn version `v0.0.3` we are adding the ability to Find Many which is one of the reusable resolvers that is created for you when you start the service. \\n\\n![GraphQL Resolvers CRUD](https://res.cloudinary.com/the-devoyage/image/upload/v1675543551/The-Devoyage/CRUD_GraphQL_aaooqr.png)\\n\\n\x3c!--truncate--\x3e\\n## Reusable Resolvers\\n\\nThe idea of an API Generator is to make creating a standardized API easy. Many parts of creating an API can be automated, including the creation of resolvers. \\n\\nThe core of an API revolves around CRUD operations (Create, Read, Update, Delete) which can easily be automated considering there are really not many variations to consider.\\n\\nThe Devoyage\'s `subgraph` project (The API Generator) has the goal of automating a variety of these operations for each defined entity. \\n\\n- Find One/Many\\n- Create One/Many\\n- Delete One/Many\\n- Update One/Many\\n\\nThis means there will be a total of 8 reusable resolvers created for each defined entity as this project proceeds.\\n\\n## The New Resolver\\n\\nVersion `v0.0.3` takes a step at closing the gap to including all 8 of these automated resolvers by including the `Find Many` resolver. Let\'s take a look!\\n\\n### Define The Entity (or Entities)\\n\\nFirst define the entity in the config file. Remember the motto - \\"Define to Run\\".\\n\\n```toml\\n[service]\\nservice_name = \\"pets\\"\\n\\n[service.database_config]\\nmongo_uri = \\"mongodb://user:pass@127.0.0.1:27017/db\\"\\nmongo_db = \\"myDb\\"\\n\\n[[service.entities]]\\nname = \\"Dog\\"\\n\\n[service.entities.database_config]\\nmongo_collection = \\"dogs\\"\\n\\n[[service.entities.fields]]\\nname = \\"_id\\"\\nscalar = \\"ObjectID\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"name\\"\\nscalar = \\"String\\"\\nrequired = true\\n\\n[[service.entities.fields]]\\nname = \\"weight\\"\\nscalar = \\"Int\\"\\nrequired = false\\n```\\n\\n### Run The service\\n\\nStep 1 is easy. Step 2 is even easier. Start the service.\\n\\n```bash\\nsubgraph --config ./config.toml --port 5011\\n```\\n\\n### The Find Many Resolver\\n\\nCheck out the schema, the find many resolver is now included as a choice for querying your new API.\\n\\n```graphql\\ntype Query {\\n  get_dogs(get_dogs_input: get_dogs_input!): [Dog!]!\\n  ...resolvers\\n}\\n```\\n\\n---\\n\\nIt\'s a small step toward the goal and I am glad you are here to follow along. If you\'re interested in checking out the code or trying out this proof of concept, check out the [Subgraph Project](https://www.github.com/the-devoyage/subgraph) on GitHub!"}]}')}}]);