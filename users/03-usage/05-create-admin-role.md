---
id: create-admin-role
title: Create Admin Role
---

To create an admin user you must have access to the Mongo DB instance as this API does not create admin users by default. Once you have access to the mongo database, simply change the user's membership role to 1, the `admin` role.

```js
db.users.findOneAndUpdate(
  { email: "admin@email.com", "memberships._id": ObjectId("12345") },
  { $set: { "memberships.$.role": 1 } }
);
```
