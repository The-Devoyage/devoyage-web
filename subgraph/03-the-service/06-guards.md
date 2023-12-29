---
id: service-guards
title: Service Guards
---

[Guards](/subgraph/category/guards) can be applied at the service level, allowing guards to be shared for every entity and every operation. They are used to add fine
grained access control to a service.

Context applied at the service level becomes globally available to every property that uses the [`Expressions API`](/subgraph/category/expressions).

```toml
[[service.guards]]
name = "require_user"
if_expr = '''
  len(context("user.id")) == 0
'''
then_msg = "You must be logged in to perform this action."
[[service.guards.context]]
entity_name = "user"
query = '''
  {
    "get_users_input": {
      "query": {
        "uuid": {{user_uuid}}
      }
    }
  }
'''
variables = [
  [ "{{user_uuid}}", "token_data(\"user_uuid\")" ]
]
```
