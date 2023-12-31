---
id: examples-guards
title: Guards
---

```toml
[service]
name = "espresso"
port = 3030
log_level = "debug"

# If the `Authorization` header does not have the value "12345", then deny access.
# Escape strings when using inline definitions.
[[service.guards]]
name = "invalid_access_key"
if_expr = "headers(\"Authorization\") != \"12345\""
then_msg = "Invalid Access Key - Permission Denied"

# If the `role` header does not have the value of "admin", then deny access.
[[service.guards]]
name = "invalid_role"
if_expr = "headers(\"role\") != \"admin\""
then_msg = "Invalid Role - Permission Denied"

[[service.data_sources]]
[service.data_sources.SQL]
name = "caffeine_data_source"
uri = "sqlite:/home/nickisyourfan/Desktop/DEV/dbs/caffeine.db"
dialect = "SQLITE"
[[service.data_sources]]
[service.data_sources.Mongo]
name = "beers_ds"
uri = "mongodb://sun:sun@127.0.0.1:27017/sun"
db = "sun"

[[service.entities]]
name = "Espresso"

[[service.entities.guards]]
name = "invalid_name"
# If the user searches by anything other than "nick" for the `name` property, then deny access.
# The input function returns an array, so make sure to use an array method to evaluate the expression.
if_expr = "!contains(input(\"query\" \"name\"), \"nick\")"
then_msg = "Invalid Name - Permission Denied"

[service.entities.data_source]
from = "caffeine_data_source"
[service.entities.data_source.resolvers]
[service.entities.data_source.resolvers.find_one]
[[service.entities.data_source.resolvers.find_one.guards]]
name = "invalid_age"
# No need to escape strings with multi line definitions.
if_expr = '''
    token_data("user_uuid") != "abcdefg"
'''
then_msg = "Permission Denied"

[[service.entities.fields]]
name = "id"
scalar = "Int"
required = true
exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]
[[service.entities.fields]]
name = "name"
scalar = "String"
required = true
guards = [
  {name = "id", if_expr = "headers(\"role\") != \"admin\"", then_msg = "Invalid Access - Field Level" },
]
[[service.entities.fields]]
name = "price"
scalar = "Int"
required = true
list = false
guards = [
  {name = "price", if_expr = "headers(\"user_id\") != 1", then_msg = "Access Denied - You do not have permission." },
]
[[service.entities.fields]]
name = "available"
scalar = "Boolean"
required = true
```
