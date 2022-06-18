---
id: setup
title: Setup The Users Server
---

## Clone The Repository

```bash
git clone https://github.com/The-Devoyage/graphql-users.git
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

If you are using docker to build and run this server, you will need to pass a github token along to the build process as a build arg.

## Configure Environment Variables

All environment variables are saved in the root of this repo in a file called `.env.example`. Move this file to `.env` and fill in the variables.

## Start the server:

In Development:

```
npm run dev
```

In Production:

```
npm start
```
