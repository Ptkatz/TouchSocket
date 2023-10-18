"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[33],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>m});var r=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function p(e,A){if(null==e)return{};var t,r,n=function(e,A){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var A=r.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):o(o({},A),e)),t},c=function(e){var A=s(e.components);return r.createElement(l.Provider,{value:A},e.children)},d={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},u=r.forwardRef((function(e,A){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(v,o(o({ref:A},c),{},{components:t})):r.createElement(v,o({ref:A},c))}));function m(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var l in A)hasOwnProperty.call(A,l)&&(p[l]=A[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8208:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const a={id:"generateproxyfromserver",title:"\u4ece\u670d\u52a1\u7aef\u751f\u6210\u4ee3\u7406"},o=void 0,p={unversionedId:"generateproxyfromserver",id:"version-1.3.9/generateproxyfromserver",title:"\u4ece\u670d\u52a1\u7aef\u751f\u6210\u4ee3\u7406",description:"\u4e00\u3001\u751f\u6210\u4ee3\u7406",source:"@site/versioned_docs/version-1.3.9/generateproxyfromserver.mdx",sourceDirName:".",slug:"/generateproxyfromserver",permalink:"/touchsocket/docs/1.3.9/generateproxyfromserver",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/generateproxyfromserver.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"generateproxyfromserver",title:"\u4ece\u670d\u52a1\u7aef\u751f\u6210\u4ee3\u7406"},sidebar:"docs",previous:{title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406",permalink:"/touchsocket/docs/1.3.9/generateproxydescription"},next:{title:"\u4eceSourceGenerator\u83b7\u53d6\u4ee3\u7406",permalink:"/touchsocket/docs/1.3.9/generateproxyfromsourcegenerator"}},l={},s=[{value:"\u4e00\u3001\u751f\u6210\u4ee3\u7406",id:"\u4e00\u751f\u6210\u4ee3\u7406",level:2},{value:"\u4e8c\u3001\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0",id:"\u4e8c\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0",level:2},{value:"2.1 \u76f4\u63a5\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b",id:"21-\u76f4\u63a5\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b",level:3},{value:"2.2 \u901a\u8fc7\u7279\u6027\u6807\u8bb0\u6dfb\u52a0",id:"22-\u901a\u8fc7\u7279\u6027\u6807\u8bb0\u6dfb\u52a0",level:3},{value:"\u4e09\u3001\u4ee3\u7406\u7c7b\u578b\u6392\u9664",id:"\u4e09\u4ee3\u7406\u7c7b\u578b\u6392\u9664",level:2}],c={toc:s};function d(e){let{components:A,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4e00\u751f\u6210\u4ee3\u7406"},"\u4e00\u3001\u751f\u6210\u4ee3\u7406"),(0,n.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\uff0c\u90fd\u662f\u6211\u4eec\u81ea\u5df1\u5f00\u53d1\u7684\u8bdd\uff08\u5728\u540c\u4e00\u4e2a\u7535\u8111\uff09\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u4ee3\u7406\u751f\u6210\u3002"),(0,n.kt)("p",null,"\u8c03\u7528\u4e0b\u5217\u4ee3\u7801\uff0c\u4f1a\u5c06\u5df2\u6ce8\u518c\u7684\u6240\u6709\u670d\u52a1\uff0c\u5bfc\u51fa\u4ee3\u7406\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("p",null,"RpcStore\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b"),"\uff0c\u6216\u8005\u662fIRpcParser\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string code=RpcStore.GetProxyCodes("MyNameSpace"));\n')),(0,n.kt)("p",null,"\u3010\u793a\u4f8b1\u3011\n\u5c06\u4ee3\u7406\u5b57\u7b26\u4e32\uff0c\u5199\u6210.cs\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7\u94fe\u63a5\u7684\u5f62\u5f0f\uff0c\u5c06\u4ee3\u7801\u6dfb\u52a0\u5230\u5ba2\u6237\u7aef\u9879\u76ee\u3002"),(0,n.kt)("p",null,"\u670d\u52a1\u5668\u4ee3\u7801\uff0c\u5728\u670d\u52a1\u5668\u6267\u884c\u540e\uff0c\u4f1a\u5728\u8fd0\u884c\u8def\u5f84\u4e0b\uff0c\u751f\u6210\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"WhisperServers.cs"),"\u7684\u6587\u4ef6\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{14}","{14}":!0},'var service = new TcpTouchRpcService();\nvar config = new TouchSocketConfig()//\u914d\u7f6e\n                   .SetListenIPHosts(new IPHost[] { new IPHost(port) })\n                   .ConfigureContainer(a =>\n                   {\n                       a.AddConsoleLogger();\n                       a.AddFileLogger();\n                   })\n                   .ConfigureRpcStore(a =>\n                   {\n                       a.RegisterServer<MyRpcServer>();//\u6ce8\u518c\u670d\u52a1\n\n#if DEBUG\n                       File.WriteAllText("../../../WhisperServers.cs", a.GetProxyCodes("WhisperServers",new Type[] { typeof(TouchRpcAttribute) }));\n#endif\n                   })\n                   .SetVerifyToken("TouchRpc");\n\n            service.Setup(config)\n                .Start();\n')),(0,n.kt)("p",null,"\u7136\u540e\u6253\u5f00\u9700\u8981\u5f15\u5165\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\u89e3\u51b3\u65b9\u6848\u3002\u9009\u62e9\u9700\u8981\u6dfb\u52a0\u4ee3\u7406\u7684\u9879\u76ee\uff0c\u4f9d\u6b21\u6267\u884c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53f3\u51fb\u9879\u76ee=>\u6dfb\u52a0=>\u73b0\u6709\u9879")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7136\u540e\u9009\u62e9\u670d\u52a1\u5668\u751f\u6210\u7684.cs\u6587\u4ef6\uff0c\u9009\u62e9\u201c\u6dfb\u52a0\u201d\u7684\u4e0b\u62c9\u6846\uff0c\u9009\u62e9\u201c\u6dfb\u52a0\u4e3a\u8fde\u63a5\u201d\u3002")),(0,n.kt)("img",{src:t(4595).Z}),(0,n.kt)("img",{src:t(8695).Z}),(0,n.kt)("p",null,"\u6700\u540e\u786e\u8ba4\u6587\u4ef6\u88ab\u6b63\u786e\u6dfb\u52a0\u4e3a\u94fe\u63a5\u3002"),(0,n.kt)("img",{src:t(8446).Z}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8fd9\u6837\uff0c\u6bcf\u6b21\u5f53\u670d\u52a1\u6709\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u542f\u52a8\u4e00\u4e0b\u670d\u52a1\u5668\uff0c\u4ee3\u7406\u5c31\u4f1a\u81ea\u52a8\u5237\u65b0\u3002")),(0,n.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u64cd\u4f5c\u4ec5\u5bf9",(0,n.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef"),"\u4e0e",(0,n.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u90fd\u5728\u540c\u4e00\u7535\u8111\u4e0a\u5f00\u53d1\u65f6\u624d\u6709\u6548\u3002")),(0,n.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5f53\u4e0d\u5728\u540c\u4e00\u4e2a\u7535\u8111\u4e0a\u65f6\uff0c\u53ef\u5c06\u4ee3\u7406\u4fe1\u606f\u5199\u6210\u6587\u4ef6\uff0c\u76f4\u63a5\u53d1\u7ed9\u5ba2\u6237\u7aef\u5f00\u53d1\u7535\u8111\u3002\u4ea6\u6216\u8005\uff0c\u4e3a\u9632\u6b62\u7be1\u6539\u751f\u6210\u7684\u4ee3\u7801\uff0c\u4e0d\u60f3\u628a\u4ee3\u7406\u4ee3\u7801\u76f4\u63a5\u6295\u5165\u4f7f\u7528\uff0c\u90a3\u53ef\u4ee5\u8003\u8651\u5c06\u4ee3\u7801\u5355\u72ec\u7f16\u8bd1\u6210dll\uff0c\u7136\u540e\u5c06\u7f16\u8bd1\u7684\u7a0b\u5e8f\u96c6\u53d1\u9001\u3002")),(0,n.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u884c\u4e3a\uff0c\u5747\u662f\u5bfc\u51fa\u6240\u6709\u5df2\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u5f53\u9700\u8981\u76f4\u63a5\u751f\u6210\u591a\u4e2a\u4e0d\u540c\u4ee3\u7406\u7684\u6e90\u7801\u65f6\uff0c\u53ef\u901a\u8fc7CodeGenerator\u9759\u6001\u7c7b\u7684\u76f8\u5173\u65b9\u6cd5\u76f4\u63a5\u751f\u6210\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{1}","{1}":!0},'string codes=CodeGenerator.GetProxyCodes("Namespace",new Type[]{typeof(RpcServer) },new Type[] { typeof(TouchRpcAttribute)});\n'))),(0,n.kt)("h2",{id:"\u4e8c\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0"},"\u4e8c\u3001\u4ee3\u7406\u7c7b\u578b\u6dfb\u52a0"),(0,n.kt)("p",null,"\u901a\u8fc7\u4e4b\u524d\u7684\u5b66\u4e60\uff0c\u5927\u5bb6\u53ef\u80fd\u5927\u6982\u660e\u767d\u4e86\uff0c\u5728Rpc\u4e2d\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u5728\u8fdb\u884c\u4ea4\u4e92\u65f6\uff0c\u6240\u9700\u7684\u6570\u636e\u7ed3\u6784\u4e0d\u8981\u6c42\u662f\u540c\u4e00\u7c7b\u578b\uff0c\u3002\u6240\u4ee5\u5728\u58f0\u660e\u4e86\u670d\u52a1\u4ee5\u540e\uff0c\u670d\u52a1\u4e2d\u6240\u5305\u542b\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u4f1a\u88ab\u590d\u523b\u6210\u7ed3\u6784\u76f8\u540c\u7684\u7c7b\u578b\uff0c\u4f46\u662f\u8fd9\u4e5f\u4ec5\u4ec5\u5c40\u9650\u4e8e\u53c2\u6570\u4e0e\u670d\u52a1",(0,n.kt)("inlineCode",{parentName:"p"},"\u76f8\u540c\u7a0b\u5e8f\u96c6"),"\u7684\u65f6\u5019\u3002\u5982\u679c\u670d\u52a1\u4e2d\u5f15\u5165\u4e86\u5176\u4ed6\u7a0b\u5e8f\u96c6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5219",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a"),"\u590d\u523b\u3002"),(0,n.kt)("p",null,"\u4f46\u662f\uff0c\u5f80\u5f80\u5728\u670d\u52a1\u7aef\u5f00\u53d1\u4e2d\uff0c\u4f1a\u5f15\u5165\u5176\u4ed6\u7a0b\u5e8f\u96c6\uff0c\u4f8b\u5982\uff0c\u6211\u4eec\u4e60\u60ef\u5728\u9879\u76ee\u4e2d\u5efa\u7acb\u4e00\u4e2aModels\u7a0b\u5e8f\u96c6\uff0c\u7528\u4e8e\u5b58\u653e\u6240\u6709\u7684\u5b9e\u4f53\u6a21\u578b\uff0c\u90a3\u662f\u4e0d\u662f\u610f\u5473\u7740\u5ba2\u6237\u7aef\u4e5f\u5fc5\u987b\u5f15\u5165\u8fd9\u4e2a\u7a0b\u5e8f\u96c6\u624d\u80fd\u8c03\u7528\u5462\uff1f\u6ca1\u522b\u7684\u65b9\u6cd5\u4e86\uff1f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7b54\u6848\uff0c\u5f53\u7136\u4e0d\u662f\uff01\uff01\uff01")),(0,n.kt)("p",null,"Rpc\u89c4\u8303\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u6dfb\u52a0\u5b9e\u4f53\u6a21\u578b\u7684\u590d\u523b\u3002"),(0,n.kt)("h3",{id:"21-\u76f4\u63a5\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b"},"2.1 \u76f4\u63a5\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b"),(0,n.kt)("p",null,"\u5728\u670d\u52a1\u6ce8\u518c\u4e4b\u524d\uff0c\u4efb\u610f\u65f6\u523b\uff0c\u53ef\u8c03\u7528CodeGenerator.AddProxyType\u9759\u6001\u65b9\u6cd5\uff0c\u6dfb\u52a0\u4ee3\u7406\u7c7b\u578b\uff0c\u540c\u65f6\u53ef\u4f20\u5165\u4e00\u4e2abool\u503c\uff0c\u8868\u660e\u662f\u5426\u6df1\u5ea6\u641c\u7d22\uff0c\u6bd4\u5982\uff0c\u5047\u5982ProxyClass1\u4e2d\u8fd8\u6709\u5176\u4ed6\u7c7b\u578b\uff0c\u5219\u53c2\u6570\u4e3aTrue\u65f6\uff0c\u4f9d\u7136\u4f1a\u4ee3\u7406\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"CodeGenerator.AddProxyType<ProxyClass1>();\nCodeGenerator.AddProxyType<ProxyClass2>(deepSearch:true);\n")),(0,n.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u6309\u7a0b\u5e8f\u96c6\u6dfb\u52a0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"CodeGenerator.AddProxyAssembly(typeof(Program).Assembly);\n")),(0,n.kt)("h3",{id:"22-\u901a\u8fc7\u7279\u6027\u6807\u8bb0\u6dfb\u52a0"},"2.2 \u901a\u8fc7\u7279\u6027\u6807\u8bb0\u6dfb\u52a0"),(0,n.kt)("p",null,"\u5728\u9700\u8981\u4ee3\u7406\u7684\u7c7b\u4e0a\u9762\u58f0\u660eRpcProxy\u6807\u7b7e\uff0c\u7136\u540e\u4e5f\u53ef\u4ee5\u91cd\u65b0\u6307\u5b9a\u4ee3\u7406\u7c7b\u540d\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[RpcProxy("MyArgs")]\npublic class Args\n{\n}\n')),(0,n.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8be5\u573a\u666f\u53ef\u7528\u4e8e\u4ee3\u7406\u5176\u4ed6dll\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\u3002")),(0,n.kt)("h2",{id:"\u4e09\u4ee3\u7406\u7c7b\u578b\u6392\u9664"},"\u4e09\u3001\u4ee3\u7406\u7c7b\u578b\u6392\u9664"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0e\u58f0\u660e\u670d\u52a1\u76f8\u540c\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u4f1a\u88ab\u4ee3\u7406\u590d\u523b\u6210\u7ed3\u6784\u76f8\u540c\u7684\u7c7b\u578b\u3002\u4f46\u662f\u6709\u65f6\u5019\uff0c\u6211\u4eec\u5e0c\u671b\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u516c\u7528\u4e00\u4e2adll\uff0c\u6240\u4ee5\u5c31\u4e0d\u9700\u8981\u590d\u523b\uff0c\u90a3\u4e48\u53ef\u4ee5\u6392\u9664\u4ee3\u7406\u7c7b\u578b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"CodeGenerator.AddIgnoreProxyType(typeof(Program));\n")),(0,n.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u6309\u7a0b\u5e8f\u96c6\u6392\u9664"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"CodeGenerator.AddIgnoreProxyAssembly(typeof(Program).Assembly);\n")),(0,n.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8be5\u573a\u666f\u53ef\u7528\u4e8e\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u516c\u7528\u4e00\u4e2a\u5b9e\u4f53dll\uff0c\u4f8b\u5982\uff1a\u5f53\u4f7f\u7528",(0,n.kt)("strong",{parentName:"p"},"MemoryPack"),"\u5e8f\u5217\u5316\u7684\u573a\u666f\u3002")))}d.isMDXComponent=!0},4595:(e,A,t)=>{t.d(A,{Z:()=>r});const r=t.p+"assets/images/generateproxy-2-53cece07419d6f8c5917621c248a31d3.png"},8695:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,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"},8446:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,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"}}]);