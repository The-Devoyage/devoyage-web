---
id: exclude-from-output
title: Exclude From Output
---

## The Response Object

After execution, Subgraph returns the entity to the user. It may be desired to
exclude sensitive or private information from ever leaving the API.

This can be done by providing a truthy value to the `exclude_from_output` property.

The `exclude_from_output` property allows you to specify if the field can be resolved. You may choose to use this to
ensure private data is not included in the response object.

For example, you may want to specify an ID property and a UUID property. The ID property would remain as an internal
identifier while allowing a shareable identifier to be released to the client side application.

```toml
{ name = "id", scalar = "Int", required = true, exclude_from_output = true  }
{ name = "uuid", scalar = "Int", required = true }
```
