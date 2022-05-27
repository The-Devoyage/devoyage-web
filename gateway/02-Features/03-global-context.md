---
id: gateway-features-global-context
title: Global Context
---

Context is a fancy word for relevant data associated with a request such as the id or role of the user who sent the request. This data can be accumulated by a variety of sources. The Devoyage's Gateway automatically shares this context with all connected services. Hence Global Context.

## JWT Payload Context

JWTs are powerful in the sense that they can help with authentication and authorization, as you previously read about in these docs. In addition to handling security, they can also store small amounts of data.

When using the JWT Authorization Method provided by this gateway service, the data within the token will automatically be added to the API's Global Context, allowing all connected services to easily access the needed data within the token without having to parse it.

## Authorization Context

As you previously read, this gateway provides an authorization status for each request that enters the gateway. All authorization statuses are automatically added to the Global Context so that you may utilize the status throughout the Federated API.

## Header Context

Want to include data from other headers in the Global Context? It's as easy as telling the Gateway which headers to include. Once told, the gateway will automatically parse and add the data from the provided headers to the Global Context.

## Custom Context

It's simple to include custom data in the Global Context enabling you to share unique data from the gateway to all connected Federated Services.
