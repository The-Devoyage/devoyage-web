---
id: upload-and-serve-files
title: Upload and Serve Files
---

## Upload file to server

Create a mutation request to the resolver 'singleFileUpload' with the following variables:

```ts
export type SingleFileUploadInput = {
  file: File;
  title: string;
};
```

## Get Media Records

Once uploaded you can fetch `Media` using the `getMedia` query. Type `Media` represents the record of the media in the mongodb, including the path.

## Fetch Media Asset

Once you have the file path, the `graphql-media` server can serve the file with a HTTP request. The default endpoint is `/uploads`, but this can be configured in the `media_config.json` file.

```ts
const photoURI = `http://media_server:MEDIA_SERVER_PORT/${path}`;
```
