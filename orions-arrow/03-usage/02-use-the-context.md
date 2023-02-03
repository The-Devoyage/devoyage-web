---
id: use-the-context
title: Use The Context
---

After completing step one, creating the component with a provider, the context can now be accessed from children components. 

## Import the Hooks

`orions-arrow` exports a `Hooks` object that allows for quick and easy access to various contexts. 

```js
import { Hooks } from '@the-devoyage/orions-arrow';
```

## Use the Hook

Each hook provides data, forms, or utilities that can be used within the child component.

```js
const { accounts, loading } = Hooks.Accounts.useGetAccounts();
```

Since the provider was used with the parent component, the network call is automatically called to fetch the data. Now the child can consume the data without having to do any further action.

```js
const Child = () => {
  const { accounts, loading } = Hooks.Accounts.useGetAccounts();

  const { form, loading } = Hooks.Accounts.useRegisterAccount();

  return (
    <>
      {accounts.map(a => <p>{a._id}</p>)}
      <CreateAccountForm form={form} loading={loading} />
    </>
  )
}
```

### Queries

Hooks that provide query contexts include several elements that can help you to fetch and use data.

- Requested Data - The variable name is the plural name of the asset, for example `accounts`, `users`, or `media`
- `utils` - A variety of functions that allow you to find assets that may or may not exists from the network request.
- `loading` - boolean.

### Mutations

Hooks that provide mutation contexts include several elements that can help you send the request:

- `form` - A Formik form object, from the `formik` library.
- `loading` - boolean. 

## With Typescript

Each hook takes a generic and can provide the types to the data.

```ts
interface Account {
  _id: string;
  email: string;
  status: boolean;
}

const { accounts } =
  Hooks.Accounts.useGetAccounts<Account>();
```

Of course, the shape of the data is determined by the requested data from the GraphQL Query. You may create your own type definitions at this point, or use a took such as `graphql-codegen` to create types based off GraphQL queries and mutations within your project. 
