---
id: entity-data-source-from
title: Sourcing an Entity
---

## Specifying Entity Origin

_required_ if defined.

An entity will belong to the data source that is defined first by default but can be cusomized allowing you to
specify which data source should be used when resolving an entity.

To specify which data source an entity should be resoved from, use the `from` property with a value that matches
the `name` of a defined entity.

```toml
# Uses the first defined data source by default.
[[service.entities]]
name = "Cat"

# Entity From The Data Source with the name of "mongo_2"
[[service.entities]]
name = "Person"
[service.entities.data_source]
from = "mongo_2"


# Entity From The Data Source with the name of "mongo_3"
[[service.entities]]
name = "Dog"
[service.entities.data_source]
from = "mongo_3"
```
