"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,g=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={id:"transferfile",title:"\u4f20\u8f93\u6587\u4ef6"},o=void 0,i={unversionedId:"transferfile",id:"version-1.3.9/transferfile",title:"\u4f20\u8f93\u6587\u4ef6",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/transferfile.mdx",sourceDirName:".",slug:"/transferfile",permalink:"/touchsocket/docs/1.3.9/transferfile",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/transferfile.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"transferfile",title:"\u4f20\u8f93\u6587\u4ef6"},sidebar:"docs",previous:{title:"Rpc\u670d\u52a1AOP",permalink:"/touchsocket/docs/1.3.9/rpcactionfilter"},next:{title:"\u5c0f\u6587\u4ef6\u4f20\u8f93",permalink:"/touchsocket/docs/1.3.9/smallfiletransfer"}},p={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u6027\u80fd",id:"\u4e8c\u6027\u80fd",level:2},{value:"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u56db\u3001\u670d\u52a1\u67b6\u6784",id:"\u56db\u670d\u52a1\u67b6\u6784",level:2},{value:"\u4e94\u3001\u4f20\u8f93\u6587\u4ef6",id:"\u4e94\u4f20\u8f93\u6587\u4ef6",level:2},{value:"5.1 \u54cd\u5e94\u6d41\u7a0b",id:"51-\u54cd\u5e94\u6d41\u7a0b",level:3},{value:"5.2 \u8bf7\u6c42\u914d\u7f6e",id:"52-\u8bf7\u6c42\u914d\u7f6e",level:3},{value:"\uff081\uff09ResourcePath",id:"1resourcepath",level:4},{value:"\uff082\uff09SavePath",id:"2savepath",level:4},{value:"\uff083\uff09Flags",id:"3flags",level:4},{value:"\uff084\uff09CompletedLength",id:"4completedlength",level:4},{value:"\uff085\uff09Speed \u51fd\u6570",id:"5speed-\u51fd\u6570",level:4},{value:"\uff086\uff09Progress",id:"6progress",level:4},{value:"\uff087\uff09 Result",id:"7-result",level:4},{value:"\uff088\uff09 Token",id:"8-token",level:4},{value:"\uff089\uff09 Metadata",id:"9-metadata",level:4},{value:"5.3 \u793a\u4f8b\u4ee3\u7801",id:"53-\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u516d\u3001\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6",id:"\u516d\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6",level:2}],s={toc:c};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u6587\u4ef6\u4f20\u8f93\u662f\u6bcf\u4e2a\u6846\u67b6\u90fd\u9700\u8981\u7684\u529f\u80fd\uff0c\u4e5f\u662f\u68c0\u9a8c\u4e00\u4e2a\u6846\u67b6\u6027\u80fd\u7684\u975e\u5e38\u91cd\u8981\u7684\u6307\u6807\u3002"),(0,a.kt)("p",null,"TouchRpc\u5f00\u8f9f\u4e86\u5bf9\u70b9\u6587\u4ef6\u4f20\u8f93\u3002\u5373\uff0c\u5f53\u5ba2\u6237\u7aef\u8fde\u63a5\u670d\u52a1\u5668\u4ee5\u540e\uff0c\u4e24\u8005\u53ef\u4ee5\u4efb\u610f\uff0c\u968f\u65f6\u7684\u4e92\u76f8\u53d1\u9001\u6587\u4ef6\u3002\u4e0d\u4ec5\u5982\u6b64\uff0c\u5373\u4f7f\u662f\u5ba2\u6237\u7aef\u4e4b\u95f4\uff0c\u53ef\u4ee5\u53d1\u9001\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u4ec5\u6f14\u793a\u7531",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcClient"),"\u5230",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcService"),"\uff08\u5b9e\u9645\u4e0a\u662f",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcSocketClient"),"\uff09\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5bf9\u70b9\u4e4b\u95f4\u53ef\u4ee5\u4efb\u610fpull\uff08\u62c9\u53d6\uff09\u3001push\uff08\u63a8\u9001\uff09\u6587\u4ef6\u3002",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536\u5bf9\u70b9"),"\u53ef\u4ee5\u8ba2\u9605",(0,a.kt)("strong",{parentName:"p"},"FileTransfering"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"FileTransfered"),"\u4e8b\u4ef6\uff0c\u6765\u83b7\u53d6\u76f8\u5173\u4fe1\u606f\uff0c\u53d1\u8d77\u5bf9\u70b9\u76f4\u63a5\u901a\u8fc7\u4f20\u8f93\u63a7\u5236\u5668\u6216\u8fd4\u56de\u503c\u83b7\u53d6\u4f20\u8f93\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u6027\u80fd"},"\u4e8c\u3001\u6027\u80fd"),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e0b\u56fe\u6b63\u5728\u4e0a\u4f20\u4e00\u4e2aWindow\u7684\u7cfb\u7edf\u955c\u50cf\u6587\u4ef6\uff0c\u5927\u7ea64.2Gb\uff0c\u4f20\u8f93\u901f\u5ea6\u5df2\u8fbe\u5230800Mb/s\uff0cGC\u57fa\u672c\u4e0a\u6ca1\u6709\u91ca\u653e\uff0c\u6027\u80fd\u975e\u5e38\u5f3a\u608d\uff08\u4e2d\u95f4\u6709\u7a0d\u5fae\u505c\u987f\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u5728\u83b7\u53d6\u6587\u4ef6MD5\u503c\uff09\u3002"),(0,a.kt)("img",{src:n(4706).Z}),(0,a.kt)("h2",{id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c4C/S\u5e94\u7528\u4f7f\u7528\u573a\u666f\uff1a\u5f00\u53d1\u4f7f\u7528\u975e\u5e38\u65b9\u4fbf\uff0c\u8fde\u63a5\u9a8c\u8bc1\uff0c\u6570\u636e\u4e1a\u52a1\uff0c\u6587\u4ef6\u4f20\u8f93\u7b49\u4e00\u7cfb\u5217\u529f\u80fd\u5b8c\u5168\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"Unity\u6e38\u620f\u573a\u666f\uff1a\u6027\u80fd\u5353\u8d8a\uff0c\u529f\u80fd\u4e30\u5bcc\uff0c\u4f7f\u7528\u65b9\u4fbf\u3002 ",(0,a.kt)("a",{name:"h50Dz"}))),(0,a.kt)("h2",{id:"\u56db\u670d\u52a1\u67b6\u6784"},"\u56db\u3001\u670d\u52a1\u67b6\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5176\u4f20\u8f93\u67b6\u6784\u662f\u57fa\u4e8eChannel\u5de5\u4f5c\u7684\u3002\u6240\u4ee5\u5f53\u5728\u540c\u4e00\u65f6\u95f4\uff0c\u53ef\u8fdb\u884c\u591a\u4e2a\u4f20\u8f93\u5e76\u884c\uff0c\u4e14\u6570\u636e\u4e92\u4e0d\u5f71\u54cd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6587\u4ef6\u4f20\u8f93\u65f6\uff0c\u6bcf\u4e2a\u8fde\u63a5\u7aef\u548c\u670d\u52a1\u5668\u5747\u662f\u5e73\u7b49\u6743\u5229\u7684\uff0c\u6240\u4ee5RRQM\u5c06\u5176\u547d\u540d\u4e3a\u5bf9\u70b9\u3002\u4efb\u610f\u4e24\u4e2a\u5bf9\u70b9\u4e4b\u95f4\u5747\u53efPull\uff08\u62c9\u53d6\u6216\u4e0b\u8f7d\uff09\u6216Push\uff08\u63a8\u9001\u6216\u4e0a\u4f20\uff09\u6587\u4ef6\uff0c\u4f8b\u5982\u4e0b\u56fe\u4e2d\uff0cClient1\u3001SocketClient1\u3001Client2\u3001SocketClient2\u56db\u4e2a\u4e92\u76f8\u4e3a\u5bf9\u70b9\uff0c\u5747\u53ef\u81ea\u7531\u4f20\u8f93\u6587\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u4e94\u4f20\u8f93\u6587\u4ef6"},"\u4e94\u3001\u4f20\u8f93\u6587\u4ef6"),(0,a.kt)("p",null,"\u7531",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcClient"),"\u5411",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcService"),"\u53d1\u8d77Pull\u8bf7\u6c42\u65f6\uff0c\u76f8\u5f53\u4e8e\u7531\u5ba2\u6237\u7aef\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u4ec5\u6f14\u793aPull\u8bf7\u6c42\uff0cPush\u8bf7\u6c42\u64cd\u4f5c\u4e00\u81f4\u3002"),(0,a.kt)("h3",{id:"51-\u54cd\u5e94\u6d41\u7a0b"},"5.1 \u54cd\u5e94\u6d41\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53d1\u8d77Pull\u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u5bf9\u70b9\uff08\u5373\u6b64\u5904\u7684\u670d\u52a1\u5668\uff09\u89e6\u53d1",(0,a.kt)("strong",{parentName:"li"},"FileTransfering"),"\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u6587\u4ef6\u4fe1\u606f\uff0c\u7136\u540e\u68c0\u9a8c\u662f\u5426\u7eed\u4f20\u7b49\uff0c\u7136\u540e\u5f00\u59cb\u63a5\u6536\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u5b8c\u6210\u6216\u5f02\u5e38\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u5bf9\u70b9\uff08\u5373\u6b64\u5904\u7684\u670d\u52a1\u5668\uff09\u89e6\u53d1",(0,a.kt)("strong",{parentName:"li"},"FileTransfered"),"\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u7aef\uff08\u6b64\u5904\u7684\u5ba2\u6237\u7aef\uff09\u51fd\u6570\u8fd4\u56de\uff0c\u63a7\u5236\u5668\u72b6\u6001\u6539\u53d8\u3002")),(0,a.kt)("h3",{id:"52-\u8bf7\u6c42\u914d\u7f6e"},"5.2 \u8bf7\u6c42\u914d\u7f6e"),(0,a.kt)("p",null,"FileOperator\u662f\u672c\u6b21\u4f20\u8f93\u7684\u8bf7\u6c42\u64cd\u4f5c\u5668\uff0c\u4e3b\u8981\u7528\u4e8e\u83b7\u53d6\u4f20\u8f93\u8fdb\u5ea6\u3001\u901f\u5ea6\u3001\u72b6\u6001\u4ee5\u53ca\u53d6\u6d88\u4f20\u8f93\u7b49\u64cd\u4f5c\u3002",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536\u65b9\u7684\u63a7\u5236\u5668\u4eceFileTransfering\u4e8b\u4ef6\u7684\u53c2\u6570e\u4e2d\u83b7\u5f97\u3002")),(0,a.kt)("p",null,"\u53ef\u914d\u7f6e\u53c2\u6570\uff1a"),(0,a.kt)("h4",{id:"1resourcepath"},"\uff081\uff09ResourcePath"),(0,a.kt)("p",null,"\u8d44\u6e90\u8def\u5f84\uff0c\u5728\u4e0a\u4f20\u65f6\uff0c\u8868\u793a\u53d1\u8d77\u7aef\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5728\u4e0b\u8f7d\u65f6\uff0c\u8868\u793a\u8bf7\u6c42\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5f53\u8be5\u503c\u4e3a\u76f8\u5bf9\u8def\u5f84\u65f6\uff0c\u4f1a\u4e0e\u63a5\u6536\u5bf9\u70b9\u7684RootPath\u7ec4\u5408\u8def\u5f84\u3002\u5f53\u4e3a\u7edd\u5bf9\u8def\u5f84\u65f6\uff0c\u5219\u4f1a\u76f4\u63a5\u8bbf\u95ee\u8def\u5f84\u6587\u4ef6\u3002"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u4e0b\u8f7d\u884c\u4e3a\uff0c\u54cd\u5e94\u65b9\u53ef\u5728\u5728\u8ba2\u9605\u7684",(0,a.kt)("strong",{parentName:"p"},"OnFileTransfering"),"\u51fd\u6570\u4e2d\uff0c\u968f\u610f\u91cd\u5b9a\u5411\u8bf7\u6c42\u7684\u6587\u4ef6\u8def\u5f84\uff08e.ResourcePath\uff09\u3002")),(0,a.kt)("admonition",{title:"\u5371\u9669",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u4ee5\u7edd\u5bf9\u8def\u5f84\u8bbf\u95ee\u65f6\uff0c\u5bf9\u65b9\u53ef\u80fd\u4f1a\u8bf7\u6c42\u5230\u670d\u52a1\u5668\u7535\u8111\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6240\u6709\u6587\u4ef6"),"\uff0c\u6240\u4ee5\u6700\u597d\u5728",(0,a.kt)("strong",{parentName:"p"},"OnFileTransfering"),"\u91cc\u9762\u8fdb\u884c\u5b89\u5168\u7684\u5224\u65ad\u540e\u518d\u653e\u884c\u3002")),(0,a.kt)("h4",{id:"2savepath"},"\uff082\uff09SavePath"),(0,a.kt)("p",null,"\u4fdd\u5b58\u8def\u5f84\uff0c\u5728\u4e0a\u4f20\u65f6\uff0c\u8868\u793a\u9700\u8981\u4fdd\u5b58\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5728\u4e0b\u8f7d\u65f6\uff0c\u8868\u793a\u672c\u5730\u4fdd\u5b58\u7684\u6587\u4ef6\u8def\u5f84\u3002\u540c\u6837\uff0c\u5f53\u8be5\u503c\u4e3a\u76f8\u5bf9\u8def\u5f84\u65f6\uff0c\u4f1a\u4e0e\u63a5\u6536\u5bf9\u70b9\u7684RootPath\u7ec4\u5408\u8def\u5f84\u3002\u5f53\u4e3a\u7edd\u5bf9\u8def\u5f84\u65f6\uff0c\u5219\u4f1a\u76f4\u63a5\u751f\u6548\u3002"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u4e0a\u4f20\u884c\u4e3a\uff0c\u54cd\u5e94\u65b9\u53ef\u5728\u5728\u8ba2\u9605\u7684",(0,a.kt)("strong",{parentName:"p"},"OnFileTransfering"),"\u51fd\u6570\u4e2d\uff0c\u968f\u610f\u91cd\u5b9a\u5411\u6587\u4ef6\u7684\u4fdd\u5b58\u8def\u5f84\uff08e.SavePath\uff09\u3002")),(0,a.kt)("h4",{id:"3flags"},"\uff083\uff09Flags"),(0,a.kt)("p",null,"\u53ef\u901a\u8fc7\u53e0\u52a0\u4f4d\u57df\u7684\u5f62\u5f0f\uff0c\u5c1d\u8bd5\u65ad\u70b9\u7eed\u4f20\u3002"),(0,a.kt)("h4",{id:"4completedlength"},"\uff084\uff09CompletedLength"),(0,a.kt)("p",null,"\u5df2\u5b8c\u6210\u6d41\u957f\u5ea6\u3002"),(0,a.kt)("h4",{id:"5speed-\u51fd\u6570"},"\uff085\uff09Speed \u51fd\u6570"),(0,a.kt)("p",null,"\u4ece\u4e0a\u6b21\u83b7\u53d6\u5230\u6b64\u6b21\u83b7\u5f97\u7684\u901f\u5ea6\u3002\u4e00\u822c\u8bf7\u6bcf\u79d2\u949f\u8c03\u7528\u4e00\u6b21\u83b7\u53d6\u901f\u5ea6\u503c\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u83b7\u53d6\u4f20\u8f93\u901f\u5ea6\u65f6\uff0c\u5176\u503c\u548c\u83b7\u53d6\u65f6\u95f4\u5b8c\u5168\u76f8\u5173\u3002\u4f8b\u5982\uff1a\u5047\u5982\u5b9e\u9645\u6bcf\u79d2\u4f20\u8f93\u901f\u5ea6\u4e3a100\uff0c\u5f53\u6bcf\u9694\u4e00\u79d2\u83b7\u53d6\u65f6\uff0c\u5219\u4e3a100.\u5f53\u6bcf\u9694100\u6beb\u79d2\u83b7\u53d6\u65f6\uff0c\u5219\u4e3a10\u3002")),(0,a.kt)("h4",{id:"6progress"},"\uff086\uff09Progress"),(0,a.kt)("p",null,"\u4f20\u8f93\u8fdb\u5ea6\uff0c\u8303\u56f40-1\u3002"),(0,a.kt)("h4",{id:"7-result"},"\uff087\uff09 Result"),(0,a.kt)("p",null,"\u83b7\u53d6\u4f20\u8f93\u72b6\u6001\u4ee5\u53ca\u72b6\u6001\u4fe1\u606f\u3002\u5f53ResultCode\u4e3aDefault\u65f6\uff0c\u610f\u5473\u7740\u4f20\u8f93\u6b63\u5728\u8fdb\u884c\u3002"),(0,a.kt)("h4",{id:"8-token"},"\uff088\uff09 Token"),(0,a.kt)("p",null,"CancellationToken\u7c7b\u578b\u7684\u53ef\u53d6\u6d88\u4ee4\u7bad\u3002"),(0,a.kt)("h4",{id:"9-metadata"},"\uff089\uff09 Metadata"),(0,a.kt)("p",null,"string\u7c7b\u578b\u7684\u952e\u503c\u5bf9\uff0c\u7528\u4e8e\u548c\u63a5\u6536\u65b9\u4ea4\u4e92\u6570\u636e\u3002"),(0,a.kt)("a",{name:"JeQp8"}),(0,a.kt)("h3",{id:"53-\u793a\u4f8b\u4ee3\u7801"},"5.3 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u3010\u670d\u52a1\u5668\u3011")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new TouchSocketConfig()//\u914d\u7f6e\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .UsePlugin()\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n        a.AddFileLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.Add<MyPlugin>();\n    }).UsePlugin() //\n    .SetVerifyToken("File")//\u8fde\u63a5\u9a8c\u8bc1\u53e3\u4ee4\u3002\n    .BuildWithTcpTouchRpcService();//\u6b64\u5904build\u76f8\u5f53\u4e8enew TcpTouchRpcService\uff0c\u7136\u540eSetup\uff0c\u7136\u540eStart\u3002\nservice.Logger.Info("\u670d\u52a1\u5668\u6210\u529f\u542f\u52a8");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyPlugin : TouchRpcPluginBase<TcpTouchRpcSocketClient>\n{\n    protected override void OnFileTransfering(TcpTouchRpcSocketClient client, FileOperationEventArgs e)\n    {\n        e.IsPermitOperation = true;//\u8fd0\u884c\u64cd\u4f5c\n\n        //\u6709\u53ef\u80fd\u662f\u4e0a\u4f20\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u4e0b\u8f7d\n        client.Logger.Info($"\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\u4f20\u8f93\u6587\u4ef6\uff0cID={client.ID}\uff0c\u8bf7\u6c42\u7c7b\u578b={e.TransferType}\uff0c\u8bf7\u6c42\u6587\u4ef6\u540d={e.ResourcePath}");\n    }\n\n    protected override void OnFileTransfered(TcpTouchRpcSocketClient client, FileTransferStatusEventArgs e)\n    {\n        //\u4f20\u8f93\u7ed3\u675f\uff0c\u4f46\u662f\u4e0d\u4e00\u5b9a\u6210\u529f\uff0c\u9700\u8981\u4ecee.Result\u5224\u65ad\u72b6\u6001\u3002\n        client.Logger.Info($"\u5ba2\u6237\u7aef\u4f20\u8f93\u6587\u4ef6\u7ed3\u675f\uff0cID={client.ID}\uff0c\u8bf7\u6c42\u7c7b\u578b={e.TransferType}\uff0c\u6587\u4ef6\u540d={e.ResourcePath}\uff0c\u8bf7\u6c42\u72b6\u6001={e.Result}");\n    }\n\n    protected override void OnHandshaked(TcpTouchRpcSocketClient client, VerifyOptionEventArgs e)\n    {\n        client.Logger.Info($"\u6709\u5ba2\u6237\u7aef\u6210\u529f\u9a8c\u8bc1\uff0cID={client.ID}");\n    }\n\n    protected override void OnDisconnected(TcpTouchRpcSocketClient client, ClientDisconnectedEventArgs e)\n    {\n        client.Logger.Info($"\u6709\u5ba2\u6237\u7aef\u65ad\u5f00\uff0cID={client.ID}");\n        base.OnDisconnected(client, e);\n    }\n}\n')),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u54cd\u5e94\u65b9\u5fc5\u987b\u5728\u8ba2\u9605\u7684",(0,a.kt)("strong",{parentName:"p"},"OnFileTransfering"),"\u51fd\u6570\u4e2d\uff0c\u540c\u610f\u6bcf\u4e00\u4e2a\u4f20\u8f93\uff08e.IsPermitOperation = true\uff09\uff0c\u4e0d\u7136\u8bf7\u6c42\u65b9\u4f1a\u76f4\u63a5\u5931\u8d25\u3002")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u54cd\u5e94\u65b9\u8ba2\u9605\u7684",(0,a.kt)("strong",{parentName:"p"},"FileTransfered"),"\u4e8b\u4ef6\u7684\u89e6\u53d1\u5e76",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u610f\u5473\u7740\u5b8c\u6210\u4f20\u8f93"),"\uff0c\u5177\u4f53\u7ed3\u679c\u8fd8\u8981\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"Result"),"\u5c5e\u6027\u503c\u8fdb\u884c\u5224\u65ad\u3002 \u540c\u65f6\u5f53",(0,a.kt)("strong",{parentName:"p"},"Result"),"\u4e3a\u6210\u529f\u65f6\uff0c\u4e5f\u6709\u6781\u5c0f\u7684\u6982\u7387\u5931\u8d25\u3002\u603b\u4e4b\u54cd\u5e94\u7aef\u65e0\u6cd5100%\u5f97\u77e5\u4f20\u8f93\u7684\u6700\u7ec8\u7ed3\u679c\u3002")),(0,a.kt)("p",null,"\u3010\u5ba2\u6237\u7aef\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpTouchRpcClient client = new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7789")\n    .SetVerifyToken("File")\n    .UsePlugin()\n    .ConfigureContainer(a => \n    {\n        a.AddConsoleLogger();\n        a.AddFileLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseTouchRpcHeartbeat<TcpTouchRpcClient>();\n    })\n    .BuildWithTcpTouchRpcClient();\n\nclient.Logger.Info("\u8fde\u63a5\u6210\u529f");\n\nMetadata metadata = new Metadata();//\u4f20\u9012\u5230\u670d\u52a1\u5668\u7684\u5143\u6570\u636e\nmetadata.Add("1", "1");\nmetadata.Add("2", "2");\n\nFileOperator fileOperator = new FileOperator()//\u5b9e\u4f8b\u5316\u672c\u6b21\u4f20\u8f93\u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u83b7\u53d6\u4f20\u8f93\u8fdb\u5ea6\u3001\u901f\u5ea6\u3001\u72b6\u6001\u7b49\u3002\n{\n    Flags = TransferFlags.BreakpointResume,//\u5c1d\u8bd5\u65ad\u70b9\u7eed\u4f20\uff0c\u4f7f\u7528\u65ad\u70b9\u7eed\u4f20\u65f6\uff0c\u4f1a\u9a8c\u8bc1MD5\u503c\n    SavePath = $@"Windows.iso",//\u4fdd\u5b58\u8def\u5f84\n    ResourcePath = @"D:\\System\\Windows.iso",//\u8bf7\u6c42\u8def\u5f84\n    Metadata= metadata//\u4f20\u9012\u5230\u670d\u52a1\u5668\u7684\u5143\u6570\u636e\n};\n\nfileOperator.Timeout = TimeSpan.FromSeconds(60);//\u5f53\u4f20\u8f93\u5927\u6587\u4ef6\uff0c\u4e14\u542f\u7528\u65ad\u70b9\u7eed\u4f20\u65f6\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u5148\u8ba1\u7b97MD5\uff0c\u800c\u5ef6\u65f6\u54cd\u5e94\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002\n\n//\u6b64\u5904\u7684\u4f5c\u7528\u76f8\u5f53\u4e8eTimer\uff0c\u5b9a\u65f6\u6bcf\u79d2\u8f93\u51fa\u5f53\u524d\u7684\u4f20\u8f93\u8fdb\u5ea6\u548c\u901f\u5ea6\u3002\nLoopAction loopAction = LoopAction.CreateLoopAction(-1, 1000, (loop) =>\n{\n    if (fileOperator.Result.ResultCode != ResultCode.Default)\n    {\n        loop.Dispose();\n    }\n\n    client.Logger.Info($"\u8fdb\u5ea6\uff1a{fileOperator.Progress}\uff0c\u901f\u5ea6\uff1a{fileOperator.Speed()}");\n});\n\nloopAction.RunAsync();\n\n\n\n//\u6b64\u65b9\u6cd5\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u4f20\u8f93\u7ed3\u675f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528PullFileAsync\nIResult result = client.PullFile(fileOperator);\n\nclient.Logger.Info(result.ToString());\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u6c42\u7aef\u8fd4\u56de\u7684",(0,a.kt)("strong",{parentName:"p"},"result"),"\uff0c\u5728\u6210\u529f\u65f6\uff0c\u53ef\u4ee5100%\u8868\u660e\u4f20\u8f93\u7684\u6587\u4ef6\u5df2\u5728\u78c1\u76d8\u4e0a\u3002\u5982\u679c\u60f3\u8fdb\u4e00\u6b65\u786e\u5b9a\u6587\u4ef6\u7684\u51c6\u786e\u6027\uff0c\u8fd8\u9700\u8981\u81ea\u884c\u518d\u9a8c\u8bc1MD5\u6216\u8005\u5176\u4ed6Hash\u7b97\u6cd5\u3002")),(0,a.kt)("a",{name:"qZvBF"}),(0,a.kt)("h2",{id:"\u516d\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6"},"\u516d\u3001\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6"),(0,a.kt)("p",null,"\u8be5\u529f\u80fd\u652f\u6301\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6\uff0c\u4f7f\u7528\u65b9\u6cd5\u57fa\u672c\u4e00\u81f4\uff0c\u53ea\u9700\u8981\u989d\u5916\u589e\u52a0\u76ee\u6807Id\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u4e5f\u9700\u8981\u540c\u610f\u8def\u7531\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u8be5\u65b9\u5f0f\u6587\u4ef6\u4f20\u8f93\u65f6\uff0c\u8fd8\u4f1a\u53d1\u8d77\u901a\u9053\u8def\u7531\uff0c\u6240\u4ee5\uff0c\u9700\u8981\u5141\u8bb8\u7684\u8def\u7531\u5e94\u8be5\u8fd8\u989d\u5916\u589e\u52a0",(0,a.kt)("strong",{parentName:"p"},"\u901a\u9053\u7c7b\u578b"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"internal class MyTouchRpcPlugin : TouchRpcPluginBase\n{\n    protected override void OnRouting(ITouchRpc client, PackageRouterEventArgs e)\n    {\n        if (e.RouterType== RouteType.PushFile||e.RouterType== RouteType.PullFile||e.RouterType== RouteType.CreateChannel)\n        {\n            e.IsPermitOperation = true;\n        }\n        base.OnRouting(client, e);\n    }\n}\n")))}u.isMDXComponent=!0},4706:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/transferfile-1-f9511c60272f79987b4180489a7e1f5f.gif"}}]);