---
id: required-entities
title: Required Entities
---

## Nullable vs Non Nullable Entities

Entities are nullable by default in Subgraph, allowing the API to return `null` as a
valid result. This can be changed by providing a truthy value to the `reuqired` field
when defining an entity.

```toml
[[service.entities]]
name = "user"
required = true
fields = [
    ...
]
```
