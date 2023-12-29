---
id: log-levles
title: Log Levels
---

## The Log Level Flag

Adjusting the log level can be done by providing an option to the `--log-level` flag.

- trace
- debug
- info - default

```
subgraph -c ./config.toml --log-level debug

subgraph -c ./config.toml -l debug
```
