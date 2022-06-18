---
id: triggered-content
title: Triggered Content
---

HTML and Variables are stored on the Mailer Service, allowing you to reuse content.

## Create Content

Use the GraphQL Resolver, `createContent` to create a new `content` object. Each `content` is tied to a `trigger`. This will save an HTML template to the connected mongo db instance that you can later reference by `trigger`.

### Send a post request from the external service.

This time, use `triggeredContent` and pass the `trigger` name. Now, the server will use the HTML located on the Mailer Server instead of the HTML located within the external service. Shown below is the `@the-devoyage/mailer-connect` method of posting the webhook. You may also use standard post request using the Node Fetch API or axios.

```ts
// Accounts API
// User successfully updates email.
// Send POST Request to the mailer service to trigger email using @the-devoyage/mailer-connect library.

mailer.send({
  triggeredContent: {
    to: updatedAccount.email,
    trigger: "PASSWORD_RESET",
  },
  defaultContent: {
    // The Default Content Arg is Required, as if the triggered content can not be found on the server, it will fall back to the default content.
  },
});
```

### Pass Custom Variables To Triggered Content

Pass variables to triggered content to send custom and dynamic information such as auth codes, names, and receipt information inside automated emails.

Example Content Pre-Made on the Mailer Server:

```html
<body>
  <p>Hello {{first_name}}! You have reset your password!</p>
</body>
```

Below, the triggered content accepts variables to generate the same dynamic content as the custom default content. The difference is, the triggered content is reusable while the default content needs to be written each time the request is called.

```ts
// Accounts API
// User successfully updates email.
// Send POST Request to the mailer service to trigger email using @the-devoyage/mailer-connect library.

const varibales = { first_name: "nick" };

mailer.send({
  triggeredContent: {
    to: updatedAccount.email,
    trigger: "PASSWORD_RESET",
    variables,
  },
  defaultContent: {
    to: updatedAccount.email,
    html: `<body><p>Hello ${variables.first_name}! You have reset your password!</p></body>`,
    plainText: `Hello ${variables.first_name}! You have reset your password!`,
    subject: "Password Reset",
  },
});
```
