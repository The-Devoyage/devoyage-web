---
id: post-mail-webhook
title: Post Webhook
---

### Listen for Webhooks From Your API

After an event happens in your API, simply POST to the `/send` endpoint of this server to send a templated email.

```ts
// Accounts API
// User successfully resets password...
// Send POST Request to the mailer service to trigger email using fetch.

const sent = await fetch("http://localhost:5008/send", {
  method: "POST",
  body: JSON.stringify({
    defaultContent: {
      to: updatedAccount.email,
      html: `<h3>Success!</h3><p>${first_name}, your password has been reset.`,
      plainText: `Success! ${first_name}, your password has been reset!`,
      subject: "Password Reset",
    },
  }),
});
```

Use the [`@the-devoyage/mailer-connect` package](https://github.com/The-Devoyage/mailer-connect/packages/1234394) to quickly POST the webhook with typed inputs parameters.
