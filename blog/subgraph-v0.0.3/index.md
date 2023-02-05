---
slug: subgraph-v0.0.3-reusable-resolvers
title: Subgraph v0.0.3 - Reusable Resolvers with a GraphQL API Generator Built in Rust
authors: [nick]
tags: [subgraph]
date: 2023-02-04
---

Hello all! Thanks for joining.

Today I'd like to share a quick update for `@the-devoyage/subgraph`, a GraphQL API Generator with the goal of simplicity. 

Define to run is the motto so far, which references the ease of running this API Generator. Define the schema to run the API. It should be that easy to start an API up.

In version `v0.0.3` we are adding the ability to Find Many which is one of the reusable resolvers that is created for you when you start the service. 

![GraphQL Resolvers CRUD](https://res.cloudinary.com/the-devoyage/image/upload/v1675543551/The-Devoyage/CRUD_GraphQL_aaooqr.png)

## Reusable Resolvers

The idea of an API Generator is to make creating a standardized API easy. Many parts of creating an API can be automated, including the creation of resolvers. 

The core of an API revolves around CRUD operations (Create, Read, Update, Delete) which can easily be automated considering there are really not many variations to consider.

The Devoyage's `subgraph` project (The API Generator) has the goal of automating a variety of these operations for each defined entity. 

- Find One/Many
- Create One/Many
- Delete One/Many
- Update One/Many

This means there will be a total of 8 reusable resolvers created for each defined entity as this project proceeds.

## The New Resolver

Version `v0.0.3` takes a step at closing the gap to including all 8 of these automated resolvers by including the `Find Many` resolver. Let's take a look!

### Define The Entity (or Entities)

First define the entity in the config file. Remember the motto - "Define to Run".

```toml
[service]
service_name = "pets"

[service.database_config]
mongo_uri = "mongodb://user:pass@127.0.0.1:27017/db"
mongo_db = "myDb"

[[service.entities]]
name = "Dog"

[service.entities.database_config]
mongo_collection = "dogs"

[[service.entities.fields]]
name = "_id"
scalar = "ObjectID"
required = true

[[service.entities.fields]]
name = "name"
scalar = "String"
required = true

[[service.entities.fields]]
name = "weight"
scalar = "Int"
required = false
```

### Run The service

Step 1 is easy. Step 2 is even easier. Start the service.

```bash
subgraph --config ./config.toml --port 5011
```

### The Find Many Resolver

Check out the schema, the find many resolver is now included as a choice for querying your new API.

```graphql
type Query {
  get_dogs(get_dogs_input: get_dogs_input!): [Dog!]!
  ...resolvers
}
```

---

It's a small step toward the goal and I am glad you are here to follow along. If you're interested in checking out the code or trying out this proof of concept, check out the [Subgraph Project](https://www.github.com/the-devoyage/subgraph) on GitHub!


