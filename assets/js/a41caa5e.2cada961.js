"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1055],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"post-mail-webhook",title:"Post Webhook"},u=void 0,c={unversionedId:"usage/post-mail-webhook",id:"usage/post-mail-webhook",title:"Post Webhook",description:"Listen for Webhooks From Your API",source:"@site/mailer/03-usage/01-post-webhook.md",sourceDirName:"03-usage",slug:"/usage/post-mail-webhook",permalink:"/mailer/usage/post-mail-webhook",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/mailer/03-usage/01-post-webhook.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"post-mail-webhook",title:"Post Webhook"},sidebar:"mailerSidebar",previous:{title:"Setup",permalink:"/mailer/setup"},next:{title:"Default Content",permalink:"/mailer/usage/default-content"}},l={},p=[{value:"Listen for Webhooks From Your API",id:"listen-for-webhooks-from-your-api",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"listen-for-webhooks-from-your-api"},"Listen for Webhooks From Your API"),(0,a.kt)("p",null,"After an event happens in your API, simply POST to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/send")," endpoint of this server to send a templated email."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Accounts API\n// User successfully resets password...\n// Send POST Request to the mailer service to trigger email using fetch.\n\nconst sent = await fetch("http://localhost:5008/send", {\n  method: "POST",\n  body: JSON.stringify({\n    defaultContent: {\n      to: updatedAccount.email,\n      html: `<h3>Success!</h3><p>${first_name}, your password has been reset.`,\n      plainText: `Success! ${first_name}, your password has been reset!`,\n      subject: "Password Reset",\n    },\n  }),\n});\n')),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/The-Devoyage/mailer-connect/packages/1234394"},(0,a.kt)("inlineCode",{parentName:"a"},"@the-devoyage/mailer-connect")," package")," to quickly POST the webhook with typed inputs parameters."))}m.isMDXComponent=!0}}]);