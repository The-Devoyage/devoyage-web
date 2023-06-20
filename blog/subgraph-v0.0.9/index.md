---
title: Subgraph v0.0.9 - Instant GraphQL API - Joined Types and Guards
slug: subgraph-v0.0.9-joins-and-guards
authors: [nick]
tags: [subgraph]
date: 2023-06-18
description: Joining types and guards now available for Subgraph, an instant dynamic API.
image: https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png
keywords: [graphql, subgraph, api, api generator]
---

import {BlogFooter} from '@site/src/components/common/blog-footer'
import {LicenseAlert} from '@site/src/components/common/docs';

Hello All! Thanks for Joining!

Today, I am super excited to share the most recent update for Subgraph, an application written in Rust that creates an Instant GraphQL API.

Here is the low down: Provide a simple configuration, spin it up, and send those network requests. Your API is running in minutes not
months saving you time and money.

This dynamic application gets fed a configuration file to describe your data in order to instantly spin up a usable GraphQL Server. Version `v0.0.9`
takes a few huge steps to make your API even more powerful with Joins and Guards.

Let's take a look at the new features and write a quick API in order to demonstrate how Subgraph can benefit your next project.

![Subgraph SQL](https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png)

<!--truncate-->

## Guards, Joins, and the New Stuff

Version v0.0.9 introduces a diverse range of new capabilities, improvements, and fixes. Among these are two exciting features called Guards and Joins, designed
to empower you in building a robust API for any upcoming project.

### Guards (alpha release)

Protecting your API is a must and Subgraph aims to make it easy to guard your data from a variety of prospectives. The first version of
guards allows you to block access at four different points in the life cycle of a request by writing simple boolean evaluations. No complex
logic, framework, or code needed.

1. Service Guards - Stop access to the entire server.
2. Resolver Guards - Prevent access on a per operation basis.
3. Entity Guards - Protect specific entities of your service.
4. Field Guards - Scope access down to a field of an entity.

As mentioned above, guards are boolean evaluations that are simple to write. Evaluate a truthy condition and the access to the server is blocked with
custom error messages. Let's take a look at defining a service with a simple guard.

```toml
[service]
service_name = "coffee_shops"

[[service.guards]]
name = "role"
if_expr = "headers(\"role\") != \"Admin\"" # When true, we block access to the entire server.
then_msg = "Invalid Role - You may not request from this service."
```

As you can see above with the `headers()` function, there are built-in methods to access datapoints that are useful for validating access. Currently,
you can access `header` values as well as `input` (the GraphQL input itself) values. The guards feature is an alpha release with plans to
include other built-in methods such as `entity` values! Keep tuned as these are developed and rolled out.

### Joins

Maybe one of the more exciting features for `v0.0.9`, joins allow you to connect entities together quickly and easily bringing the power of GraphQL
into the simplicity of the Subgraph config.

First, define a few entities in the config file. Our comment entity below will have a property called `created_by` which will
join to a user type.

```toml
[service]
service_name = "my_subgraph"

[[service.entities]]
name = "User"
fields = [
  { name = "_id", scalar = "ObjectID", required = true },
  { name = "name", scalar = "String", required = true },
]

[[service.entities]]
name = "Comment"
fields = [
  { name = "_id", scalar = "ObjectID", required = true },
  { name = "content", scalar = "String", required = true },
  { name = "created_by", scalar = "ObjectID", required = true }
]
```

Now we just need to tell Subgraph to join the `created_by` field of the `Comment` to the `User`. Simply update the field definition and Subgraph
handles the rest.

```toml
{ name = "created_by", scalar = "ObjectID", required = true, as_type = "User", join_on = "_id" }
```

Send the network request and you now are able to instantly grab the `User` that created each comment.

Example Response:

```json
{
  "_id": "54321",
  "content": "Joining data is simple!",
  "created_by": {
    "_id": "12345",
    "name": "Bongo"
  }
}
```

Joins can be applied to any entity in a Subgraph from any data source. This means you can join SqLite to Mongo or Postgres to an
external HTTP API. Associating entities simple and easy without the headache is the idea!

## Spin It Up

Believe it or not, the above configuration is just about complete.

Subgraph only needs to know two things at minimum
including where your data lives and what your data looks like. The entities above describe what the data looks like, so let's add
the configuration to inform Subgraph of where your data lives.

### The Data Source

Subgraph supports five different data sources, meaning you can pull in data from five different types of data interfaces. It supports MongoDB, MySQL,
Postgres, SQLite, and HTTP Data sources (external third party APIs). Today we will use a Mongo Database.

Add the Data Source to the configuration and Subgraph will automatically connect each entity to the first available configuration. Of course,
if you have multiple data sources, you can associate each entity with the appropriate data source.

```toml
[[service.data_sources]]
[service.data_sources.Mongo]
name = "my_data_source"
uri = "mongodb://user:password@127.0.0.1:27017/db_name"
db = "db_name"
```

### Start the API

Once added, run the command to start your API. To view the Sandbox, use your browser to navigate to the port that you used to start the service.

```bash
subgraph -c ./my_config.toml -p 5000
```

Sandbox would be available at `http://localhost:5000` in the browser.

Feel free to define the port in your config file to save time!

```toml
[service]
service_name = "my_subgraph"
port = 5000
```

### Example Configurations

Like many Rust projects out there, Subgraph provides a folder of example configurations that you can use as reference to write your own!

Check out these [Example Configurations](https://github.com/The-Devoyage/subgraph/tree/master/examples). The configuration file is currently required
to be written in TOML or Tom's Obvious Minimal Language. Feel free to reference the [TOML Documentation](https://toml.io/en/) if needed.

## Wrapping Up - What's Next?

Thanks for taking a moment to check out the new features! If you are interested in spinning up your own Subgraph using the `@the-devoyage/subgraph`
project, take a look at the documentation found in the [Repository](https://www.github.com/the-devoyage/subgraph). If you find this project
intriguing, consider starring the repository to express your support.

The next version is already under way with an extremely important update -- Integration Testing will allow us to increase quality and consistency between releases
allowing you to depend Subgraph on the next level. Up on deck includes delete resolvers and improvements to guards/authorization/authentication!

Lastly, if you are interested in the project, we have officially launched a support option on Gumroad! This provides an excellent opportunity for you to contribute
to the progression towards Version 1. We offer various levels of support, ranging from quick and easy donations to full-fledged feature requests.

<LicenseAlert product="subgraph" to="https://thedevoyage.gumroad.com/l/subgraph" btnTxt="Support on Gumroad" />

Again -- Thanks for taking a few minutes to check out the new features and following along!
