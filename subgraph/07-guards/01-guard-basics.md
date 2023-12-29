---
id: guard-basics
title: Guard Basics
---

## Fine Grained Access Control

Guards empower you to establish rules that control access based on custom conditions. At its core,
a guard is a boolean expression. If the expression evaluates to a truthy condition, the request is denied.

```toml
[[service.guards]]
# Register a guard name.
name = "require_user"

# Define the boolean expression.
if_expr = '''
  len(context("user.id")) == 0
'''

# Provide an error message.
then_msg = "You must be logged in to perform this action."
```

In the provided example, the guard checks the length of the user ID in the context. If the length is 0,
the expression evaluates to true, blocking the request.

Guards exhibit exceptional versatility and can be invoked at various points during the request lifecycle.

## The Request Lifecycle and Guards

A request undergoes guarding at multiple stages of resolution, enabling you to position guards according to the desired level of restriction.

Guards placed early in the request lifecycle imply a broader, more global restriction, while those invoked
later are employed for finer-grained restrictions.

### Service Guards

Service Guards take the lead in evaluation and enforcement, making them valuable for implementing global access restrictions.

### Entity Guards

Entity Guards, specific to an entity, are applied universally across resolver types. This allows for the application of generalized guards for actions such as finding, creating, and updating.

### Resolver Guards

Resolver Guards are evaluated based on resolver types, enabling access restrictions tailored to specific actions, such as creating, finding, or updating.

### Field Guards

Field Guards come into play when the client requests a field in the selection set while creating the query or mutation. They are useful for implementing guards based on whether a client requests specific fields.
