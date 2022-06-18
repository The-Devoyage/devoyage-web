---
id: auth-flow
title: Auth Flow
---

Once you have the server up and running and understand the requirements to query the server, you can work trough the following Auth Flow.

## Auth Flow

1. Register an Account

- Using the gateway, send a request to the `register` resolver to register an account.

2. Verify The Account

- Again, use the gateway to send a request to the `verifyEmail` resolver in order to change the account activation status to active.

3. Login To The Account

- Once verified, the account holder may then may use the `login` resolver to authenticate.
