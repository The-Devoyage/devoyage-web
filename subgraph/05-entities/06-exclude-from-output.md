---
id: exclude-from-output
title: Exclude From Output
---

## The `exclude_from_output` Entity Configuration

Pass a truthy boolean to disable an entity from being able to be resolved.

```toml
[[service.entities]]
name = "coffee_order"
exclude_from_output = true
fields = [
    ...
]
```
