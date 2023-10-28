"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2673],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),i=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,p=t.originalType,c=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=i(r),k=a,s=d["".concat(c,".").concat(k)]||d[k]||u[k]||p;return r?n.createElement(s,l(l({ref:e},m),{},{components:r})):n.createElement(s,l({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=r.length,l=new Array(p);l[0]=k;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var i=2;i<p;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7729:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const p={id:"dmtpdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},l=void 0,o={unversionedId:"dmtpdescription",id:"dmtpdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",description:"\u5b9a\u4e49",source:"@site/docs/dmtpdescription.mdx",sourceDirName:".",slug:"/dmtpdescription",permalink:"/touchsocket/docs/current/dmtpdescription",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dmtpdescription.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1695654384,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{id:"dmtpdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u8c03\u7528\u4e0a\u4e0b\u6587",permalink:"/touchsocket/docs/current/rpcallcontext"},next:{title:"\u521b\u5efaDmtp\u670d\u52a1\u5668",permalink:"/touchsocket/docs/current/dmtpservice"}},c={},i=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"1.1 Dmtp\u548cTcp\u3001Udp\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f",id:"11-dmtp\u548ctcpudp\u6709\u4ec0\u4e48\u5173\u7cfb",level:3},{value:"1.2 Tcp\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\uff0c\u90a3Dmtp\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462\uff1f",id:"12-tcp\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\u90a3dmtp\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462",level:3},{value:"\u4e8c\u3001\u7279\u70b9",id:"\u4e8c\u7279\u70b9",level:2},{value:"2.1 \u57fa\u7840\u529f\u80fd",id:"21-\u57fa\u7840\u529f\u80fd",level:3},{value:"\u4e09\u3001\u573a\u666f",id:"\u4e09\u573a\u666f",level:2}],m={toc:i},d="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Dmtp ",(0,a.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Dmtp"},"TouchSocket.Dmtp.dll")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"DMTP\uff08Duplex Message Transport Protocol\u53cc\u5de5\u6d88\u606f\u4f20\u8f93\u534f\u8bae\uff09\u662f\u4e00\u4e2a\u7b80\u5355\u6613\u7528\uff0c\u4fbf\u6377\u9ad8\u6548\uff0c\u4e14\u6613\u4e8e\u6269\u5c55\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4e8c\u8fdb\u5236\u6570\u636e\u534f\u8bae"),"\u3002"),(0,a.kt)("p",null,"\u3010\u534f\u8bae\u683c\u5f0f\u3011"),(0,a.kt)("p",null,"|--Flags--|--Length--|-----Data-----|"),(0,a.kt)("p",null,"|----2----|-----4------|-------n-------|"),(0,a.kt)("p",null,"\u534f\u8bae\u683c\u5f0f\u975e\u5e38\u7b80\u5355\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u524d\u4e24\u4e2a\u5b57\u8282\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"\u5927\u7aefushort\u65e0\u7b26\u53f7"),"\u7c7b\u578b\u3002\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"0-19"),"\u7684\u534f\u8bae\u6846\u67b6\u5185\u90e8\u5360\u7528\u3002\u5176\u4f59\u7684\u5747\u53ef\u88ab\u81ea\u5b9a\u4e49\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u518d4\u5b57\u8282\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"\u5927\u7aefInt32"),"\u65e0\u7b26\u53f7\u7c7b\u578b\uff0c\u8868\u793a\u672c\u6b21\u534f\u8bae\u7684\u8f7d\u8377\u6570\u636e\u957f\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4f59\u6570\u636e\u4e3a\u5b9e\u9645\u8f7d\u8377\u6570\u636e\u3002")),(0,a.kt)("p",null,"\u53ef\u80fd\u597d\u591a\u4eba\u4f1a\u7591\u60d1\uff0cDmtp\u548ctcp\u3001udp\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f\u6216\u8005\u8bf4\uff0c\u7c7b\u4f3ctcp\uff0c\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\uff0c\u90a3Dmtp\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462\uff1f"),(0,a.kt)("h3",{id:"11-dmtp\u548ctcpudp\u6709\u4ec0\u4e48\u5173\u7cfb"},"1.1 Dmtp\u548cTcp\u3001Udp\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f"),(0,a.kt)("p",null,"Dmtp\u50cfhttp\u548cwebsocket\u4e00\u6837\uff0c\u4e5f\u662f\u5c01\u88c5\u7684\u5e94\u7528\u5c42\u534f\u8bae\u3002\u5b83\u53ef\u4ee5\u57fa\u4e8e\u6700\u57fa\u672c\u7684tcp\u6216http\u5de5\u4f5c\uff0c\u4e5f\u80fd\u57fa\u4e8ewebsocket\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u53ef\u4ee5\u8ba4\u4e3aDmtp\u662f\u66f4\u4e3a\u9ad8\u7ea7\u7684\u5e94\u7528\u5c42\u534f\u8bae\u3002"),(0,a.kt)("h3",{id:"12-tcp\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\u90a3dmtp\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462"},"1.2 Tcp\u672c\u8eab\u5c31\u662f\u53ef\u9760\u4f20\u8f93\u534f\u8bae\u4e86\uff0c\u90a3Dmtp\u7684\u53ef\u9760\u53c8\u4f53\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u5462\uff1f"),(0,a.kt)("p",null,"\u9996\u5148\u5462\uff0c\u6211\u4eec\u5f97\u660e\u786e\uff0ctcp\u7684\u53ef\u9760\uff0c\u662f\u5728\u4fdd\u6301\u8fde\u63a5\u7684\u65f6\u5019\uff0c\u624d\u53ef\u9760\u3002\u5f53\u7a81\u7136\u65ad\u7f51\u65f6\uff0c\u8fd9\u79cd\u53ef\u9760\u5c06\u88ab\u6253\u7834\u3002\u5176\u6b21\u8fd9\u79cd\u53ef\u9760\u662f\u5355\u9879\u7684\uff0c\u4e3e\u4f8b\u6765\u8bf4\uff0c\u53d1\u9001\u65b9\u53ea\u662f\u8d1f\u8d23\u5c06\u6570\u636e\u53d1\u7ed9\u63a5\u6536\u65b9\uff0c\u81f3\u4e8e\u63a5\u6536\u65b9\u5904\u7406\u4e86\u6ca1\u6709\uff0c\u6216\u8005\u5904\u7406\u7ed3\u679c\u5982\u4f55\uff0c\u90fd\u662f\u672a\u77e5\u7684\u3002\u90a3\u4e48\u8fd9\u65f6\u5019\u806a\u660e\u7684\u5c0f\u4f19\u4f34\u5c31\u4f1a\u60f3\u5230\u8ba9\u63a5\u6536\u65b9\u56de\u590d\u4e00\u4e2a\u72b6\u6001\u4e0d\u5c31\u884c\u4e86\uff1f\u662f\u7684\uff0c\u8fd9\u5c31\u662fDmtp\u5de5\u4f5c\u7684\u573a\u666f\u4e4b\u4e00\u4e86\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0cDmtp\u7684\u529f\u80fd\u8fdc\u975e\u4e0a\u8ff0\u7684\u4e24\u4e2a\u573a\u666f\uff0c\u8be6\u7ec6\u6982\u89c8\u5982\u4e0b\uff1a"),(0,a.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9"),(0,a.kt)("h3",{id:"21-\u57fa\u7840\u529f\u80fd"},"2.1 \u57fa\u7840\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("a",{parentName:"li",href:"/touchsocket/docs/current/dmtpbase"},"\u8fde\u63a5\u9a8c\u8bc1"),"\uff0c\u4e5f\u652f\u6301\u52a8\u6001\u4fe1\u606f\u9a8c\u8bc1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("a",{parentName:"li",href:"/touchsocket/docs/current/dmtpbase"},"ID\u540c\u6b65"),"\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u540e\uff0c\u81ea\u8eabID\u4f1a\u4e0e\u670d\u52a1\u5668ID\u540c\u6b65\uff0c\u4e14\u652f\u6301\u91cd\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301ssl\u52a0\u5bc6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("a",{parentName:"li",href:"/touchsocket/docs/current/dmtpbase"},"\u534f\u8bae\u6269\u5c55"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u72ec\u7acb\u901a\u9053\u6570\u636e\uff0c\u53ef\u8fdb\u884c\u6570\u636e\u9694\u79bb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u5230\u5ba2\u6237\u7aef\u7684\u64cd\u4f5c\u3002")),(0,a.kt)("h2",{id:"\u4e09\u573a\u666f"},"\u4e09\u3001\u573a\u666f"),(0,a.kt)("p",null,"\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528Dmtp\u6bd4\u8f83\u597d\u5462\uff1f\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u57fa\u672c\u4e0a\u4e0d\u9700\u8981\u8de8\u8bed\u8a00\u7684\u7ec8\u7aef\uff0c\u4f8b\u5982\uff1aUnity\u6e38\u620f\uff0cWinform\u3001WPF\u3001MAUI\u7b49\u8f6f\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u4e4b\u95f4\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6269\u5c55\u5fae\u670d\u52a1\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528\u53cd\u5411Rpc\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5b9e\u9645\u4e0a\u76ee\u524dDmtp\u6709\u4e94\u4e2a\u7248\u672c\uff0c\u5206\u522b\u4e3a\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u7279\u6027")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tcp\u7248")),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eTcp\u534f\u8bae\uff0c\u8fde\u63a5\u6027\u80fd\u6700\u597d\uff0c\u6267\u884c\u6548\u7387\u6700\u9ad8\uff0c\u652f\u6301Dmtp\u6240\u6709\u529f\u80fd\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Udp\u7248")),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eUdp\u534f\u8bae\uff0c\u4e0d\u9700\u8981\u8fde\u63a5\uff0c\u4f1a\u6807\u8bc6\u57fa\u4e8e\u4e0d\u53ef\u9760\u534f\u8bae\uff0c",(0,a.kt)("strong",{parentName:"td"},"\u53ef\u80fd"),"\u652f\u6301Dmtp\u6240\u6709\u529f\u80fd\uff0c\u5177\u4f53\u7684\u8fd8\u8981\u770b\u5b9e\u9645\u6dfb\u52a0\u7684\u63d2\u4ef6\u662f\u5426\u652f\u6301\u5728\u4e0d\u53ef\u9760\u534f\u8bae\u5de5\u4f5c\u3002\u4f8b\u5982DmtpRpc\u5c31",(0,a.kt)("strong",{parentName:"td"},"\u652f\u6301"),"\u5728Udp\u4e0d\u53ef\u9760\u534f\u8bae\u5de5\u4f5c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"NamedPipe\u7248")),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u547d\u540d\u7ba1\u9053\uff0c\u6d41\u901f\u6027\u80fd\u6700\u597d\uff0c\u6bd4Tcp\u7248\u591a\u51fa3\u500d\u3002\u54cd\u5e94\u6548\u7387\u4e00\u822c\uff0c\u662fTcp\u7248\u7684\u4e00\u534a\uff0c\u662f\u8fdb\u7a0b\u901a\u8baf\u7684\u6700\u4f73\u9009\u62e9\u3002\u652f\u6301Dmtp\u6240\u6709\u529f\u80fd\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Http\u7248")),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eHttp\u63e1\u624b\u8fde\u63a5\uff0c\u6570\u636e\u4ea4\u4e92\u4ecd\u7136\u4f7f\u7528TCP\u3002\u8fde\u63a5\u6027\u80fd\u4e00\u822c\uff0c\u4f46\u517c\u5bb9\u6027\u5f3a\uff0c\u652f\u6301JsonRpc\uff0cWebApi\uff0cXmlRpc\uff0cWebSocket\u7b49\u4e00\u7cfb\u5217Http\u7ec4\u4ef6\uff0c\u4e14\u6267\u884c\u6548\u7387\u548cTCP\u7248\u4e00\u6837\u9ad8\uff0c\u652f\u6301Dmtp\u6240\u6709\u529f\u80fd\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"WebSocket\u7248")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8be5\u7248\u672c\u662f\u4ec5\u9002\u7528\u4e8eAsp.Net Core\u7684\u7248\u672c\uff0c\u7279\u70b9\u5c31\u662f\u548cAsp.Net Core\u5171\u7528\u7aef\u53e3\u3002\u4f46\u662f\u6267\u884c\u6570\u636e\u4f7f\u7528\u7684\u662fWebSocket\uff0c\u6240\u6709\u6548\u7387\u53ea\u6709Tcp\u7248\u768480%\u3002\u652f\u6301Dmtp\u6240\u6709\u529f\u80fd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Http\u4e2d\u95f4\u4ef6\u7248")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8be5\u7248\u672c\u662f\u4ec5\u9002\u7528\u4e8eAsp.Net Core\u7684\u7248\u672c\uff0c\u7279\u70b9\u5c31\u662f\u548cAsp.Net Core\u5171\u7528\u7aef\u53e3\u3002\u4f46\u662f\u6267\u884c\u6570\u636e\u4f7f\u7528\u7684Http\u81ea\u5347\u7ea7\u534f\u8bae\uff0c\u6240\u6709\u6548\u7387\u4ecb\u4e8eWebSocket\u4e0eTcp\u7248\u4e4b\u95f4\u3002\u652f\u6301Dmtp\u6240\u6709\u529f\u80fd")))))}u.isMDXComponent=!0}}]);