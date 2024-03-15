---
id: resolver-inputs
title: Resolver Inputs
---

Now that you understand which resolvers are created for each entity and how to call them, you might want to dive
deeper into what options you have to pass to the resolver.

## Generated Inputs

Each resolver generates unique inputs per entity, allowing consistent interface for all similar resolver methods.

Like resolvers, the naming conventions are derived from the action being performed followed by the entity name.

Replacing `x` with the entity name, the following inputs are generated.

- Find One Input - `get_x_input`
- Find Many Input -`get_xs_input`
- Create One Input - `create_x_input`
- Update One Input - `update_x_input`
- Update Many Input - `update_xs_input`

## Query and Values

Within the input, depending on the resolver type, there are three objects that can be used to direct the interaction
with the API.

- query - Used to provide search terms. For Find and Update Inputs.
- values - Used to provide new data to update or create. For Create and Update Resolver Inputs.
- opts - Used to provide additoinal details regarding sorting and pagination. For Find Many Resolver Inputs.

### The Query Input

The query input is available within any Find and Update Resolver Inputs. It is used to specify which database items
should be processed.

The root of the input takes the shape of the entity itself and includes any fields that are defined in the Entity Field Config.
Note, you can remove fields from the input by specifying the [exclude_from_input](/subgraph/entities/fields/exclude-from-input) configuration.

By taking the shape of the entity itself, it allows you to search for any entity by any field that it contains. Additionally,
subgraph appends filtering operators to each query input, allowing you to sculpt intricate and specific queries.

Take for example the following entity:

```toml
[[service.entities]]
name = "student"
fields = [
    { name = "id", scalar = "Int", required = true },
    { name = "name", scalar = "String", required = true },
    { name = "status", scalar = "Boolean", required = true },
    { name = "extra_curricular", scalar = "Boolean" }

]
```

The entity above will prompt subgraph to generate the following graphql input:

```graphql
input get_student_query_input {
  id: Int
  name: String
  status: Boolean
  extra_curricular: Boolean
  # ... Filtering Methods
}
```

_Note, required fields become optional for query inputs_

Providing more than one property in a query input will result in an operation based on finding results that match
all provided properties. In short, it is an `AND` operation.

_Example:_

Query for students that have a status of true AND extra_curricular is false.

```json
{
    status: true
    extra_curricular: false
}
```

**Filtering Methods**

Additional filters are provided for any input that interface with multiple results, such as Find Many Inputs and Update
Many Inputs.

- AND - Array of query inputs. All conditions must match.

_Example:_

Query for students that have a status of true AND extra_curricular is false.

```json
{
  "AND": [{ "status": true }, { "extra_curricular": false }]
}
```

- OR - Array of query inputs. Any condition must match.

_Example:_

Query for students that have a status of false OR extra_curricular is true.

```json
{
  "OR": [{ "status": false }, { "extra_curricular": true }]
}
```

- LIKE - Object of entity fields. String provided must be similar.

The LIKE operator enables full access to native filtering provided by your database. In SQL it uses
the wildcard syntax, while in Mongo, it uses the Regex Syntax.

_Example:_

Query for students that starts with "Jo".

```js
// SQL
{
  "LIKE": { "name": "Jo%" }
}

// Mongo
{
    "LIKE": { "name": "/Jo/i" }
}
```

- GT/LT - Object of entity fields. Matches if result field is greater or less than provided value.

_Example:_

Query for students that have an id greater than 400

```json
{
  "GT": {
    "id": 400
  }
}
```

### Combining Filters

You can mix and match filter inputs in a nested fashion.

```json
{
  "AND": [{ "GT": { "id": 400 } }, { "LT": { "id": 600 } }]
}
```

### The Values Input

The values input is available for Update and Creation Resolvers. It allows you to specify the values that represent
for updating and creating an entity.

The values input takes the initial shape of the Entity using the Fields as the keys. Similar to the query input,
you may exclude values using the [exclude_from_input](/subgraph/entities/fields/exclude-from-input) property.

For example, the following entity definition:

```toml
[[service.entities]]
name = "student"
fields = [
    { name = "id", scalar = "Int", required = true, exclude_from_input: [ "All" ] },
    { name = "name", scalar = "String", required = true },
    { name = "status", scalar = "Boolean", required = true },
    { name = "extra_curricular", scalar = "Boolean" }

]
```

Will create the following values input.

```graphql
input get_student_values_input {
  name: String!
  status: Boolean!
  extra_curricular: Boolean # Optional
}
```

### The Options Input (Opts)

The Options Input is a special input that exists when interacting with resolvers that all interaction with finding
or updating multiple records in a database at once. This includes the Find Many and Update Many resolvers.

It includes options to help paginate and sort data including the following:

- per_page - Provide a positive number to limit results that are returned from the API or provide `-1` to include all
  results found. Defaults to 10.
- page - Provide a page number to paginate through results.
- sort - An array of type `sort_input`, which allows you to specify the field to sort by and the direction to sort.

```json
{
  "per_page": 20,
  "page": 2,
  "sort": [
    { "field": "id", "direction": "ASC" },
    { "field": "name", "direction": "DESC" }
  ]
}
```
