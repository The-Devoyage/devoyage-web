"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3729],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8651:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"setup",title:"Setup The Server"},p=void 0,u={unversionedId:"setup",id:"setup",title:"Setup The Server",description:"Clone The Repository",source:"@site/media/02-setup.md",sourceDirName:".",slug:"/setup",permalink:"/media/setup",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/media/02-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"setup",title:"Setup The Server"},sidebar:"mailerSidebar",previous:{title:"GraphQL Media",permalink:"/media/intro"},next:{title:"Query The Server",permalink:"/media/usage/query-the-server"}},c={},s=[{value:"Clone The Repository",id:"clone-the-repository",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Login to the Github registry with NPM.",id:"login-to-the-github-registry-with-npm",level:3},{value:"Install Dependencies",id:"install-dependencies-1",level:3},{value:"Configure Environment Variables",id:"configure-environment-variables",level:2},{value:"Run The Server",id:"run-the-server",level:2},{value:"In Development",id:"in-development",level:3},{value:"In Production",id:"in-production",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"clone-the-repository"},"Clone The Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/The-Devoyage/graphql-media.git\n")),(0,o.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,o.kt)("h3",{id:"login-to-the-github-registry-with-npm"},"Login to the Github registry with NPM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm login --registry=https://npm.pkg.github.com\n")),(0,o.kt)("h3",{id:"install-dependencies-1"},"Install Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install\n")),(0,o.kt)("p",null,"For docker, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t --build-arg GTIHUB_TOKEN=${GITHUB_TOKEN} .\n")),(0,o.kt)("h2",{id:"configure-environment-variables"},"Configure Environment Variables"),(0,o.kt)("p",null,"All environment variables are saved in the root of this repo in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example"),". Move this file to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and fill in the variables."),(0,o.kt)("h2",{id:"run-the-server"},"Run The Server"),(0,o.kt)("h3",{id:"in-development"},"In Development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,o.kt)("h3",{id:"in-production"},"In Production"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm start\n")))}m.isMDXComponent=!0}}]);