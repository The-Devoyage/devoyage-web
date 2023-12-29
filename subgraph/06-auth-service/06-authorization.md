---
id: authorization
title: Authorization
---

Once the auth service is enabled, a biscuit token is required in order to send query or mutation
requests to any and all of the resolvers in the Subgraph API.

## Utilizing the Biscuit Token

In the last chapter, we discussed how to authenticate a user. Once authenticated,
the service provides a "biscuit" token, which functions similarly to a JWT based
authentication.

This token is attached to subsequent network requests in order to allow the identified
user to access private resolvers.

### The Authorization Header

Attach the received token to the authorization header in order to access the API.

```
# Headers
Authorization: $TOKEN
Content-Type: application/json
```
