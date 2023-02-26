---
title: Subgraph v0.0.5 - API vs. Car - Startups, What is an API and Why Generate?
slug: subgraph-v0.0.5-api-vs-car
authors: [nick]
tags: [subgraph]
date: 2023-02-26
---

Hello all, and thanks for joining.

Today, we start a conversation about what an API does at a basic level while talking about the newest release of project `Subgraph`, a GraphQL API Generator built with Rust.

Your next startup idea will most likely resolve around tech; It's 2023! So before you set out to hire that next developer, it is important that you might understand some basics about the empire you are creating.

![API Vs Car](https://res.cloudinary.com/the-devoyage/image/upload/v1677423235/The-Devoyage/API_VS_CAR_keho8m.png)

<!--truncate-->
## API vs Car, yes a Car

As you may already know, data is your most valuable asset.

I am not saying it would be fun, but a company can recover from a broken application. Loss of code, bugs, and crashes can (and will) happen. But nothing is worse than if you loose the data itself.

Realizing this, we can compare an API to a Car. Yes, that shiny mode of transportation that gets you everywhere. The core job of an API is to move data. 

Not unlike a car, as long as data can safely get from point A to point B, the API has done it's job. Meaning, that for most cases, any car will do. 

### The Jobs of an API

In most situations, your car is not that different from my car. In fact, they are almost identical aside from some minor bells and whistles.

At a high overview, the job of an API is pretty basic, move data! There are four basic reasons for data transportation and they boil down to the acronym, "CRUD". 

"CRUD" stands for Create -- Read -- Update -- Delete. The basic responsibilities of an API.

#### Create - The Factory

Hop in your car, and let's take a trip down to the industrial district. Grab some supplies because we are going to create something new at the factory.

Just like a car might transport raw materials to the factory in order to create something new, we can send data from our shiny new website to the database (through the API) to create a new asset in our database.

#### Read - The Grocery Run

Grab your reusable grocery bags and shopping list, it's time to do the weekly food run.

Your users will expect to be able to view data from the database. When your website needs to get some data, you will request that data through the API. It's just like that weekly grocery run that keeps us all fed and happy.

#### Update - The Shop

My new bike has broken. Load it into the trunk and take it to the shop for me!

It's not enough that you can create or read items from the database. You are going to have to update these items, just like we fixed my bike by adding a nice new wicker basket to the front.

The API is going to be responsible to take those update instructions all the way from your website to the database. That way, you can edit those assets you have created.

#### Delete - The Dump

Each spring, my family does a clean out -- Spring Cleaning. We load things we don't need into our vehicle and take them on down to the dump (or donation facility)!

Your website will need to do something very similar. It will send some data through the API, which instructs the database to delete some items.

## Subgraph - A GraphQL API Generator

The job of an API is to transfer data. A shiny new car is nice, but a clunker can also get you from point A to point B. An API is a vehicle that can be built, updated, or replaced as needed!

Many times, we sit down with our development team to build this vehicle (API) part by part, piece by piece, from the ground up. Only to realize we are building the same thing over and over, solving the same issues the same way again and again.

Since these basic tasks of an API are mainly universal, an API Generator such as Project `Subgraph` might be a solution that helps you to build your next API. 

Currently, the project is a proof of concept. Define a simple configuration to run the API. Instant data transportation in a classy, speedy, and modern vehicle.

### Define to Run

The goal is simple -- Since APIs are generally similar, we should be able to generate an API based on the data we currently have or want to have in our database.

We define a simple configuration, and the generator handles the creation of the four main responsibilities of an API - Create, Read, Update, Delete. 

Let's take a look at the ~20 lines of code needed to start your next API.

1. Define The Config

Name your service, connect your database, and define your data. Simple.

Below, my API will be able to Create, Read, Update, and Delete `Restaurants`. Each `Restaurant` has two data points including a `name` and a `rating`. It's pretty simple but with this config I'll be able to perform the four responsibilities of an API.

```toml
# Name Your Service
[service]
service_name = "Restaurants"

# Connect your Mongo DB
[service.database_config]
mongo_uri = "mongodb://user:pass@127.0.0.1:27017/db"
mongo_db = "myDb"

# Describe Your Data
[[service.entities]]
name = "Restaurant"

[[service.entities.fields]]
name = "name"
scalar = "String"
required = true

[[service.entities.fields]]
name = "rating"
scalar = "Int"
required = true 
```

2. Starting the API 

Spinning this bad boy up is a One Line Command for your Developers.

```bash
subgraph --config ./my-config.toml --port 5000
```

### v0.0.5 - Subgraph

Thanks for checking out this crazy simple description of an API and the Subgraph API Generator!

Version `v0.0.5` is officially released and while it is still a proof of concept, it provides some new features that take us one step closer to an official release.

In this new version, we are able to define configuration to block or allow access by domain! In tech terms, we can define some simple CORS Configuration. 

- Specify Allowed HTTP Methods
- Declare Allowed Origins
- Allow Specific Headers

Aside from these tech terms, it allows you to lock your server down from a security prospective. It's a small step forward for project `Subgraph` and I am happy to share the progress with you.

---

If you are interested in [Checking Out The Code](https://www.github.com/the-devoyage/subgraph), it's open source! Download it to try it, view it, or submit your contributions as the project grows. 

Thanks All!
