"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2264],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2715:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"generateproxydescription",title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406"},l=void 0,p={unversionedId:"generateproxydescription",id:"generateproxydescription",title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406",description:"\u5b9a\u4e49",source:"@site/docs/generateproxydescription.mdx",sourceDirName:".",slug:"/generateproxydescription",permalink:"/touchsocket/docs/generateproxydescription",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/generateproxydescription.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1689917460,formattedLastUpdatedAt:"Jul 21, 2023",frontMatter:{id:"generateproxydescription",title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406"},sidebar:"docs",previous:{title:"\u57fa\u4e8eWS\u7684JsonRpc",permalink:"/touchsocket/docs/wsjsonrpc"},next:{title:"\u4ece\u670d\u52a1\u7aef\u751f\u6210\u4ee3\u7406",permalink:"/touchsocket/docs/generateproxyfromserver"}},i={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u670d\u52a1\u7aef\u6e90\u6587\u4ef6\u4ee3\u7406\u548c\u6e90\u4ee3\u7801\u751f\u6210\u63a5\u53e3\u4ee3\u7406",id:"\u4e8c\u670d\u52a1\u7aef\u6e90\u6587\u4ef6\u4ee3\u7406\u548c\u6e90\u4ee3\u7801\u751f\u6210\u63a5\u53e3\u4ee3\u7406",level:2},{value:"2.1 \u533a\u522b",id:"21-\u533a\u522b",level:3},{value:"2.2 \u573a\u666f\u5bf9\u6bd4",id:"22-\u573a\u666f\u5bf9\u6bd4",level:3}],s={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Rpc ",(0,a.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Rpc"},"TouchSocket.Rpc.dll")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u4f7f\u7528rpc\u7684\u539f\u5219\u5c31\u662f\u50cf\u4f7f\u7528\u672c\u5730\u65b9\u6cd5\u4e00\u6837\uff0c\u8ba9\u5f00\u53d1\u8005\u611f\u89c9\u4e0d\u5230\u4efb\u4f55\u7684\u4e0d\u540c\u3002\u6240\u4ee5\u5c31\u5fc5\u987b\u628a\u670d\u52a1\u4ee3\u7406\u5230\u672c\u5730\uff0c\u5e38\u89c1\u7684\u65b9\u5f0f\u6709\u4e09\u79cd\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u52a8\u6001\u4ee3\u7406\u63a5\u53e3"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9759\u6001\u7ec7\u5165"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9759\u6001\u7f16\u8bd1"),"\u3002\u4e09\u79cd\u65b9\u5f0f\u6b8a\u9014\u540c\u5f52\uff0c\u6700\u7ec8\u90fd\u662f\u6784\u5efa\u672c\u5730\u6570\u636e\u7ed3\u6784\uff0c\u7136\u540e\u548c\u8fdc\u7a0b\u901a\u4fe1\u3002\u4e09\u79cd\u65b9\u5f0f\u5404\u6709\u4f18\u7f3a\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u4f18\u7f3a\u70b9")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u52a8\u6001\u4ee3\u7406\u63a5\u53e3")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9759\u6001\u7ec7\u5165\uff08\u6e90\u4ee3\u7801\u751f\u6210\uff09")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9759\u6001\u7f16\u8bd1")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u4f18\u70b9")),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u6784\u5efa\u7c7b\uff0c\u7075\u6d3b\u3001\u9002\u5e94\u6027\u5f3a\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u4ee3\u7801\u751f\u6210\uff0c\u81ea\u5b9a\u4e49\u7c7b\u53c2\u6570\u81ea\u52a8\u751f\u6210\uff0c\u4fee\u6539\u8f83\u7075\u6d3b\uff0c\u8c03\u7528\u6548\u7387\u9ad8"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7c7b\u53c2\u6570\u81ea\u52a8\u751f\u6210\uff0c\u5bc6\u5c01\u6027\u5f3a\uff0c\u5b89\u5168\u6027\u9ad8\uff0c\u8c03\u7528\u6548\u7387\u9ad8\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u7f3a\u70b9")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6548\u7387\u8f83\u4f4e\uff0c\u81ea\u5b9a\u4e49\u7c7b\u53c2\u6570\u987b\u81ea\u884c\u6784\u5efa\uff0c\u5b9e\u73b0\u987bIL\u652f\u6301\uff0c\u5bf9\u8c03\u7528\u5e73\u53f0\u6709\u8981\u6c42\uff0c\u4f8b\u5982\uff1aIOS\u4e0d\u5141\u8bb8\u52a8\u6001\u7c7b\u751f\u6210\uff0c\u5219\u4e0d\u53ef\u4f7f\u7528\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u4ee3\u7801\u7ba1\u7406\u96be\u7edf\u4e00\uff0c\u5f3a\u8feb\u75c7\u731d\u6b7b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u4e00\u65e6\u6709\u7834\u574f\u6027\u5347\u7ea7\uff0c\u5219\u5fc5\u987b\u91cd\u65b0\u66ff\u6362dll\uff0c\u7075\u6d3b\u6027\u51e0\u4e4e\u4e3a0\u3002")))),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u5185\u5bb9\uff0c\u5bf9","[DmtpRpc]","\u3001",(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/jsonrpcdescription"},"JsonRpc"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/xmlrpcdescription"},"XmlRpc"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/webapidescription"},"WebApi"),"\u5747\u9002\u7528\u3002")),(0,a.kt)("h2",{id:"\u4e8c\u670d\u52a1\u7aef\u6e90\u6587\u4ef6\u4ee3\u7406\u548c\u6e90\u4ee3\u7801\u751f\u6210\u63a5\u53e3\u4ee3\u7406"},"\u4e8c\u3001\u670d\u52a1\u7aef\u6e90\u6587\u4ef6\u4ee3\u7406\u548c\u6e90\u4ee3\u7801\u751f\u6210\u63a5\u53e3\u4ee3\u7406"),(0,a.kt)("h3",{id:"21-\u533a\u522b"},"2.1 \u533a\u522b"),(0,a.kt)("p",null,"\u5f00\u6e90\u7248\u4e0d\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u6e90\u4ee3\u7801\u751f\u6210\u63a5\u53e3\u4ee3\u7406"),"\uff0c\u4f01\u4e1a\u7248\u5168\u90e8\u652f\u6301\u3002"),(0,a.kt)("h3",{id:"22-\u573a\u666f\u5bf9\u6bd4"},"2.2 \u573a\u666f\u5bf9\u6bd4"),(0,a.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u573a\u666f\uff0c\u4f60\u9700\u8981\u5f00\u53d1\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("p",null,"\u8fd9\u65f6\uff0c\u5982\u679c\u4f60\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u7aef\u6e90\u6587\u4ef6\u4ee3\u7406"),"\uff0c\u5219\u9700\u8981\u505a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u670d\u52a1\u9879\u76ee\uff08\u53ef\u4ee5\u5199\u63a5\u53e3\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5199\u903b\u8f91\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5206\u6210\u4e24\u4e2a\u9879\u76ee\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u9879\u76ee\uff0c\u7136\u540e\u5bfc\u51fa\u4ee3\u7406\u6e90\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u5bfc\u51fa\u7684\u6e90\u4ee3\u7801\u5f15\u7528\u5230\u5ba2\u6237\u7aef")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u6e90\u4ee3\u7801\u751f\u6210\u63a5\u53e3\u4ee3\u7406"),"\uff0c\u5219\u9700\u8981\u505a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u72ec\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u9879\u76ee\uff0c\u7528\u4e8e\u5b58\u653e\u670d\u52a1\u63a5\u53e3\uff0c\u548c\u63a5\u53e3\u6240\u9700\u7684\u53c2\u6570\u7c7b\u578b\u5b9e\u4f53\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u518d\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u5b9e\u73b0\u9879\u76ee\uff0c\u7528\u4e8e\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u63a5\u53e3\u9879\u76ee\uff0c\u5c06\u7f16\u8bd1\u597d\u7684dll\uff0c\u5f15\u7528\u5230\u9700\u8981\u7684\u5ba2\u6237\u7aef")),(0,a.kt)("admonition",{title:"\u6548\u679c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u6b65\u9aa4\u5982\u679c\u5168\u90e8\u5b8c\u6210\uff0c\u4e24\u79cd\u65b9\u5f0f\u5728\u5ba2\u6237\u7aef\u7684\u4f7f\u7528\u6548\u679c\u57fa\u672c\u5b8c\u5168\u4e00\u6837\u3002")))}u.isMDXComponent=!0}}]);