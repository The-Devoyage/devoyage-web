---
id: multiple-data-sources
title: Multiple Data Sources
---

## Using Multiple Data Sources

A subgraph API allows you to create a central origin for your data from many data sources.

For example, you may join a User entity from a Mongo Data Source to a Stripe Purchase Entity from an HTTP Data source, creating
a quick and easy way to access associated data in a sinigular network request.

```toml
#  1. This is a data source that connects to a MongoDB instance
[[service.data_sources]]
[service.data_sources.Mongo]
name = "mongo_1"
uri = "mongodb://users:users@127.0.0.1:27017/users"
db = "subgraph_demo"

# 2. This is another MongoDB data source using Mongo Atlas
[[service.data_sources]]
[service.data_sources.Mongo]
name = "mongo_2"
uri = "mongodb+srv://$MONGO_USER:$MONGO_PASS@cluster0.dog1234.mongodb.net/?retryWrites=true&w=majority"
db = "subgraph_demo_2"

# 3. This is an HTTP data source connecting to an external API
[[service.data_sources]]
[service.data_sources.HTTP]
name = "todos"
url = "https://jsonplaceholder.typicode.com"
```
