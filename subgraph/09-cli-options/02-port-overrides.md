---
id: port-overrides
title: Port Override
---

## The Port Flag

While you may specify a port within the config file, overriding the port can be done by providing the `--port`
flag when starting the service.

```
subgraph -c ./config.toml --port 4444

subgraph -c ./config.toml -p 4444
```
