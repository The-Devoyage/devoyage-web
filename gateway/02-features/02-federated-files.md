---
id: federated-file-uploads
title: Federated File Uploads
---

The Gateway is ready to handle the requirements of any modern tech application out of the box including File Uploading and File Serving. Send and receive files through the Gateway just like any other request.

## File Uploads

GraphQL Servers are not prepped to deal with file uploads by default, and often need to have custom solutions created in order to support such a modern requirement.

By default, this GraphQL Gateway comes ready to handle File Uploads using one of the most common libraries compatible with Apollo Federation, [`@profusion/apollo-federation-upload`](https://www.npmjs.com/package/@profusion/apollo-federation-upload).

This means you can pass files through the Gateway Service, just like any other GraphQL request.

## File Serving Proxy

This GraphQL Gateway comes pre-built with a simple proxy to request files from external services. In basic terms, this proxy allows you to redirect designated endpoints, allowing you to get the files from an external service.
