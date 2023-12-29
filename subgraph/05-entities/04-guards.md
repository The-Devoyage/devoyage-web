---
id: entity-guards
title: Entity Guards
---

## Entity Access with Guards

Limiting who can access an entity can be done by providing a `guard` at the entity level. As you can read about
in the guards section of this dicumentation, guards allow you to prevent access to the API quickly and easily.

Guards that evaluate to a truthy condition will prevent a request from being successful.

```toml
[[service.entities]]
name = "Espresso"

[[service.entities.guards]]
name = "invalid_name"
if_expr = '''
    input("query" "first_name") == "nick"
'''
then_msg = "Invalid Name - Permission Denied"
```

Guards have access to common or even custom contextual data that allows for unique authorization to be applied to
any service. Check out the Guards section of the docs to learn more.
