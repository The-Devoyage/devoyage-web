---
id: table-collection-path
title: Tables, Collections, and Paths
---

In addition to configuring which data source the entity comes from, the entity's `data_source` configuration allows you to
specify which table(SQL), collection(Mongo), or endpoint (HTTP) to use when resolving an entity.

## Databases - Mongo and SQL

By default, Subgraph uses the name of the entity as the table or collection name when working
with a database. The `table` or `collection` properties allow you to map an entity
to a specific collection or table within a database.

### Collection - Mongo

The following entity will be sourced from the `users` collection when performing queries or mutations.

```toml
[[service.entities]]
name = "Person"

[service.entities.data_source]
from = "mongo_1"
collection = "users"
```

### Table - SQL

The following eneity will be sourced from the `bow_wow` table when performing queries or mutations.

```toml
[[service.entities]]
name = "Dog"

[service.entities.data_source]
from = "sql_ds"
table = "bow_wow"
```

## HTTP - Custom Endpoints

HTTP Data Sources work a bit different than a Data Source that connects to a database.

HTTP Data Sources allow you to connect to a third party restful API and often require a custom endpoint for
each action or entity defined.

The `path` property allows you to map an endpoint to an entity, with the default path of `/`. The following
configuration will append the `/todos` endpoint to every request for this entity.

The following will generate the url `http://myapi.com/todos`, for example.

```toml
[service.entities.data_source]
from = "todos"
path = "/todos"
```
