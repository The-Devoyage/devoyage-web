---
title: Subgraph v0.0.13 - Instant API Generation At Your Fingertips with Subgraph
slug: subgraph-v0.0.13-instant-api-at-your-fingertips
authors: [nick]
tags: [subgraph]
date: 2023-12-29
description: Creating a flexible and standardized API is now easier than ever with Subgraph's new features such as built-in auth with webauthn and customizable data filtering.
image: https://res.cloudinary.com/the-devoyage/image/upload/v1687224196/Subgraph_1_swkuzy.png
keywords: [graphql, subgraph, api, api generator]
---

import {LicenseAlert} from '@site/src/components/common/docs';

Welcome Voyager.

Embark on an epic journey as I unveil an exciting chapter in the realm of **Automated API Generation** using Subgraph!

This iteration, `v0.0.13`, not only marks a significant milestone but also welcome a wave of powerful new options that promise to redefine the way you craft APIs.

Picture this – the ability to spin up robust yet flexible APIs in only a few moments, freeing you to channel your focus where it truly matters: your business logic. With Subgraph at your helm, bid
farewell to the intricacies of code logic and immerse yourself in the artistry of your unique digital ventures.

Today, the horizon expands, and you, fellow Voyager, are here to see it happen. Ready to dive into the extraordinary? Let's set sail!

<LicenseAlert product="subgraph" to="https://thedevoyage.gumroad.com/l/subgraph" btnTxt="Early Alpha Release" />

