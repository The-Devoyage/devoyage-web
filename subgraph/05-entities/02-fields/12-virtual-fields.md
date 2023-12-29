---
id: virtual-fields
title: Virtual Fields
---

## The `is_virtual` Field Configuration

Virtual fields are properties of an entity that do not exist within the data source and
can be useful in variety of circumstances.

```toml
[[entities]]
name = "todo_access"
required = true
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"] },
  { name = "uuid", scalar = "UUID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },
  { name = "todo", scalar = "Int", required = true, as_type = "todo", join_on = "id", exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"], default_value = "context(\"todo.id\")" },
  { name = "todo_uuid", scalar = "UUID", is_virtual = true, exclude_from_output = true },
]
```

Enabling a virtual field is done by providng a true value to the `is_virtual` property as
shown above.

This add properties to resolver inputs allowing you to pass additional data to the API
that is related to the entity but not data source specific.
