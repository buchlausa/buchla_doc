"use strict";(self.webpackChunkbuchla=self.webpackChunkbuchla||[]).push([[8027],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},l=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:e},l),{},{components:a})):n.createElement(f,i({ref:e},l))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5018:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6},i="Congratulations!",s={unversionedId:"documentation-tutorials/congratulations",id:"documentation-tutorials/congratulations",title:"Congratulations!",description:"You have just learned the basics of Docusaurus and made some changes to the initial template.",source:"@site/docs/documentation-tutorials/congratulations.md",sourceDirName:"documentation-tutorials",slug:"/documentation-tutorials/congratulations",permalink:"/buchla_doc/docs/documentation-tutorials/congratulations",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Deploy your site",permalink:"/buchla_doc/docs/documentation-tutorials/deploy-your-site"}},u={},c=[{value:"What&#39;s next?",id:"whats-next",level:2}],l={toc:c};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"congratulations"},"Congratulations!"),(0,r.kt)("p",null,"You have just learned the ",(0,r.kt)("strong",{parentName:"p"},"basics of Docusaurus")," and made some changes to the ",(0,r.kt)("strong",{parentName:"p"},"initial template"),"."),(0,r.kt)("p",null,"Docusaurus has ",(0,r.kt)("strong",{parentName:"p"},"much more to offer"),"!"),(0,r.kt)("p",null,"Have ",(0,r.kt)("strong",{parentName:"p"},"5 more minutes"),"? Take a look at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/buchla_doc/docs/documentation-tutorials/manage-docs-versions"},"versioning"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/buchla_doc/docs/documentation-tutorials/translate-your-site"},"i18n")),"."),(0,r.kt)("p",null,"Anything ",(0,r.kt)("strong",{parentName:"p"},"unclear")," or ",(0,r.kt)("strong",{parentName:"p"},"buggy")," in this tutorial? ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/discussions/4610"},"Please report it!")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"official documentation")),(0,r.kt)("li",{parentName:"ul"},"Modify your site configuration with ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/docusaurus-config"},(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus.config.js"))),(0,r.kt)("li",{parentName:"ul"},"Add navbar and footer items with ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/themes/configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"themeConfig"))),(0,r.kt)("li",{parentName:"ul"},"Add a custom ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/styling-layout"},"Design and Layout")),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/search"},"search bar")),(0,r.kt)("li",{parentName:"ul"},"Find inspirations in the ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/showcase"},"Docusaurus showcase")),(0,r.kt)("li",{parentName:"ul"},"Get involved in the ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/community/support"},"Docusaurus Community"))))}p.isMDXComponent=!0}}]);