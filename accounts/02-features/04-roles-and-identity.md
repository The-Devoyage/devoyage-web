---
id: query-the-server
title: Roles and Identities
---

This server limits access by roles. Admin have more power than general users, as it should be.

## Roles and Identity

Each request that enters the server will have a `context` header that allows or denies access to aspects of this API based on the supplied `role` property.

The simple header is an easy way for you to provide the relevant information needed to approve or deny access.
