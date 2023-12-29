---
id: default-values
title: Default Values
---

## Providing Default Values

APIs often provide dynamic default values when creating or updating an entity. These values can be passed
using the `default_value` option.

```toml
[[entities]]
name = "profile"
required = true
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"] },
  { name = "url", scalar = "String",  default_value = "www.placeholder-website.com" },
]
```

Default values use `evalexpr`, a popular rust crate, to calcaulate the value dynamically based on the context
of a request using the same API as Guard Expressions.
