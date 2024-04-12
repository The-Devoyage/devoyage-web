"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[1987],{1696:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var n=r(4848),i=r(8453);const t={id:"guard-expression",title:"Expressions & Conditions"},a=void 0,o={id:"guards/guard-expression",title:"Expressions & Conditions",description:"Evaluating Conditions",source:"@site/subgraph/07-guards/03-expression.md",sourceDirName:"07-guards",slug:"/guards/guard-expression",permalink:"/subgraph/guards/guard-expression",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/subgraph/07-guards/03-expression.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"guard-expression",title:"Expressions & Conditions"},sidebar:"subgraphSidebar",previous:{title:"Guard Name",permalink:"/subgraph/guards/guard-name"},next:{title:"Error Messages",permalink:"/subgraph/guards/guard-messages"}},d={},u=[{value:"Evaluating Conditions",id:"evaluating-conditions",level:2},{value:"The <code>if_expr</code> Property",id:"the-if_expr-property",level:3}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"evaluating-conditions",children:"Evaluating Conditions"}),"\n",(0,n.jsxs)(s.p,{children:["As discussed in ",(0,n.jsx)(s.a,{href:"/subgraph/guards/guard-basics",children:"guard basics"}),", guards should evaluate to a boolean. Truthy conditions result in a denied request."]}),"\n",(0,n.jsxs)(s.h3,{id:"the-if_expr-property",children:["The ",(0,n.jsx)(s.code,{children:"if_expr"})," Property"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"required"})}),"\n",(0,n.jsxs)(s.p,{children:["When building a guard, it is required to create an ",(0,n.jsx)(s.a,{href:"/subgraph/expressions/eval-expr",children:"expression"})," that can be evaluated. This is done by providing a valid expression that returns a boolean."]}),"\n",(0,n.jsxs)(s.p,{children:["Define the expression from the ",(0,n.jsx)(s.code,{children:"if_expr"})," key."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-toml",children:'[[entities.data_source.resolvers.find_many.guards]]\nname = "require_access_revoked_false"\nif_expr = \'\'\'\n  contains(input("query", "access.revoked"), "true")\n\'\'\'\nthen_msg = "You do not have permission to view revoked tasks. Provide input value `acceess.revoked` as a false value."\n'})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var n=r(6540);const i={},t=n.createContext(i);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);