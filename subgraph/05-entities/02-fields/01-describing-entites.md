---
id: entity-fields
title: Entity Fields
---

## Field Configuration

Fields, an array of type `Field`, are the columns of a sql table or the properties of a document in a mongo collection. Use
fields to create a schema that desccribes the entity you wish you implement in your API.

The following entity describes 3 fields. At minimum, it is required to provide a `name` and `scalar` for each field defined.

```toml
[[service.entities]]
name = "Comment"
fields = [
  { name = "id", scalar = "Int" },
  { name = "uuid", scalar = "UUID" },
  { name = "title", scalar = "String" },
]
```

Keep reading to learn more about each option.
