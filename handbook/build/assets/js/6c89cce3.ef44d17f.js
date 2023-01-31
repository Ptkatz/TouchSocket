"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,c(c({ref:t},l),{},{components:n})):r.createElement(g,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={id:"jsonrpcservice",sidebar_position:2,title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",sidebar_label:"13.2 \u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1"},c=void 0,s={unversionedId:"13\u3001JsonRpc\u7ec4\u4ef6/jsonrpcservice",id:"13\u3001JsonRpc\u7ec4\u4ef6/jsonrpcservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",description:"\u4e00\u3001\u5b9a\u4e49\u670d\u52a1",source:"@site/docs/13\u3001JsonRpc\u7ec4\u4ef6/13.2 \u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1.mdx",sourceDirName:"13\u3001JsonRpc\u7ec4\u4ef6",slug:"/13\u3001JsonRpc\u7ec4\u4ef6/jsonrpcservice",permalink:"/touchsocket/docs/13\u3001JsonRpc\u7ec4\u4ef6/jsonrpcservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/13\u3001JsonRpc\u7ec4\u4ef6/13.2 \u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675088302,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:2,frontMatter:{id:"jsonrpcservice",sidebar_position:2,title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",sidebar_label:"13.2 \u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1"},sidebar:"tutorialSidebar",previous:{title:"13.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/13\u3001JsonRpc\u7ec4\u4ef6/jsonrpcdescription"},next:{title:"13.3 \u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1",permalink:"/touchsocket/docs/13\u3001JsonRpc\u7ec4\u4ef6/calljsonrpc"}},p={},i=[{value:"\u4e00\u3001\u5b9a\u4e49\u670d\u52a1",id:"\u4e00\u5b9a\u4e49\u670d\u52a1",level:2},{value:"\u4e8c\u3001\u4f7f\u7528Tcp\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668",id:"\u4e8c\u4f7f\u7528tcp\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668",level:2},{value:"\u4e09\u3001\u4f7f\u7528Http\u6216Websocket\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668",id:"\u4e09\u4f7f\u7528http\u6216websocket\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668",level:2}],l={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u5b9a\u4e49\u670d\u52a1"},"\u4e00\u3001\u5b9a\u4e49\u670d\u52a1"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u7aef\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u4e8e",(0,o.kt)("strong",{parentName:"p"},"RpcServer"),"\u7c7b\uff08\u6216\u5b9e\u73b0IRpcServer\uff09\uff0c\u7136\u540e\u5728\u8be5\u7c7b\u4e2d\u5199",(0,o.kt)("strong",{parentName:"p"},"\u516c\u5171\u65b9\u6cd5"),"\uff0c\u5e76\u7528",(0,o.kt)("strong",{parentName:"p"},"JsonRpc"),"\u5c5e\u6027\u6807\u7b7e\u6807\u8bb0\uff0c\u5982\u679c\u65b9\u6cd5\u6709",(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8f7d"),"\uff0c\u9700\u8981\u91cd\u65b0\u6307\u5b9a",(0,o.kt)("strong",{parentName:"p"},"\u51fd\u6570\u952e"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u751f\u6210",(0,o.kt)("strong",{parentName:"li"},"\u6ce8\u91ca"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class JsonRpcServer : RpcServer\n{\n    [JsonRpc]\n    public string TestJsonRpc(string str)\n    {\n        return "TouchSocket" + str;\n    }\n\n    /// <summary>\n    /// \u5f53\u6807\u8bb0\u4e3atrue\u65f6\u76f4\u63a5\u4f7f\u7528\u65b9\u6cd5\u540d\u79f0\n    /// </summary>\n    /// <param name="str"></param>\n    /// <returns></returns>\n    [JsonRpc(true)]\n    public string TestJsonRpc1(string str)\n    {\n        return "TouchSocket" + str;\n    }\n\n    /// <summary>\n    /// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\u3002\n    /// \u53ef\u4ee5\u4ece\u4e0a\u4e0b\u6587\u83b7\u53d6\u8c03\u7528\u7684SocketClient\u3002\u4ece\u800c\u83b7\u5f97IP\u548cPort\u7b49\u76f8\u5173\u4fe1\u606f\u3002\n    /// </summary>\n    /// <param name="callContext"></param>\n    /// <param name="str"></param>\n    /// <returns></returns>\n    [JsonRpc(MethodFlags = MethodFlags.IncludeCallContext)]\n    public string TestGetContext(ICallContext callContext, string str)\n    {\n        if (callContext.Caller is HttpSocketClient)\n        {\n            Console.WriteLine("HTTP\u8bf7\u6c42");\n            var client = callContext.Caller as HttpSocketClient;\n            var ip = client.IP;\n            var port = client.Port;\n            Console.WriteLine($"HTTP\u8bf7\u6c42{ip}:{port}");\n\n        }\n\n        if (callContext.Caller is SocketClient)\n        {\n            Console.WriteLine("Tcp\u8bf7\u6c42");\n            var client = callContext.Caller as SocketClient;\n            var ip = client.IP;\n            var port = client.Port;\n\n            client.Send(Encoding.UTF8.GetBytes("Hello Word"));\n            Console.WriteLine($"Tcp\u8bf7\u6c42{ip}:{port}");\n\n        }\n        return "TouchSocket" + str;\n    }\n\n    [JsonRpc]\n    public JObject TestJObject(JObject obj)\n    {\n        return obj;\n    }\n}\n')),(0,o.kt)("a",{name:"ai1L7"}),(0,o.kt)("h2",{id:"\u4e8c\u4f7f\u7528tcp\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668"},"\u4e8c\u3001\u4f7f\u7528Tcp\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668"),(0,o.kt)("p",null,"\u670d\u52a1\u89e3\u6790\u5668\u662f\u5b9e\u9645\u7684\u670d\u52a1\u63a5\u6536\u3001\u89e6\u53d1\u3001\u8c03\u7528\u3001\u53cd\u9988\u7684\u5b9e\u9645\u8f7d\u4f53\uff0c\u901a\u4fd7\u6765\u8bf4\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u901a\u4fe1\u670d\u52a1\u5668"),"\u3002"),(0,o.kt)("p",null,"\u5f53",(0,o.kt)("strong",{parentName:"p"},"JsonRpcParserPlugin"),"\u63d2\u4ef6\u6dfb\u52a0\u5728",(0,o.kt)("strong",{parentName:"p"},"TcpService"),"\u670d\u52a1\u5668\u65f6\uff0c\u4f1a\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"TCP"),"\u534f\u8bae\u3002\u6b64\u65f6\u7684\u8c03\u7528\uff0c\u4f1a\u6839\u636e\u9002\u914d\u5668\u7c7b\u578b\uff0c\u51b3\u5b9a\u662f\u5426\u9700\u8981\u6709\u8c03\u7528\u7ed3\u675f\u6807\u8bc6\uff0c\u4e00\u822c\u4ee5\\r\\n\u7ed3\u5c3e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpService service = new TcpService();\nservice.Setup(new TouchSocketConfig()\n    .UsePlugin()\n    .ConfigureRpcStore(a =>\n    {\n        a.RegisterServer<JsonRpcServer>();//\u914d\u7f6eRpcStore\u5fc5\u987b\u5728\u6700\u524d\u9762\u3002\n    })\n    .ConfigurePlugins(a =>\n    {\n         a.Add<JsonRpcParserPlugin>();//tcp\u4e2d\u8def\u7531\u8def\u5f84\u65e0\u6548\n    })\n    .SetDataHandlingAdapter(() =>\n    {\n        return new NormalDataHandlingAdapter();\n        //return new TerminatorPackageAdapter("\\r\\n");\u4f7f\u7528\u8be5\u9002\u914d\u5668\u65f6\uff0c\u8c03\u7528\u65b9\u5fc5\u987b\u5728\u6700\u540e\u8ffd\u52a0\u76f8\u5e94\u7684\u7ed3\u675f\u8c03\u7528\u7b26\u3002\n    })\n    .SetListenIPHosts(new IPHost[] { new IPHost(7705) }))\n    .Start();\n')),(0,o.kt)("a",{name:"X5yn3"}),(0,o.kt)("h2",{id:"\u4e09\u4f7f\u7528http\u6216websocket\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668"},"\u4e09\u3001\u4f7f\u7528Http\u6216Websocket\u521b\u5efa\u670d\u52a1\u89e3\u6790\u5668"),(0,o.kt)("p",null,"\u5f53",(0,o.kt)("strong",{parentName:"p"},"JsonRpcParserPlugin"),"\u63d2\u4ef6\u6dfb\u52a0\u5728",(0,o.kt)("strong",{parentName:"p"},"HttpService"),"\u670d\u52a1\u5668\u65f6\uff0c\u4f1a\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"Http\u3001Websocket"),"\u534f\u8bae\u3002"),(0,o.kt)("p",null,"\u521b\u5efa\u540e\uff0c\u5982\u679c\u60f3\u4f7f\u7528Http\u8c03\u7528\uff0c\u53ea\u9700\u8981\u4ee5Post\u65b9\u5f0f\uff0c\u5c06\u8c03\u7528Json\u5b57\u7b26\u4e32\u8def\u7531\u5230\u8bbe\u5b9a\u8def\u7531\u5730\u5740\u5373\u53ef\uff08\u4e0b\u6587\u793a\u4f8b\u201c/jsonRpc\u201d\uff09\u3002\n\u5982\u679c\u60f3\u4f7f\u7528Websocket\u8c03\u7528\uff0c\u53ea\u9700\u8981\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u6587\u672c"),"\u5f62\u5f0f\uff0c\u4f20\u9012\u5230\u670d\u52a1\u5668\u5373\u53ef\u3002\u670d\u52a1\u5668\u4f1a\u5224\u5b9a\uff1a\u5982\u679c\u5185\u5bb9\u4e2d\u5305\u542b\u201cjsonrpc\u201d\u5219\u8ba4\u5b9a\u4e3a\u8c03\u7528\uff0c\u4f1a\u505a\u8c03\u7528\u5904\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'HttpService service = new HttpService();\n\nservice.Setup(new TouchSocketConfig()\n     .UsePlugin()\n     .SetListenIPHosts(new IPHost[] { new IPHost(7706) })\n     .ConfigureRpcStore(a =>//Rpc\u7684\u914d\u7f6e\u5fc5\u987b\u5728\u63d2\u4ef6\u4e4b\u524d\u3002\n     {\n         a.RegisterServer<JsonRpcServer>();\n     })\n     .ConfigurePlugins(a => \n     {\n         a.Add<WebSocketServerPlugin>()\n         .SetWSUrl("/ws");//\u542f\u7528websocket\uff0c\u4f7f\u7528/ws\u8def\u7531\u8fde\u63a5\u3002\n\n         a.Add<JsonRpcParserPlugin>()\n         .SetJsonRpcUrl("/jsonRpc");\n     }))\n    .Start();\n')))}u.isMDXComponent=!0}}]);