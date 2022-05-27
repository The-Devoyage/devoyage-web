---
id: accounts-features-manage
title: Manage Accounts
---

The GraphQL Accounts service allows users to manage aspects of their account securely. Admin level users are may edit any account, while account owners my only edit their own.

## Reset Password

Resetting a password is similar to the registering process. The user provides an activation code along with a new password in order to update the account password. The new password is never saved as plain text. Instead it is hashed and salted before being stored in the database.

## Update Email

The email is a unique account identifier. If a user must update the email, their account will also be updated with a non-active status. Account holders may not sign into accounts that are not active until they are re-verified.

## Reset Activation

Updating or requesting a new activation code is easy for any user to do. If the activation code is updated, the user must re-verify their account before logging in.
