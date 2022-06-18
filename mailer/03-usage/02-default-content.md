---
id: default-content
title: Default Content
---

HTML and Variables are provided from the source of the triggering event allowing you to use HTML and Variables from the origin source.

```ts
// Accounts API
// User successfully resets password...
// Send POST Request to the mailer service to trigger email using @the-devoyage/mailer-connect library.

const sent = await mailer.send({
  defaultContent: {
    to: updatedAccount.email,
    html: `<h3>Success!</h3><p>Hello, ${first_name}, your password has been reset.</p>`,
    plainText: `Success! Hello ${first_name}, your password has been reset.`,
    subject: `${company_name} Password Reset`,
  },
});
```
