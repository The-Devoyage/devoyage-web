---
id: list-fields
title: List Fields
---

### List

A list allows the API to resolve arrays of data rather than a single primitive value. This is mainly used for Mongo
and HTTP Data Sources which support returning arrays of values. This can also be used when working with associations.

```toml
{ name = "comments", scalar = "String", list = true }
```
