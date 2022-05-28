"use strict";(self.webpackChunkdevoyage_web=self.webpackChunkdevoyage_web||[]).push([[103],{9058:function(e,t,a){a.d(t,{Z:function(){return L}});var n=a(3366),r=a(7294),l=a(6010),i=a(5257),o=a(7524),s=a(9960),c=a(5999),m="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",v="sidebarItem__DBe",g="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:v},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:f},e.title))})))))}var h=a(3102);function b(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(h.Zo,{component:b,props:e})}function N(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(E,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var _=["sidebar","toc","children"];function L(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,_),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},1860:function(e,t,a){a.d(t,{Z:function(){return L}});var n=a(7294),r=a(6010),l=a(5999),i=a(9960),o=a(4996),s=a(8824),c=a(8780),m=a(3548),u=a(6114),d=a(1526);function v(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function g(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(v,{href:s,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var f="authorCol_sTYa",p="imageOnlyAuthorRow_vA2J",h="imageOnlyAuthorCol_kG3X";function b(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?p:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?h:f),key:t},n.createElement(g,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var E="blogPostTitle_Ikge",N="blogPostData_SAv4",_="blogPostDetailsFull_u0Nl";function L(e){var t,a,v=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=(0,o.C)().withBaseUrl,f=e.children,p=e.frontMatter,h=e.assets,L=e.metadata,k=e.truncated,Z=e.isBlogPostPage,x=void 0!==Z&&Z,P=L.date,y=L.formattedDate,C=L.permalink,H=L.tags,I=L.readingTime,w=L.title,A=L.editUrl,T=L.authors,M=null!=(t=h.image)?t:p.image,O=!x&&k,R=H.length>0,B=x?"h1":"h2";return n.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(B,{className:E,itemProp:"headline"},x?w:n.createElement(i.Z,{itemProp:"url",to:C},w)),n.createElement("div",{className:(0,r.Z)(N,"margin-vert--md")},n.createElement("time",{dateTime:P,itemProp:"datePublished"},y),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",v(I))),n.createElement(b,{authors:T,assets:h})),M&&n.createElement("meta",{itemProp:"image",content:g(M,{absolute:!0})}),n.createElement("div",{id:x?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,f)),(R||k)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",x&&_)},R&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":O})},n.createElement(d.Z,{tags:H})),x&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:A})),O&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},n.createElement(i.Z,{to:L.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8166:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(6010),l=a(1944),i=a(5281),o=a(9058),s=a(1860),c=a(7462),m=a(5999),u=a(2244);function d(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(u.Z,(0,c.Z)({},a,{subLabel:n.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(u.Z,(0,c.Z)({},t,{subLabel:n.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var v=a(9407);function g(e){var t,a=e.content,r=a.assets,i=a.metadata,o=i.title,s=i.description,c=i.date,m=i.tags,u=i.authors,d=i.frontMatter,v=d.keywords,g=null!=(t=r.image)?t:d.image;return n.createElement(l.d,{title:o,description:s,keywords:v,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,a=e.sidebar,r=t.assets,l=t.metadata,i=l.nextItem,c=l.prevItem,m=l.frontMatter,u=m.hide_table_of_contents,g=m.toc_min_heading_level,f=m.toc_max_heading_level;return n.createElement(o.Z,{sidebar:a,toc:!u&&t.toc&&t.toc.length>0?n.createElement(v.Z,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:f}):void 0},n.createElement(s.Z,{frontMatter:m,assets:r,metadata:l,isBlogPostPage:!0},n.createElement(t,null)),(i||c)&&n.createElement(d,{nextItem:i,prevItem:c}))}function p(e){return n.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},n.createElement(g,e),n.createElement(f,e))}},9407:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),o=a(3743),s="tableOfContents_bqdL",c=["className"];function m(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294),i=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,i);a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var c=a(6668);function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return m(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function d(){var e=(0,l.useRef)(0),t=(0,c.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=u(o,{anchorTopOffset:a.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function g(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(g,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var f=l.memo(g),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),N=(0,c.L)(),_=null!=h?h:N.tableOfContents.minHeadingLevel,L=null!=b?b:N.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:_,maxHeadingLevel:L});return v((0,l.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:_,maxHeadingLevel:L}}),[u,g,_,L])),l.createElement(f,(0,n.Z)({toc:k,className:i,linkClassName:u},E))}},8824:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(7294),r=a(2263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,r.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),o}var t,a}),[e])}function c(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}}}}]);