![sailboat gif](https://media.giphy.com/media/hWSXtvw9P3aAov0UX3/giphy.gif)

<!--truncate-->

## Generate Your Next API

Whether connecting to your existing database or embarking on a new project, Subgraph empowers you to turn ideas into fully functional applications within minutes. The key? A straightforward configuration file that makes management a breeze.

With Subgraph, you can seamlessly bring your concepts to life without the hassle of complex coding. Whether you're accustomed to working with your established databases or starting from scratch, Subgraph streamlines the process, ensuring that your focus remains on the essence of your project, not the intricacies of development.

This user-friendly approach eliminates the need for lengthy development cycles, letting you see results quickly and effortlessly. Subgraph is the tool that simplifies the journey from idea to application, offering a stress-free and efficient way to materialize your vision.

Large applications or small POCs, it all starts with a configuration file that focuses on the data you want to distribute.

![subgraph config](https://res.cloudinary.com/the-devoyage/image/upload/v1703825219/carbon_2_pfrg4u.png)

### Simplifying Data Management with Subgraph

At the heart of Subgraph lies a fundamental goal: to streamline the process of data management. Imagine effortlessly managing your data with a tool that revolves around simplicity. Subgraph achieves this by utilizing your provided configuration to establish consistent and user-friendly methods for interacting with data.

In the realm of API development, standardization is key. Subgraph empowers you to deliver a highly standardized API to your developers and customers, easing the burden of interfacing with your data. The result? A seamless and efficient experience for all stakeholders involved.

With Subgraph's generated actions, you can interact with your data in a way that aligns with the needs of almost any project:

- Find One: Locate a single entity effortlessly.
- Find Many: Retrieve multiple entities with ease.
- Update One: Modify a single entity conveniently.
- Update Many: Streamline the process of updating multiple entities.
- Create One: Effortlessly add a new data/entities to your system.

Subgraph empowers developers and startup owners by providing a toolkit that not only simplifies but enhances data management. Say goodbye to convoluted processes and hello to a standardized, efficient, and user-friendly approach to handling your data.

### Diverse Data Sources Made Simple

Subgraph thrives on versatility, making it a breeze to incorporate a variety of familiar data sources into your toolkit. With support for various databases and protocols, you have the flexibility to leverage the tools you know and trust.

**Supported Data Sources:**

- Mongo: Seamlessly integrate and interact with MongoDB databases.
- MySQL: Harness the power of MySQL databases for robust data handling.
- Postgres: Benefit from the reliability and scalability of PostgreSQL databases.
- SQLite: Enjoy a lightweight yet powerful option for local data storage.
- HTTP/Restful: Extend your reach beyond traditional databases with seamless integration of HTTP/Restful APIs.

Whether you're rooted in the familiarity of relational databases or exploring the possibilities of HTTP/Restful APIs, Subgraph accommodates your preferences. This flexibility ensures that your data management remains efficient, regardless of the sources you rely on. Subgraph empowers developers and startup owners to work with the tools that suit their needs best, fostering a seamless and adaptable data integration experience. Elevate your data management capabilities with Subgraph—where versatility meets simplicity.

![many data sources](https://res.cloudinary.com/the-devoyage/image/upload/v1703955372/big-data-7216839_1280_ej08cb.png)

### Enhanced Entity Associations with Subgraph

Unlock a new dimension of efficiency with Subgraph's powerful entity association capabilities. Subgraph empowers you to seamlessly link the entities within a service, paving the way for resolving associated entities in a single network request or GraphQL query. Say goodbye to multiple requests and embrace a streamlined, all-encompassing approach to entity resolution.

**Key Features:**

- Effortless Association: With Subgraph, associating entities is a breeze. Connect related entities swiftly and intuitively from within the configuration file, enhancing the coherence of your data structure.
- Single Network Request/GraphQL Query: Witness the magic of resolving associated entities with a single network request or GraphQL query. Subgraph optimizes the process, minimizing latency and maximizing efficiency.
- Cross-Data Source Association: Subgraph breaks down silos by enabling instant associations across different data sources. Seamlessly integrate entities from diverse origins, creating a unified and comprehensive view of your data.

Embrace a future where entity associations are not just a feature but a catalyst for enhanced performance. Subgraph empowers developers and startup owners to elevate their data resolution capabilities, fostering a more connected and
responsive system.

### Tailored Data Retrieval with Subgraph APIs

In the world of Subgraph, querying APIs isn't just about extracting data—it's about sculpting the precise dataset your UI demands. Subgraph introduces a versatile filtering API, a standard feature for every generated resolver. This empowers users to effortlessly combine custom filters using nested and/or clauses, providing a tailored approach to data retrieval.

**Key Benefits:**

- User-Centric Querying: Subgraph acknowledges that every UI is unique. Its querying capabilities enable users to fetch precisely the data needed to support their specific UI requirements, promoting a seamless and tailored user experience.
- Flexible Filtering: The filtering API in Subgraph is a game-changer. Users can flexibly combine an array of custom filters, utilizing nested and/or clauses to refine data retrieval. This flexibility ensures that users can adapt their queries to the evolving needs of their projects.

In addition to its robust querying capabilities, Subgraph introduces eager loading for database focused data sources. This feature enables filtering based on the properties of associated entities, offering an advanced dimension to data retrieval.

Subgraph isn't just about querying; it's about empowering users to curate data experiences that align precisely with their application needs.

### Effortless Security with Subgraph

In the realm of Subgraph, security isn't a complex ordeal—it's a few lines in your config file. Subgraph brings simplicity to the forefront with its seamless authorization and authentication capabilities. Define a concise set of lines in the config file, and Subgraph empowers you with authentication services, leveraging the robustness of web authentication (WebAuthn).

**Key Features:**

- Configurable Authorization: Subgraph simplifies the process of configuring authorization with just a few lines in your config file. Define your rules effortlessly, ensuring that your API is secure and accessible only to those with the proper permissions.
- Authentication with WebAuthn: Subgraph goes beyond traditional authentication methods by seamlessly integrating with WebAuthn. Elevate your security measures with the robust authentication capabilities offered by the web authentication standard.
- No Passwords and Higher Security - WebAuthn eliminates the need for passwords, providing a user-friendly interface while enhancing backend security through advanced cryptographic and biometric authentication methods.

Subgraph's commitment to simplicity extends to its security features, ensuring that even the process of authentication and authorization aligns with the tool's user-friendly ethos.

### New Documentation

We are thrilled to unveil the new documentation website for Subgraph, offering users a seamless and intuitive experience in navigating the wealth of information about our API deployment tool.

- [Subgraph Docs](/subgraph/intro) - Start from the top, and learn about subgraph.
- [Quick Start](/subgraph/quickstart) - Jump in with a 5 minute quickstart to a brand new API.

This user-friendly platform is designed to provide comprehensive guidance on configuring, running, and inspecting APIs with Subgraph. With a clean and organized layout, users can easily
explore the documentation, access quick-start guides, and delve into detailed explanations of Subgraph's features. The new doc website is a testament to our commitment to user accessibility
and support, ensuring that both beginners and experienced developers can harness the full potential of Subgraph effortlessly. Explore the documentation now and embark on a journey to streamline your API development process.

## Create a Graph For Free

It's free to try. No Credit Card Needed.

<LicenseAlert product="subgraph" to="https://thedevoyage.gumroad.com/l/subgraph" btnTxt="Early Alpha Release" />

Subgraph v0.0.13 represents a monumental leap forward in the realm of Automated API Generation. With a host of powerful new features, this release empowers users to effortlessly create robust APIs in mere moments, redirecting their
focus towards core business logic.

The journey begins with a simple configuration file, making API management a breeze. Subgraph's commitment to simplicity extends across diverse aspects, from streamlined data management, versatile
data source integration, and enhanced entity associations to tailored data retrieval with robust filtering APIs.

Security is seamlessly woven into Subgraph's fabric, leveraging WebAuthn for authentication without passwords, prioritizing user-friendly interfaces while fortifying backend security.

The unveiling of the new documentation website further cements Subgraph's dedication to user accessibility, providing a comprehensive resource for both novice and seasoned developers.

Embark on this transformative journey with Subgraph, where ease meets innovation, and redefine your approach to API development.
