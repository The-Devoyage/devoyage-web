---
id: required-fields
title: Required Fields
---

## Required

_optional_

Required fields play an important role in designing an API. Marking a field as `required` shapes how a few resolvers
are created.

Required fields make non nullable input fields for graphql mutation inputs when using create resolvers. In short,
doing so makes a field required when creating entities using the Subgraph API. Additionally it tells
subgraph that the datasource is expected to return a valid value.

```toml
[[service.entities]]
name = "Comment"
fields = [
  { name = "id", scalar = "Int", required = true },
]
```
