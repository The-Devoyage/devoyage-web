---
id: intro
title: Orion's Arrow
---

The `@the-devoyage/orions-arrow` is a SDK designed to easily connect React applications to various micro-service APIs created by The Devoyage making it incredibly easy to integrate an application with the Devoyage APIs.

## Providers

Use the provided React Providers to wrap components, enabling instant access to the API. Pass in custom GraphQL Queries and filters to get the information you need. 

```ts
<Providers.Accounts.Queries.GetAccountsProvider
  query={{
    documentNode: MY_GET_ACCOUNTS_QUERY,
    variables: {
      getAccountsInput: {
        query: {...},
      },
    },
  }}
>
  {children}
</Providers.Accounts.Queries.GetAccountsProvider>
```

These providers can be used to fetch, update, create, or delete data from the API.

## Contexts

Once the providers are set up, you can access the results from any child component. 

```ts
const { accounts, loading } = useGetAccounts();
```


## Validations

Mutation providers provide forms using the popular Formik library, each of which is validated automatically when submitting with the `Yup` validation library.

```ts
const { form, loading } = Hooks.Accounts.useRegisterAccount();

<Input 
  type="email" 
  name="email" 
  onChange={form.handleChange} 
  value={form.values.email} 
  invalid={!!form.errors.email}
/>
```

