"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[502],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(r),h=a,d=g["".concat(p,".").concat(h)]||g[h]||c[h]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3679:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"gateway-setup",title:"Setting Up The Gateway"},p=void 0,u={unversionedId:"gateway-setup",id:"gateway-setup",title:"Setting Up The Gateway",description:"Setting up the GraphQL Gateway is pretty straight forward.",source:"@site/gateway/03-setup.md",sourceDirName:".",slug:"/gateway-setup",permalink:"/gateway/gateway-setup",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/gateway/03-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"gateway-setup",title:"Setting Up The Gateway"},sidebar:"gatewaySidebar",previous:{title:"Global Context",permalink:"/gateway/Features/gateway-features-global-context"},next:{title:"Authorize Requests",permalink:"/gateway/Usage/gateway-usage-authorize-requests"}},s={},c=[{value:"Clone The Repository",id:"clone-the-repository",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Login to Github NPM Registry",id:"login-to-github-npm-registry",level:3},{value:"Install",id:"install",level:3},{value:"Rover",id:"rover",level:3},{value:"Set Environment Variables",id:"set-environment-variables",level:2},{value:"Running The Server",id:"running-the-server",level:2},{value:"Create a Supergraph with Rover",id:"create-a-supergraph-with-rover",level:2}],g={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setting up the GraphQL Gateway is pretty straight forward."),(0,o.kt)("h2",{id:"clone-the-repository"},"Clone The Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/The-Devoyage/graphql-gateway.git\n")),(0,o.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,o.kt)("h3",{id:"login-to-github-npm-registry"},"Login to Github NPM Registry"),(0,o.kt)("p",null,"There are a few packages we use that are located within the NPM Github Registry -- Login, so that you may install them with NPM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm login --registry=https://npm.pkg.github.com\n")),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("h3",{id:"rover"},"Rover"),(0,o.kt)("p",null,"You may need to install Rover Globally, check the Apollo Rover Documentation in order to install the Rover CLI."),(0,o.kt)("h2",{id:"set-environment-variables"},"Set Environment Variables"),(0,o.kt)("p",null,"First, move the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," file to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and fill in the variables."),(0,o.kt)("h2",{id:"running-the-server"},"Running The Server"),(0,o.kt)("p",null,"In development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("p",null,"or In Production"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("h2",{id:"create-a-supergraph-with-rover"},"Create a Supergraph with Rover"),(0,o.kt)("p",null,"An example supergraph config is found in the root of the project at ",(0,o.kt)("inlineCode",{parentName:"p"},"./supergraph-config.yaml"),". Fill in the details to match your Federated API. It is required to start the subgraphs before use Rover to generate the supergraph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql\n")),(0,o.kt)("p",null,"You may also use the npm script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run supergraph\n")),(0,o.kt)("p",null,"If you are using Docker or Docker-Compose, create a volume to mount the newly generated ",(0,o.kt)("inlineCode",{parentName:"p"},"supergraph.graphql")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/supergraph.graphql"),". This will allow you to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"supergraph.graphql")," file that is default inside the container."),(0,o.kt)("p",null,"Anytime a new supergraph is generated, you must restart the server. Create new supergraphs as the typings of external services change."))}h.isMDXComponent=!0}}]);