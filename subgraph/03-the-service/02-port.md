---
id: service-port
title: Port
---

## Running the Application on a Port

Specify the port at which to run the application. This optional property allows you to choose which port that the serverice should occupy.

```toml
[service]
name = "my_service"
port = 3030
```

By default, if not provided, subgraph will choose a random open port.
