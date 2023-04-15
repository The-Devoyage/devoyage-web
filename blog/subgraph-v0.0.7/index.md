---
title: Subgraph v0.0.7 - Instant Chat GPT GraphQL API
slug: subgraph-v0.0.7-http-with-chat-gpt
authors: [nick]
tags: [subgraph]
date: 2023-04-14
---

Hello all -- Thanks for joining!

Today we are going to use the Chat GPT API to show off the newest release from the subgraph project, which is a tool built to help you start up a well rounded API in a matter of minutes.

The [@The-Devoyage/subgraph](https://www.github.com/the-devoyage/subgraph) project is a proof-of-concept implementation written in Rust for generating a dynamic API from a single 
configuration/schema.
The subgraph allows you to define entities, data sources, and resolvers in a single TOML configuration. 

The configuration specifies how the API should be generated around the data you need, existing or not. Subgraph generates CRUD operations from the entities you define and allows you
to connect many data sources to a single API, including HTTP and MongoDB (SQL support coming in the future!). In this way, you can create an API in no time, which can be used to 
manipulate and find data, and even map third-party RESTful APIs to GraphQL automatically.

Let's dive into the new HTTP Data Source configurations which will allow us to connect to almost any third party RESTful API, such as the Chat GPT API.

![Subgraph](https://res.cloudinary.com/the-devoyage/image/upload/v1681523977/Subgraph_Logo_2_gff26m.png)

<!--truncate-->
## v0.0.7 and the Chat GPT API

### HTTP Data Source

The HTTP data source is a powerful feature in Subgraph that enables data retrieval from external APIs. With this data source, you can easily connect your Subgraph GraphQL server to any REST API and map the API endpoints to 
your GraphQL schema. This allows you to consolidate data from multiple sources into a single GraphQL endpoint. The HTTP data source provides various methods to retrieve data, such as GET, POST, PUT, PATCH, DELETE, 
and allows for custom headers to be set. This feature simplifies the process of fetching data from external sources and reduces the amount of boilerplate code needed.

```toml
[[service.data_sources]]
[service.data_sources.HTTP]
name = "chat_gpt"
url = "https://api.openai.com/"
default_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]
```

### Object Support

In Subgraph, Scalars are the primitive data types such as String, Int, and Boolean. However, there are situations where we need to represent more complex types or groupings of primitive Scalars. This is where Object types come into play. 
An Object "Scalar" is a custom type that can be defined in the configuration for the schema, representing a complex type that can be used as a type itself. For example, you might have an object scalar representing a comment, with 
its creator, content, and any other desired attributes.

```toml
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
```

### List Options

Lists or Arrays are one of the most commonly used data types in programming languages. Similarly, in Subgraph, lists can be defined as an array of a certain data types. This allows for a collection of values 
to be returned as a single response. Lists can be defined in the configuration file by marking the field as a list (as shown below). Lists can also be nested inside objects, allowing for more complex data structures to be 
represented. Lists are useful when you need to return multiple instances of a certain data type, such as a list of products or a list of blog posts.

```toml
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
```

### New Features

- HTTP Data Source - Easily map a HTTP API into this GraphQL API.
- Update One Resolver - Update Mongo documents or send HTTP Put/Patch Request
- Objects and Lists - Support for more complex data structures.
- Exclude From Input/Output - Allows fields to be shared or mapped exclusivly to resolvers input/output.
- Environment Variable Support - Use environment variables directly inside your config with the `$` suffix.

## The Chat GPT Config

Let's get down to the nitty gritty and hit the Chat GPT Completions endpoint with a Subgraph Service.

1. Download the latest [release](https://www.github.com/the-devoyage/subgraph/releases) of subgraph.
2. Get an Open AI API Key and set it as an environment variable.

```bash
EXPORT OPENAI_KEY=paste_key_here
```

3. Download the [Chat GPT Service Config Example](https://github.com/The-Devoyage/subgraph/blob/2209c412f3f4fd0664a7963edba1d9830ec8e50c/examples/chat-gpt.toml)

4. Start the API.

```
./subgraph -c ./chat-gpt.toml -p 5012
```

5. Check out the Sandbox and send some mutations!

Open browser and navigate to the port that the service was started on. `http://localhost:5012`

![Sandbox](https://res.cloudinary.com/the-devoyage/image/upload/v1680991221/Screenshot_from_2023-04-08_17-00-02_xidwxl.png)

## What's Next?

There is still a lot of work in order to get to v0.1.0 - Error handling, SQL Compatibility, Various Scalar Support, GraphQL Subscriptions... just to name a few.

So keep tuned, as v0.0.8 is under way.

[@the-devoyage/subgraph](https://www.github.com/the-devoyage/subgraph) - Check out the repo, grab a ticket, let's build.
