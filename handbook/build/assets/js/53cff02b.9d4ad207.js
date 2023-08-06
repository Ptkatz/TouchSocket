"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"createwebsocketclient",title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef"},o=void 0,c={unversionedId:"createwebsocketclient",id:"createwebsocketclient",title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",description:"\u5b9a\u4e49",source:"@site/docs/createwebsocketclient.mdx",sourceDirName:".",slug:"/createwebsocketclient",permalink:"/touchsocket/docs/createwebsocketclient",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/createwebsocketclient.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1691162329,formattedLastUpdatedAt:"Aug 4, 2023",frontMatter:{id:"createwebsocketclient",title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef"},sidebar:"docs",previous:{title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668",permalink:"/touchsocket/docs/createwebsocketservice"},next:{title:"\u8fde\u63a5\u9a8c\u8bc1",permalink:"/touchsocket/docs/websocketverify"}},i={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u53ef\u914d\u7f6e\u9879",id:"\u4e00\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u4e8c\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u4e8c\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"\u4e09\u3001\u521b\u5efaWS\u5ba2\u6237\u7aef",id:"\u4e09\u521b\u5efaws\u5ba2\u6237\u7aef",level:2},{value:"3.1 \u521b\u5efa\u5e38\u89c4\u5ba2\u6237\u7aef",id:"31-\u521b\u5efa\u5e38\u89c4\u5ba2\u6237\u7aef",level:3},{value:"3.2 \u521b\u5efaWSs\u5ba2\u6237\u7aef",id:"32-\u521b\u5efawss\u5ba2\u6237\u7aef",level:3},{value:"\u56db\u3001\u53d1\u9001\u6570\u636e",id:"\u56db\u53d1\u9001\u6570\u636e",level:2},{value:"4.1 \u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f",id:"41-\u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f",level:3},{value:"4.2 \u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f",id:"42-\u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f",level:3},{value:"4.3 \u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236",id:"43-\u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236",level:3},{value:"4.4 \u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27",id:"44-\u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27",level:3},{value:"\u4e94\u3001\u63a5\u6536\u6570\u636e",id:"\u4e94\u63a5\u6536\u6570\u636e",level:2},{value:"5.1 \u8ba2\u9605Received\u4e8b\u4ef6\u5b9e\u73b0",id:"51-\u8ba2\u9605received\u4e8b\u4ef6\u5b9e\u73b0",level:3},{value:"5.2 \u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0\u3002",id:"52-\u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0",level:3},{value:"\u516d\u3001\u5173\u95ed\u8fde\u63a5",id:"\u516d\u5173\u95ed\u8fde\u63a5",level:2}],s={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Http.WebSockets ",(0,r.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Http"},"TouchSocket.Http.dll")),(0,r.kt)("h2",{id:"\u4e00\u53ef\u914d\u7f6e\u9879"},"\u4e00\u3001\u53ef\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u7ee7\u627f",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/createhttpclient"},"HttpClient")),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u4e8c\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"ITcpPlugin\u3001IWebSocketPlugin")),(0,r.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"IWebSocketPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\u6216\u8005\u7ee7\u627f\u81ea",(0,r.kt)("strong",{parentName:"p"},"WebSocketPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaking"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u53d1\u9001\u63e1\u624b\u8bf7\u6c42\u4e4b\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaked"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u6210\u529f\u7684\u63e1\u624b\u54cd\u5e94\u4e4b\u540e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandleWSDataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230Websocket\u7684\u6570\u636e\u62a5\u6587")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnClosing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230\u5173\u95ed\u8bf7\u6c42\u65f6")))),(0,r.kt)("h2",{id:"\u4e09\u521b\u5efaws\u5ba2\u6237\u7aef"},"\u4e09\u3001\u521b\u5efaWS\u5ba2\u6237\u7aef"),(0,r.kt)("h3",{id:"31-\u521b\u5efa\u5e38\u89c4\u5ba2\u6237\u7aef"},"3.1 \u521b\u5efa\u5e38\u89c4\u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'WebSocketClient myWSClient = new WebSocketClient();\nmyWSClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("ws://127.0.0.1:7789/ws")\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    }));\nmyWSClient.Connect();\nmyWSClient.Logger.Message("\u8fde\u63a5\u6210\u529f");\n')),(0,r.kt)("h3",{id:"32-\u521b\u5efawss\u5ba2\u6237\u7aef"},"3.2 \u521b\u5efaWSs\u5ba2\u6237\u7aef"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f53\u9700\u8981\u8fde\u63a5\u5230\u7531\u8bc1\u4e66\u673a\u6784\u9881\u53d1\u7684\u7f51\u5740\uff08\u4f8b\u5982\uff1a\u5c0f\u7a0b\u5e8f\u3001\u7269\u8054\u7f51\u7b49\uff09\u65f6\uff0c\u4ec5\u9700\u8981\u8bbe\u7f6eurl\u5373\u53ef\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"wss://127.0.0.1:7789/ws\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f53\u8fde\u63a5\u81ea\u5b9a\u4e49\u8bc1\u4e66\u7684Ssl\uff1awss://127.0.0.1:7789/ws")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'WebSocketClient myWSClient = new WebSocketClient();\n\nmyWSClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost(new IPHost("wss://127.0.0.1:7789/ws"))\n    .SetClientSslOption(\n    new ClientSslOption()\n    {\n        ClientCertificates = new X509CertificateCollection() { new X509Certificate2("RRQMSocket.pfx", "RRQMSocket") },\n        SslProtocols = SslProtocols.Tls12,\n        TargetHost = "127.0.0.1",\n        CertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => { return true; }\n    }))\n    .Connect();\n\nConsole.WriteLine("\u8fde\u63a5\u6210\u529f");\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'\u5f53\u4f7f\u7528\u57df\u540d\u8fde\u63a5\u65f6\uff0cTargetHost\u4e3a\u57df\u540d\uff0c\u4f8b\u5982\u8fde\u63a5\u5230IPHost("ws://baidu.com")\u65f6\uff0cTargetHost\u5e94\u5f53\u586b\u5199\uff1abaidu.com')),(0,r.kt)("h2",{id:"\u56db\u53d1\u9001\u6570\u636e"},"\u56db\u3001\u53d1\u9001\u6570\u636e"),(0,r.kt)("p",null,"\u56e0\u4e3a\u5ba2\u6237\u7aef\u662f\u4ece",(0,r.kt)("strong",{parentName:"p"},"HttpClientBase"),"\u6d3e\u751f\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u6269\u5c55\u65b9\u6cd5"),"\uff0c\u8fdb\u884c\u53d1\u9001\u3002"),(0,r.kt)("h3",{id:"41-\u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f"},"4.1 \u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'myWSClient.SendWithWS("Text");\n')),(0,r.kt)("h3",{id:"42-\u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f"},"4.2 \u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"myWSClient.SendWithWS(new byte[10]);\n")),(0,r.kt)("h3",{id:"43-\u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236"},"4.3 \u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u53d1\u9001\u7684\u6570\u636e\u4e3a{0,1,2,3,4,5,6,7,8,9}\uff0c\u5f53\u8bbe\u7f6epackageSize\u4e3a5\u65f6\uff0c\u4f1a\u5148\u53d1\u9001{0,1,2,3,4}\u4f5c\u4e3a\u5934\u5305\uff0c\u7136\u540e\u53d1\u9001{5,6,7,8,9}\u7684\u540e\u7ee7\u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"byte[] data = new byte[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };\nmyWSClient.SubSendWithWS(data, 5);\n")),(0,r.kt)("h3",{id:"44-\u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27"},"4.4 \u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'WSDataFrame frame=new WSDataFrame();\nframe.Opcode= WSDataType.Text;\nframe.FIN= true;\nframe.RSV1= true;\nframe.RSV2= true;\nframe.RSV3= true;\nframe.AppendText("I");\nframe.AppendText("Love");\nframe.AppendText("U");\nmyWSClient.SendWithWS(frame);\n')),(0,r.kt)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u90e8\u5206\u529f\u80fd\u5c31\u9700\u8981\u4f60\u5bf9Websocket\u6709\u5145\u5206\u4e86\u89e3\u624d\u53ef\u4ee5\u64cd\u4f5c\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Websocket\u7684\u6240\u6709\u53d1\u9001\uff0c\u90fd\u662f\u5f62\u5982",(0,r.kt)("strong",{parentName:"p"},"SendWithWS"),"\u7684\u6269\u5c55\u65b9\u6cd5\u3002\u4e0d\u53ef\u76f4\u63a5Send\u3002")),(0,r.kt)("h2",{id:"\u4e94\u63a5\u6536\u6570\u636e"},"\u4e94\u3001\u63a5\u6536\u6570\u636e"),(0,r.kt)("h3",{id:"51-\u8ba2\u9605received\u4e8b\u4ef6\u5b9e\u73b0"},"5.1 \u8ba2\u9605Received\u4e8b\u4ef6\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"client.Received = (c, e) =>\n    {\n        switch (e.Opcode)\n        {\n            case WSDataType.Cont:\n                break;\n            case WSDataType.Text:\n                break;\n            case WSDataType.Binary:\n                break;\n            case WSDataType.Close:\n                break;\n            case WSDataType.Ping:\n                break;\n            case WSDataType.Pong:\n                break;\n            default:\n                break;\n        }\n    };\n")),(0,r.kt)("h3",{id:"52-\u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0"},"5.2 \u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u3010\u5b9a\u4e49\u63d2\u4ef6\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyWSClientPlugin:WebSocketPluginBase<WebSocketClient>\n{\n    protected override void OnHandleWSDataFrame(WebSocketClient client, WSDataFrameEventArgs e)\n    {\n        switch (e.DataFrame.Opcode)\n        {\n            case WSDataType.Cont:\n                client.Logger.Info($"\u6536\u5230\u4e2d\u95f4\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n                break;\n\n            case WSDataType.Text:\n                client.Logger.Info(e.DataFrame.ToText());\n                break;\n\n            case WSDataType.Binary:\n                if (e.DataFrame.FIN)\n                {\n                    client.Logger.Info($"\u6536\u5230\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n                }\n                else\n                {\n                    client.Logger.Info($"\u6536\u5230\u672a\u7ed3\u675f\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n                }\n                break;\n\n            case WSDataType.Close:\n                {\n                    client.Logger.Info("\u8fdc\u7a0b\u8bf7\u6c42\u65ad\u5f00");\n                    client.Close("\u65ad\u5f00");\n                }\n\n                break;\n\n            case WSDataType.Ping:\n                break;\n\n            case WSDataType.Pong:\n                break;\n\n            default:\n                break;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u3010\u4f7f\u7528\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{11}","{11}":!0},'WebSocketClientmyWSClient = new WebSocketClient();\nmyWSClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("ws://127.0.0.1:7789/ws")\n    .UsePlugin()\n    .ConfigureContainer(a =>\n    {\n        a.AddFileLogger();\n    })\n    .ConfigurePlugins(a => \n    {\n        a.Add<MyWSClientPlugin>();\n    }));\nmyWSClient.Connect();\n')),(0,r.kt)("h2",{id:"\u516d\u5173\u95ed\u8fde\u63a5"},"\u516d\u3001\u5173\u95ed\u8fde\u63a5"),(0,r.kt)("p",null,"\u5173\u95edWebsocket\uff0c\u5e94\u8be5\u53d1\u9001\u5173\u95ed\u62a5\u6587\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'myWSClient.CloseWithWS("close");\n')))}k.isMDXComponent=!0}}]);