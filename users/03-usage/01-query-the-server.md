---
id: query-the-server
title: Query The Server
---

Querying this server is easy and only requires a single header to be present with each request.

The server should sit behind a federated gateway. Query the gateway to query the server. Use the Apollo Sandbox for generated documentation on available resolvers and queries.

## The Context Header

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
  // ...your context
}
```

## Roles and Identity

As you see above, the `context` header provides the service with information about the authorized user's role and identity. Authorization should take place in the Gateway, as this service does not handle authorization.

While the user and account `_id` and `email` properties remain fairly straight forward, the `role` property must conform a bit to integer standards.

- Admin === 1
- General User === 10

## Extended Properties/Required Services

The users service extends federated entities from external services. The following federated services and properties are required in order to run this service.

Account

- \_id
- email

Media

- \_id

You may manually remove the entities, if not needed.
