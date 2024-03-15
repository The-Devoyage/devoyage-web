---
id: built-in-functions
title: Built In Functions
---

## Subgraph Provided Functions

Subgraph extends the built in functions provided by the EvalExpr crate in order to allow you to interact with data in relation to the context of a request. This
enables expressions to be constructed based conditionally on data from the API and the user performing the request.

### The `headers` Function

Extracts a singluar value from the headers of a request to use in an expression. Provide the key of the header property that should be extracted.

**Usage:**

- `input("Authorization")`
- `input("Content-Type")`

Returns a string value.

### The `input` Function

Extracts a vector or tuple of values that come from the client provided graphql input. Provide the root object and the key of the input value to be extracted.

Since input objects may define more than one of the same value, this function extracts all occurrences into a vector/array.

```json
{
  "get_users_input": {
    "query": {
      "OR": [{ "title": "Hello" }, { "title": "World" }]
    }
  }
}
```

- `input(\"query\", \"comments.title\")`

Returns a vector of values. For example: `["Hello", "World"]`.

_Note: Syntax is subject to change to a single argument with dot separated notation in future update. Currently you must specify if the
value should originate from the query input or values input._

### The `token_data` Function

Extracts a single value from the auth `token_data`. Provide the key of which vale you wish to extract.

**Usage:**

- `token_data("user_uuid")`
- `token_data("identifier")`

Returns a single string value.

### The `resolver_type` Function

Returns the action being performed based on the type of resolver.

**Usage:**

- `resolver_type() == "FindOne"`
- `resolver_type() == "FindMany"`
- `resolver_type() == "UpdateOne"`
- `resolver_type() == "UpdateMany"`
- `resolver_type() == "CreateOne"`

### The `context` Function

Extracts a vector or tuple of values that come from the guard generated context.

**Usage:**

- `context("user.id")`

The key passed in as an argument needs to match the `name` of the given [guard context](/subgraph/guards/guard-data-context) that is defined with the associated guard.

Returns a vector of values associated with the key provided, in similar fashion to the input function shown above.

### The `now` Function

Returns a `datetime`.

**Usage:**

- `now()`

### The `uuid` Function

Returns a `uuid`

**Usage:**

- `uuid()`
