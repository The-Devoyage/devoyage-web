---
id: subgraph-user
title: The Subgraph User
---

Once the configuration is in place, depending on the dialect of the chosen data source, you may need
to perform a database migration in order to ensure compatibility.

This would include any SQL Data Sources, but not a Mongo Data Source.

Below, take a look at what a user looks like, and a few examples of migrations to prep the database.

## The User Object

Once registered, subgraph creates a user object within the chosen data source. You may extend this user object
as you see fit.

- uuid - A unique identifier for a user. Provided by the subgraph during registration.
- identifier - The user provided input such as a username or email.
- created_at - Auto populated at creation, the date time at which a user is created.
- updated_at - Auto updated on auth actions, but not custom actions, this property represents when the user was last modified.
- registration_state - A stringified object created and used during the registration process.
- passkey - A stringified object created during the registration process and used during the authentication process.
- authentication_state - A stringified object created during the registration process and used during the authentication process.

### SQLITE Migration

```sql
CREATE TABLE IF NOT EXISTS subgraph_user (
  uuid UUID NOT NULL UNIQUE,
  identifier TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL
);
```

### MySQL Migration

```sql
CREATE TABLE IF NOT EXISTS subgraph_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) UNIQUE DEFAULT (UUID()) NOT NULL,
  identifier VARCHAR(42) UNIQUE NOT NULL,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);
```

### Postgres Migration

```sql
CREATE TABLE IF NOT EXISTS subgraph_user (
  id SERIAL PRIMARY KEY,
  uuid UUID UNIQUE DEFAULT uuid_generate_v4() NOT NULL,
  identifier VARCHAR(42) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  registration_state TEXT DEFAULT NULL,
  passkey TEXT DEFAULT NULL,
  authentication_state TEXT DEFAULT NULL
);
```
