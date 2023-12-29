---
id: guard-data-context
title: Data Context
---

When working with guards, it is often required to interact with data associated with the action being performed. Data Context allows reference to
various data sources and entities when executing operations.

Data Context allows you to define what data to make available to the guard when evaluating the expression that determines if the request should be denied or not.

An example use case would be to check the role of a user before allowing the user to perform an update operation on an entity. The user role is not found in the provided
context by default, as it is a custom entity from a custom data source, defined in the service.

In order to interact with this external data, define a context property on any guard to fetch the data before the guard evaluation, making it possible to interact with virtually any data
that the API has access to.

## Context Basics

Context definitions may be appended to any guard, regardless of the location. Defining context involved providing three to four instructions including the `entity_name` to
reference which entity should be referenced, the `name` to define custom reference for the dataset in the event the same entity needs to be querieied multiple times,
and the graphql query with dynamic variables to reference the correct query.

Once defined, context is made available to any subsequent guard or evaluation.

```toml
# Define a guard to check if a "connection" already exists.
[[entities.data_source.resolvers.create_one.guards]]
name = "already_connected"
  # Check if the length of the connections found and deny if it is greater than 0.
  # Use the built in context function to extract the data needed to check this operation.
if_expr = '''
  len(context("connection.id")) > 0
'''
then_msg = "You are already connected with this user."

# Below we define the context property.
[[entities.data_source.resolvers.create_one.guards.context]]
# The entity to fetch
entity_name = "user_connection"
# A custom name to reference the data.
name = "connection"
# The query to be performed to fetch the data.
query = '''
  {
    "get_users_input": {
      "query": {
        "AND": {{uuid}}
      }
    }
  }
'''
# Dynamic variables to inject into the query.
variables = [
  ["{{uuid}}", "input(\"values\", \"user_uuid\")"]
]
```

### Entity Name

_required_

First, choose which entity needs to be referenced for the guard context. The `entity_name` needs to match an existing entity from the defined service.

```toml
[[entities.data_source.resolvers.create_one.guards.context]]
entity_name = "user_role" # Provide the entity name.
query = '''
    ...
'''
variables = []
```

### Custom References and Multiple Contexts

When working with multiple contexts that query the same entity, it might be needed to reference the results by a custom name when accessing the contextual data
inside the guard's evaluation phase.

Below we define multiple contexts that reference the same `user_role` entity allowing the guard to reference multiple roles.

```toml
[[entities.data_source.resolvers.create_one.guards.context]]
entity_name = "user_role"
name = "logged_in_user_role"
query = '''
    ...
'''
variables = [
    ...
]
[[entities.data_source.resolvers.create_one.guards.context]]
entity_name = "user_role"
name = "new_role_being_created"
query = '''
    ...
'''
variables = []
```

### The `query` Object

_required_

This string allows you to construct a dynamic query for the entity. The response data is what is injected into the data context.

This string does not support expressions but does support variable injection.

_Note: The query functions exactly the same as a query you would generate for the graphql client side. Use the generated docs to help
write your query. It must be valid JSON._

```toml
[[entities.data_source.resolvers.create_one.guards.context]]
entity_name = "user_role"
name = "new_role_being_created"
query = '''
  {
    "get_user_roles_input": {
      "query": {
        "role_name": "admin"
      }
    }
  }
'''
variables = []
```

### Dynamic Variables

_required_

This required array/vector of tuples is used to dynamically replace variables in the query before execution. It may be left empty if no variables are defined.

Populate the array with a tuple containing two values.

- Target - A string providing the text to replace with the result of the expression below.
- Expression - Use the complete [Expression API](/subgraph/category/expressions) that returns a value of any type to inject into the query. Using the Expression API
  allows you to utilize all built in functions and capabilities to target data specific to the request.

```toml
[[entities.data_source.resolvers.create_one.guards.context]]
entity_name = "user_role"
name = "new_role_being_created"
query = '''
  {
    "get_user_roles_input": {
      "query": {
        "role_name": {{role}}
      }
    }
  }
'''
variables = [["{{role}}", "\"admin\""]] # Note the tuple syntax.
```

#### Working With Tuples

As shown above, the second value of the variable tuple is an Expression that utilizes the Subgrpah Expression API. This API allows any type of data to be returned
including tuples which are similar to arrays of primitive types.

**Important -
Constructing a query that is compatible with tuples is automated. Tuples are transformed automatically into an objects with the target as the key of the object and the expression result as the value.**

```toml
[[entities.data_source.resolvers.update_many.guards]]
name = "already_revoked"
if_expr = '''
  is_revoked = contains(context("user_connection.revoked"), true);
  is_revoked
'''
then_msg = "You cannot revoke a connection that is already revoked."
[[entities.data_source.resolvers.update_many.guards.context]]
entity_name = "user_connection"
query = '''
  {
    "get_user_connections_input": {
      "query": {
        "OR": {{uuid}}
      }
    }
  }
'''
variables = [
  ["{{uuid}}", "input(\"query\", \"uuid\")"]
]
```

In the example above, we have a few goals:

1. Using a guard, determine of the `user_connection` has already been 'revoked'. If truthy, return an error.
2. Before we can determine the revoked status, the guard needs to be provided with the entity that needs checked. Use context to get the entity.
3. The `input` function, used in the `variables` expression will return a array of UUIDs that are being edited. These come from the input query object provided from the client.
4. Use the query filters, such as the `OR` filter, which supports arrays, to determine which connections are being edited before the execution of the mutation.

The syntax above automatically parses the query making it easy to pass data directly from the graphql input provided into the guard context query. The result will be as shown below:

```json
{
  "get_user_connections_input": {
    "query": {
      "OR": [{ "uuid": "abcdefg" }, { "uuid": "12345" }]
    }
  }
}
```

This allows dynamic context based on the input provided from the clientside application. The guard then can use the results to determine if the request is allowed to be processed.
