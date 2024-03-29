---
id: examples-mysql
title: Simple MySQL
---

```toml
[service]
name = "cars"
port = 3031
log_level = "debug"

[[service.data_sources]]
[service.data_sources.SQL]
name = "cars"
uri = "mysql://user:pass@localhost:3306/cars"
dialect = "MYSQL"

[[service.entities]]
name = "Car"
[service.entities.data_source]
from = "cars"
table = "cars"

[[service.entities.fields]]
name = "id"
scalar = "Int"
required = true
exclude_from_input = ["CreateOne", "UpdateOne"]

[[service.entities.fields]]
name = "is_available"
scalar = "Boolean"
required = true

[[service.entities.fields]]
name = "price"
scalar = "Int"
required = true

[[service.entities.fields]]
name = "brand"
scalar = "String"
required = true
```
