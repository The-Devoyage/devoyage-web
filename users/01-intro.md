---
id: intro
title: GraphQL Users
---

import SupportAlert from './\_support-alert.md';

<SupportAlert />

The Devoyage's `graphql-users` repository is a production ready "Users and Memberships" Micro Service used to start or extend any API. Enable features such as User Management, User Details, Account Memberships, and Roles simply by spinning up this service, or use it as a starter with custom modifications to fit your needs.

## User Details

Create, read, update, and delete data that is pertinent to your users such as names, addresses, phones, and more. This API allows you to store data that is associated with each user on a Mongo DB.

## Memberships

Memberships allow users to share assets within your API. An existing account id from your current API is used to scope user in terms of rights and roles. Long story short, users can share access to each others account after accepting/managing invitations.
