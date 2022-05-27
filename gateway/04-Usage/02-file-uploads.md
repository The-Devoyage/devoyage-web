---
id: gateway-usage-file-uploads
title: File Uploading
---

This gateway is pre-configured to handle file uploading and serving from an external micro service. It uses popular and common tooling to enable file uploading and serving through the gateway.

## File Uploading

This service comes installed with the `@profusion/apollo-federation-upload` library, which allows you to send files through a graphql request. Simply include the file within the variable of the mutation that belongs to the external service. Send the file through the gateway like you would any other data.

:::caution
You should only use this feature for hobby based projects, as CSRF attacks are possible if the Apollo Server is not configured correctly. [Read More](https://www.apollographql.com/blog/backend/file-uploads/file-upload-best-practices/)
:::

Use the `Upload` scalar, provided by the `@profusion/apollo-federation-upload` library, within the federated micro service in order enable multi part file uploading.

```ts
const Mutation = gql`
  scalar Upload

  extend type Mutation {
    createMedia(file: Upload!): Boolean!
  }
`;
```
