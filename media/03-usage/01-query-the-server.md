---
id: query-the-server
title: Query The Server
---

The server should sit behind a federated gateway. Query the gateway to query the server. Use the Apollo Sandbox for generated documentation on available resolvers and queries.

## Required Headers

All routes within this service require a `context` header to be passed with the request. The `context` header should be stringified JSON of the type Context. Be sure to include the `auth` property.

```ts
interface Context extends Record<string, any> {
  auth: {
    account: { _id: string; email: string } | null;
    user: {
      _id: string;
      role: number;
      email: string;
    } | null;
    isAuth: boolean;
  };
  // ...context
}
```

### Extended Properties/Required Services

The media service extends federated entities from external services. The following federated services and properties are required in order to run this service.

User

- \_id

If you want to run this service without the `User` entity, it is possible with minimal updating to the code base.
