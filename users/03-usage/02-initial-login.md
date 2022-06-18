---
id: initial-login
title: Initial Login
---

Use the resolver, `loginUser`, to login a known or unknown user.

- User is automatically created at initial login.
- Membership to account is automatically created.
- JWT is issued using the package, `the-devoyage/micro-auth-helpers`.

```graphql
mutation LoginUser($loginUserInput: LoginUserInput!) {
  loginUser(loginUserInput: $loginUserInput) {
    token
    user {
      _id
    }
  }
}
```
