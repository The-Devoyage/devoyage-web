---
id: guard-messages
title: Error Messages
---

## Explaining the Problem

_required_

When a guard disables access it is required to describe the problem that was encountered. You can do this by providing a message for the `then_msg` property.

```toml
[[entities.data_source.resolvers.update_one.guards]]
name = "not_found"
if_expr = '''
  todo_id = context("todo.id");
  len(todo_id) == 0
'''
# Providing a message informs the user of the API what is wrong, so they may attempt to fix the problem themselves.
then_msg = "Todo does not exist"
```

The provided message is injected as a key value pair in the response.

```json
{
  "not_found": "Todo does not exist"
}
```
