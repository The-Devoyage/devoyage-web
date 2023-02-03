---
id: setup
title: Install Orion's Arrow
---

## Install Dependencies

### Log in to NPM

```
npm login --registry=https://npm.pkg.github.com
```

### Update .npmrc

This library is on the Github NPM Registry, so it is needed to tell NPM where to look. Add the following to your `.npmrc` and NPM will take care of the rest.

```bash
# .npmrc
@the-devoyage:registry=https://npm.pkg.github.com
```

### Install Dependencies

```
npm install @the-devoyage/orions-arrow
```
