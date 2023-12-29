---
id: pg-ds
title: Postgres Data Source
---

## Defining a Postgres Data Source

Defining a connection to a Postgres DB can be done by providing a URI and Dialect in addition to the required `name` of the data source.

```toml
[[service.data_sources]]
[service.data_sources.SQL]
name = "restaurants"
uri = "postgre://root:rootroot@localhost:5432/mydb"
dialect = "POSTGRES"
```
