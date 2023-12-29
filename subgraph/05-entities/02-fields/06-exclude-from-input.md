---
id: exclude-from-input
title: Exclude Input Proprerties
---

## The Exclude From Input Field

While designing APIs, it might be needed to exclude certain properties
from graphql inputs for security or access reasons.

For example, you may not want to allow a user to update specific properties that
should stay consistent throughout the API process.

By providing options to this string array, you can effectivly limit input types from
containing the field property.

```toml
# Exclude ID from All Inputs.
[[entities]]
name = "user"
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"] }
]
```

### Exclude "All"

Passing the value `"All"` to the `exclude_from_input` property allows users to
exclude a value from every related graphql input.

```toml
# Exclude ID from All Inputs.
[[entities]]
name = "user"
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["All"] },
  { name = "first_name", scalar = "String", required = true }
]
```

```graphql
# The schema generated:
input get_user_input {
  first_name: String!
}
```

### Exclude Custom

You can also specify which inputs to exclude a the field from.

The following example removes the capability to provide a custom `id` when Creating,
or Updating a user.

```toml
# Exclude ID from All Inputs.
[[entities]]
name = "user"
fields = [
  { name = "id", scalar = "Int", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"] },
  { name = "first_name", scalar = "String", required = true }
]
```
