"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8042],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var c=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,c,o=function(e,n){if(null==e)return{};var t,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=c.createContext({}),l=function(e){var n=c.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return c.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},f=c.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||r;return t?c.createElement(d,a(a({ref:n},s),{},{components:t})):c.createElement(d,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<r;l++)a[l]=t[l];return c.createElement.apply(null,a)}return c.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var c=t(7462),o=(t(7294),t(3905));const r={sidebar_position:4},a="UnlockAccount",u={unversionedId:"API Doc/Account Management APIs/UnlockAccount",id:"API Doc/Account Management APIs/UnlockAccount",title:"UnlockAccount",description:"Unlock the account with the given account ID. If successful, the account is unlocked and can handle",source:"@site/docs/API Doc/Account Management APIs/UnlockAccount.md",sourceDirName:"API Doc/Account Management APIs",slug:"/API Doc/Account Management APIs/UnlockAccount",permalink:"/Auticuro/docs/API Doc/Account Management APIs/UnlockAccount",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"LockAccount",permalink:"/Auticuro/docs/API Doc/Account Management APIs/LockAccount"},next:{title:"UpdateAccountConfig",permalink:"/Auticuro/docs/API Doc/Account Management APIs/UpdateAccountConfig"}},i={},l=[],s={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,c.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unlockaccount"},"UnlockAccount"),(0,o.kt)("p",null,"Unlock the account with the given account ID. If successful, the account is unlocked and can handle\nbalance operations again."),(0,o.kt)("p",null,"Pre-checks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The account is in ",(0,o.kt)("inlineCode",{parentName:"li"},"Locked")," state")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message UnlockAccountRequest {\n  RequestHeader header = 1;\n  string metadata = 2;\n}\n\nmessage UnlockAccountResponse {\n  errorpb.Error error = 1;\n  commonpb.ResponseHeader header = 2;\n  UnlockAccountRequest request = 3;\n  accountpb.AccountChange account_change = 4;\n}\n")))}m.isMDXComponent=!0}}]);