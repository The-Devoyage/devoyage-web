---
id: http-data-sources
title: HTTP Data Sources
---

## Connecting to HTTP API

One of the most powerful concepts with using subgraph is the ability to mix and match data sources, and
the ability to integrate itno an external restful API is no different.

Defining a HTTP Data Source allows you to create APIs around Restul APIs that can associate with
your existing data.

```toml
[[service.data_sources]]
[service.data_sources.HTTP]
name = "todos"
url = "https://jsonplaceholder.typicode.com"
default_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]
```

### Default Headers

Specifying default headers, as shown above, allows you to provide values for headers that are required
when working with external APIs. This can allow you to provide headers that are required, such as authorization
headers, when working with these external data sources.

```toml
default_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]
```

Subgraph supports [Environment Variables](../10-environment-variables.md), which allow you to utilize the same configuration in multiple environments.
