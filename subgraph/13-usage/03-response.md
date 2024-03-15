---
id: response
title: Response
---

A successful query will return the requested data as well as helpful metrics about the query and results.

A successful response results in a few properties:

- data - The results of the query
- meta - Information about the query and the results

## The Data Property

The data contains a single entity result or an array of entity results, depending on the type of resolver.

## The Meta Property

Meta data, in the response, is additional data about the response. This includes the following:

- request_id - A unique uuid created for each request.
- count - The count of results returned in the request.
- total_count - The total count of results, including results not returned in paginated requests.
- page - The current page of results returned.
- service_name - The name of the service of which provided the response.
- executed_at - The datetime/time stamp that the request was executed.
- service_version - The version of the service that returned the response.
- user_uuid - If authentication is enabled, the user_uuid of the user who requested the response.
