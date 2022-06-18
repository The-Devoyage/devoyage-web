---
id: intro
title: GraphQL Accounts
---

import SupportAlert from './\_support-alert.md';

<SupportAlert />

The Devoyage's GraphQL Accounts Service is a production ready Authentication API (Federated). Use this service to enable features such as Account Registration, Login, Password Reset, and 2fa within your API.

## Registration, Account Management and Authentication

This services provides everything needed to get an Accounts system up and running. Potential account holders may:

- Register new Account
  - Creates an `Account` object within the database to represent the account holder.
- Update Their Account
  - Reset their Password
  - Reset the 2fa Verification Status and Code
  - Update their Email
- Verify Their Account
  - 2fa Verification Codes
- Login To Their Account
  - Password based Verification
- Get Accounts
  - Get Authenticated Account
  - Get a filtered list of Accounts (admin only)

## Security For Your API

Accounts are a familiar part of any API. They grant and limit access to assets within your web application by allowing users to prove their identity before accessing protected data. To validate an account holder's identity, the user logs in using a standard password based authentication.

### Hashed and Salted Passwords

Passwords are hashed and salted before being stored in the database. This means that the plain text, readable, version is never saved to the database for higher security.

### Activation Statuses and 2fa

Every account has a `Activation` status. By default, new accounts are not 'active' until the account holder verifies their identity with two factor authentication. Each `Activation` property contains a verification code that is time sensitive. The user can submit the code provided when verifying their email to change the account to 'active'.

## Webhooks

As a user interacts with the API events trigger webhooks allowing you to trigger custom functions elsewhere in the Federated API. For example, when a user registers, the register webhook is fired containing the user's activation code. You can route these webhooks to a emailing service to send the activation code to the user.
