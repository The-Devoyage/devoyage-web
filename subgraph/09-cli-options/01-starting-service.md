---
id: starting-service
title: Starting the Service
---

## The Config Flag

Starting the service requires a valid configuration file and a quick command. Use the `--config` flag to
point subgraph to the correct configuration path.

```
subgraph --config ./config.toml

subgraph -c ./config.toml
```

### Watching for Changes

While in active development, you may enable the watch feature which detects changes of the configuration file and
restarts the service in response.

```
subgraph -c ./config.toml --watch

subgraph -c ./config.toml -w
```
