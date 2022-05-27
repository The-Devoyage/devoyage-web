---
id: accounts-features-authorization
title: Authentication Features
---

Authentication is the act of proving identity, and the GraphQL Accounts service comes with the authentication features that you would expect within any modern API.

## Register Accounts

Anyone may register/create an `Account`. To create an account the potential account holder only needs to provide an email and a password.

## Verify Account

By default, accounts are not created with an active status, which is require to login! The user needs to prove their identity by providing a secret code during the verification process.

## Login Account

Once verified, the account holder may log in to their account. Logging in provides the account holder with a JWT that can later be used to prove identity throughout the API.
