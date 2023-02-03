---
id: add-the-provider
title: Add The Provider
---

Orion's Arrow allows access to the data and forms that can connect to the API through React Context Providers.

## The Parent Component

1. Add the provider of the API call you need to execute. In this case, we will get Accounts. 

```js
const Parent = () => {
  return (
    <Providers.Accounts.Queries.GetAccountsProvider>
      <Child />
    </Providers.Accounts.Queries.GetAccountsProvider>
  )
}
```

2. Create the GraphQL Query.

```js
const ACCOUNT_PAGE_GET_ACCOUNTS = gql`
  query AccountPage_GetAccounts(
    $getAccountsInput: GetAccountsInput!
  ) {
    getAccounts(getAccountsInput: $getAccountsInput) {
      data {
        _id
        email
        createdAt
      }
    }
  }
`;
```

3. Provide the required GraphQL Props to the Provider. Queries use the `query` prop while mutations use the `mutation` prop.

- query

```ts
export interface QueryBase<T extends Record<string, unknown>> {
  documentNode: DocumentNode;
  variables: T;
}
```

- mutation

```ts
export interface MutationBase<
  T extends Record<string, unknown>,
  ReturnType extends Record<string, unknown>
> {
  documentNode: DocumentNode;
  variables?: T;
  refetchQueries?: string[];
  onCompleted: (
    data: ReturnType,
    helpers: FormikHelpers<T>,
    reset: () => void
  ) => void;
  onError: (
    error: ApolloError,
    helpers: FormikHelpers<T>,
    reset: () => void
  ) => void;
}
```

```ts
<Providers.Accounts.Queries.GetAccountsProvider
  query={{
    documentNode: ACCOUNT_PAGE_GET_ACCOUNTS,
    variables: {
      getAccountsInput: {
        query: {},
      },
    },
  }}
>
  <Child />
</Providers.Accounts.Queries.GetAccountsProvider>
```
