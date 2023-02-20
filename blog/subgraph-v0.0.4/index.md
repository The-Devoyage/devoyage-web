---
slug: subgraph-v0.0.4-versatile-typings
title: Subgraph v0.0.4 - Versatile Typings for a GraphQL API Generator 
authors: [nick]
tags: [subgraph]
date: 2023-02-14
---

Hello all! Thanks for joining!

Today, the goal is to share the idea of versatile typings for an API Generator. 

In version `v0.0.4` of the `subgraph` API Generator Project, I am happy to introduce the (mongo) Object Id Scalar. This means it's now possible to instantly start an API `Subgraph` Instance with the capabilities to find Mongo Documents by their Object ID! One simple step forward for this POC GraphQL API Generator written in Rust.

In case you are new to `Project Subgraph`, "Define to Run", is the motto. Define a simple configuration, and start the API. The code does the rest by generating resolvers and database connections -- An instantly generated API.  

![GraphQL Versatile Typings](https://res.cloudinary.com/the-devoyage/image/upload/v1676924961/The-Devoyage/INTUITIVE_SCALARS_4_ttaqvh.png)

So, what kind of scalars are we including in this API Generator? Let's take a look.

## Versatile Typings

Creating an API Generator needs to be versatile, yet simple. Two steps simple. 

1. Define the entities.
2. Let the code do it's job to create the API.

This means that the scalar type of each entity versatile enough to cover many circumstances.

### The Typings

With `Subgraph v0.0.4` we have a simple set of options, as the project is still a proof of concept in its infancy. There are 4, mostly primitive, scalars to define entities.

- Object ID (Mongo)
- String
- Int
- Boolean

As the project ramps up, more versatile options will be included.

- Email
- Date
- DateTime
- Password
- Phone
- Objects
- Other Entities
- ... the list goes on!

For now, we can establish some base practices on implementing new scalars before diving into the deep end.

### Defining an Entity

I'll say it once, and I'll say it again. Define to Run is the motto.

Defining an entity is the almost the only thing you need to do in order to start the API, aside from declaring some database configuration.

Below, we define an entity for our `Beers` service. It's the weekend somewhere.

The `Beer` entity has three properties including, `name`, `IBU`, and `inStock`. The ability to define more than one entity is just as simple, if so chosen.

```
[service]
...

[[service.entities]]
name = "Beer"

[[service.entities.fields]]
name = "_id"
scalar = "ObjectID"
required = true

[[service.entities.fields]]
name = "name"
scalar = "String"
required = true

[[service.entities.fields]]
name = "IBU"
scalar = "Int"
required = false

[[service.entities.fields]]
name = "inStock"
scalar = "Boolean"
required = true  

[[service.entities]]
...
```

In about 50 lines of code, this little API can be started! Compare that to the hundreds or thousands of lines that might be written for a completely custom API that does nearly the exact same thing. 

Now that these couple lines have been written into a configuration file, the API can be spun up and queried.

### Spin It Up

Once the entities are defined, the hard part is done. Starting the service can be done through a simple CLI Command.

```bash
subgraph --config ./config.toml --port 5000
```

And like that... a brand new Beer API has been born! Checkout the sandbox hosted at the defined port, `http://localhost:5000`, to sample your server.

---

Thanks for checking out the [Repo](https://www.github.com/the-devoyage/subgraph), and following along with this proof of concept. If you are interested in contributing or have some ideas, feel free to share on the `issues` tab.

Version `v0.0.5` is on it's way, with configurable CORS settings. If you like the project or want to keep up to date, follow along to get notifications of future releases.
