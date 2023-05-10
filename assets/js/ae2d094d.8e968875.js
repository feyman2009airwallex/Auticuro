"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=c,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:c,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),c=(n(7294),n(3905));const o={sidebar_position:1},a="CreateAccount",u={unversionedId:"API Doc/Account Management APIs/CreateAccount",id:"API Doc/Account Management APIs/CreateAccount",title:"CreateAccount",description:"Create an account with the given account config. The request fails if there is already an account",source:"@site/docs/API Doc/Account Management APIs/CreateAccount.md",sourceDirName:"API Doc/Account Management APIs",slug:"/API Doc/Account Management APIs/CreateAccount",permalink:"/Auticuro/docs/API Doc/Account Management APIs/CreateAccount",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Account management APIs",permalink:"/Auticuro/docs/category/account-management-apis"},next:{title:"DeleteAccount",permalink:"/Auticuro/docs/API Doc/Account Management APIs/DeleteAccount"}},i={},s=[],l={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"createaccount"},"CreateAccount"),(0,c.kt)("p",null,"Create an account with the given account config. The request fails if there is already an account\nwith the same account ID. If successful, the account will be created and returned in the response."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-protobuf"},"message CreateAccountRequest {\n  RequestHeader header = 1;\n  accountpb.AccountConfig account_config = 2;\n  string metadata = 3;\n}\n\nmessage CreateAccountResponse {\n  errorpb.Error error = 1;\n  commonpb.ResponseHeader header = 2;\n  CreateAccountRequest request = 3;\n  accountpb.Account account = 4;\n}\n")))}f.isMDXComponent=!0}}]);