---
id: quickstart
title: Quickstart
---

## Rapid API Deployment with Subgraph

Achieve a new API in just a matter of minutes with Subgraph. Our primary objective is straightforward: let your focus remain on your data, while Subgraph takes care of the surrounding code intricacies.

### Download/Install

To begin, ensure you have the Subgraph software in place.

```bash
cargo install devoyage-subgraph
```

1. Optionally for production environments, purchase a license key from [our store](https://thedevoyage.gumroad.com/l/subgraph).
2. Optionally, add the application to your path or make it easy to execute.

### The Config File

In the realm of Subgraph, the config file reigns supreme. It serves as the control center, offering options for everything essential to run the API – from defining data creation processes to specifying data access permissions.

#### Create the File

Initiate the process by creating a new file named `config.toml`. The name of the file can be customized, but it must have a `.toml` extension.

This TOML file serves as the vessel for your configuration. Check out [Toms Obvious Minimal Language](https://toml.io/en/) for a quick and easy guide!

Establishing a basic configuration is straightforward. Begin by outlining fundamental service options, specifying a data source, and defining an entity.

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

Confirm that the data source is correctly configured and initiate the service. This process may involve creating initial structures and configuring databases, with migrations being a prime example.

```bash
subgraph --config ./config.toml
```

### Inspect the API

Once the service is running, open your browser and navigate to the sandbox hosted at the specified port, which, in the example above, is port 3030.

![sandbox screenshot](https://res.cloudinary.com/the-devoyage/image/upload/v1680991155/Screenshot_from_2023-04-08_16-58-17_lt8kqz.png)

Inside the sandbox, explore the built-in Docs section to understand the API capabilities. Subgraph's primary role is to generate methods for interacting with data:

- **Find One:** Query the API for a single result.
- **Find Many:** Search for multiple results.
- **Create One:** Add new instances of entities to the data source.
- **Update One (when supported):** Modify properties of a specific entity.
- **Update Many:** Modify properties of multiple entities.

To interact with the API, start by crafting a GraphQL query. Don't hesitate to refer to the generated Docs or Schema for assistance.

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
