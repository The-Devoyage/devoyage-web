---
id: mongo-ds
title: Mongo DB Data Source
---

## Defining a Mongo DB Data Source

Defining a connection to a Mongo DB can be done by providing a URI and DB Name in addition to the required `name` of the data source.

```toml
[[service.data_sources]] # Mongo Atlas URI
[service.data_sources.Mongo]
name = "my_mongo_ds"
uri = "mongodb+srv://username:password@myclus.abcdefg.mongodb.net/?retryWrites=true&w=majority"
db = "my_db"
```
