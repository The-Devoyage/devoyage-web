---
id: service-port
title: Port
---

## Running the Application on a Port

You have the option to specify the port at which the application should run. This is an optional property, providing you with the flexibility to choose the server port. Note that specifying a port using the CLI options will override this definition. If omitted, Subgraph will automatically find an open port for the service to run.

```toml
[service]
name = "my_service"
port = 3030
```
