---
id: intro
title: GraphQL Media
---

import SupportAlert from './\_support-alert.md';

<SupportAlert />

The `@the-devoyage/graphql-media` micro-service is a file uploading server that can be added as a ready-to-production service or used as a starting base for your own media uploading server.

## File Uploads

Enable file uploading of static assets such as images, video, audio, text documents, and pdfs with a standard graphql mutation request.

## Track Uploaded Media

Each asset that is uploaded also creates a reference of type `Media`, saved to a mongodb instance.

```graphql
type Media {
  _id: ObjectID!
  createdAt: String!
  updatedAt: String!
  path: String!
  mimetype: String!
  created_by: User!
  title: String!
}
```

## Serve Files

Once uploaded, files may be served directly from this service or through a proxy/gateway combination. Simply fetch the `Media` record and request the path from the service.

```ts
const photoURI = `http://media_server:MEDIA_SERVER_PORT/${path}`;
```
