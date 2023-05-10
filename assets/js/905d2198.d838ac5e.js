"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Reserve",s={unversionedId:"API Doc/Balance Operation APIs/Reserve",id:"API Doc/Balance Operation APIs/Reserve",title:"Reserve",description:"The Reserve allows reserving an amount of money within an account for future usage purposes.",source:"@site/docs/API Doc/Balance Operation APIs/Reserve.md",sourceDirName:"API Doc/Balance Operation APIs",slug:"/API Doc/Balance Operation APIs/Reserve",permalink:"/Auticuro/docs/API Doc/Balance Operation APIs/Reserve",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"BatchBalanceOperation",permalink:"/Auticuro/docs/API Doc/Balance Operation APIs/BatchBalanceOperation"},next:{title:"Release",permalink:"/Auticuro/docs/API Doc/Balance Operation APIs/Release"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reserve"},"Reserve"),(0,a.kt)("p",null,"The Reserve allows reserving an amount of money within an account for future usage purposes.\nChecks include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The account is in ",(0,a.kt)("inlineCode",{parentName:"li"},"Normal")," state"),(0,a.kt)("li",{parentName:"ul"},"The account balance after the request handling is within the ",(0,a.kt)("em",{parentName:"li"},"[lower limit, upper limit]")),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("em",{parentName:"li"},"reservation_id")," exists, the reserved amount will be added to the existing reservation,\notherwise a new reservation will be created")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ReserveRequest {\n  string dedup_id = 1;\n  string reservation_id = 2;\n  string account_id = 3;\n  string amount = 4;\n  string metadata = 5;\n}\n\nmessage ReserveResponse {\n  errorpb.Error error = 1;\n  commonpb.ResponseHeader header = 2;\n  ReserveRequest request = 3;\n  accountpb.AccountChange account_change = 4;\n}\n")))}m.isMDXComponent=!0}}]);