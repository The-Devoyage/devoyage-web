---
id: mysql-ds
title: MySQL DB Data Source
---

## Defining a MySQL DB Data Source

Defining a connection to a MySQL DB can be done by providing a URI and Dialect in addition to the required `name` of the data source.

```toml
[[service.data_sources]]
[service.data_sources.SQL]
name = "cars"
uri = "mysql://rooty:rootroot@localhost:3306/cars"
dialect = "MYSQL"
```
