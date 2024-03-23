"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[8964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=o,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8249:(e,t,a)=>{a.d(t,{U:()=>r});var n=a(7294),o=a(9960);const r=()=>n.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",flexDirection:"column"}},n.createElement("div",{className:"avatar"},n.createElement("a",{className:"avatar__photo-link avatar__photo avatar__photo--lg",href:"https://medium.com/@thedevoyage"},n.createElement("img",{alt:"Nick McLean Profile Image",src:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg"})),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},"Nick McLean"),n.createElement("small",{className:"avatar__subtitle padding-bottom--md"},"Thanks for following along. If you would like to keep up to date make sure to check in frequently and/or follow us below!"),n.createElement("div",null,[{to:"https://medium.com/@thedevoyage",label:"Medium"},{to:"https://twitter.com/thedevoyage",label:"Twitter"},{to:"https://thedevoyage.slack.com",label:"Slack"},{to:"https://thedevoyage.gumroad.com/subscribe",label:"Newsletter"}].map((e=>n.createElement(o.Z,{to:e.to,key:e.to},n.createElement("button",{className:"button button--primary margin-right--md",style:{color:"#fff",backgroundColor:"var(--ifm-color-dark-blue)"}},e.label))))))))},8099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),r=a(8249);const i={title:"Unlocking the Rusty Treasure Trove: Crafting Next-Gen APIs with 6 Powerhouse Crates!",slug:"6-creates-for-graphql-in-rust",authors:["nick"],tags:["subgraph","rust","api","backend"],date:new Date("2024-03-23T00:00:00.000Z"),description:"Discover the secret to supercharging your API development with Rust! Dive into a curated selection of powerful crates, from GraphQL wizards to authentication gurus, and revolutionize your web projects today. Explore the future of backend development with seamless integration, enhanced security, and unparalleled performance. Start building your next-gen APIs now!",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1711210988/5-crates-for-graphql-in-rust_bieo2m.png",keywords:["graphql","subgraph","api","rust","backend","server"]},s=void 0,l={permalink:"/blog/6-creates-for-graphql-in-rust",editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/blog/rust-as-a-backend/index.md",source:"@site/blog/rust-as-a-backend/index.md",title:"Unlocking the Rusty Treasure Trove: Crafting Next-Gen APIs with 6 Powerhouse Crates!",description:"Discover the secret to supercharging your API development with Rust! Dive into a curated selection of powerful crates, from GraphQL wizards to authentication gurus, and revolutionize your web projects today. Explore the future of backend development with seamless integration, enhanced security, and unparalleled performance. Start building your next-gen APIs now!",date:"2024-03-23T00:00:00.000Z",formattedDate:"March 23, 2024",tags:[{label:"subgraph",permalink:"/blog/tags/subgraph"},{label:"rust",permalink:"/blog/tags/rust"},{label:"api",permalink:"/blog/tags/api"},{label:"backend",permalink:"/blog/tags/backend"}],readingTime:11.77,hasTruncateMarker:!0,authors:[{name:"Nick McLean",title:"Maintainer of The Devoyage",url:"https://medium.com/@thedevoyage",imageURL:"https://cdn-images-1.medium.com/fit/c/63/63/1*TY45PiqMrWiUkivbhmp-Sw.jpeg",key:"nick"}],frontMatter:{title:"Unlocking the Rusty Treasure Trove: Crafting Next-Gen APIs with 6 Powerhouse Crates!",slug:"6-creates-for-graphql-in-rust",authors:["nick"],tags:["subgraph","rust","api","backend"],date:"2024-03-23T00:00:00.000Z",description:"Discover the secret to supercharging your API development with Rust! Dive into a curated selection of powerful crates, from GraphQL wizards to authentication gurus, and revolutionize your web projects today. Explore the future of backend development with seamless integration, enhanced security, and unparalleled performance. Start building your next-gen APIs now!",image:"https://res.cloudinary.com/the-devoyage/image/upload/v1711210988/5-crates-for-graphql-in-rust_bieo2m.png",keywords:["graphql","subgraph","api","rust","backend","server"]},nextItem:{title:"Subgraph - A Rust Powered GraphQL API Generator",permalink:"/blog/subgraph-v0.0.14-scalable-graphql-api"}},u={authorsImageUrls:[void 0]},c=[{value:"Why Choose Rust?",id:"why-choose-rust",level:2},{value:"1. It&#39;s Type Safe.",id:"1-its-type-safe",level:3},{value:"2. Efficient Memory Usage.",id:"2-efficient-memory-usage",level:3},{value:"3. Blazing Fast Performance",id:"3-blazing-fast-performance",level:3},{value:"4. Less Debugging and Less Human Error",id:"4-less-debugging-and-less-human-error",level:3},{value:"5. Thriving Ecosystem",id:"5-thriving-ecosystem",level:3},{value:"6. Integraded Type System, Testing, and Documentation",id:"6-integraded-type-system-testing-and-documentation",level:3},{value:"The Crates",id:"the-crates",level:2},{value:"Async GraphQL - async_graphql",id:"async-graphql---async_graphql",level:3},{value:"Warp Web Server - warp",id:"warp-web-server---warp",level:3},{value:"Actix Web - actix_web",id:"actix-web---actix_web",level:3},{value:"SQL Database Client - sqlx",id:"sql-database-client---sqlx",level:3},{value:"Mongo Database Client - mongodb",id:"mongo-database-client---mongodb",level:3},{value:"Passkeys Integration - webauthn-rs",id:"passkeys-integration---webauthn-rs",level:3},{value:"Persisting Authentication - biscuit_auth",id:"persisting-authentication---biscuit_auth",level:3},{value:"Happy Building",id:"happy-building",level:2}],h={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome Voyager and thanks for joining!"),(0,o.kt)("p",null,"Hey there, fellow developers! Today, let's dive into the exciting world of using Rust for your next backend GraphQL Project! I'm super pumped to introduce you to some fantastic crates that can truly level up your development journey."),(0,o.kt)("p",null,"Isn't it awesome how Rust has been buzzing lately? And guess what? The excitement isn't dying down anytime soon! As someone who thrives on learning new languages and embracing their quirks, I can tell you firsthand that Rust is a ride worth hopping on, even if it's just for a quick spin. Exploring different languages not only expands your toolkit but also enriches your overall coding skills."),(0,o.kt)("p",null,"So, are you ready to embark on this Rust adventure with me? Let's have a blast exploring some top-notch crates that'll help you whip up a stellar GraphQL API in Rust! \ud83d\ude80"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/the-devoyage/image/upload/v1711210988/5-crates-for-graphql-in-rust_bieo2m.png",alt:"feature image"})),(0,o.kt)("h2",{id:"why-choose-rust"},"Why Choose Rust?"),(0,o.kt)("p",null,"If you're wondering why you should consider Rust as your go-to language for your next project, well, you're in for a treat! Rust isn't just a passing fad in today's tech landscape \u2013 it's here to stay, and for good reasons!"),(0,o.kt)("p",null,"Let's dive into why Rust might be the perfect fit for your next big endeavor:"),(0,o.kt)("h3",{id:"1-its-type-safe"},"1. It's Type Safe."),(0,o.kt)("p",null,"One of the standout features of Rust is its robust type system. With Rust, you can bid farewell to those pesky runtime errors caused by type mismatches. By catching these errors at compile time, Rust ensures your code is rock-solid from the get-go."),(0,o.kt)("h3",{id:"2-efficient-memory-usage"},"2. Efficient Memory Usage."),(0,o.kt)("p",null,"Memory management is a breeze with Rust, thanks to its ownership model. Say goodbye to memory leaks and dangling pointers \u2013 Rust's compiler guarantees memory safety without the need for garbage collection."),(0,o.kt)("h3",{id:"3-blazing-fast-performance"},"3. Blazing Fast Performance"),(0,o.kt)("p",null,"Need for speed? Rust has got you covered! Whether you're building a high-performance web server or crunching numbers for data analysis, Rust's zero-cost abstractions and efficient concurrency model ensure your code runs like a well-oiled machine."),(0,o.kt)("h3",{id:"4-less-debugging-and-less-human-error"},"4. Less Debugging and Less Human Error"),(0,o.kt)("p",null,"Forget about spending hours debugging cryptic runtime errors. Rust's fearless concurrency and strict compiler catch common mistakes that often slip through the cracks in other languages, saving you time and headaches in the long run."),(0,o.kt)("h3",{id:"5-thriving-ecosystem"},"5. Thriving Ecosystem"),(0,o.kt)("p",null,"The Rust community is vibrant and growing by the day. From cutting-edge libraries to helpful tools, Rust's ecosystem offers everything you need to tackle even the most ambitious projects. And hey, who wouldn't want to be part of such an exciting movement?"),(0,o.kt)("h3",{id:"6-integraded-type-system-testing-and-documentation"},"6. Integraded Type System, Testing, and Documentation"),(0,o.kt)("p",null,"Rust doesn't just stop at the language itself \u2013 it comes bundled with a suite of powerful tools for testing, documentation generation, and more. With Rust, you can kiss goodbye to juggling multiple third-party tools \u2013 everything you need is right at your fingertips."),(0,o.kt)("p",null,"So there you have it \u2013 just a few of the many reasons why Rust might be the perfect choice for your next backend project. But hey, don't just take my word for it \u2013 dive in and experience the Rust magic for yourself! Let's take a look at some of these \"powerhouse\" crates\nthat make working in rust a bit easier!"),(0,o.kt)("h2",{id:"the-crates"},"The Crates"),(0,o.kt)("p",null,"Let's delve into some exciting crate options that'll kickstart your project and have you up and running in no time!"),(0,o.kt)("h3",{id:"async-graphql---async_graphql"},"Async GraphQL - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/async-graphql/latest/async_graphql/"},"async_graphql")),(0,o.kt)("p",null,"If you're diving into the world of GraphQL with Rust, look no further than the async_graphql crate. This powerhouse of a library not only covers your basic GraphQL needs but also packs a punch with advanced features to streamline your development process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Federation 2 Compliance")),(0,o.kt)("p",null,"One of the standout features of async_graphql is its Federation 2 compliance. What does that mean for you? Well, it opens up a world of possibilities, particularly if you're working with Apollo federated microservice architectures. With async_graphql, you can seamlessly integrate your services into a federated ecosystem, unlocking unparalleled scalability and flexibility."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Built-in Interfaces for Common Tasks")),(0,o.kt)("p",null,"Handling common API-related tasks like validation and access control can be a breeze with async_graphql. This crate provides intuitive interfaces that streamline these processes, allowing you to focus on building robust and secure APIs without getting bogged down in the nitty-gritty details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Unlocking the "Secret" Module: Dynamic Schemas')),(0,o.kt)("p",null,"Here's where things get really interesting. While the documented proc-macro functionality is fantastic and a great starting point for most projects, there's a hidden gem within async_graphql that's worth exploring: dynamic schemas. Although not extensively documented, dynamic schemas offer a level of flexibility and control over schema generation that can be invaluable, especially for projects with complex requirements or a need for automated code generation."),(0,o.kt)("p",null,"Whether you're just getting started with GraphQL or you're a seasoned pro looking to level up your game, async_graphql has something for everyone."),(0,o.kt)("h3",{id:"warp-web-server---warp"},"Warp Web Server - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/warp/latest/warp/"},"warp")),(0,o.kt)("p",null,"When it comes to handling the networking logic for your Rust backend, look no further than the warp crate. Just like in other languages, you'll need a reliable web server, and warp makes integrating one into your application a breeze."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Filter-Based Composition")),(0,o.kt)("p",null,'What sets warp apart is its innovative "Filter" based composition. This approach makes it incredibly simple to define and compose complex routes and handlers, allowing you to build powerful APIs with minimal boilerplate code. And when it comes to integrating with async_graphql, warp truly shines, particularly in resolving federated graphs. With warp, you can effortlessly combine the power of GraphQL with the flexibility of Warp\'s filter-based routing, unlocking a world of possibilities for your backend development.'),(0,o.kt)("p",null,"So whether you're building a simple REST API or a sophisticated GraphQL server, warp is your go-to solution for fast, reliable, and flexible networking in Rust. Give it a try and see the difference it can make in your development workflow!"),(0,o.kt)("h3",{id:"actix-web---actix_web"},"Actix Web - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/actix-web/latest/actix_web/"},"actix_web")),(0,o.kt)("p",null,"Looking for a web server in Rust that's both powerful and familiar? Enter actix_web. This popular option offers a syntax reminiscent of ExpressJS, making it a breeze for developers familiar with web development in other languages to jump right in."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ExpressJS-Like Syntax")),(0,o.kt)("p",null,"If you've worked with ExpressJS before, you'll feel right at home with actix_web. Its intuitive syntax and familiar patterns make building APIs a seamless experience, allowing you to focus on crafting robust and efficient endpoints without getting bogged down in the details of the framework."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modularization Made Easy")),(0,o.kt)("p",null,"One of the standout features of actix_web is its ease of modularization. Whether you're breaking down your application into reusable modules or creating dynamic testing environments, actix_web provides the tools you need to streamline your development workflow. In particular, spinning up a testing module that dynamically sets up the server is a breeze with actix_web, allowing you to write tests that are both comprehensive and efficient."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Versatile and Scalable")),(0,o.kt)("p",null,"From simple REST APIs to complex microservices architectures, actix_web scales with your project's needs. Its lightweight design and asynchronous foundation ensure optimal performance, even under heavy load. And with built-in support for features like WebSockets and middleware, actix_web empowers you to build cutting-edge applications with ease."),(0,o.kt)("p",null,"Give it a spin and see why it's a favorite among developers worldwide!"),(0,o.kt)("h3",{id:"sql-database-client---sqlx"},"SQL Database Client - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/sqlx/latest/sqlx/"},"sqlx")),(0,o.kt)("p",null,"If you're like me and have found yourself drawn to ORMs in your development journey, allow me to introduce you to a game-changer: sqlx. As a TypeScript developer who's accustomed to the convenience of tools like Mongoose or Sequelize, I understand the allure of ORMs \u2013 until you hit those inevitable limitations as your application grows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Embracing the Power of SQL")),(0,o.kt)("p",null,"Enter sqlx, a library that's about to revolutionize the way you interact with databases. Say goodbye to the constraints of ORMs and hello to the raw power of Structured Query Language (SQL). With sqlx, you have full control over your SQL queries, allowing you to craft efficient and optimized database interactions tailored to your application's specific needs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type-Safe SQL Queries")),(0,o.kt)("p",null,"But here's where sqlx truly shines: type safety. No more runtime errors or debugging sessions caused by typos in your SQL strings \u2013 sqlx performs SQL type checking against your database at build time, ensuring that your queries are error-free before they ever hit production. This means cleaner, more robust code and fewer headaches for you and your team."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Abandoning the ORM \u2013 For Good Reason")),(0,o.kt)("p",null,"After diving into sqlx, you may find yourself reevaluating your reliance on ORMs. Why settle for the limitations and overhead of an ORM when you can harness the full power of SQL with sqlx? Whether you're building a small-scale application or a large-scale enterprise system, sqlx empowers you to interact with your database with confidence and efficiency."),(0,o.kt)("p",null,"Give sqlx a try, and experience the freedom and flexibility of SQL without sacrificing the safety and convenience you've come to expect from modern development tools. Trust me \u2013 you won't look back."),(0,o.kt)("h3",{id:"mongo-database-client---mongodb"},"Mongo Database Client - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/mongodb/latest/mongodb/"},"mongodb")),(0,o.kt)("p",null,"If you're looking to connect your Rust application to a MongoDB database seamlessly, look no further than the mongodb client. This library offers a straightforward and hassle-free way to manage your MongoDB connections without any unnecessary bells and whistles."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Simplified Database Interaction")),(0,o.kt)("p",null,"With the mongodb client, creating and managing connections to your MongoDB database is a breeze. Whether you're performing basic CRUD operations or executing more complex queries, this library provides a clean and intuitive interface that gets the job done without any fuss."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No Frills, Just Functionality")),(0,o.kt)("p",null,"While some libraries may boast flashy features or elaborate APIs, mongodb takes a different approach \u2013 it focuses on doing one thing, and doing it well. There are no frills or thrills here, just solid functionality that you can rely on to handle your MongoDB interactions with ease."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dependable Performance")),(0,o.kt)("p",null,"Despite its simplicity, the mongodb client doesn't compromise on performance. Whether you're working with a small-scale application or a large-scale enterprise system, you can trust mongodb to deliver consistent and reliable performance, ensuring that your application runs smoothly even under heavy load."),(0,o.kt)("p",null,"It may not have all the bells and whistles, but it gets the job done \u2013 and isn't that what really matters in the end?"),(0,o.kt)("h3",{id:"passkeys-integration---webauthn-rs"},"Passkeys Integration - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/webauthn-rs/latest/webauthn_rs/"},"webauthn-rs")),(0,o.kt)("p",null,"Looking to enhance the security and user experience of your authentication system? Meet webauthn-rs, a powerful crate that simplifies the integration of passwordless authentication into your Rust application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Embracing Passkeys for Enhanced Security")),(0,o.kt)("p",null,"Passkeys are revolutionizing the way we approach authentication, offering users a convenient and secure alternative to traditional password-based systems. With webauthn-rs, you can seamlessly integrate passkey-based authentication into your application, eliminating the need for users to remember or set passwords while bolstering security and enhancing the overall user experience."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quick and Easy Integration")),(0,o.kt)("p",null,"One of the standout features of webauthn-rs is its ease of integration. Whether you're building a new application from scratch or adding passkey-based authentication to an existing project, webauthn-rs makes the process quick and painless. With straightforward APIs and comprehensive documentation, you'll be up and running with passkey authentication in no time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Seamless Frontend Integration")),(0,o.kt)("p",null,"But webauthn-rs doesn't stop at the backend \u2013 it also plays well with frontend libraries to streamline the authentication flow. Whether you're using React, Vue.js, or another frontend framework, webauthn-rs can easily be paired with frontend libraries to create a seamless and intuitive authentication experience for your users."),(0,o.kt)("p",null,"So if you're ready to take your authentication system to the next level with passkey-based authentication, give webauthn-rs a try. With its simplicity, security, and sleek user interface, it's sure to be a game-changer for your application."),(0,o.kt)("h3",{id:"persisting-authentication---biscuit_auth"},"Persisting Authentication - ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.rs/biscuit-auth/latest/biscuit_auth/"},"biscuit_auth")),(0,o.kt)("p",null,"If you're familiar with JWTs and looking to take your authentication system to the next level, look no further than biscuit_auth. This powerful crate builds upon the foundation of JWTs, offering offline attenuation and enhanced validation capabilities for a more secure authentication experience."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Elevating JWTs with Offline Attenuation")),(0,o.kt)("p",null,"While JWTs provide a convenient way to validate a user's identity, biscuit_auth takes them a step further with offline attenuation. This means that even if a JWT is compromised, its scope can be limited to prevent unauthorized access, enhancing the security of your authentication system."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Seamless Integration into Your Auth Flow")),(0,o.kt)("p",null,"Integrating biscuit_auth into your Rust application's authentication flow is a breeze. With intuitive APIs and comprehensive documentation, you can quickly incorporate offline attenuation and validation into your existing authentication system, bolstering security without sacrificing usability."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node Wrapper for Cross-Platform Compatibility")),(0,o.kt)("p",null,"But biscuit_auth doesn't stop at Rust \u2013 it also provides a node wrapper, allowing you to consume these tokens in a Node.js or web environment with ease. This cross-platform compatibility ensures that you can leverage the power of biscuit_auth regardless of your preferred development stack."),(0,o.kt)("p",null,"So if you're ready to enhance the security and integrity of your authentication system with offline attenuation and validation, give biscuit_auth a try. With its seamless integration, cross-platform compatibility, and enhanced security features, it's sure to be a valuable addition to your Rust application."),(0,o.kt)("h2",{id:"happy-building"},"Happy Building"),(0,o.kt)("p",null,"And there you have it! I hope sharing some of my favorite crates has sparked your curiosity and inspired you to explore the world of API design with Rust. As developers, we have the opportunity to immerse ourselves in any community we choose, and I can assure you that the Rust community is one you won't want to miss out on!"),(0,o.kt)("p",null,"Whether you're a seasoned Rustacean or just dipping your toes into the language for the first time, exploring these crates is sure to expand your horizons and strengthen your skills. Along the way, you'll discover what you love and what you might not love so much \u2013 and that's all part of the journey towards becoming a better developer."),(0,o.kt)("p",null,"If you're itching to get started with GraphQL and want to spin up a GraphQL API in just a few minutes, I highly recommend checking out a tool I have been working on for over a year called ",(0,o.kt)("a",{parentName:"p",href:"https://www.thedevoyage.com/subgraph/intro"},"Subgraph"),". This powerful tool allows you to define a configuration that instantly creates a GraphQL API around your database, saving you time and effort in the development process."),(0,o.kt)("p",null,"So what are you waiting for? Dive in, explore, and happy building!"),(0,o.kt)(r.U,{mdxType:"BlogFooter"}))}p.isMDXComponent=!0}}]);