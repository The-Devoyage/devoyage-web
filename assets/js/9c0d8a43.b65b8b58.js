"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[6402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"entity-guards",title:"Entity Guards"},o=void 0,s={unversionedId:"entities/entity-guards",id:"entities/entity-guards",title:"Entity Guards",description:"Entity Access with Guards",source:"@site/subgraph/05-entities/04-guards.md",sourceDirName:"05-entities",slug:"/entities/entity-guards",permalink:"/subgraph/entities/entity-guards",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/05-entities/04-guards.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"entity-guards",title:"Entity Guards"},sidebar:"subgraphSidebar",previous:{title:"Required Entities",permalink:"/subgraph/entities/required-entities"},next:{title:"Authorization & Authentication",permalink:"/subgraph/category/authorization--authentication"}},u={},c=[{value:"Entity Access with Guards",id:"entity-access-with-guards",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"entity-access-with-guards"},"Entity Access with Guards"),(0,i.kt)("p",null,"Limiting who can access an entity can be done by providing a ",(0,i.kt)("inlineCode",{parentName:"p"},"guard")," at the entity level. As you can read about\nin the guards section of this dicumentation, guards allow you to prevent access to the API quickly and easily."),(0,i.kt)("p",null,"Guards that evaluate to a truthy condition will prevent a request from being successful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[[service.entities]]\nname = "Espresso"\n\n[[service.entities.guards]]\nname = "invalid_name"\nif_expr = \'\'\'\n    input("query" "first_name") == "nick"\n\'\'\'\nthen_msg = "Invalid Name - Permission Denied"\n')),(0,i.kt)("p",null,"Guards have access to common or even custom contextual data that allows for unique authorization to be applied to\nany service. Check out the Guards section of the docs to learn more."))}p.isMDXComponent=!0}}]);