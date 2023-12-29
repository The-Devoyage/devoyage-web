---
id: field-name
title: Field Name
---

## Field Name

_Required_

The field name represents a sql column name, the name of a property of a mongo document, or even a property of a
response from a HTTP Data Source.

By default, the name must match the database reference as instructed above. That being said, it is possible to remap
a name to a column or document property. Use the Entity Data Source Configuration if you need to rename
or map fields from the API to the Database.

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "id", scalar = "Int" }
]
```
