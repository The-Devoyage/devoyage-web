---
id: field-scalar
title: Scalar Types
---

## Field Scalar Types

_Required_

A scalar describes the associated data type for the field, such as an integer or string. In addition
to the `name` property, scalar type is required to define a field.

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "id", scalar = "Int" }
]
```

There are many scalar types that subgraph supports.

### String Scalar

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "description", scalar = "String" }
]
```

### Integer Scalar

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "id", scalar = "Int" }
]
```

### Boolean Scalar

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "is_visible", scalar = "Boolean" }
]
```

### DateTime Scalar

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "created_at", scalar = "DateTime" }
]
```

### UUID Scalar

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "uuid", scalar = "UUID" }
]
```

### ObjectID Scalar

```toml
[[service.entities]]
name = "Comment"
fields = [
    { name = "_id", scalar = "ObjectID" }
]
```

### Object Scalar

The object scalar is a unique scalar for Mongo and HTTP Data Sources. It allows for nested
extensions to an entity.

To define a field that is an object, you must provide a nested array of fields to describe the
object, as shown below.

```toml
[[service.entities]]
name = "User"
fields = [
    { name = "address", scalar = "Object", fields = [
        { name = "first_line", scalar = "String" },
        { name = "second_line", scalar = "String" },
        { name = "zip_code", scalar = "Int" },
        { name = "city", scalar = "String" },
        { name = "state", scalar = "Int" },
    ] }
]
```
