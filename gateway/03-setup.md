---
id: setup
title: Setting Up The Gateway
---

Setting up the GraphQL Gateway is pretty straight forward.

## Clone The Repository

```bash
git clone https://github.com/The-Devoyage/graphql-gateway.git
```

## Install Dependencies

### Login to Github NPM Registry

There are a few packages we use that are located within the NPM Github Registry -- Login, so that you may install them with NPM.

```bash
npm login --registry=https://npm.pkg.github.com
```

### Install

```bash
npm install
```

### Rover

You may need to install Rover Globally, check the Apollo Rover Documentation in order to install the Rover CLI.

## Set Environment Variables

First, move the `.env.example` file to `.env` and fill in the variables.

## Running The Server

In development

```bash
npm run dev
```

or In Production

```bash
npm start
```

## Create a Supergraph with Rover

An example supergraph config is found in the root of the project at `./supergraph-config.yaml`. Fill in the details to match your Federated API. It is required to start the subgraphs before use Rover to generate the supergraph.

```bash
rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql
```

You may also use the npm script:

```bash
npm run supergraph
```

If you are using Docker or Docker-Compose, create a volume to mount the newly generated `supergraph.graphql` to `/app/supergraph.graphql`. This will allow you to override the `supergraph.graphql` file that is default inside the container.

Anytime a new supergraph is generated, you must restart the server. Create new supergraphs as the typings of external services change.
