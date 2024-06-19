"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[8458],{215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(4848),r=t(8453);const i={id:"intro",title:"Orion's Arrow"},s=void 0,a={id:"intro",title:"Orion's Arrow",description:"The @the-devoyage/orions-arrow is a SDK designed to easily connect React applications to various micro-service APIs created by The Devoyage making it incredibly easy to integrate an application with the Devoyage APIs.",source:"@site/orions-arrow/01-intro.md",sourceDirName:".",slug:"/intro",permalink:"/orions-arrow/intro",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/orions-arrow/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Orion's Arrow"},sidebar:"orionsArrowSidebar",next:{title:"Install Orion's Arrow",permalink:"/orions-arrow/setup"}},c={},d=[{value:"Providers",id:"providers",level:2},{value:"Contexts",id:"contexts",level:2},{value:"Validations",id:"validations",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@the-devoyage/orions-arrow"})," is a SDK designed to easily connect React applications to various micro-service APIs created by The Devoyage making it incredibly easy to integrate an application with the Devoyage APIs."]}),"\n",(0,o.jsx)(n.h2,{id:"providers",children:"Providers"}),"\n",(0,o.jsx)(n.p,{children:"Use the provided React Providers to wrap components, enabling instant access to the API. Pass in custom GraphQL Queries and filters to get the information you need."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"<Providers.Accounts.Queries.GetAccountsProvider\n  query={{\n    documentNode: MY_GET_ACCOUNTS_QUERY,\n    variables: {\n      getAccountsInput: {\n        query: {...},\n      },\n    },\n  }}\n>\n  {children}\n</Providers.Accounts.Queries.GetAccountsProvider>\n"})}),"\n",(0,o.jsx)(n.p,{children:"These providers can be used to fetch, update, create, or delete data from the API."}),"\n",(0,o.jsx)(n.h2,{id:"contexts",children:"Contexts"}),"\n",(0,o.jsx)(n.p,{children:"Once the providers are set up, you can access the results from any child component."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const { accounts, loading } = useGetAccounts();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"validations",children:"Validations"}),"\n",(0,o.jsxs)(n.p,{children:["Mutation providers provide forms using the popular Formik library, each of which is validated automatically when submitting with the ",(0,o.jsx)(n.code,{children:"Yup"})," validation library."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const { form, loading } = Hooks.Accounts.useRegisterAccount();\n\n<Input \n  type="email" \n  name="email" \n  onChange={form.handleChange} \n  value={form.values.email} \n  invalid={!!form.errors.email}\n/>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);