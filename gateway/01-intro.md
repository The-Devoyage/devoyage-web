---
id: intro
title: GraphQL Gateway
---

import SupportAlert from './\_support-alert.md';

<SupportAlert />

The Gateway service is the entry/exit point for a Federated API. Meaning, all requests must travel through the Gateway in order to access the data or other services within the API.

## A Centralized Entry Point

A Federated API consists of multiple "micro" services, meaning each service is an API itself. The Gateway has the important job of acting as a central point to access each service, instead of having to access each Federated service individually. This means you can request data that exists in multiple locations from one simple access point.

## Security is Key

With a gateway acting as the main highway to each individual service, you can close off all other "roads" that lead to these external services. In return, each service of the API is naturally more secure as there is only one way in, and one way out -- Through The Gateway.

## Authorization Built In

With all requests entering the API through a centralized point of access, it becomes a great place to perform some security checks. The GraphQL Gateway is ready to authorize requests by default, making one less thing for you to worry about when building your API.

Each request that enters the gateway is checked for a secure token. If the token is valid, an authorization status is created to be used throughout the Federated API. Think of it as your passport getting stamped on the way into visiting a foreign country.

## Handle It All

Not all requests are created equally. Some requests carry data to update a database. Some requests are looking to get data from the database. Others are carrying files that need to be saved to a hard drive. Each request looks and acts a bit differently, and the GraphQL Gateway is ready to handle the most common scenarios out of the box.

Our GraphQL Gateway is ready to handle everything form the common Query to File Uploads by default, baring some quick configuration.
