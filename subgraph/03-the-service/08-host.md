---
id: host
title: Host Options
---

## Bind to All Addresses

Bind to `0.0.0.0` instead of `localhost` or `127.0.0.1` by passing true to the `host` option.

```toml
[service]
name = "my_service"
host = true
```
