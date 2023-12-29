---
id: registration-process
title: Registration Process
---

Using the browser's built in Passkey API, you can easily create client side code to perform the registration process.

## Two Steps to Register

There are two requests that are required in order to perform a successful registration.

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

// Build the credential using the navigator credentials api.
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
