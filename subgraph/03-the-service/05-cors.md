---
id: cors-options
title: Cors Options
---

Configuring the CORS options for the running service can be done at the Service level of the configuration.

## Default Options

If specific configuration is not provided, subgraph provides a default CORS config to get started quickly.

```toml
[service.cors]
allow_any_origin = true
allow_origins = []
allow_headers = [
  "Content-Type",
]
allow_methods = [
  { method = "POST" }
]

```

## Cors Options

## Headers

This string array allows you to specify which headers may be sent to the service. If none provided, Subgraph will allow any origin with some basic headers applied.

```toml
allow_headers = [
  "Content-Type", # Do not forget to specify this one manually if providing additional headers.
  "Authorization"
]
```

### Allow Any Origin

A boolean property to allow incoming requests from any origin.

```toml
allow_any_origin = false # Defaults to true.
```

### Allow Origins

By default, subgraph allows all origins to send requests to the API. In the event you want to only accept requests from a specific origin,
you may specify these here.

```toml
allow_origins = [
  "http://www.domain.com",
  "http://reporting.domain.com"
]
```

### Allow Methods

Specify an array of Method Options of which to allow to your service. By default, subgraph allows only `POST` requests.

```toml
allow_methods = [
  { method = "POST" },
  { method = "GET" }
]
```
