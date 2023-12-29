---
id: entity-data-source-resolvers
title: Resolvers Specific Options
---

## Entity Resolver Configuration

Configuration that is specific to a resolver can be configured with the `resolvers` property. This is useful when applying unique
endoits for specific resolvers, or adding guards that should only be enforced for specific resolvers.

In GraphQL and Subgraph, a resolver is related to an action such as Finding, Creating, or Updating.

```toml
[[service.entities.data_source.resolvers.find_one.guards]]
name = "require_access_user_uuid"
if_expr = '''
  !every(input("query", "access.user.uuid"), token_data("user_uuid"))
'''
then_msg = "You do not have permission to view this task. Provide input value `acceess.user.uuid`."
```

## Resolvers and Options

You may apply the following options to any of the available resolvers:

```toml
# Find One Options
[[service.entities.data_source.resolvers.find_one.guards]]

# Find Many Options
[[service.entities.data_source.resolvers.find_many.guards]]

# Create One Options
[[service.entities.data_source.resolvers.create_one.guards]]

# Update One Options
[[service.entities.data_source.resolvers.update_one.guards]]

# Update Many Options
[[service.entities.data_source.resolvers.update_many.guards]]
```

### Resolver Guards

[Guards](/subgraph/category/guards) can be applied to specific resolvers, allowing you to have unique guards for unique actions.

### Search Query

_HTTP Data Sources Only_

```toml
[service.entities.data_source.resolvers]
[service.entities.data_source.resolvers.find_many]
search_query = [["userId", ":userId"], ["completed", ":completed"]] #Append Search Query to Path for HTTP Data Sources.
```

### Path

_HTTP Data Sources Only_

```toml
[service.entities.data_source.resolvers]
[service.entities.data_source.resolvers.find_one]
path = "/:id"  # Converts the ID property from the GraphQL Input into the ID Path Parameter for HTTP Data Sources.
```

### Method

_HTTP Data Sources Only_

Override the default applied method to a HTTP Resolver.

```toml
[service.entities.data_source.resolvers]
method = "Post"
```
