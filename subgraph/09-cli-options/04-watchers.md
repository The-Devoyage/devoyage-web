---
id: watching-for-changes
title: Watching for Changes
---

### The Watch Flag

While in active development, you may enable the watch feature which detects changes of the configuration file and
restarts the service in response.

```
subgraph -c ./config.toml --watch

subgraph -c ./config.toml -w
```
