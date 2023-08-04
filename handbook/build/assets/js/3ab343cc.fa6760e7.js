"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"createwebsocketservice",title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668"},o=void 0,i={unversionedId:"createwebsocketservice",id:"createwebsocketservice",title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668",description:"\u5b9a\u4e49",source:"@site/docs/createwebsocketservice.mdx",sourceDirName:".",slug:"/createwebsocketservice",permalink:"/touchsocket/docs/createwebsocketservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/createwebsocketservice.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1677379097,formattedLastUpdatedAt:"Feb 26, 2023",frontMatter:{id:"createwebsocketservice",title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668"},sidebar:"docs",previous:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/websocketdescription"},next:{title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/createwebsocketclient"}},c={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u53ef\u914d\u7f6e\u9879",id:"\u4e8c\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u4e09\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u4e09\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"\u56db\u3001\u521b\u5efaWebSocket\u670d\u52a1",id:"\u56db\u521b\u5efawebsocket\u670d\u52a1",level:2},{value:"4.1 \u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa",id:"41-\u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa",level:3},{value:"4.2 \u901a\u8fc7WebApi\u521b\u5efa",id:"42-\u901a\u8fc7webapi\u521b\u5efa",level:3},{value:"4.3 \u521b\u5efa\u57fa\u4e8eSsl\u7684WebSocket\u670d\u52a1",id:"43-\u521b\u5efa\u57fa\u4e8essl\u7684websocket\u670d\u52a1",level:3},{value:"\u4e94\u3001\u63a5\u6536\u6d88\u606f",id:"\u4e94\u63a5\u6536\u6d88\u606f",level:2},{value:"5.1 \u56de\u8c03\u63a5\u6536",id:"51-\u56de\u8c03\u63a5\u6536",level:3},{value:"5.2 \u63d2\u4ef6\u63a5\u53e3\u63a5\u6536",id:"52-\u63d2\u4ef6\u63a5\u53e3\u63a5\u6536",level:3},{value:"\u516d\u3001\u56de\u590d\u3001\u54cd\u5e94\u6570\u636e",id:"\u516d\u56de\u590d\u54cd\u5e94\u6570\u636e",level:2},{value:"6.1 \u5982\u4f55\u83b7\u53d6SocketClient\uff1f",id:"61-\u5982\u4f55\u83b7\u53d6socketclient",level:3},{value:"\uff081\uff09\u76f4\u63a5\u83b7\u53d6\u6240\u6709\u5728\u7ebf\u5ba2\u6237\u7aef",id:"1\u76f4\u63a5\u83b7\u53d6\u6240\u6709\u5728\u7ebf\u5ba2\u6237\u7aef",level:4},{value:"\uff082\uff09\u901a\u8fc7ID\u83b7\u53d6",id:"2\u901a\u8fc7id\u83b7\u53d6",level:4},{value:"6.2 \u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f",id:"62-\u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f",level:3},{value:"6.3 \u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f",id:"63-\u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f",level:3},{value:"6.4 \u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236",id:"64-\u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236",level:3},{value:"6.5 \u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27",id:"65-\u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27",level:3},{value:"\u4e03\u3001\u670d\u52a1\u5668\u5e7f\u64ad\u53d1\u9001",id:"\u4e03\u670d\u52a1\u5668\u5e7f\u64ad\u53d1\u9001",level:2}],s={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Http.WebSockets ",(0,r.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Http"},"TouchSocket.Http.dll")),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"WebSocket\u662f\u57fa\u4e8eHttp\u534f\u8bae\u7684\u5347\u7ea7\u534f\u8bae\uff0c\u6240\u4ee5\u5e94\u5f53\u6302\u8f7d\u5728http\u670d\u52a1\u5668\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u53ef\u914d\u7f6e\u9879"},"\u4e8c\u3001\u53ef\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u7ee7\u627f",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/createhttpservice"},"HttpService")),(0,r.kt)("h2",{id:"\u4e09\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u4e09\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"ITcpPlugin\u3001IHttpPlugin\u3001IWebSocketPlugin")),(0,r.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"IWebSocketPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\u6216\u8005\u7ee7\u627f\u81ea",(0,r.kt)("strong",{parentName:"p"},"WebSocketPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaking"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230\u63e1\u624b\u8bf7\u6c42\u4e4b\u524d\uff0c\u53ef\u4ee5\u8fdb\u884c\u8fde\u63a5\u9a8c\u8bc1\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaked"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6210\u529f\u63e1\u624b\u54cd\u5e94\u4e4b\u540e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandleWSDataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230Websocket\u7684\u6570\u636e\u62a5\u6587")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnClosing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230\u5173\u95ed\u8bf7\u6c42\u65f6")))),(0,r.kt)("h2",{id:"\u56db\u521b\u5efawebsocket\u670d\u52a1"},"\u56db\u3001\u521b\u5efaWebSocket\u670d\u52a1"),(0,r.kt)("h3",{id:"41-\u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa"},"4.1 \u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa"),(0,r.kt)("p",null,"\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa\u7684\u8bdd\uff0c\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u7279\u6b8aurl\u8def\u7531\u3002\u5982\u679c\u60f3\u83b7\u5f97\u8fde\u63a5\u524d\u7684Http\u8bf7\u6c42\uff0c\u4e5f\u5fc5\u987b\u518d\u6dfb\u52a0\u4e00\u4e2a\u5b9e\u73b0IWebSocketPlugin\u63a5\u53e3\u7684\u63d2\u4ef6\uff0c\u7136\u540e\u4eceOnHandshaking\u65b9\u6cd5\u4e2d\u6355\u83b7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebSocket()//\u6dfb\u52a0WebSocket\u529f\u80fd\n               .SetWSUrl("/ws");\n        //.SetCallback(WSCallback);//WSCallback\u56de\u8c03\u51fd\u6570\u662f\u5728WS\u6536\u5230\u6570\u636e\u65f6\u89e6\u53d1\u56de\u8c03\u7684\u3002\u4e0b\u9762\u4f1a\u7528\u63d2\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\n        a.Add<MyWebSocketPlugin>();//MyWebSocketPlugin\u662f\u7ee7\u627f\u81eaWebSocketPluginBase\u7684\u63d2\u4ef6\u3002\n    }))\n    .Start();\n\nservice.Logger.Info("Http\u670d\u52a1\u5668\u5df2\u542f\u52a8");\nservice.Logger.Info("ws://127.0.0.1:7789/ws");\n\n')),(0,r.kt)("p",null,"[\u63d2\u4ef6]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyWebSocketPlugin : WebSocketPluginBase<HttpSocketClient>\n{\n    protected override void OnHandleWSDataFrame(HttpSocketClient client, WSDataFrameEventArgs e)\n    {\n        if (e.DataFrame.Opcode == WSDataType.Text)//\u6587\u672c\u6570\u636e\n        {\n            client.Logger.Info($"\u6536\u5230\u4fe1\u606f\uff1a{e.DataFrame.ToText()}");\n        }\n        else if (e.DataFrame.Opcode == WSDataType.Binary)//\u4e8c\u8fdb\u5236\n        {\n            byte[] data = e.DataFrame.PayloadData.ToArray();\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"42-\u901a\u8fc7webapi\u521b\u5efa"},"4.2 \u901a\u8fc7WebApi\u521b\u5efa"),(0,r.kt)("p",null,"\u901a\u8fc7WebApi\u7684\u65b9\u5f0f\u4f1a\u66f4\u52a0\u7075\u6d3b\uff0c\u4e5f\u80fd\u5f88\u65b9\u4fbf\u7684\u83b7\u5f97Http\u76f8\u5173\u53c2\u6570\u3002\u8fd8\u80fd\u5b9e\u73b0\u591a\u4e2aUrl\u7684\u8fde\u63a5\u8def\u7531\u3002\n\u5b9e\u73b0\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u914d\u7f6eConfigureRpcStore\uff0c\u548c\u6ce8\u518cMyServer"),(0,r.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u6dfb\u52a0WebApiParserPlugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n         a.AddConsoleLogger();\n    })\n    .ConfigureRpcStore(a=> \n    {\n        a.RegisterServer<MyServer>();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebApi();\n        a.UseWebSocket();//\u4e0d\u7528\u8bbe\u7f6e\u8fde\u63a5url\n    }))\n    .Start();\n\nConsole.WriteLine("\u670d\u52a1\u5668\u5df2\u542f\u52a8\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u5730\u5740\u8fde\u63a5");\nConsole.WriteLine("ws://127.0.0.1:7789/MyServer/ConnectWS");\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyServer : RpcServer\n{\n    private readonly ILog m_logger;\n\n    public MyServer(ILog logger)\n    {\n        this.m_logger = logger;\n    }\n\n    [Router("/[api]/[action]")]\n    [WebApi(HttpMethodType.GET, MethodFlags = MethodFlags.IncludeCallContext)]\n    public void ConnectWS(IWebApiCallContext callContext)\n    {\n        if (callContext.Caller is HttpSocketClient socketClient)\n        {\n            if (socketClient.SwitchProtocolToWebSocket(callContext.HttpContext))\n            {\n                m_logger.Info("WS\u901a\u8fc7WebApi\u8fde\u63a5");\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"43-\u521b\u5efa\u57fa\u4e8essl\u7684websocket\u670d\u52a1"},"4.3 \u521b\u5efa\u57fa\u4e8eSsl\u7684WebSocket\u670d\u52a1"),(0,r.kt)("p",null,"\u521b\u5efaWSs\u670d\u52a1\u5668\u65f6\uff0c\u5176\u4ed6\u914d\u7f6e\u4e0d\u53d8\uff0c\u53ea\u9700\u8981\u5728config\u4e2d\u914d\u7f6eSslOption\u4ee3\u7801\u5373\u53ef\u3002\n\u5728",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/RRQMBox/tree/master/Ssl%E8%AF%81%E4%B9%A6%E7%9B%B8%E5%85%B3"},"RRQMBox"),"\u4e2d\uff0c\u653e\u7f6e\u4e86\u4e00\u4e2a\u81ea\u5236Ssl\u8bc1\u4e66\uff0c\u5bc6\u7801\u4e3a\u201cRRQMSocket\u201d\u4ee5\u4f9b\u6d4b\u8bd5\u3002\u4f7f\u7528\u914d\u7f6e\u975e\u5e38\u65b9\u4fbf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var config = new TouchSocketConfig();\nconfig.UsePlugin()\n    .SetReceiveType(ReceiveType.Auto)\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .SetServiceSslOption(new ServiceSslOption() //Ssl\u914d\u7f6e\uff0c\u5f53\u4e3anull\u7684\u65f6\u5019\uff0c\u76f8\u5f53\u4e8e\u521b\u5efa\u4e86ws\u670d\u52a1\u5668\uff0c\u5f53\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u76f8\u5f53\u4e8ewss\u670d\u52a1\u5668\u3002\n    { \n        Certificate = new X509Certificate2("RRQMSocket.pfx", "RRQMSocket"), \n        SslProtocols = SslProtocols.Tls12 \n    });\n')),(0,r.kt)("h2",{id:"\u4e94\u63a5\u6536\u6d88\u606f"},"\u4e94\u3001\u63a5\u6536\u6d88\u606f"),(0,r.kt)("h3",{id:"51-\u56de\u8c03\u63a5\u6536"},"5.1 \u56de\u8c03\u63a5\u6536"),(0,r.kt)("p",null,"\u5728\u6dfb\u52a0",(0,r.kt)("strong",{parentName:"p"},"WebSocketServerPlugin"),"\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u8c03\u7528",(0,r.kt)("strong",{parentName:"p"},"SetCallback"),"\u51fd\u6570\uff0c\u7136\u540e\u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff08\u5982\u4e0b\u6240\u793a\uff09\uff0c\u7136\u540e\u8be5\u51fd\u6570\u5728\u670d\u52a1\u5668\u6536\u5230\u4fe1\u606f\u65f6\uff0c\u4f1a\u89e6\u53d1\uff08\u5e76\u53d1\u89e6\u53d1\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'static void WSCallback(ITcpClientBase client, WSDataFrameEventArgs e)\n{\n    switch (e.DataFrame.Opcode)\n    {\n        case WSDataType.Cont:\n            Console.WriteLine($"\u6536\u5230\u4e2d\u95f4\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n            break;\n        case WSDataType.Text:\n            Console.WriteLine(e.DataFrame.ToText());\n            break;\n        case WSDataType.Binary:\n            if (e.DataFrame.FIN)\n            {\n                Console.WriteLine($"\u6536\u5230\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n            }\n            else\n            {\n                Console.WriteLine($"\u6536\u5230\u672a\u7ed3\u675f\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n            }\n            break;\n        case WSDataType.Close:\n            {\n                Console.WriteLine("\u8fdc\u7a0b\u8bf7\u6c42\u65ad\u5f00");\n                client.Close("\u65ad\u5f00");\n            }\n\n            break;\n        case WSDataType.Ping:\n            break;\n        case WSDataType.Pong:\n            break;\n        default:\n            break;\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u51fd\u6570\uff0c\u53ef\u80fd\u88ab\u5e76\u53d1\u6267\u884c\u7684\uff0c\u6240\u4ee5\u5e94\u5f53\u505a\u597d\u7ebf\u7a0b\u5b89\u5168\u3002")),(0,r.kt)("h3",{id:"52-\u63d2\u4ef6\u63a5\u53e3\u63a5\u6536"},"5.2 \u63d2\u4ef6\u63a5\u53e3\u63a5\u6536"),(0,r.kt)("p",null,"WS\u670d\u52a1\u5668\uff0c\u867d\u7136\u662fHttp\u7684\u63d2\u4ef6\uff0c\u4f46\u662f\u4e5f\u80fd\u89e6\u53d1\u63d2\u4ef6\u63a5\u53e3\u3002\u9002\u7528\u4e8eWS\u7684\u63d2\u4ef6\u63a5\u53e3\u662f",(0,r.kt)("strong",{parentName:"p"},"IWebSocketPlugin"),"\uff08\u6216\u8005\u4ece",(0,r.kt)("strong",{parentName:"p"},"WebSocketPluginBase"),"\u7ee7\u627f\uff09\uff0c\u58f0\u660e\u4efb\u610f\u7c7b\uff0c\u5b9e\u73b0\u8be5\u63a5\u53e3\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u3010\u5b9a\u4e49\u63d2\u4ef6\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyWebSocketPlugin : WebSocketPluginBase<HttpSocketClient>\n{\n    protected override void OnHandleWSDataFrame(HttpSocketClient client, WSDataFrameEventArgs e)\n    {\n        switch (e.DataFrame.Opcode)\n        {\n            case WSDataType.Cont:\n                client.Logger.Info($"\u6536\u5230\u4e2d\u95f4\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n                break;\n\n            case WSDataType.Text:\n                client.Logger.Info(e.DataFrame.ToText());\n                break;\n\n            case WSDataType.Binary:\n                if (e.DataFrame.FIN)\n                {\n                    client.Logger.Info($"\u6536\u5230\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n                }\n                else\n                {\n                    client.Logger.Info($"\u6536\u5230\u672a\u7ed3\u675f\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n                }\n                break;\n\n            case WSDataType.Close:\n                {\n                    client.Logger.Info("\u8fdc\u7a0b\u8bf7\u6c42\u65ad\u5f00");\n                    client.Close("\u65ad\u5f00");\n                }\n\n                break;\n\n            case WSDataType.Ping:\n                break;\n\n            case WSDataType.Pong:\n                break;\n\n            default:\n                break;\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u3010\u4f7f\u7528\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{13}","{13}":!0},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseWebSocket()//\u6dfb\u52a0WebSocket\u529f\u80fd\n               .SetWSUrl("/ws");\n        a.Add<MyWebSocketPlugin>();//MyWebSocketPlugin\u662f\u7ee7\u627f\u81eaWebSocketPluginBase\u7684\u63d2\u4ef6\u3002\n    }))\n    .Start();\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u7684\u6240\u6709\u51fd\u6570\uff0c\u90fd\u662f\u53ef\u80fd\u88ab\u5e76\u53d1\u6267\u884c\u7684\uff0c\u6240\u4ee5\u5e94\u5f53\u505a\u597d\u7ebf\u7a0b\u5b89\u5168\u3002")),(0,r.kt)("h2",{id:"\u516d\u56de\u590d\u54cd\u5e94\u6570\u636e"},"\u516d\u3001\u56de\u590d\u3001\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"\u8981\u56de\u590dWebsocket\u6d88\u606f\uff0c\u5fc5\u987b\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"HttpSocketClient"),"\u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"61-\u5982\u4f55\u83b7\u53d6socketclient"},"6.1 \u5982\u4f55\u83b7\u53d6SocketClient\uff1f"),(0,r.kt)("h4",{id:"1\u76f4\u63a5\u83b7\u53d6\u6240\u6709\u5728\u7ebf\u5ba2\u6237\u7aef"},"\uff081\uff09\u76f4\u63a5\u83b7\u53d6\u6240\u6709\u5728\u7ebf\u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"service.GetClients"),"\u65b9\u6cd5\uff0c\u83b7\u53d6\u5f53\u524d\u5728\u7ebf\u7684\u6240\u6709\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'HttpSocketClient[] socketClients = service.GetClients();\nforeach (var item in socketClients)\n{\n    if (item.Protocol == Protocol.WebSocket)//\u5148\u5224\u65ad\u662f\u4e0d\u662fwebsocket\u534f\u8bae\n    {\n        if (item.ID == "id")//\u518d\u6309\u6307\u5b9aid\u53d1\u9001\uff0c\u6216\u8005\u76f4\u63a5\u5e7f\u64ad\u53d1\u9001\n        {\n\n        }\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8eHttpSocketClient\u7684\u751f\u547d\u5468\u671f\u662f\u7531\u6846\u67b6\u63a7\u5236\u7684\uff0c\u6240\u4ee5\u6700\u597d\u5c3d\u91cf\u4e0d\u8981\u76f4\u63a5\u5f15\u7528\u8be5\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u5f15\u7528HttpSocketClient.ID\uff0c\u7136\u540e\u518d\u901a\u8fc7\u670d\u52a1\u5668\u67e5\u627e\u3002")),(0,r.kt)("h4",{id:"2\u901a\u8fc7id\u83b7\u53d6"},"\uff082\uff09\u901a\u8fc7ID\u83b7\u53d6"),(0,r.kt)("p",null,"\u5148\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"service.GetIDs"),"\u65b9\u6cd5\uff0c\u83b7\u53d6\u5f53\u524d\u5728\u7ebf\u7684\u6240\u6709\u5ba2\u6237\u7aef\u7684ID\uff0c\u7136\u540e\u9009\u62e9\u9700\u8981\u7684ID\uff0c\u901a\u8fc7TryGetSocketClient\u65b9\u6cd5\uff0c\u83b7\u53d6\u5230\u60f3\u8981\u7684\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"string[] ids = service.GetIDs();\nif (service.TryGetSocketClient(ids[0], out HttpSocketClient socketClient))\n{\n}\n")),(0,r.kt)("h3",{id:"62-\u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f"},"6.2 \u53d1\u9001\u6587\u672c\u7c7b\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'socketClient.SendWithWS("Text");\n')),(0,r.kt)("h3",{id:"63-\u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f"},"6.3 \u53d1\u9001\u4e8c\u8fdb\u5236\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"socketClient.SendWithWS(new byte[10]);\n")),(0,r.kt)("h3",{id:"64-\u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236"},"6.4 \u53d1\u9001\u5206\u5305\u7684\u4e8c\u8fdb\u5236"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u53d1\u9001\u7684\u6570\u636e\u4e3a{0,1,2,3,4,5,6,7,8,9}\uff0c\u5f53\u8bbe\u7f6epackageSize\u4e3a5\u65f6\uff0c\u4f1a\u5148\u53d1\u9001{0,1,2,3,4}\u4f5c\u4e3a\u5934\u5305\uff0c\u7136\u540e\u53d1\u9001{5,6,7,8,9}\u7684\u540e\u7ee7\u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"byte[] data = new byte[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };\nsocketClient.SubSendWithWS(data, 5);\n")),(0,r.kt)("h3",{id:"65-\u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27"},"6.5 \u76f4\u63a5\u53d1\u9001\u81ea\u5b9a\u4e49\u6784\u5efa\u7684\u6570\u636e\u5e27"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'WSDataFrame frame=new WSDataFrame();\nframe.Opcode= WSDataType.Text;\nframe.FIN= true;\nframe.RSV1= true;\nframe.RSV2= true;\nframe.RSV3= true;\nframe.AppendText("I");\nframe.AppendText("Love");\nframe.AppendText("U");\nsocketClient.SendWithWS(frame);\n')),(0,r.kt)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u90e8\u5206\u529f\u80fd\u5c31\u9700\u8981\u4f60\u5bf9Websocket\u6709\u5145\u5206\u4e86\u89e3\u624d\u53ef\u4ee5\u64cd\u4f5c\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Websocket\u7684\u6240\u6709\u53d1\u9001\uff0c\u90fd\u662f\u5f62\u5982",(0,r.kt)("strong",{parentName:"p"},"SendWithWS"),"\u7684\u6269\u5c55\u65b9\u6cd5\u3002\u4e0d\u53ef\u76f4\u63a5Send\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u6f14\u793a\u5982\u4f55\u5728\u63d2\u4ef6\u76f4\u63a5\u54cd\u5e94"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{9}","{9}":!0},'public class MyWebSocketPlugin : WebSocketPluginBase<HttpSocketClient>\n{\n    protected override void OnHandleWSDataFrame(HttpSocketClient client, WSDataFrameEventArgs e)\n    {\n        switch (e.DataFrame.Opcode)\n        {\n            case WSDataType.Text:\n                client.Logger.Info(e.DataFrame.ToText());\n                client.SendWithWS("\u6211\u5df2\u6536\u5230");\n                break;\n            default:\n                break;\n        }\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u4f7f\u7528\u7684WSCallback\u56de\u8c03\u63a5\u6536\uff0c\u5219\u9700\u8981\u5c06",(0,r.kt)("strong",{parentName:"p"},"ITcpClientBase"),"\u5bf9\u8c61\uff0c\u5f3a\u5236\u8f6c\u6362\u4e3a",(0,r.kt)("strong",{parentName:"p"},"HttpSocketClient"),"\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{6}","{6}":!0},'static void WSCallback(ITcpClientBase client, WSDataFrameEventArgs e)\n{\n    switch (e.DataFrame.Opcode)\n    {\n        case WSDataType.Text:\n            ((HttpSocketClient)client).SendWithWS("\u6211\u5df2\u6536\u5230");\n            break;\n        default:\n            break;\n    }\n}\n'))),(0,r.kt)("h2",{id:"\u4e03\u670d\u52a1\u5668\u5e7f\u64ad\u53d1\u9001"},"\u4e03\u3001\u670d\u52a1\u5668\u5e7f\u64ad\u53d1\u9001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'//\u5e7f\u64ad\u7ed9\u6240\u6709\u4eba\nforeach (var item in service.GetClients())\n{\n    if (item.Protocol== Protocol.WebSocket)\n    {\n        item.SendWithWS("\u5e7f\u64ad");\n    }\n}\n')),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u53d1\u9001\u65f6\uff0c\u8fd8\u53ef\u4ee5\u81ea\u5df1\u8fc7\u6ee4ID\u3002")))}k.isMDXComponent=!0}}]);