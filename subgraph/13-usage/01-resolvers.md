---
id: resolvers
title: Resolvers
---

Once running, Subgrpah exposes several methods to interact with data within your API. There are one or more
ways to Create, Read, and Modify data.

## Methods of Interaction

Subgraph creates and optionally exposes five resolvers for each entity defined. Each resolver is created
using a logical functioin name combining the action with the entity name.

Replacing `x` with the name of the entity, the resolvers are as followed:

- Create One - `create_x`
- Find One - `find_x`
- Find Many - `find_xs`
- Update One - `update_x`
- Update Many - `update_xs`

### Creating a Query

With this automated naming convention, writing queries becomes predictable and intuitive.

```graphql
{
    query GetUser($get_user_input: get_user_input) {
        get_user(get_user_input: $get_user_input) {
            first_name
            last_name
        }
    }
}
```
