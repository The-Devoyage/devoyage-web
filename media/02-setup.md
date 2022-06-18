---
id: setup
title: Setup The Server
---

## Clone The Repository

```bash
git clone https://github.com/The-Devoyage/graphql-media.git
```

## Install Dependencies

### Login to the Github registry with NPM.

```
npm login --registry=https://npm.pkg.github.com
```

### Install Dependencies

```
npm install
```

For docker, you can run:

```bash
docker build -t --build-arg GTIHUB_TOKEN=${GITHUB_TOKEN} .
```

## Configure Environment Variables

All environment variables are saved in the root of this repo in a file called `.env.example`. Move this file to `.env` and fill in the variables.

## Run The Server

### In Development

```
npm run dev
```

### In Production

```
npm start
```
