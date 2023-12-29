---
id: field-guards
title: Field Guards
---

## Scoped Guards at the Field Level

Guards provide the capability to prevent access to the API based on custom conditions. Field guards
allow scoped access based on if a client request is utilizing the guarded field.

Applying a guard to a field can be done within the field configuration as shown below. Read more in the
Guards section to learn about how guards work in terms of how to check conditions to guard the service.

The following guard on the `password` property is only applied if the user includes the `password` field
within the selection set when performing queries or mutations, enabling guards to be applied conditionally
based on the fields the client requests.

```graphql
# The password field guard will not be checked.
query GetUser($get_user_input: get_user_input!) {
  get_user(get_user_input: $get_user_input) {
    identifier
  }
}

# Guards will be checked.
query GetUser($get_user_input: get_user_input!) {
  get_user(get_user_input: $get_user_input) {
    identifier
    password # Providing this selection set enables the guard below.
  }
}
```

Applying the Guard

```toml
[[entities]]
name = "user"
required = true
data_source = { from = "triceratask_ds", table = "subgraph_user" }
fields = [
  { name = "identifier", scalar = "String", required = true },
  { name = "password", scalar = "String", exclude_from_input = ["All"], guards = [
    { name = "Permissions Error", if_expr = "!every(input(\"query\", \"uuid\"), token_data(\"user_uuid\"))", then_msg = "You may not request pass keys that belong to other users." }
  ] },
]
```
