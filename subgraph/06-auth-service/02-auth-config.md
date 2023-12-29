---
id: auth-config
title: The Auth Configuration
---

## Enabling the Auth Service

By providing a valid configuration, the auth service is automatically enabled.

There are several required and optional properties that can be provided in order to
configure the service securely.

It is suggested to use environment variables as shown below, which allows you to deploy a consistent configuration
across a variety of environments.

```toml
[service.auth]
requesting_party = "$TRICERATASK_RP" #"localhost"
requesting_party_name = "$TRICERATASK_RPN" #"triceratask.com"
requesting_party_origin = "$TRICERATASK_RPO" #"http://localhost:5173" #Origin of the client. http://localhost:5173
data_source = "triceratask_ds"
private_key = "$TRICERATASK_PRIVATE_KEY" # Generate a private key using CLI Options
```

### Requesting Party

The string value for the `requesting_party` property represents the domain of the origin that is performing the request.

It is important to ensure the domain matches the `requesting_party_origin` or authentication/authorization is likely to fail.

```toml
requesting_party = "localhost"
```

### Requesting Party Name

While a required field, this field serves as a general identifier to the client when displaying names to the user.

```toml
requesting_party_name = "triceratask.com"
```

### Requesting Party Origin

The origin is strictly enforced during the authentication process. The domain of the origin must match the `requesting_party` property.

```toml
requesting_party_origin = "http://localhost:3000" # The location of the client side app.
```

### Data Source

Saving the user data is a vital step in the authentication process. Simply point the auth service to a valid data source in
order to persist your user data.

```toml
data_source = "triceratask_ds"
```

### Private Key

When using the auth service, a new private/public key pair will be generated each time a the service starts. This will
cause your users to log in again following a restart, as the key will be different. Users do not need to register
again following a restart.

You may provide a custom private key which persists between restarts and prevents a forced log out of the user.

This is also useful when syncing authentication between multiple applications.

```toml
private_key = "$TRICERATASK_PRIVATE_KEY"
```

**NOTE** You may generate a random private/public key pair using the CLI Options.
