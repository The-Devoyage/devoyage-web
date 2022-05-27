---
id: gateway-usage-configure-context
title: Configure Context
---

Context is a fancy word for relevant data. The GraphQL Gateway is pre-built with methods in order to easily create and share context globally with the entire Federated API.

## Context From Headers

Extract data from incoming request headers and have it shared with the entire Federated API by providing the key names of the headers you want to share to the Gateway Context Helper provided by `@the-devoyage/micro-auth-helpers`.

```ts
// Gateway/server.ts

const apolloServer = new ApolloServer({
  gateway,
  context: async ({ req }) =>
    await Helpers.Gateway.GenerateContext({
      headers: ["Content-Type", "Authorization", "CustomKey"], // Provide they key names here.
      req,
    }),
});
```

## Custom Global Context

Inject custom context to share unique data globally within the API.

```ts
// Gateway/server.ts

const apolloServer = new ApolloServer({
  gateway,
  context: async ({ req }) =>
    await Helpers.Gateway.GenerateContext({
      req,
      inject: {
        bigDog: "Bongo",
        smallDog: "Oakley",
      },
    }),
});
```

## Access Context Data

Now you may access these data points from anywhere within the Federated API.

```ts
// Accounts Service

getMyAccount: async (_parent, _args, context) => {
  const token = context.Autorization;
  const customKey = context.CustomKey;
  const bigDog = context.bigDog;
};
```
