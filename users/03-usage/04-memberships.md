---
id: memberships
title: Memberships
---

Users may manage multiple accounts within the API. Each account that the user may access shows up in the memberships property of user document.

## Invite Users or Remove Users From an Account

Invite users by using the `updateUser` mutation. Include the memberships variable with a status of `PENDING` to invite the user to join your account.

You may always set the status to `REVOKED` to remove a user from your account.

Include a role, to limit the user's capability within an account.

```json
{
  "updateUserInput": {
    "query": {
      "email": [
        {
          "filterBy": "MATCH",
          "string": "nickmclean@thedevoyage.com"
        }
      ]
    },
    "payload": {
      "memberships": {
        "account": "my_account_id",
        "role": 100,
        "status": "PENDING" // "REVOKED"
      }
    }
  }
}
```

**_tip_**: If the user that you are inviting does not exist within the database, simply use the `inviteUser` resolver to automatically create and invite a user.

## Manage Invite Status

You may switch the status of any of your memberships to `ACTIVE` or `INACTIVE`, as long as the membership does not have the status of `REVOKED`.

```json
{
  "updateUserInput": {
    "query": {
      "_id": {
        "filterBy": "OBJECTID",
        "string": "my_unique_object_id"
      }
    },
    "payload": {
      "memberships": {
        "account": "my_account_id",
        "status": "ACTIVE" // "INACTIVE"
      }
    }
  }
}
```

## Switch Membership

Send a mutation with the following variables to the `switchUserMembership` resolver to change account access. Users must be logged in to their own membership before switching memberships.

```json
{
  "switchUserMembershipInput": {
    "membership_id": "6259e0696f90352f2f3b9070"
  }
}
```

A response with a new JWT will be sent back, granting access to the account as the user.
