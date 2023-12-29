---
id: service-imports
title: Imports
---

## Importing Entities and Data Organization

As the configuration file grows, the service file will bloat. Containing all configuration to a single file is acceptable as the application is small, but as it grows it may be worth separating logic into multiple files.

Subgraph supports the ability to define entities in separate files, allowing configuration to be organized neatly.

```toml
[service]
name = "my_service"
port = 3030
imports = [
  "./todo.toml",
  "./todo_history.toml",
  "./todo_access.toml",
  "./user_connections.toml",
  "./user.toml"
]
```

_Note_ - This syntax only supports the ability to import Entities. Anything with `service.entities`
as the table prefix is valid to move to another file.

### The Import File

Working with an import file can help to declutter a complex config file. Within an import file, you will no longer need to
provide the `service` prefix. The key `[[service.entities]]` simply becomes `[[entities]]`.

```toml
# Import file represents an entity
[[entities]] # Note, no longer prefix with `service.`
name = "product"
required = true
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"], exclude_from_output = true  },
  { name = "uuid", scalar = "UUID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },
  { name = "title", scalar = "String", required = true },
  { name = "description", scalar = "String", required = true },
]
```
