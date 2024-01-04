"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[5592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={id:"guard-data-context",title:"Data Context"},i=void 0,s={unversionedId:"guards/guard-data-context",id:"guards/guard-data-context",title:"Data Context",description:"When working with guards, it is often required to interact with data associated with the action being performed. Data Context allows reference to",source:"@site/subgraph/07-guards/05-data-context.md",sourceDirName:"07-guards",slug:"/guards/guard-data-context",permalink:"/subgraph/guards/guard-data-context",draft:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/07-guards/05-data-context.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"guard-data-context",title:"Data Context"},sidebar:"subgraphSidebar",previous:{title:"Error Messages",permalink:"/subgraph/guards/guard-messages"},next:{title:"CLI Options",permalink:"/subgraph/category/cli-options"}},l={},u=[{value:"Context Basics",id:"context-basics",level:2},{value:"Entity Name",id:"entity-name",level:3},{value:"Custom References and Multiple Contexts",id:"custom-references-and-multiple-contexts",level:3},{value:"The <code>query</code> Object",id:"the-query-object",level:3},{value:"Dynamic Variables",id:"dynamic-variables",level:3},{value:"Working With Tuples",id:"working-with-tuples",level:4}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When working with guards, it is often required to interact with data associated with the action being performed. Data Context allows reference to\nvarious data sources and entities when executing operations."),(0,r.kt)("p",null,"Data Context allows you to define what data to make available to the guard when evaluating the expression that determines if the request should be denied or not."),(0,r.kt)("p",null,"An example use case would be to check the role of a user before allowing the user to perform an update operation on an entity. The user role is not found in the provided\ncontext by default, as it is a custom entity from a custom data source, defined in the service."),(0,r.kt)("p",null,"In order to interact with this external data, define a context property on any guard to fetch the data before the guard evaluation, making it possible to interact with virtually any data\nthat the API has access to."),(0,r.kt)("h2",{id:"context-basics"},"Context Basics"),(0,r.kt)("p",null,"Context definitions may be appended to any guard, regardless of the location. Defining context involved providing three to four instructions including the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_name")," to\nreference which entity should be referenced, the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to define custom reference for the dataset in the event the same entity needs to be querieied multiple times,\nand the graphql query with dynamic variables to reference the correct query."),(0,r.kt)("p",null,"Once defined, context is made available to any subsequent guard or evaluation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Define a guard to check if a "connection" already exists.\n[[entities.data_source.resolvers.create_one.guards]]\nname = "already_connected"\n  # Check if the length of the connections found and deny if it is greater than 0.\n  # Use the built in context function to extract the data needed to check this operation.\nif_expr = \'\'\'\n  len(context("connection.id")) > 0\n\'\'\'\nthen_msg = "You are already connected with this user."\n\n# Below we define the context property.\n[[entities.data_source.resolvers.create_one.guards.context]]\n# The entity to fetch\nentity_name = "user_connection"\n# A custom name to reference the data.\nname = "connection"\n# The query to be performed to fetch the data.\nquery = \'\'\'\n  {\n    "get_users_input": {\n      "query": {\n        "AND": {{uuid}}\n      }\n    }\n  }\n\'\'\'\n# Dynamic variables to inject into the query.\nvariables = [\n  ["{{uuid}}", "input(\\"values\\", \\"user_uuid\\")"]\n]\n')),(0,r.kt)("h3",{id:"entity-name"},"Entity Name"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")),(0,r.kt)("p",null,"First, choose which entity needs to be referenced for the guard context. The ",(0,r.kt)("inlineCode",{parentName:"p"},"entity_name")," needs to match an existing entity from the defined service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[[entities.data_source.resolvers.create_one.guards.context]]\nentity_name = \"user_role\" # Provide the entity name.\nquery = '''\n    ...\n'''\nvariables = []\n")),(0,r.kt)("h3",{id:"custom-references-and-multiple-contexts"},"Custom References and Multiple Contexts"),(0,r.kt)("p",null,"When working with multiple contexts that query the same entity, it might be needed to reference the results by a custom name when accessing the contextual data\ninside the guard's evaluation phase."),(0,r.kt)("p",null,"Below we define multiple contexts that reference the same ",(0,r.kt)("inlineCode",{parentName:"p"},"user_role")," entity allowing the guard to reference multiple roles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[[entities.data_source.resolvers.create_one.guards.context]]\nentity_name = \"user_role\"\nname = \"logged_in_user_role\"\nquery = '''\n    ...\n'''\nvariables = [\n    ...\n]\n[[entities.data_source.resolvers.create_one.guards.context]]\nentity_name = \"user_role\"\nname = \"new_role_being_created\"\nquery = '''\n    ...\n'''\nvariables = []\n")),(0,r.kt)("h3",{id:"the-query-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"query")," Object"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")),(0,r.kt)("p",null,"This string allows you to construct a dynamic query for the entity. The response data is what is injected into the data context."),(0,r.kt)("p",null,"This string does not support expressions but does support variable injection."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: The query functions exactly the same as a query you would generate for the graphql client side. Use the generated docs to help\nwrite your query. It must be valid JSON.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[entities.data_source.resolvers.create_one.guards.context]]\nentity_name = "user_role"\nname = "new_role_being_created"\nquery = \'\'\'\n  {\n    "get_user_roles_input": {\n      "query": {\n        "role_name": "admin"\n      }\n    }\n  }\n\'\'\'\nvariables = []\n')),(0,r.kt)("h3",{id:"dynamic-variables"},"Dynamic Variables"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"required")),(0,r.kt)("p",null,"This required array/vector of tuples is used to dynamically replace variables in the query before execution. It may be left empty if no variables are defined."),(0,r.kt)("p",null,"Populate the array with a tuple containing two values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Target - A string providing the text to replace with the result of the expression below."),(0,r.kt)("li",{parentName:"ul"},"Expression - Use the complete ",(0,r.kt)("a",{parentName:"li",href:"/subgraph/category/expressions"},"Expression API")," that returns a value of any type to inject into the query. Using the Expression API\nallows you to utilize all built in functions and capabilities to target data specific to the request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[entities.data_source.resolvers.create_one.guards.context]]\nentity_name = "user_role"\nname = "new_role_being_created"\nquery = \'\'\'\n  {\n    "get_user_roles_input": {\n      "query": {\n        "role_name": {{role}}\n      }\n    }\n  }\n\'\'\'\nvariables = [["{{role}}", "\\"admin\\""]] # Note the tuple syntax.\n')),(0,r.kt)("h4",{id:"working-with-tuples"},"Working With Tuples"),(0,r.kt)("p",null,"As shown above, the second value of the variable tuple is an Expression that utilizes the Subgrpah Expression API. This API allows any type of data to be returned\nincluding tuples which are similar to arrays of primitive types."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important -\nConstructing a query that is compatible with tuples is automated. Tuples are transformed automatically into an objects with the target as the key of the object and the expression result as the value.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[[entities.data_source.resolvers.update_many.guards]]\nname = "already_revoked"\nif_expr = \'\'\'\n  is_revoked = contains(context("user_connection.revoked"), true);\n  is_revoked\n\'\'\'\nthen_msg = "You cannot revoke a connection that is already revoked."\n[[entities.data_source.resolvers.update_many.guards.context]]\nentity_name = "user_connection"\nquery = \'\'\'\n  {\n    "get_user_connections_input": {\n      "query": {\n        "OR": {{uuid}}\n      }\n    }\n  }\n\'\'\'\nvariables = [\n  ["{{uuid}}", "input(\\"query\\", \\"uuid\\")"]\n]\n')),(0,r.kt)("p",null,"In the example above, we have a few goals:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using a guard, determine of the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_connection")," has already been 'revoked'. If truthy, return an error."),(0,r.kt)("li",{parentName:"ol"},"Before we can determine the revoked status, the guard needs to be provided with the entity that needs checked. Use context to get the entity."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"input")," function, used in the ",(0,r.kt)("inlineCode",{parentName:"li"},"variables")," expression will return a array of UUIDs that are being edited. These come from the input query object provided from the client."),(0,r.kt)("li",{parentName:"ol"},"Use the query filters, such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"OR")," filter, which supports arrays, to determine which connections are being edited before the execution of the mutation.")),(0,r.kt)("p",null,"The syntax above automatically parses the query making it easy to pass data directly from the graphql input provided into the guard context query. The result will be as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "get_user_connections_input": {\n    "query": {\n      "OR": [{ "uuid": "abcdefg" }, { "uuid": "12345" }]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This allows dynamic context based on the input provided from the clientside application. The guard then can use the results to determine if the request is allowed to be processed."))}d.isMDXComponent=!0}}]);