"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"udpwaitingclient",title:"Udp\u540c\u6b65\u8bf7\u6c42"},a=void 0,p={unversionedId:"udpwaitingclient",id:"version-1.3.9/udpwaitingclient",title:"Udp\u540c\u6b65\u8bf7\u6c42",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/udpwaitingclient.mdx",sourceDirName:".",slug:"/udpwaitingclient",permalink:"/touchsocket/docs/1.3.9/udpwaitingclient",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/udpwaitingclient.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"udpwaitingclient",title:"Udp\u540c\u6b65\u8bf7\u6c42"},sidebar:"docs",previous:{title:"\u521b\u5efaUdpSession",permalink:"/touchsocket/docs/1.3.9/createudpsession"},next:{title:"\u4f20\u8f93\u5927\u4e8e64K\u7684\u6570\u636e",permalink:"/touchsocket/docs/1.3.9/udptransmitbigdata"}},s={},l=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u521b\u5efa\u53ca\u4f7f\u7528",id:"\u4e8c\u521b\u5efa\u53ca\u4f7f\u7528",level:2},{value:"2.1 \u4ee5UdpSession\u4e3a\u4f8b",id:"21-\u4ee5udpsession\u4e3a\u4f8b",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u6709\u5f88\u591a\u5c0f\u4f19\u4f34\u5bf9\u4e8eUdp\u4e00\u76f4\u6709\u4e00\u4e9b\u9700\u6c42\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u6570\u636e\uff0c\u7136\u540e\u7b49\u5f85\u670d\u52a1\u5668\u56de\u5e94\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u6570\u636e\uff0c\u7136\u540e\u7b49\u5f85\u5ba2\u6237\u7aef\u56de\u5e94\u3002")),(0,o.kt)("p",null,"\u90a3\u9488\u5bf9\u8fd9\u4e9b\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"WaitingClient\u3002"),"\u5176\u5185\u90e8\u5b9e\u73b0\u4e86",(0,o.kt)("strong",{parentName:"p"},"IWaitSender"),"\u63a5\u53e3\uff0c\u80fd\u591f\u5728\u53d1\u9001\u5b8c\u6210\u540e\uff0c\u7b49\u5f85\u8fd4\u56de\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u521b\u5efa\u53ca\u4f7f\u7528"},"\u4e8c\u3001\u521b\u5efa\u53ca\u4f7f\u7528"),(0,o.kt)("h3",{id:"21-\u4ee5udpsession\u4e3a\u4f8b"},"2.1 \u4ee5UdpSession\u4e3a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'UdpSession udpSession = new UdpSession();\nvar config = new TouchSocketConfig()\n    .SetBindIPHost(new IPHost(0))//\u5fc5\u8981\u8bbe\u7f6e\n    .SetRemoteIPHost(new IPHost("127.0.0.1:7789"));//\u53ef\u4ee5\u4e0d\u8bbe\u7f6e\n\n//\u8f7d\u5165\u914d\u7f6e\nudpSession.Setup(config);\nudpSession.Start();\n\n//\u8c03\u7528GetWaitingClient\u83b7\u53d6\u5230IWaitingClient\u7684\u5bf9\u8c61\u3002\nvar waitClient = udpSession.GetWaitingClient(new WaitingOptions()\n{\n    AdapterFilter = AdapterFilter.AllAdapter,//\u8868\u793a\u53d1\u9001\u548c\u63a5\u6536\u7684\u6570\u636e\u90fd\u4f1a\u7ecf\u8fc7\u9002\u914d\u5668\n    RemoteIPHost = new IPHost("127.0.0.1:7799")//\u8868\u793a\u76ee\u7684\u5730\u5740\n});\n\n//\u7136\u540e\u4f7f\u7528SendThenReturn\u3002\nbyte[] returnData = waitClient.SendThenReturn(Encoding.UTF8.GetBytes("RRQM"));\nudpSession.Logger.Info($"\u6536\u5230\u56de\u5e94\u6d88\u606f\uff1a{Encoding.UTF8.GetString(returnData)}");\n\n//\u540c\u65f6\uff0c\u5982\u679c\u9002\u914d\u5668\u6536\u5230\u6570\u636e\u540e\uff0c\u8fd4\u56de\u7684\u5e76\u4e0d\u662f\u5b57\u8282\uff0c\u800c\u662fIRequestInfo\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528SendThenResponse.\nResponsedData responsedData = waitClient.SendThenResponse(Encoding.UTF8.GetBytes("RRQM"));\nIRequestInfo requestInfo = responsedData.RequestInfo;//\u540c\u6b65\u6536\u5230\u7684RequestInfo\n')),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Udp\u7684\u540c\u6b65\u8bf7\u6c42\uff0c\u6709\u4e24\u79cd\u7b56\u7565\uff0c\u4e00\u79cd\u5219\u662f\u5728\u914d\u7f6e\u4e2d\u8bbe\u7f6e",(0,o.kt)("strong",{parentName:"p"},"SetRemoteIPHost"),"\uff0c\u7136\u540e\u5728",(0,o.kt)("strong",{parentName:"p"},"GetWaitingClient"),"\u65f6\u5219\u4e0d\u5fc5\u518d\u8bbe\u7f6eRemoteIPHost\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e00\u822c\u9002\u7528\u4e8e\u5ba2\u6237\u7aef\u3002\u7b2c\u4e8c\u79cd\u5219\u662f\u4e0d\u914d\u7f6e",(0,o.kt)("strong",{parentName:"p"},"SetRemoteIPHost"),"\uff0c\u7136\u540e\u5728",(0,o.kt)("strong",{parentName:"p"},"GetWaitingClient"),"\u65f6\u8bbe\u7f6eRemoteIPHost\uff0c\u8fd9\u79cd\u60c5\u51b5\u9002\u7528\u4e8e\u670d\u52a1\u5668\u3002")),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5728SendThenReturn\u65f6\uff0c\u901a\u8fc7\u5176\u4ed6\u53c2\u6570\uff0c\u8fd8\u53ef\u4ee5\u8bbe\u7f6eTimeout\uff0c\u4ee5\u53ca\u53ef\u53d6\u6d88\u7684\u7b49\u5f85Token\u3002")),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u4e0a\u4e0a\u8ff0\u884c\u4e3a\uff0c\u53ea\u8981\u5b9e\u73b0IClient, IDefaultSender, ISend\u4e09\u4e2a\u63a5\u53e3\u7684\u7c7b\u5747\u53ef\u4ee5\u4f7f\u7528\u3002")),(0,o.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"danger"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u53d1\u9001\u5b8c\u6570\u636e\uff0c\u5728\u7b49\u5f85\u65f6\uff0c\u5982\u679c\u6536\u5230\u5176\u4ed6\u8fd4\u56de\u6570\u636e\uff0c\u5219\u53ef\u80fd\u5f97\u5230\u9519\u8bef\u7ed3\u679c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53d1\u9001\u91c7\u7528Lock\u9501\uff0c\u4e00\u4e2a\u4e8b\u52a1\u6ca1\u7ed3\u675f\uff0c\u53e6\u4e00\u4e2a\u8bf7\u6c42\u4e5f\u53d1\u4e0d\u51fa\u53bb\u3002"))))}u.isMDXComponent=!0}}]);