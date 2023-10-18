"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={id:"wscommandlineplugin",title:"\u5feb\u6377\u4e8b\u52a1\u547d\u4ee4\u884c"},i=void 0,l={unversionedId:"wscommandlineplugin",id:"wscommandlineplugin",title:"\u5feb\u6377\u4e8b\u52a1\u547d\u4ee4\u884c",description:"\u5b9a\u4e49",source:"@site/docs/wscommandlineplugin.mdx",sourceDirName:".",slug:"/wscommandlineplugin",permalink:"/touchsocket/docs/current/wscommandlineplugin",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/wscommandlineplugin.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1692285540,formattedLastUpdatedAt:"Aug 17, 2023",frontMatter:{id:"wscommandlineplugin",title:"\u5feb\u6377\u4e8b\u52a1\u547d\u4ee4\u884c"},sidebar:"docs",previous:{title:"Websocket\u5fc3\u8df3\u8bbe\u7f6e",permalink:"/touchsocket/docs/current/websocketheartbeat"},next:{title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406",permalink:"/touchsocket/docs/current/generateproxydescription"}},c={},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528",id:"\u4e8c\u4f7f\u7528",level:2},{value:"2.1 \u58f0\u660e\u4e8b\u52a1\u63d2\u4ef6",id:"21-\u58f0\u660e\u4e8b\u52a1\u63d2\u4ef6",level:3},{value:"3.1 \u6ce8\u518c\u4f7f\u7528",id:"31-\u6ce8\u518c\u4f7f\u7528",level:3},{value:"3.2 \u8c03\u7528",id:"32-\u8c03\u7528",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Http.WebSockets ",(0,o.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Http"},"TouchSocket.Http.dll")),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u5feb\u6377\u4e8b\u52a1\u547d\u4ee4\u884c\uff0c\u662f\u7528\u4e8e",(0,o.kt)("strong",{parentName:"p"},"WebSocket"),"\u7684\u5feb\u6377\u4e8b\u52a1\u5b9e\u73b0\uff0c\u8ba9WS\u5728",(0,o.kt)("strong",{parentName:"p"},"Text"),"\u6587\u672c\u4e2d\uff0c\u7528\u6700\u7b80\u5355\u7684\u6587\u5b57\u6d88\u606f\u5373\u53ef\u5b8c\u6210\u76f8\u5173\u4e8b\u52a1\u7684\u6267\u884c\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u4f7f\u7528"},"\u4e8c\u3001\u4f7f\u7528"),(0,o.kt)("h3",{id:"21-\u58f0\u660e\u4e8b\u52a1\u63d2\u4ef6"},"2.1 \u58f0\u660e\u4e8b\u52a1\u63d2\u4ef6"),(0,o.kt)("p",null,"\u65b0\u5efa\u7c7b\u578b\uff0c\u7ee7\u627f\u81ea",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketCommandLinePlugin"),"\u3002\u7136\u540e\u5728\u91cc\u9762\u5199\u4e00\u4e9b\u9700\u8981\u7684\u4e8b\u52a1\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u58f0\u660e\u7684\u4e8b\u52a1\u65b9\u6cd5\u5fc5\u987b\u6ee1\u8db3\uff1a\u53ea\u80fd\u662f\u5b9e\u4f8b\u65b9\u6cd5\u3001\u5fc5\u987b\u662f\u516c\u5f00\u65b9\u6cd5\u3001\u65b9\u6cd5\u540d\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Command"),"\u7ed3\u5c3e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// \u547d\u4ee4\u884c\u63d2\u4ef6\u3002\n/// \u58f0\u660e\u7684\u65b9\u6cd5\u5fc5\u987b\u4e3a\u516c\u5f00\u5b9e\u4f8b\u65b9\u6cd5\u3001\u4ee5"Command"\u7ed3\u5c3e\uff0c\u4e14\u652f\u6301json\u5b57\u7b26\u4e32\uff0c\u53c2\u6570\u4e4b\u95f4\u7a7a\u683c\u9694\u5f00\u3002\n/// </summary>\npublic class MyWSCommandLinePlugin : WebSocketCommandLinePlugin\n{\n    public MyWSCommandLinePlugin(ILog logger) : base(logger)\n    {\n    }\n\n    public int AddCommand(int a, int b)\n    {\n        return a + b;\n    }\n\n    //\u5f53\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u76f4\u63a5\u6216\u95f4\u63a5\u5b9e\u73b0ITcpClientBase\u63a5\u53e3\u65f6\uff0c\u4f1a\u6536\u96c6\u5230\u5f53\u524d\u8bf7\u6c42\u7684\u5ba2\u6237\u7aef\uff0c\u4ece\u800c\u53ef\u4ee5\u83b7\u53d6IP\u7b49\u3002\n    public SumClass SumCommand(IHttpClientBase client, SumClass sumClass)\n    {\n        sumClass.Sum = sumClass.A + sumClass.B;\n        return sumClass;\n    }\n}\n')),(0,o.kt)("h3",{id:"31-\u6ce8\u518c\u4f7f\u7528"},"3.1 \u6ce8\u518c\u4f7f\u7528"),(0,o.kt)("p",null,"\u76f4\u63a5\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{14}","{14}":!0},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .SetListenIPHosts(7789)\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebSocket()//\u6dfb\u52a0WebSocket\u529f\u80fd\n                        //.SetWSUrl("/ws")//\u8bbe\u7f6eurl\u76f4\u63a5\u53ef\u4ee5\u8fde\u63a5\u3002\n               .SetVerifyConnection(VerifyConnection)\n               .UseAutoPong();//\u5f53\u6536\u5230ping\u62a5\u6587\u65f6\u81ea\u52a8\u56de\u5e94pong\n        a.Add<MyWSCommandLinePlugin>();\n    }))\n    .Start();\n')),(0,o.kt)("h3",{id:"32-\u8c03\u7528"},"3.2 \u8c03\u7528"),(0,o.kt)("p",null,"\u8c03\u7528\u6570\u636e\u683c\u5f0f\uff1a"),(0,o.kt)("p",null,"\u4ee5\u4e8b\u52a1\u65b9\u6cd5\u7684",(0,o.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d"),"\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff08\u4e0d\u5305\u542bCommand\uff09\uff0c\u540e\u7eed\u53c2\u6570\u76f4\u63a5\u5199\uff0c\u591a\u4e2a\u53c2\u6570\u7528",(0,o.kt)("strong",{parentName:"p"},"\u7a7a\u683c"),"\u9694\u5f00\u3002\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Add 10 20")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{18}","{18}":!0},'var client = new WebSocketClient();\nclient.Setup(new TouchSocketConfig()\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.Add(nameof(IWebSocketReceivedPlugin.OnWebSocketReceived), async (IHttpClientBase c, WSDataFrameEventArgs e) =>\n        {\n            client.Logger.Info($"\u6536\u5230Add\u7684\u8ba1\u7b97\u7ed3\u679c\uff1a{e.DataFrame.ToText()}");\n            await e.InvokeNext();\n        });\n    })\n    .SetRemoteIPHost("ws://127.0.0.1:7789/ws"));\nclient.Connect();\n\nclient.SendWithWS("Add 10 20");\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5feb\u6377\u4e8b\u52a1\u547d\u4ee4\u884c\u4e0d\u4ec5\u53ef\u4ee5\u6dfb\u52a0\u5728\u670d\u52a1\u5668\uff0c\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u4f7f\u7528\u3002")),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5feb\u6377\u4e8b\u52a1\u53c2\u6570\u652f\u6301Json\u5b57\u7b26\u4e32\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8c03\u7528\u7684Json\u5b57\u7b26\u4e32\u4e5f\u4e0d\u80fd\u5305\u542b\u7a7a\u683c\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/WebSocket/WebSocketConsoleApp"},"\u672c\u6587\u793a\u4f8bDemo")))}u.isMDXComponent=!0}}]);