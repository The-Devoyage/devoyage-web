---
title: Subgraph - A Rust Powered GraphQL API Generator
slug: subgraph-v0.0.14-scalable-graphql-api
authors: [nick]
tags: [subgraph]
date: 2024-03-21
description: Spin up scalable and flexible GraphQL APIs with Subgraph, a Rust Based GraphQL Engine.
image: https://res.cloudinary.com/the-devoyage/image/upload/v1711036382/subgraphv14_jnpclv.png
keywords: [graphql, subgraph, api, rust, backend, server, json]
---

import {LicenseAlert} from '@site/src/components/common/docs';
import {BlogFooter} from '@site/src/components/common/blog-footer'

Welcome Voyager.

Thank you for joining us. Today, we're delving into Subgraph, a Rust-based GraphQL tool designed to simplify the creation of scalable backends.

Building applications can often feel overwhelming, especially when tackling server-side logic that requires scalability,
security, and flexibility. Subgraph aims to ease this challenge by emphasizing data ownership and DevOps control.

With Subgraph, you retain control of your data and servers, allowing you to deploy according to your preferences.
It serves as a vital layer in the stack, facilitating interaction with your rows, documents, tables, and more. Instead of
focusing on architecting scalable backends, Subgraph enables you to dedicate your time to building interfaces around logically organized data.

The latest release, Subgraph v0.0.14, introduces exciting new features that bring this tool closer to being a comprehensive solution for your next application.

I'm thrilled to have you join us on this journey! It's important to note that Subgraph is currently in a pre-alpha release state and is not yet suitable for critical production environments. However, if you create something innovative, I'd love to hear about your experience!

![feature image](https://res.cloudinary.com/the-devoyage/image/upload/v1711036382/subgraphv14_jnpclv.png)

<!--truncate-->

## Building a Scalable API with Subgraph

The objective is clear: let's construct a scalable web server to deliver data for a user interface. But what exactly defines "scalability"?

Creating a web server might seem straightforward, but ensuring it remains adaptable and maintainable over time presents its own set of challenges. Scalability encompasses more than just horizontal and vertical deployments; it extends to various aspects of application design and architecture.

Key considerations for achieving scalability include:

- **Organization of Data**: Structuring data and its relationships in a logical and reusable manner.
- **Distributed Access Controls**: Establishing rules governing who can access specific data points across the entire API, minimizing redundancy.
- **Interacting with Data**: Designing methods to request, filter, and receive data from the API in a consistent and understandable format.

In this article, we'll focus on data organization and interaction. However, for a comprehensive understanding of how Subgraph can aid in distributed access control and other API-related topics, I encourage you to explore the [Subgraph documentation](https://www.thedevoyage.com/subgraph/intro).

## Organizing Your Data

If you want to follow along in your own IDE, check out the [Quick Start](https://www.thedevoyage.com/subgraph/quickstart) to learn how to download Subgraph. Below, I will skip ahead to step two, writing
the configuration file so that we can see how Subgraph helps you to organize data logically.

Subgraph's magic stems from a configuration file that you manage. There is no true code or build process - only a simple config.

**In `myconfig.toml`**

```toml
# Define the service
[service]
name = "parks"
port = 3030

# Tell subgraph where your data lives.
# Subgraph supports combining multiple data sources together.
# Built in clients include Mongo, SqLite, MySql, Postgres, and HTTP (external APIs).
[[service.data_sources]]
[service.data_sources.SQL]
name = "my_sql_parks_db"
uri = "sqlite:/home/mypath/Desktop/DEV/dbs/my_sqlite_database.db"
dialect = "SQLITE"

# An entity is a table(sql) or collection(mongo) in your database.
# Defining an entity automatically creates CRU(d) methods to consume.
[[service.entities]]
name = "park"
fields = [
    { name = "id", scalar = "Int", required = true },
    { name = "name", scalar = "String", required = true },
    { name = "town", scalar = "String", required = true },
    { name = "playground", scalar = "Boolean", required = true },
]
```

Start the server with a simple command in the terminal: `subgraph --config ./myconfig.toml` and navigate to the specified port
to explore using the built in GraphQL SandBox - `http://localhost:3030`.

Once defined, Subgraph creates resolvers so that you can start interacting with the database through the API.

## Interaction with Data

For each entity, Subgraph creates five different resolvers which allow you to interact with the API. Each generated resolver
is logically named based on the entity and the action.

### Resolvers

- Find One - `get_park`
- Find Many - `get_parks`
- Create One - `create_park`
- Update One\* - `update_park`
- Update Many - `update_parks`

\*The update one resolver is only available in dialects that nativly support `LIMIT 1` clauses.

Using the generated resolvers, you can start to perform queries and mutations from the sandbox or your user interface.

### Filtering with Resolver Inputs

Each resolver automatically generates inputs based on the entity field definitions, allowing you to find and filter results based on any
criteria that the entity specifies. Inputs are logically named with the same standards as the resolver.

1. _Find a park with the name of "Clyde Warren Park"._

```graphql
query GetPark {
  get_park(get_park_input: { query: { name: "Clyde Warren Park" } }) {
    id
    name
  }
}
```

Subgraph provides several filters that allow you to easily find the data you need such as Regex Filters and Conditional (Less Than, Greater Than) Filters.

2. _Find a park with a name LIKE "Clyde...."_

```graphql
query GetPark {
  get_park(get_park_input: { query: { LIKE: { name: "Clyde%" } } }) {
    id
    name
  }
}
```

3. _Find many parks with an `id` that is Greater Than 20._

```graphql
query GetParks {
  get_parks(get_parks_input: { query: { GT: { id: 20 } } }) {
    id
    name
  }
}
```

Additionally, mixing and matching filters becomes possible with `OR` and `AND` operators which recurisvly utilize the generated inputs.

4. _Find many parks that have an `id` that is Greater Than 20 and Less Than 40_

```graphql
query GetParks {
  get_parks(
    get_parks_input: {
      query: { AND: [{ GT: { id: 20 } }, { LT: { id: 40 } }] }
    }
  ) {
    id
    name
  }
}
```

Large data becomes easy to mananage with database level limit based pagination baked into the generated query.

5. _Find many parks that have an `id` that is Greater Than 20 and only return the second page._

```graphql
query GetParks {
  get_parks(
    get_parks_input: {
      query: { AND: [{ GT: { id: 20 } }, { LT: { id: 40 } }] }
      opts: { per_page: 10, page: 2 }
    }
  ) {
    id
    name
  }
}
```

## Subgraph v0.0.14

Thank you for taking a moment to explore some of the new features in v0.0.14 of Subgraph! This tool simplifies the process of describing the data within your database, creating an intuitive and flexible interface for interacting with that data.

With just over a year of development under its belt, this project has made significant strides in developing tooling that enables easy and standardized API generation.

If you're excited about the direction of the project, please consider showing your support by giving the [repository](https://www.github.com/the-devoyage/subgraph) a Star!

<LicenseAlert product="subgraph" to="https://thedevoyage.gumroad.com/l/subgraph" btnTxt="Early Alpha Release" />

<BlogFooter />
