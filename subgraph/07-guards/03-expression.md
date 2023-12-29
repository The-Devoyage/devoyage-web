---
id: guard-expression
title: Expressions & Conditions
---

## Evaluating Conditions

As discussed in [guard basics](./01-guard-basics.md), guards should evaluate to a boolean. Truthy conditions result in a denied request.

### The `if_expr` Property

_required_

When building a guard, it is required to create an [expression](/subgraph/expressions/eval-expr) that can be evaluated. This is done by providing a valid expression that returns a boolean.

Define the expression from the `if_expr` key.

```toml
[[entities.data_source.resolvers.find_many.guards]]
name = "require_access_revoked_false"
if_expr = '''
  contains(input("query", "access.revoked"), "true")
'''
then_msg = "You do not have permission to view revoked tasks. Provide input value `acceess.revoked` as a false value."
```
