---
id: associations
title: Associations
---

## Extending an Entity

One of the most powerful concepts with GraphQL is the ability to create associations between almost
any entity.

Create associations with Subgraph by providing two to three properties to the field configuration to describe
the association.

```toml
[[service.entities.fields]]
name = "created_by" # A custom name
scalar = "Int" # The type of the reference.
as_type = "user" # The name of the entity to associate.
join_on = "todo_id" # The property on the entity of which to associate with.
join_from = "id" # The property from the parent entity.
```

### As Type

The `as_type` field is required when extending an entity. This field must be equal to the `name` value of any other
entity in the subgraph config, regardless of data source.

### Join From

The `join_from` field is used to determine the source key of which to use in order to associate the current entity to
the foreign entity. This is an optional property, which defaults to the current field name if not provided.

### Join On

The `join_on` field references the property of which will be equivalanet to the `join_from` field.

### Querying

Once the `join_on` and `as_type` fields have been defined, with the optional `join_from` field, you can then
query data of associated entities within a single network request.

The following query returns "todos" extended by a user on the `created_by` property.

```graphql
query TodosListGetTodos($get_todos_input: get_todos_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    uuid
    created_by(created_by: $get_user_input) {
      uuid
      identifier
      profile_img
    }
  }
}
```
