---
id: environment-variables
title: Environment Variabels
---

## Environment Variables

Use environment variables in the configuration file with `$` syntax.

```toml
default_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]
```
