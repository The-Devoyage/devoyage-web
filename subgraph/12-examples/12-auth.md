---
id: examples-webauthn-auth
title: WebAuthN & Auth API
---

```toml
[service]
name = "auth"

[[service.data_sources]]
[service.data_sources.Mongo]
name = "users_data_source"
uri = "mongodb://user:pass@127.0.0.1:27017/subgraph_mongo"
db = "my_db"

[service.auth]
requesting_party = "localhost"
requesting_party_name = "demo"
requesting_party_origin = "http://localhost:8000"
data_source = "users_data_source"

[[service.entities]]
name = "product"
fields = [
  { name = "_id", scalar = "ObjectID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]},
  { name = "name", scalar = "String", required = true },
  { name = "created_by", scalar = "UUID", required = false },
]


# Only the user who created the product may query or mutate the product.
[[service.entities.guards]]
name = "not_owned"
if_expr = "token_data(\"user_uuid\") != input(\"created_by\")"
then_msg = "Permission Denied - You can only manage your own user."
```
