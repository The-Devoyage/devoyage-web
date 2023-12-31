---
id: examples-mongo
title: Simple Mongo
---

```toml
[service]
name = "bikes"

[[service.data_sources]]
[service.data_sources.Mongo]
name = "bikes_db"
uri = "mongodb://subgraph_mongo:subgraph_mongo@127.0.0.1:27017/subgraph_mongo"
db = "subgraph_mongo"

[[service.entities]]
name = "Bike"
fields = [
    { name = "_id", scalar = "ObjectID", required = true }
    { name = "color", scalar = "String", required = true }
    { name = "type", scalar = "String", required = true }
    { name = "in_stock", scalar = "Boolean", required = true }
    { name = "size", scalar = "Int", required = true }
]
```

