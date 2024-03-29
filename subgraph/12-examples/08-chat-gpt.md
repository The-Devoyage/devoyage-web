---
id: examples-chatgpt
title: Chat GPT
---

```toml
[service]
name = "chat_gpt"

[service.cors]
allow_headers = ["Authorization", "Content-Type"]

[[service.data_sources]]
[service.data_sources.HTTP]
name = "chat_gpt"
url = "https://api.openai.com/"
default_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]

[[service.entities]]
name = "chat_completion"

[service.entities.data_source]
from = "chat_gpt"
path = "/v1/chat/completions"

[[service.entities.fields]]
name = "id"
scalar = "String"
required = true
exclude_from_input = ["CreateOne"]

[[service.entities.fields]]
name = "object"
scalar = "String"
required = true
exclude_from_input = ["CreateOne"]

[[service.entities.fields]]
name = "created"
scalar = "Int"
required = true
exclude_from_input = ["CreateOne"]

[[service.entities.fields]]
name = "model"
scalar = "String"
required = true

[[service.entities.fields]]
name = "usage"
scalar = "Object"
exclude_from_input = ["CreateOne"]
required = true
fields = [
    { name = "prompt_tokens", scalar = "Int", required = true },
    { name = "completion_tokens", scalar = "Int", required = true },
    { name = "total_tokens", scalar = "Int", required = true },
]

[[service.entities.fields]]
name = "messages"
scalar = "Object"
required = true
list = true
fields = [
  {name = "role", scalar = "String", required = true},
  {name = "content", scalar = "String", required = true}
]
exclude_from_output = true

[[service.entities.fields]]
name = "temperature"
scalar = "Int"
required = true
exclude_from_output = true

[[service.entities.fields]]
name = "choices"
scalar = "Object"
required = true
exclude_from_input = ["CreateOne"]
fields = [
  { name = "message", scalar = "Object", required = true, fields = [
    { name = "role", scalar = "String", required = true },
    { name = "content", scalar = "String", required = true }
  ] },
  { name = "finish_reason", scalar = "String", required = true },
  { name = "index", scalar = "Int", required = true }
]
```
