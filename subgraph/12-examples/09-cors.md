---
id: examples-cors
title: CORS Examples
---

```toml
[service]
name = "dev"

[[service.data_sources]]
[service.data_sources.Mongo]
name = "mongo_1"
uri = "mongodb://user:pass@127.0.0.1:27017/db"
db = "db"

# Default options allow any origin and Content-Type header if excluded
[service.cors]
allow_origins = ["http://localhost:3000"]
allow_headers = ["Authorization", "Content-Type"]

# Default options allow POST if excluded
[[service.cors.allow_methods]]
method = "POST"

[[service.entities]]
name = "Person"

[[service.entities.fields]]
name = "_id"
scalar = "ObjectID"
required = true
[[service.entities.fields]]
name = "name"
scalar = "String"
required = true
[[service.entities.fields]]
name = "age"
scalar = "Int"
required = false
[[service.entities.fields]]
name = "married"
scalar = "Boolean"
required = true
```
