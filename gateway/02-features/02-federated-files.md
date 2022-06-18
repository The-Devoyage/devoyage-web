---
id: federated-file-uploads
title: Federated File Uploads
---

The Gateway is ready to handle the requirements of any modern tech application out of the box including File Uploading and File Serving. Send and receive files through the Gateway just like any other request.

## File Uploads

GraphQL Servers are not prepped to deal with file uploads, and often need to have custom solutions created in order to support such a modern requirement.

By default, our GraphQL Gateway comes ready to handle File Uploads using one of the most common libraries compatible with Apollo Federation, [`@profusion/apollo-federation-upload`](https://www.npmjs.com/package/@profusion/apollo-federation-upload).

This means you can pass files through the Gateway Service, just like any other request.

## File Serving Proxy

Similarly, GraphQL Servers do not come standard with methods to get the uploaded files from external services. Again, custom methods must be built such as our File Serving Proxy.

This GraphQL Gateway comes pre-built with a simple proxy to request files from external services. In basic terms, this proxy allows you to redirect specific requests, allowing you to send the file requests to a custom location.
