---
id: guard-name
title: Guard Name
---

## Name

_required_

The guard name serves the purpose of being able to identify an error when received.

```toml
[[entities.data_source.resolvers.find_one.guards]]
name = "access_revoked"
if_expr = '''
  contains(context("todo_access.revoked"), true)
'''
then_msg = "Your access to this task has been revoked."
```

The resulting error object will be built around this defined `name`.

```json
{
  "access_revoked": "Your access to this task has been revoked."
}
```
