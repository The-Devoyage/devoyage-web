"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[7334],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"default-content",title:"Default Content"},c=void 0,l={unversionedId:"usage/default-content",id:"usage/default-content",title:"Default Content",description:"HTML and Variables are provided from the source of the triggering event allowing you to use HTML and Variables from the origin source.",source:"@site/mailer/03-usage/02-default-content.md",sourceDirName:"03-usage",slug:"/usage/default-content",permalink:"/mailer/usage/default-content",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/mailer/03-usage/02-default-content.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"default-content",title:"Default Content"},sidebar:"mailerSidebar",previous:{title:"Post Webhook",permalink:"/mailer/usage/post-mail-webhook"},next:{title:"Triggered Content",permalink:"/mailer/usage/triggered-content"}},s={},f=[],p={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"HTML and Variables are provided from the source of the triggering event allowing you to use HTML and Variables from the origin source."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Accounts API\n// User successfully resets password...\n// Send POST Request to the mailer service to trigger email using @the-devoyage/mailer-connect library.\n\nconst sent = await mailer.send({\n  defaultContent: {\n    to: updatedAccount.email,\n    html: `<h3>Success!</h3><p>Hello, ${first_name}, your password has been reset.</p>`,\n    plainText: `Success! Hello ${first_name}, your password has been reset.`,\n    subject: `${company_name} Password Reset`,\n  },\n});\n")))}d.isMDXComponent=!0}}]);