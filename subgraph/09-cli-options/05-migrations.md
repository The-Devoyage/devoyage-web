---
id: sql-migrations
title: SQL Migrations
---

Subgraph supports some migration support using SQLX, a popular Rust Crate to manage SQL related tasks.

## Creating Migrations

Use the SQLX Crate to create migrations. You currently need to install this on your own.

```
sqlx migrate add -r my-migration-name
```

Provide a `.env` aside the migration folder to provide credentials to your database.

```
# .env
#For Migrations
DATABASE_URL=sqlite:./todos.db
```

## Running Migrations

Running migrations can be done by providing a flag when starting the API.

```
subgraph -c ./myconfig.toml --migrate run
```

## Reverting Migrations

You may use the SQLX Cli to revert a migration. This needs to be installed separately.

```
sqlx migrate revert
```
