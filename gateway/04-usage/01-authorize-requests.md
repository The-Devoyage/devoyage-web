---
id: authorize-requests
title: Authorize Requests
---

Once you have your server up and running, you can now start to send requests. Each request sent to the server is automatically provided with an authorization status which can be used throughout the Federated API.

## The Status Object

All requests which travel through the gateway are provided with the useful `auth` context including the authorization status itself (`isAuth`), and the token payload.

Notice the `account` and `user` properties. If your token stores data that matches these properties, it will automatically populate the data within the context.

Any additional data from the JWT is also automatically added to the payload property of the `AuthContext` object.

```ts
interface AuthContext {
  payload: {
    account: { _id: string; email: string } | null;
    user: { _id: string; role: number; email: string } | null;
    // ...custom token data
  };
  isAuth: boolean;
}
```

## Authorized Requests

To create an authorized request, you must provide a little bit of configuration in addition to the JWT itself.

1. When setting up the environment variables of the service, you must provide the `JWT_ENCRYPTION_KEY` property. Use the same key that encrypted the token it is also possible to use a public decryption key.
2. When sending requests, include the JWT inside the `Authorization` header of the request.

```
Authorization: Bearer $TOKEN
```

That's it! You don't have to configure anything else. The server is now smart enough to authorize request with valid tokens.

## The Token

While this service does not provide methods to create JWTs, you can use the `@the-devoyage/micro-auth-helpers` library to easily create tokens for this service. In addition, this service also uses the same library to verify and decrypt the token.

## Access The Authorization Status

From within the external connected Federated Service, the authorization status is available from within the context object inside a Resolver.

```ts
// Accounts Service

getMyAccount: async (_parent, _args, context) => {
  const authContext = context.auth;

  if (!authContext.isAuth) {
    throw new Error("NOT AUTHENTICATED!");
  }

  // ...get account
};
```
