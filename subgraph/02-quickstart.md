---
id: quickstart
title: Quickstart
---

## The Five Minute API

In less than a few minutes, you will have a new API. The goal is simple here - Spend your time with your data, not the code surrounding it.

### Download/Install

Before getting started, make sure to obtain the software.

1. Download the latest version or build from source from [Github: The Devoyage - Subgraph](https://github.com/The-Devoyage/subgraph/tags)
2. Optionally, add the application to your path or make it easy to execute.

### The Config File

The config file rules all with Subgraph. This will be used to provide options for everything needed to run the API, from how data is created to who should access the data.

#### Create the File

Start by creating a new file, `config.toml`. This will hold the base of the configuration. This file can be named anything with a `.toml` extension.

This TOML file will hold your configuration. [Toms Obvious Minimal Language](https://toml.io/en/) is quick and easy to learn!

Defining a bare bones configuration is relatively simple and can be done by describing some basic service options, a data source, and an entity.

```toml
# Information needed to start the Web Server.
[service]
name = "coffee_shop"
port = 3030

[[service.data_sources]]
[service.data_sources.SQL] # Mongo, PG, MySQL, SqLite, HTTP options!
name = "caffeine_data_source"
uri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"
dialect = "SQLITE"

# Entities are sql tables or mongo collections
# provided from the source.
[[service.entities]]
name = "Coffee" # The name of the table or collection.
fields = [
{ name = "id", scalar = "Int", required = true },
{ name = "name", scalar = "String", required = true },
{ name = "price", scalar = "Int", required = true },
{ name = "available", scalar = "Boolean", required = true }
]

[[service.entities]]
name = "Espresso"
# The columns or properties that belong to the row or document.
fields = [
{ name = "id", scalar = "Int", required = true },
{ name = "name", scalar = "String", required = true },
{ name = "price", scalar = "Int" },
{ name = "available", scalar = "Boolean" }
]
```

### Run the Service

Ensure the data source is property configured and start the service. This might include creating initial structures and configuring databases. Migrations would be a great example of this.

```
subgraph --config ./config.toml
```

### Inspect the API

Once started, navigate in your browser to the sandbox hosted at the specified port. In the case of the example above, port 3030.

From within the sandbox, the built in Docs section provides you with the API Capabilities. Subgraph's main job is to create methods in order to interact with data.

- Find One - The ability to query the API for 1 result.
- Find Many - The ability to search for many results.
- Create One - Add new instances of entities to the data source.
- Update One (when supported) - Modify properties of an entity.
- Update Many - Modify properties of many entities.

From here, it's all about writing the graphql query to interact with the API! Don't be afraid to look at the generated Docs or Schema to assist.

```graphql
query FindOneCoffee {
  get_coffee(get_coffee_input: { query: { id: 24 } }) {
    id
    name
    price
    available
  }
}
```
