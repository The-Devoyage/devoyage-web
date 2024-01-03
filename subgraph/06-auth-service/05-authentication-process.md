---
id: authentication-process
title: Authentication Process
---

After a user has successfully registered using the Registration process in the previous step,
they may authenticate using a similar two step process.

## Two Steps to Authenticate

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

// Create the credential.
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

### Response Details

After succcessfuly logging in you will receive three properties including the user's identifier, UUID, and token.

- Identifier - The input provided by the user to identify their account. Usually an email or username.
- UUID - The shareable id that can be used to identify a user.
- Token - A signed `biscuit` token, similar to a JWT, that is used to further access the API. See the biscuit rust crate for more information concerning biscuits.
