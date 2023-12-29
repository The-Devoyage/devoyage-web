---
id: datasource_name
title: Data Source Name
---

As mentioned in the previous page, Data Sources allow you to connect Subgraph to your Data.

All data sources are similar but depending on which dialect or type of source you are configuring, there are some specifics. Let's start with some basics.

### An Identifier for a Data Source

As your API grows, you may need to interact with multiple data sources. Entiteis that are defined might come from a variety of sources. The provided `name` allows you to later route specific data to a specific data source.

```toml
[[service.data_sources]]
[service.data_sources.SQL]
name = "sqlite_source" # Any descriptive identifier for this source.
uri = "sqlite:/home/username/sqlite_file.db"
dialect = "SQLITE"

[[service.data_sources]]
[service.data_sources.Mongo]
name = "My_Mongo_Source" # Any descriptive identifier for this source.
uri = "mongodb://user:pass@127.0.0.1:27017/databasename"
db = "databasename"
```
