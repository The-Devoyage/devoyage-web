---
id: eval-expr
title: The EvalExpr Crate
---

## EvalExpr

The crate [evalexpr](https://docs.rs/evalexpr/latest/evalexpr/) allows developers to create custom and unique expressions interact with contextual data specific to a request.
This allows developers to utilize user specific data to perform an action.

Any functionality of the `evalexpr` API can be utilized when constructing an expression. Reading the documentaioned provided by
this crate can be extreemly useful when working with expressions that are applied to the Subgraph Service.

Here are a couple quick examples to get up in running. That being said, don't be afraid of reading the EvalExpr Documentation.

## Definitions

There are two ways to define expressions, Multi-Line expressions and Inline expressions.

### The Multi-Line Expression

Using three single quotes when defining the expression string will break the code into a multi line expression allowing you to write longer form expressions
while still preserving the ability to read the expression easily.

```toml
[[entities.data_source.resolvers.update_many.guards]]
name = "todo_not_found"
# Multi Line Expression
if_expr = '''
  todo_uuids = input("query", "uuid");
  todos = context("todo.id");
  len(todo_uuids) != len(todos)
'''
then_msg = "Todo not found."
```

### The Inline Expression

Inline expressions are useful when working with smaller expressions.

_Note: They require double quotes to be escaped._

```toml
[[entities]]
name = "todo"
required = true
fields = [
  { name = "id", scalar = "Int" },
  { name = "title", scalar = "String" },
  # The Inline expression for `default_value`
  { name = "updated_by", scalar = "Int", default_value = "context(\"user.id\")" },
]
```

## Returned Values

Returning a value from an expression is implicit and similar to Rust syntax. Omitting the expression chaining operator, the semicolon, will implicitly return the value.

```toml
[[service.guards]]
name = "access_denied"
if_expr = '''
    // Evaluates to true, blocking the request. No semicolon following the final line returns the evaluated expression.
    1 == 1
'''
then_msg = "No one may ever access as the expression always evaluates to true."

# Same as above, just different syntax:
[service]
guards = [
    { name = "access_denied", if_expr = "1 == 1", then_msg = "Nope, still no access." }
]
```

## Variables

You may define variables so that guards become more readable.

```toml
[[service.guards]]
name = "access_denied"
if_expr = '''
    // Defining a variable, should_guard, by using a semicolon to chain the operation.
    should_guard = 1 == 1;

    // Return the evaluated expression:
    should_guard
'''
then_msg = "No one may ever access as the expression always evaluates to true."
```
