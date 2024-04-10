---
title: Rust X JS - Class vs Struct - A look at Rust Through JS Tinted Glasses
slug: rust_x_js-class_vs_struct
authors: [nick]
tags: [rust-x-js, rust, javascript]
date: 2024-04-09
description: Looking at rust vs javascript and comparing classes to structs! Learn some rust, learn some JS.
#image: https://res.cloudinary.com/the-devoyage/image/upload/v1711036382/subgraphv14_jnpclv.png
keywords: [rust, javascript, rustxjs]
---

import {BlogFooter} from '@site/src/components/common/blog-footer'

Welcome Voyager!

Today I'd love to try taking a look at Rust through the perspective of
a JavaScript (or TypeScript) developer. Rust's growing popularity is not only something to keep
an eye on, but an excellent excuse to learn something new.

A JavaScript class is a syntax that allows you to define blueprints for creating objects.
Compared to the Rust Programming Language, structs act in a similar way by
providing a mechanism for defining custom data types that encapsulate related data fields.

Let's compare the similarities and differences between these two concepts so that we can
better understand their respective roles and functionalities in programming languages. By
examining their similarities, we can identify common principles that underlie both
concepts, facilitating knowledge transfer between languages and enhancing our ability to
leverage their features effectively.

Keep in mind that this is mostly psuedo-code written to show quick comparisons. You may need to tweak
it to get it to run!

<!-- truncate -->

## A Starting Point

First, take a look at a basic starting point for each language by defining a Class and a Struct.

```js
class User {}
```

and

```rust
struct User {}
```

In both JavaScript and Rust, the concept of defining a structure or a class is fundamental
to object-oriented programming (OOP). In JavaScript, the `class` keyword is used to
define a blueprint for creating objects with shared properties and methods. In this
example, User is an empty class declaration, indicating that it serves as a template
for creating user objects, which can later be instantiated with specific attributes and
behaviors.

On the other hand, Rust uses the `struct` keyword to define a structure. In the given Rust code, User
is declared as an empty struct, representing a user data structure that can hold various fields or
properties.

Both JavaScript classes and Rust structs provide a foundation for organizing and
manipulating data in a structured manner, albeit with different syntax and paradigms.

### Adding Properties

Expanding upon the initial examples, let's demonstrate how properties can be added to the
User class in JavaScript and the User struct in Rust.

In JavaScript, properties can be added to a class using the constructor function. Below is
an example illustrating the addition of properties name and age to the User class:

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

Similarly, in Rust, properties can be added to a struct using fields. Here's an example that
extends the User struct with name and age fields:

```rust
struct User {
    name: String,
    age: u32
}
```

### Methods and Implementations

Adding functionality to a class or struct is essential for organizing logic associated with the
class or struct that is specific to the class/struct itself.

In both examples, we added a method named greet() to the User class/struct. This method returns a
greeting string using the name and age properties of the user. Instances of User can then
utilize this method to greet the user.

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method to greet the user
  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}
```

and

```rust
struct User {
    name: String,
    age: u32
}

impl User {
    // Method to greet the user
    pub fn greet(&self) -> String {
        format!("Hello, my name is {} and I'm {} years old.", self.name, self.age)
    }
}
```

### Creating an Instance

Once a struct is defined, we can create an instance of the user in each respective language.

```js
const user = new User("Bongo", 11);
console.log(user.greet()); // Invoke the method.
```

```rust
let user = User {
    name: "Bongo".to_string(),
    age: 11
};
println!("{}", user.greet());
```

With Rust, a common pattern would be to manually simulate the `constructor` functionality. In addition
to adding the `greet` function from above, we will implement a `new` function.

```rust
impl User {
    // ... greet method
    pub fn new(name: String, age: u32) -> Self {
        let user = User {
            name,
            age
        };

        user
    }
}

let user = User::new("Bongo".to_string(), 11);
println!("{}", user.greet());
```

### Extending and Traits

While methods or implementations generally add functionality that is specific to the target class,
there are also ways to add shared functionality to the target struct/class.

Extending a class in JavaScripts adds functionality to the target class provided by a parent
or `super` class.

```js
// A parent class that provides some functionality
class Group {
    constructor() {...}
    async addToGroup() {
        // Add the user to the group!
    }
}

// Our user class receiving the provided functionality
class User extends Group {
    constructor() {
        // ...rest of construcotr
        super(); // Get the provided functionality
    }
    add() {
        this.addToGroup(); // Call the method from the MySql class.
    }
    //...rest of class
}

const user = new User("Bongo", 11);
await user.add();
```

In rust, we can see similar execution using Traits.

```rust
// Define a trait named Group
trait Group {
    fn add_to_group(&self);
}

// Define a struct representing a user
struct User {
    name: String,
    age: u32,
}

impl User {
    // Constructor function to create a new User instance
    fn new(name: String, age: u32) -> Self {
        Self { name, age }
    }

}

impl Group for User {
    fn add_to_group(&self) {
        // Add the user to the group!
    }
}

// Now use the new functionality provided by the Group trait!
let user = User::new("Bongo", 11);
user.add_to_group();
```

## Wrapping it Up

While both Rust Structs and JavaScript Classes share similarities, they also can be used in different
capacities. Further reading that might interest you is how a Struct may also be a tuple or
how method overloading is achieved. There is much to learn and compare!

None the less, I hope you had some fun comparing these concepts! To me, it's always interesting finding
and understanding the patterns that persist between the barrier of multiple domains such as
the chosen programming language. We really are all doing the same thing, regardless of language!

<BlogFooter />
