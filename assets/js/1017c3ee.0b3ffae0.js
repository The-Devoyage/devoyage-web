"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[22],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"accounts-features-authorization",title:"Authentication Features"},u=void 0,s={unversionedId:"Features/accounts-features-authorization",id:"Features/accounts-features-authorization",title:"Authentication Features",description:"Authentication is the act of proving identity, and the GraphQL Accounts service comes with the authentication features that you would expect within any modern API.",source:"@site/accounts/02-Features/01-authorization.md",sourceDirName:"02-Features",slug:"/Features/accounts-features-authorization",permalink:"/accounts/Features/accounts-features-authorization",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/accounts/02-Features/01-authorization.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"accounts-features-authorization",title:"Authentication Features"},sidebar:"accountsSidebar",previous:{title:"GraphQL Accounts",permalink:"/accounts/accounts-intro"},next:{title:"Manage Accounts",permalink:"/accounts/Features/accounts-features-manage"}},l={},p=[{value:"Register Accounts",id:"register-accounts",level:2},{value:"Verify Account",id:"verify-account",level:2},{value:"Login Account",id:"login-account",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Authentication is the act of proving identity, and the GraphQL Accounts service comes with the authentication features that you would expect within any modern API."),(0,a.kt)("h2",{id:"register-accounts"},"Register Accounts"),(0,a.kt)("p",null,"Anyone may register/create an ",(0,a.kt)("inlineCode",{parentName:"p"},"Account"),". To create an account the potential account holder only needs to provide an email and a password."),(0,a.kt)("h2",{id:"verify-account"},"Verify Account"),(0,a.kt)("p",null,"By default, accounts are not created with an active status, which is require to login! The user needs to prove their identity by providing a secret code during the verification process."),(0,a.kt)("h2",{id:"login-account"},"Login Account"),(0,a.kt)("p",null,"Once verified, the account holder may log in to their account. Logging in provides the account holder with a JWT that can later be used to prove identity throughout the API."))}d.isMDXComponent=!0}}]);