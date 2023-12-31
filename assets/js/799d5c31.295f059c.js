"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[9582],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>v});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),v=a,b=m["".concat(s,".").concat(v)]||m[v]||u[v]||i;return n?t.createElement(b,o(o({ref:r},p),{},{components:n})):t.createElement(b,o({ref:r},p))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1538:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const i={id:"environment-variables",title:"Environment Variabels"},o=void 0,l={unversionedId:"environment-variables",id:"environment-variables",title:"Environment Variabels",description:"Environment Variables",source:"@site/subgraph/10-environment-variables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/subgraph/environment-variables",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/10-environment-variables.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"environment-variables",title:"Environment Variabels"},sidebar:"subgraphSidebar",previous:{title:"Auth Key Pair",permalink:"/subgraph/cli-options/auth-key-pair"},next:{title:"Expressions",permalink:"/subgraph/category/expressions"}},s={},c=[{value:"Environment Variables",id:"environment-variables",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Use environment variables in the configuration file with ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'default_headers = [{ name = "Authorization", value = "Bearer $OPENAI_KEY" }]\n')))}u.isMDXComponent=!0}}]);