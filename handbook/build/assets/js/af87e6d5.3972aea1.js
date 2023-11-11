"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"webapiservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1"},i=void 0,s={unversionedId:"webapiservice",id:"version-1.3.9/webapiservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",description:"\u5b9a\u4e49\u670d\u52a1",source:"@site/versioned_docs/version-1.3.9/webapiservice.mdx",sourceDirName:".",slug:"/webapiservice",permalink:"/touchsocket/docs/1.3.9/webapiservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/webapiservice.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"webapiservice",title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1"},sidebar:"docs",previous:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/1.3.9/webapidescription"},next:{title:"\u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1",permalink:"/touchsocket/docs/1.3.9/callwebapi"}},l={},p=[{value:"\u5b9a\u4e49\u670d\u52a1",id:"\u5b9a\u4e49\u670d\u52a1",level:2},{value:"\u521b\u5efa\u7b80\u5355\u670d\u52a1\u5668",id:"\u521b\u5efa\u7b80\u5355\u670d\u52a1\u5668",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b9a\u4e49\u670d\u52a1"},"\u5b9a\u4e49\u670d\u52a1"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u7aef\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7c7b\uff0c\u7ee7\u627f\u4e8e",(0,o.kt)("strong",{parentName:"p"},"RpcServer"),"\u7c7b\uff08\u6216\u5b9e\u73b0IRpcServer\uff09\uff0c\u7136\u540e\u5728\u8be5\u7c7b\u4e2d\u5199",(0,o.kt)("strong",{parentName:"p"},"\u516c\u5171\u65b9\u6cd5"),"\uff0c\u5e76\u7528",(0,o.kt)("strong",{parentName:"p"},"WebApi"),"\u5c5e\u6027\u6807\u7b7e\u6807\u8bb0\uff0c\u5982\u679c\u65b9\u6cd5\u6709",(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8f7d"),"\uff0c\u9700\u8981\u91cd\u65b0\u6307\u5b9a",(0,o.kt)("strong",{parentName:"p"},"\u51fd\u6570\u952e"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u751f\u6210",(0,o.kt)("strong",{parentName:"li"},"\u6ce8\u91ca"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ApiServer : RpcServer\n{\n    [Router("[api]/[action]ab")]//\u6b64\u8def\u7531\u4f1a\u4ee5"/Server/Sumab"\u5b9e\u73b0\n    [WebApi(HttpMethodType.GET)]\n    public int Sum(int a, int b)\n    {\n        return a + b;\n    }\n\n    [WebApi(HttpMethodType.POST)]\n    public int TestPost(MyClass myClass)\n    {\n        return myClass.A + myClass.B;\n    }\n\n    /// <summary>\n    /// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u54cd\u5e94\u6587\u4ef6\u4e0b\u8f7d\u3002\n    /// </summary>\n    /// <param name="callContext"></param>\n    [WebApi(HttpMethodType.GET, MethodFlags = MethodFlags.IncludeCallContext)]\n    public Task<string> DownloadFile(IWebApiCallContext callContext, string id)\n    {\n        if (id == "rrqm")\n        {\n            callContext.HttpContext.Response.FromFile(@"D:\\System\\Windows.iso", callContext.HttpContext.Request);\n            return Task.FromResult("ok");\n        }\n        return Task.FromResult("id\u4e0d\u6b63\u786e\u3002");\n    }\n\n    /// <summary>\n    /// \u4f7f\u7528\u8c03\u7528\u4e0a\u4e0b\u6587\uff0c\u83b7\u53d6\u5b9e\u9645\u8bf7\u6c42\u4f53\u3002\n    /// </summary>\n    /// <param name="callContext"></param>\n    [WebApi(HttpMethodType.POST, MethodFlags = MethodFlags.IncludeCallContext)]//\u58f0\u660e\u5305\u542b\u8c03\u7528\u4e0a\u4e0b\u6587\n    [Router("[api]/[action]")]\n    public Task<string> PostContent(IWebApiCallContext callContext)\n    {\n        if (callContext.Caller is ISocketClient socketClient)\n        {\n            this.m_logger.Info($"IP:{socketClient.IP},Port:{socketClient.Port}");//\u83b7\u53d6Ip\u548c\u7aef\u53e3\n        }\n        if (callContext.HttpContext.Request.TryGetContent(out byte[] content))\n        {\n            this.m_logger.Info($"\u5171\u8ba1\uff1a{content.Length}");\n        }\n\n        return Task.FromResult("ok");\n    }\n}\n\npublic class MyClass\n{\n    public int A { get; set; }\n    public int B { get; set; }\n}\n')),(0,o.kt)("a",{name:"lHhEB"}),(0,o.kt)("h2",{id:"\u521b\u5efa\u7b80\u5355\u670d\u52a1\u5668"},"\u521b\u5efa\u7b80\u5355\u670d\u52a1\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},' HttpService service = new HttpService();\n service.Setup(new TouchSocketConfig()\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.SetSingletonLogger<ConsoleLogger>();//\u6ce8\u518c\u4e00\u4e2a\u65e5\u5fd7\n    })\n    .ConfigureRpcStore(a =>\n    {\n        a.RegisterServer<ApiServer>();//\u6ce8\u518c\u670d\u52a1\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseCheckClear();\n        a.UseWebApi();//\u542f\u7528WebApi\n    }))\n    .Start();\n\n Console.WriteLine("\u4ee5\u4e0b\u8fde\u63a5\u7528\u4e8e\u6d4b\u8bd5webApi");\n Console.WriteLine($"\u4f7f\u7528\uff1ahttp://127.0.0.1:7789/ApiServer/Sum?a=10&b=20");\n\n Console.ReadKey();\n')))}m.isMDXComponent=!0}}]);