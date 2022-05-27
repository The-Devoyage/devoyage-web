"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[212],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(8126),c=["components"],s={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.W,{product:"graphql-accounts",to:"https://thedevoyage.gumroad.com/l/graphql-accounts",mdxType:"LicenseAlert"}))}u.isMDXComponent=!0;var l=["components"],d={id:"accounts-intro",title:"GraphQL Accounts"},p=void 0,h={unversionedId:"accounts-intro",id:"accounts-intro",title:"GraphQL Accounts",description:"The Devoyage's GraphQL Accounts Service is a production ready Authentication API (Federated). Use this service to enable features such as Account Registration, Login, Password Reset, and 2fa within your API.",source:"@site/accounts/01-intro.md",sourceDirName:".",slug:"/accounts-intro",permalink:"/accounts/accounts-intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"accounts-intro",title:"GraphQL Accounts"},sidebar:"accountsSidebar",next:{title:"Authentication Features",permalink:"/accounts/Features/accounts-features-authorization"}},f={},m=[{value:"Registration, Account Management and Authentication",id:"registration-account-management-and-authentication",level:2},{value:"Security For Your API",id:"security-for-your-api",level:2},{value:"Hashed and Salted Passwords",id:"hashed-and-salted-passwords",level:3},{value:"Activation Statuses and 2fa",id:"activation-statuses-and-2fa",level:3},{value:"Webhooks",id:"webhooks",level:2}],v={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{mdxType:"SupportAlert"}),(0,o.kt)("p",null,"The Devoyage's GraphQL Accounts Service is a production ready Authentication API (Federated). Use this service to enable features such as Account Registration, Login, Password Reset, and 2fa within your API."),(0,o.kt)("h2",{id:"registration-account-management-and-authentication"},"Registration, Account Management and Authentication"),(0,o.kt)("p",null,"This services provides everything needed to get an Accounts system up and running. Potential account holders may:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register new Account",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Creates an ",(0,o.kt)("inlineCode",{parentName:"li"},"Account")," object within the database to represent the account holder."))),(0,o.kt)("li",{parentName:"ul"},"Update Their Account",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Reset their Password"),(0,o.kt)("li",{parentName:"ul"},"Reset the 2fa Verification Status and Code"),(0,o.kt)("li",{parentName:"ul"},"Update their Email"))),(0,o.kt)("li",{parentName:"ul"},"Verify Their Account",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"2fa Verification Codes"))),(0,o.kt)("li",{parentName:"ul"},"Login To Their Account",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Password based Verification"))),(0,o.kt)("li",{parentName:"ul"},"Get Accounts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Get Authenticated Account"),(0,o.kt)("li",{parentName:"ul"},"Get a filtered list of Accounts (admin only)")))),(0,o.kt)("h2",{id:"security-for-your-api"},"Security For Your API"),(0,o.kt)("p",null,"Accounts are a familiar part of any API. They grant and limit access to assets within your web application by allowing users to prove their identity before accessing protected data. To validate an account holder's identity, the user logs in using a standard password based authentication."),(0,o.kt)("h3",{id:"hashed-and-salted-passwords"},"Hashed and Salted Passwords"),(0,o.kt)("p",null,"Passwords are hashed and salted before being stored in the database. This means that the plain text, readable, version is never saved to the database for higher security."),(0,o.kt)("h3",{id:"activation-statuses-and-2fa"},"Activation Statuses and 2fa"),(0,o.kt)("p",null,"Every account has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Activation")," status. By default, new accounts are not 'active' until the account holder verifies their identity with two factor authentication. Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Activation")," property contains a verification code that is time sensitive. The user can submit the code provided when verifying their email to change the account to 'active'."),(0,o.kt)("h2",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"As a user interacts with the API events trigger webhooks allowing you to trigger custom functions elsewhere in the Federated API. For example, when a user registers, the register webhook is fired containing the user's activation code. You can route these webhooks to a emailing service to send the activation code to the user."))}y.isMDXComponent=!0},8126:function(e,t,n){n.d(t,{W:function(){return o}});var a=n(7294),r=n(9960),o=function(e){var t=e.product,n=e.to;return a.createElement("div",{className:"alert alert--info margin-vert--lg",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},"Want to use `@the-devoyage/",t,"` in production?",a.createElement(r.Z,{to:n},a.createElement("button",{className:"button button--primary"},"Purchase MIT License")))}}}]);