---
id: gateway-features-authorization-by-default
title: Authorization By Default
---

The GraphQL Gateway provides an authorization status for every request by default. It provides this status to all services of the API, allowing you to control access to the data within your API.

## JWT Authorization

One of the most popular ways to verify user identity is by using a JSON Web Token, commonly called a JWT.

When a user "logs in", it is common that the service will return a JWT. This token is saved on the user's computer. Whenever a user sends a request to the server, the token is automatically attached as proof of identity.

The request then travels to the Gateway, which by default will verify the user's identity by checking the encoded details of the JWT.

## The Authorization Status

As mentioned above, an authorization status is created for each and every request. That being said, it is just a status and nothing more. The Gateway does not turn away unauthorized requests. It simply labels the request as authorized or not.

## Creating an Authorized Request

Enabling the ability to authorize a request is as simple as providing some minimal configuration when setting up the Gateway.

1. Provide a secret key phrase in the setup configuration.
2. Attach a valid JWT to the Authorization Header when sending requests to the server.

If the Secret Key is provided, and the request contains the JWT, the Gateway will automatically check the validity of the JWT. If the JWT is valid, the request then is stamped as Authorized and sent along to the final destination.
