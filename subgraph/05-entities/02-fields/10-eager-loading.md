---
id: eager-loading
title: Eager Loading
---

## Advanced Filtering with Eager Loading

Subgraph offers the ability to pass the `eager` property to a field in order to enable
a filtering capability called Eager Loading.

What exactly is "Eager Loading"?

Associations and extensions allows the ability to fetch data that is related to an entiy.

- For example, you may search for a user and also include the comments associated with the user.

Eager loading allows you to search for an entity by the fields of a related entity.

- For example, you may search for a user that has a comment that has a title of "Post 123".

Enable eager loading by passing a true value to the eager property:

### Enabling Eager Loading

First, ensure the entity is associated to another entity by providing the association properties
`as_type`, `join_on`, and optionally `join_from`.

Then pass a true value to `eager`.

**Eager loaded associations must belong to the same data source as the parent entity.**

```toml
[[service.entities.fields]]
name = "access"
scalar = "Int" # While access is an integer in the database....
as_type = "todo_access" # We will search by the properties of an actual access object.
list = true
required = true
join_on = "todo_id"
join_from = "id"
eager = true
```

### After Enabling

Once you have configured eager loading, you will see a few changes in the schema.

The input of the eager loaded entity will now change types from the originally defined
scalar type to an object containing the keys of the eager loaded entity.

You may now send queries for FindOne and FindMany to search for entities based on the properties of
another entity.

```js
// Without Eager Loading
const response = await query(GET_TODOS, {
  query: {
    completed: false,
    access: 12345, // Access is of type INT without eager loading.
  },
});

// With Eager Loading
const response = await query(GET_TODOS, {
  query: {
    completed: false,
    // Access is of type `access` with eager loading.
    access: {
      user: {
        uuid: userUuidVar(),
      },
      revoked: false,
    },
  },
});
```

### The Outcome

Eager loading is a fancy word for creating a `JOIN` in sql or `$lookup` in mongo, which is why
eager loaded associations must belong to the same data source as the parent entity.
