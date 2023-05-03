---
title: Subgraph v0.0.8 - Instant SQL API with Subgraph
slug: subgraph-v0.0.7-instant-sql-api
authors: [nick]
tags: [subgraph]
date: 2023-05-01
---

Hello all, thanks for joining!

Today we are creating instant APIs around SQL Databases of various dialects with Subgraph, a proof 
of concept tool that is made to assist speedy API development.

All it takes to use subgraph is a config file that informs the service where your data is and what your data looks like. Define the
config and start the API to create an instant API around your database.

With the latest release, v0.0.8, we are taking a look at the newly added support for a few dialects of SQL. In addition to
Mongo and HTTP Data Sources, Subgraph now supports Postgres, MySQL, and SqLite. Let's take a minute and spin up a new
API from scratch!

![Subgraph SQL](https://res.cloudinary.com/the-devoyage/image/upload/v1683081810/Subgraph_SQL_kteswo.png)

<!--truncate-->

## Build a quick API for your SQL Database

The goal with subgraph is pretty simple - Shorten the time it takes to plan, develop, and deploy an API. With subgraph, 
we do not need to write routes, controllers, or resolvers from scratch. We do not need to deal with boiler plate, database
connections, or even validation.

All we need to do is tell the Subgraph service where or data is and what it looks like. Subgraph takes care of the rest by
connecting to the database and creating the routes/resolvers. With this, you now can spend your time on the parts of 
your business that might make a larger impact for your clients and sales.

Let's see an example!

### 1. Create the Database

You own the database. You get to choose what type of database is best suited for your project. As mentioned above, 
Subgraph supports Mongo, Postgres, MySQL, and SqLite databases, making it easy for you to connect to your data.

In this example we will create a SqLite DB and use Subgraph to generate an API around a few tables. Keep in mind, that connecting Subgrpah
to MySQL, Postgres, or even Mongo, is a very similar process! 

First, make sure you have SqLite installed on your system. The following guide is going to assume you are on a Linux machine.

```bash
sudo apt install sqlite3
```

Creating a SqLite Database is as easy as creating a file in a folder. Let's create a database around Coffees!

```
touch caffeine.db
```

Now, let's create a couple tables.

```sql
CREATE TABLE coffee (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  available BOOLEAN NOT NULL
);

CREATE TABLE espresso (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  available BOOLEAN NOT NULL
);
```

This is all we will need to do to get started. We can now move on to Subgraph specific setup.

### 2. Write the Subgraph Config

The config is all about your data. It tells Subgraph where to find your data and what it looks like. Writing the config file is
easy, as it uses [TOML or Tom's Obvious Minimal Language](https://toml.io/en/).

Let's start by telling Subgraph where the data is. To do this, add a `Data Source` to the configuration. You can add
multiple data sources, mix and match data sources, or just keep it basic with a single data source.

```toml
[service]
service_name = "espresso"

[[service.data_sources]]
[service.data_sources.SQL]
name = "caffeine_data_source" # Name the data source for reference later.
uri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"
dialect = "SQLITE"
```

Now that Subgraph knows where the data is, we can inform subgraph what our data looks like. Start by defining an entity for each table. An
Entity is a table in the database (collection for Mongo).

```toml
[[service.entities]]
name = "Espresso"
```

In this case, the `Espresso` table has four columns. Let's tell Subgraph.

```toml
[[service.entities.fields]]
name = "id"
scalar = "Int"
required = true
exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] # Don't allow uses to create or update the ID prop.

[[service.entities.fields]]
name = "name"
scalar = "String"
required = true

[[service.entities.fields]]
name = "price"
scalar = "Int"
required = true

[[service.entities.fields]]
name = "available"
scalar = "Boolean"
required = true
```

That's it! Let's do the same for the coffee table and take a look at the finished config!

```toml
# The Finished Configuration:
[service]
service_name = "espresso"

[[service.data_sources]]
[service.data_sources.SQL]
name = "caffeine_data_source"
uri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"
dialect = "SQLITE"

[[service.entities]]
name = "Coffee"
[[service.entities.fields]]
name = "id"
scalar= "Int"
required = true
exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] 
[[service.entities.fields]]
name = "name"
scalar = "String"
required = true
[[service.entities.fields]]
name = "price"
scalar = "Int"
required = true
[[service.entities.fields]]
name = "available"
scalar = "Boolean"
required = true

[[service.entities]]
name = "Espresso"
[[service.entities.fields]]
name = "id"
scalar = "Int"
required = true
exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] 
[[service.entities.fields]]
name = "name"
scalar = "String"
required = true
[[service.entities.fields]]
name = "price"
scalar = "Int"
required = true
[[service.entities.fields]]
name = "available"
scalar = "Boolean"
required = true
```

### 3. Start the API

In the previous step, we defined a Subgraph Configuration that tells the service about the data. The hard part is done in
about 50 lines of code. Now, let's start the service.

First, make sure you downloaded the latest release (v0.0.8). The release is a binary, making it easy to run on a linux system.
Just make sure to give it execution permissions.

Checkout the [releases](https://github.com/The-Devoyage/subgraph/releases) page on GitHub to download the binary.

```bash
chmod +x subgraph
```

Then, run subgraph and point it to your config file.

```bash
./subgraph --config ./caffeine.toml --port 3030
```

And that's it! Your new API is now running at the port specified. We can load up the playground and send some queries.

### 4. Query the API

Load the playground at the specified port. The playground will let you construct and execute queries againsts your new API.

```
# Navigate In Browser:
http://localhost:3030
```

Once loaded, drop in a mutation to insert a new espresso into the espresso table.

```graphql
mutation createEspresso($input: create_espresso_input!) {
  create_espresso(create_espresso_input: $input) {
    id
    name
    price
    available
  }
}

{
  "input": {
    "name": "Katz Coffee",
    "price": 15,
    "available": true
  }
}
```

Subgraph creates resolvers for each entity, making it easy for you to query the database. Currently, Subgraph supports
Find One, Find Many, Update One, Update Many, and Create One resolvers. Delete operations coming soon!

## Subgraph v0.0.8

Thanks for checking in on the progress. There is a lot of work to do in order to get to v1, a production ready environment!

If you are a rusteacean and want to jump in, please feel free to check out the [source code](https://www.github.com/the-devoyage/subgraph),
and share your ideas about the future of the project.

Upcoming projects include Delete Operations, Authorization Support, Testing Integrations, Federation 2 Support, and Error Handling! Thanks
for keeping tuned and following along. 
