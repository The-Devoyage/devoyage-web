"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[6168],{3294:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const a={id:"examples-mixed-data-sources",title:"Mixed Data Sources"},i=void 0,o={id:"examples/examples-mixed-data-sources",title:"Mixed Data Sources",description:"",source:"@site/subgraph/12-examples/06-mixed-datasources.md",sourceDirName:"12-examples",slug:"/examples/examples-mixed-data-sources",permalink:"/subgraph/examples/examples-mixed-data-sources",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/12-examples/06-mixed-datasources.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"examples-mixed-data-sources",title:"Mixed Data Sources"},sidebar:"subgraphSidebar",previous:{title:"Simple HTTP",permalink:"/subgraph/examples/examples-http"},next:{title:"Objects and Arrays",permalink:"/subgraph/examples/examples-objects-arrays"}},c={},d=[];function u(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[service]\n# This is the name of the service\nname = "pets"\n\n# This is a list of data sources used by the service\n[[service.data_sources]]\n\n# This is a data source that connects to a MongoDB instance\n[service.data_sources.Mongo]\nname = "mongo_1"\nuri = "mongodb://users:users@127.0.0.1:27017/users"\ndb = "sun"\n\n# This is another MongoDB data source using Mongo Atlas\n[[service.data_sources]]\n[service.data_sources.Mongo]\nname = "mongo_2"\nuri = "mongodb+srv://$MONGO_USER:$MONGO_PASS@cluster0.dog1234.mongodb.net/?retryWrites=true&w=majority"\ndb = "dogs"\n\n# This is an HTTP data source connecting to an external API\n[[service.data_sources]]\n[service.data_sources.HTTP]\nname = "todos"\nurl = "https://jsonplaceholder.typicode.com"\n\n###########################################################################################################################\n# This is the first entity\n\n[[service.entities]]\nname = "Person"\nfields = [\n    { name = "_id", scalar = "ObjectID", required = true }\n    { name = "name", scalar = "String", required = true }\n    { name = "age", scalar = "Int", required = true }\n    { name = "married", scalar = "Boolean", required = true }\n]\n# This is the data source for the entity\n[service.entities.data_source]\nfrom = "mongo_1"\ncollection = "users"\n\n###########################################################################################################################\n# This is a second entity\n\n[[service.entities]]\nname = "Dog"\n[service.entities.data_source]\nfrom = "mongo_2"\ncollection = "dogs"\n[[service.entities.fields]]\nname = "_id"\nscalar = "ObjectID"\nrequired = true\n[[service.entities.fields]]\nname = "name"\nscalar = "String"\nrequired = true\n[[service.entities.fields]]\nname = "breed"\nscalar = "String"\nrequired = true\n\n###########################################################################################################################\n# This is a third entity\n\n[[service.entities]]\nname = "todo"\n[service.entities.data_source]\nfrom = "todos"\npath = "/todos"\n[service.entities.data_source.resolvers]\n[service.entities.data_source.resolvers.find_one]\npath = "/:id"\n[service.entities.data_source.resolvers.find_many]\nsearch_query = [["userId", ":userId"], ["completed", ":completed"], ["id", ":id"]]\n[[service.entities.fields]]\nname = "userId"\nscalar = "Int"\nrequired = true\n[[service.entities.fields]]\nname = "id"\nscalar = "Int"\nrequired = true\n[[service.entities.fields]]\nname = "title"\nscalar = "String"\nrequired = true\n[[service.entities.fields]]\nname = "completed"\nscalar = "Boolean"\nrequired = true\n'})})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);