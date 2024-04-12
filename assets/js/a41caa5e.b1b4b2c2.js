"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[3236],{5541:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=o(4848),n=o(8453);const r={id:"post-mail-webhook",title:"Post Webhook"},a=void 0,i={id:"usage/post-mail-webhook",title:"Post Webhook",description:"Listen for Webhooks From Your API",source:"@site/mailer/03-usage/01-post-webhook.md",sourceDirName:"03-usage",slug:"/usage/post-mail-webhook",permalink:"/mailer/usage/post-mail-webhook",draft:!1,unlisted:!1,editUrl:"https://www.github.com/The-Devoyage/devoyage-web/blob/master/mailer/03-usage/01-post-webhook.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"post-mail-webhook",title:"Post Webhook"},sidebar:"mailerSidebar",previous:{title:"Setup",permalink:"/mailer/setup"},next:{title:"Default Content",permalink:"/mailer/usage/default-content"}},c={},l=[{value:"Listen for Webhooks From Your API",id:"listen-for-webhooks-from-your-api",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"listen-for-webhooks-from-your-api",children:"Listen for Webhooks From Your API"}),"\n",(0,s.jsxs)(t.p,{children:["After an event happens in your API, simply POST to the ",(0,s.jsx)(t.code,{children:"/send"})," endpoint of this server to send a templated email."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'// Accounts API\n// User successfully resets password...\n// Send POST Request to the mailer service to trigger email using fetch.\n\nconst sent = await fetch("http://localhost:5008/send", {\n  method: "POST",\n  body: JSON.stringify({\n    defaultContent: {\n      to: updatedAccount.email,\n      html: `<h3>Success!</h3><p>${first_name}, your password has been reset.`,\n      plainText: `Success! ${first_name}, your password has been reset!`,\n      subject: "Password Reset",\n    },\n  }),\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsxs)(t.a,{href:"https://github.com/The-Devoyage/mailer-connect/packages/1234394",children:[(0,s.jsx)(t.code,{children:"@the-devoyage/mailer-connect"})," package"]})," to quickly POST the webhook with typed inputs parameters."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var s=o(6540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);