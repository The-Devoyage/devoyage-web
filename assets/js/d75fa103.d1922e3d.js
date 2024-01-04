"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[4131],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>p});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=s,f=m["".concat(c,".").concat(p)]||m[p]||l[p]||a;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function p(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2491:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=r(7462),s=(r(7294),r(3905));const a={id:"examples-mixed-data-sources",title:"Mixed Data Sources"},i=void 0,o={unversionedId:"examples/examples-mixed-data-sources",id:"examples/examples-mixed-data-sources",title:"Mixed Data Sources",description:"",source:"@site/subgraph/12-examples/06-mixed-datasources.md",sourceDirName:"12-examples",slug:"/examples/examples-mixed-data-sources",permalink:"/subgraph/examples/examples-mixed-data-sources",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/12-examples/06-mixed-datasources.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"examples-mixed-data-sources",title:"Mixed Data Sources"},sidebar:"subgraphSidebar",previous:{title:"Simple HTTP",permalink:"/subgraph/examples/examples-http"},next:{title:"Objects and Arrays",permalink:"/subgraph/examples/examples-objects-arrays"}},c={},u=[],d={toc:u};function l(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[service]\n# This is the name of the service\nname = "pets"\n\n# This is a list of data sources used by the service\n[[service.data_sources]]\n\n# This is a data source that connects to a MongoDB instance\n[service.data_sources.Mongo]\nname = "mongo_1"\nuri = "mongodb://users:users@127.0.0.1:27017/users"\ndb = "sun"\n\n# This is another MongoDB data source using Mongo Atlas\n[[service.data_sources]]\n[service.data_sources.Mongo]\nname = "mongo_2"\nuri = "mongodb+srv://$MONGO_USER:$MONGO_PASS@cluster0.dog1234.mongodb.net/?retryWrites=true&w=majority"\ndb = "dogs"\n\n# This is an HTTP data source connecting to an external API\n[[service.data_sources]]\n[service.data_sources.HTTP]\nname = "todos"\nurl = "https://jsonplaceholder.typicode.com"\n\n###########################################################################################################################\n# This is the first entity\n\n[[service.entities]]\nname = "Person"\nfields = [\n    { name = "_id", scalar = "ObjectID", required = true }\n    { name = "name", scalar = "String", required = true }\n    { name = "age", scalar = "Int", required = true }\n    { name = "married", scalar = "Boolean", required = true }\n]\n# This is the data source for the entity\n[service.entities.data_source]\nfrom = "mongo_1"\ncollection = "users"\n\n###########################################################################################################################\n# This is a second entity\n\n[[service.entities]]\nname = "Dog"\n[service.entities.data_source]\nfrom = "mongo_2"\ncollection = "dogs"\n[[service.entities.fields]]\nname = "_id"\nscalar = "ObjectID"\nrequired = true\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n[[service.entities.fields]]\nname = "breed"\nscalar = "String"\nrequired = true\n\n###########################################################################################################################\n# This is a third entity\n\n[[service.entities]]\nname = "todo"\n[service.entities.data_source]\nfrom = "todos"\npath = "/todos"\n[service.entities.data_source.resolvers]\n[service.entities.data_source.resolvers.find_one]\npath = "/:id"\n[service.entities.data_source.resolvers.find_many]\nsearch_query = [["userId", ":userId"], ["completed", ":completed"], ["id", ":id"]]\n[[service.entities.fields]]\nname = "userId"\nscalar = "Int"\nrequired = true\n[[service.entities.fields]]\nname = "id"\nscalar = "Int"\nrequired = true\n[[service.entities.fields]]\nname = "title"\nscalar = "String"\nrequired = true\n[[service.entities.fields]]\nname = "completed"\nscalar = "Boolean"\nrequired = true\n')))}l.isMDXComponent=!0}}]);