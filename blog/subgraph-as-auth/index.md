---
title: Create an Instant Passkey/Auth Server with Subgraph
slug: passkey-auth-server-with-subgraph
authors: [nick]
tags: [subgraph, passkeys, webauthn, passkey server]
date: 2024-01-01
description: Learn about and incorporate passkeys into your website in minutes with Subgraph.
image: https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png
keywords:
  [graphql, subgraph, api, api generator, passkeys, webauthn, auth server]
---

import {BlogFooter} from '@site/src/components/common/blog-footer'
import {LicenseAlert} from '@site/src/components/common/docs';

Welcome, Voyager!

I am delighted to present a streamlined approach for integrating webauthn user authentication and authorization into your upcoming project.

In essence, we are implementing a passwordless registration and login system, offering a seamless authentication process for your users while fortifying the security of your servers.

Join us as we delve into the fundamentals of passkeys and explore the utilization of Subgraph as an Authentication Server for your current or prospective applications.

![rocketship launch](https://media4.giphy.com/media/RJDkHk2fzVQ4qu7Jif/giphy.gif?cid=ecf05e472neioas4hwda04f7er3xlchy0odkj07msehi7o4p&ep=v1_gifs_search&rid=giphy.gif&ct=g)

<!-- truncate -->

Hey... quick note - Subgraph is in a Pre-Alpha Release State! Enjoy it, build with it, and reach out with your suggested improvements! We are happy to help and listen. Lastly - Supporting working like this is also much appreciated~!

<LicenseAlert product="subgraph" to="https://thedevoyage.gumroad.com/l/subgraph" btnTxt="Early Alpha Release" />

## How Passkeys Work

Understanding the basic flow of passkey registration and authentication is crucial to the adoption of webauthn for any web application. Let's explore the typical passkey flow for these two scenarios. Below, I'll provide a
concise explanation - however, it is recommended to refer to resources such as [webauthn.guide](https://webauthn.guide/) for more in-depth information.

Actions like registration and authentication typically involve two network requests to complete. This is due to the verification process between the external server and the client-side application. The majority of
the intricate work is managed by the browser's WebAuthN API, streamlining the communication between the applications.

Want to see passwordless in action? [Triceratask](https://dev.triceratask.com) is an application developed around Subgraph and the auth process demonstrated below! You can sign up and log in without a password.

### Registration with Passkeys

1. The user initiates the registration process by providing a simple "identifier," which could be an email, phone number, or username. Notably, there's no requirement for a password, and users are not constrained by special characters or minimum length criteria. A single, unique identifier suffices. Straightforward, isn't it?

2. The server verifies whether the user is eligible for registration. If permitted, it responds to the client with a "challenge" that aligns the server's identity with the client's registration request.

3. The client application receives the challenge and leverages it to generate credentials. These credentials, however, are no ordinary passwords – they come in a pair, one private and one public. The client application concludes the registration process by providing the server with the public key for safekeeping, while retaining the private key.

4. The server acknowledges the successful registration, paving the way for a seamless login experience.

### Authentication with Passkeys

1. The user authenticates by furnishing the same identifier used during registration.

2. Subsequently, the server shares the public key with the client application.

3. Upon possessing a matching private key, the client application responds to the server with a signature of approval.

4. The server receives the success message, conducts a double-check to ensure the signature matches, and reciprocates with the pertinent details – typically in the form of an authentication token.

## Using Subgraph as an Auth Server

Today, our emphasis is on a swift and uncomplicated setup. Introducing Subgraph, a tool designed to expedite the creation of an immediate API for your data, including authentication and more!

### Requirements

1. **Mongo DB:** Today's focus is on Passkeys, not the setup of a Mongo Database. I'll assume you have this already.

2. **Subgraph:** A powerful tool to generate a GraphQL backend that seamlessly manages server-side webauthn and database logic. You can [purchase a license here](https://thedevoyage.gumroad.com/l/subgraph) or explore the [Releases Page](https://github.com/The-Devoyage/subgraph/tags) to download it for free.

> Your support is sincerely appreciated! Subgraph is a tool that has demanded countless hours of development. If you find value in this tutorial or benefit from using Subgraph, consider purchasing a license to express your support for this project.

### Starting The Auth Server

While Subgraph can serve as a comprehensive API for all your data, today, our focus will be on utilizing it solely as an authentication server. Subgraph is remarkably user-friendly, requiring just a minute to set up and get started. The process involves creating a simple configuration file before launching the service.

1. Create a file named `config.toml` in the root of your project and paste the following content:

```toml
[service]
name = "my_first_auth_service"

# Define a Data Source to save user information.
[[service.data_sources]]
[service.data_sources.Mongo]
name = "my_mongo_db"
uri = "mongodb://user:pass@127.0.0.1:27017/my_db_name"
db = "my_db_name"
# Optionally, generate a key pair and define a set private key.
# If omitted, subgraph generates a new private key each time it starts.
# Generate a key pair by running `subgraph --generate-keypair`
# private_key = "paste_private_key_here"

# Enable the auth service by providing the following options.
[service.auth]
requesting_party = "localhost" # The client side domain name.
requesting_party_name = "demo_auth" # The name of the application.
requesting_party_origin = "http://localhost:8000" # The client side origin, must match domain name.
data_source = "users_data_source" # The data source to interact with.

# An entity is a collection in Mongo or Table in SQL. Tell subgraph about the user entity.
[[service.entities]]
name = "user"
data_source = { from = "my_mongo_db", collection = "subgraph_user" }
fields = [
  { name = "_id", scalar = "ObjectID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]},
  { name = "uuid", scalar = "UUID", required = true, exclude_from_input = ["CreateOne", "UpdateOne", "UpdateMany"]},
  { name = "identifier", scalar = "String", required = true }
]
```

2. Run the service with the subgraph cli.

The execution might change depending on operating system or if you have placed the binary in the systems path.

```bash
subgraph --config ./config.toml
```

## The Frontend Code

Now that you have the auth server running, let's write some frontend example code.

### Register Start

First, send the API an identifier of which you want to register using the register start mutation.

```ts
// Create the mutation
const REGISTER_START = gql`
  mutation RegisterStart($identifier: String!) {
    register_start(identifier: $identifier)
  }
`;

// Execute the mutation using your client of choice.
const response = executeMutation(REGISTER_START, {
  identifier: "nickisyourfan",
});
```

The response object will contain signed options that the Browser's Passkey API can use
to continue the registration process.

### Register Finish

Once the options are received, execute the `REGISTER_FINISH` mutation to finalize the registration process.

Before executing, build the credential using the options received from the `REGISTER_START` mutation along with
the browsers Passkey API.

Some properties, as shown below, are required to be of type Int Array. The example below uses the npm library `js-base64`
to assist with this process.

```ts
import { Base64 } from "js-base64";

// Create the mutation
const REGISTER_FINISH = gql`
  mutation RegisterFinish($identifier: String!, $public_key: String!) {
    register_finish(identifier: $identifier, public_key: $public_key)
  }
`;

//  Extract the credential creation options from the previous response.
const cco = response.register_start as CredentialCreationOptions;

// Build the credential using the browser's navigator credentials api.
const credential = await navigator.credentials.create({
  publicKey: {
    ...cco.publicKey,
    challenge: Base64.toUint8Array(
      (cco.publicKey?.challenge as unknown) as string
    ),
    user: {
      ...cco.publicKey?.user,
      id: Base64.toUint8Array((cco.publicKey?.user?.id as unknown) as string),
    },
  },
});

if (credential instanceof PublicKeyCredential) {
  // Create a credential to share with the API.
  const jsonCredential = {
    id: credential.id,
    type: credential.type,
    rawId: Base64.fromUint8Array(new Uint8Array(credential.rawId), true),
    extensions: credential.getClientExtensionResults(),
    response: {
      clientDataJSON: Base64.fromUint8Array(
        new Uint8Array(credential.response.clientDataJSON),
        true
      ),
      attestationObject: Base64.fromUint8Array(
        new Uint8Array(
          ((credential.response as unknown) as Record<string, ArrayBuffer>)
            .attestationObject as ArrayBuffer
        ),
        true
      ),
    },
  };

  // Execute the operation
  const success = executeMutation(REGISTER_START, {
    identifier: "nickisyourfan",
    public_key: JSON.stringify(jsonCredential),
  });
}
```

Once a successful response is received, the user may proceed to "log in" using the Authentication Process.

### Authenticate Start

First, initialize the process by sending a `authenticate_start` mutation.

```ts
// Create the mutation
export const AUTHENTICATE_START = gql`
  mutation AuthenticateStart($identifier: String!) {
    authenticate_start(identifier: $identifier)
  }
`;

// Execute the mutation using your client of choice.
const response = executeMutation(REGISTER_START, { identifier "nickisyourfan" });
```

### Authenticate Finish

Use the options in the response to create a credential that is used to identify the user in the next request.

```ts
const credentialRequestOptions = (response.authenticate_start as unknown) as CredentialRequestOptions;

// Create the credential using the browser's navigator api.
const credential = await navigator.credentials.get({
  publicKey: {
    ...credentialRequestOptions.publicKey,
    challenge: Base64.toUint8Array(
      (credentialRequestOptions.publicKey?.challenge as unknown) as string
    ),
    allowCredentials: credentialRequestOptions.publicKey?.allowCredentials?.map(
      (c) => ({
        ...c,
        id: Base64.toUint8Array((c.id as unknown) as string),
      })
    ),
  },
});

if (credential instanceof PublicKeyCredential) {
  // Get the response from the credential.
  const response = credential.response as AuthenticatorAssertionResponse;

  // Build a serializable credential to send to the API.
  const jsonCredential = {
    id: credential.id,
    type: credential.type,
    rawId: Base64.fromUint8Array(new Uint8Array(credential.rawId), true),
    extensions: credential.getClientExtensionResults(),
    response: {
      authenticatorData: Base64.fromUint8Array(
        new Uint8Array(response.authenticatorData),
        true
      ),
      clientDataJSON: Base64.fromUint8Array(
        new Uint8Array(response.clientDataJSON),
        true
      ),
      signature: Base64.fromUint8Array(
        new Uint8Array(response.signature),
        true
      ),
    },
  };

  // Execute the operation
  const {
    authenticate_finish: { user_identifier, user_uuid, token },
  } = executeMutation(REGISTER_FINISH, {
    identifier: "nickisyourfan",
    public_key: JSON.stringify(jsonCredential),
  });
}
```

After succcessfuly logging in you will receive three properties including the user's identifier, UUID, and token.

- Identifier - The input provided by the user to identify their account. Usually an email or username.
- UUID - The shareable id that can be used to identify a user.
- Token - A signed `biscuit` token, similar to a JWT, that is used to further access the API. See the biscuit rust crate for more details concerning biscuits.

## What's Next?

Now, you possess a token representing a user! This token bears a striking resemblance to a JWT Token; it's referred to as a "biscuit" from the [Biscuit Auth](https://www.biscuitsec.org/) library. Utilize this token seamlessly with Subgraph APIs or incorporate it into your custom implementation to validate subsequent requests, just as you would with any comparable JWT.

For further insights into creating fully-featured APIs or to delve deeper into the Subgraph auth API and understand how these authentication tokens can be employed to verify requests, refer to the [Subgraph Documentation](/subgraph/intro).

<BlogFooter />
