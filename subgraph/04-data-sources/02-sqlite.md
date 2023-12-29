---
id: sqlite-ds
title: SqLite Data Source
---

## Defining a SqLIte Data Source

One of the most simple Data Sources to define is a SqLite Data Source, since SqLite does not need a server in order to create a connection.

```toml
[[service.data_sources]]
[service.data_sources.SQL]
name = "name_of_datasource"
uri = "sqlite:/home/username/sqlite_file.db"
dialect = "SQLITE"
sqlite_extensions = ["./plugins/path_to_plugin"]
migrations_path = "./path_to_migrations_directory"
```

### Extensions

Extensions are a vital part of SqLite. They enable missing features that may be needed for use within an application.

The `sqlite_extensions` property of an SQL `data_source`, as shown above, is a list of paths that allow you to load extensions when the Subgrph Service Starts.
