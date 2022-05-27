---
id: gateway-usage-file-serving
title: File Serving
---

The gateway also comes pre-configured with a proxy that allows you to serve files from the external service through the gateway.

## Configure the Route

When setting up the service, configure the `MEDIA_SERVER_URL` and `MEDIA_SERVING_ROUTE` variables to intercept and redirect file requests to the specified server.

Using the following configuration:

```bash
MEDIA_SERVER_URL=http://media:5006/
MEDIA_SERVING_ROUTE=/public
```

You can now request files from the gateway service! The Gateway will redirect all requests to `http://gateway:5000/public` to the specified file upload server.

:::info
These are not GraphQL Requests -- they use `express` and `http-proxy-middleware` libraries to assist with the proxy.
:::
