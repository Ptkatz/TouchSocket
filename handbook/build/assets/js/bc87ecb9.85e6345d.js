"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||c;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={id:"rpcactionfilter",title:"Rpc\u670d\u52a1AOP"},l=void 0,a={unversionedId:"rpcactionfilter",id:"rpcactionfilter",title:"Rpc\u670d\u52a1AOP",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/rpcactionfilter.mdx",sourceDirName:".",slug:"/rpcactionfilter",permalink:"/touchsocket/docs/rpcactionfilter",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/rpcactionfilter.mdx",tags:[],version:"current",frontMatter:{id:"rpcactionfilter",title:"Rpc\u670d\u52a1AOP"},sidebar:"docs",previous:{title:"\u8c03\u7528\u4e0a\u4e0b\u6587",permalink:"/touchsocket/docs/rpcallcontext"},next:{title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406",permalink:"/touchsocket/docs/generateproxy"}},i={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u58f0\u660e\u7279\u6027",id:"\u4e8c\u58f0\u660e\u7279\u6027",level:2},{value:"\u4e09\u3001\u4f7f\u7528",id:"\u4e09\u4f7f\u7528",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"RPC\u670d\u52a1\u5728\u88ab\u8c03\u7528\u662f\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b9e\u73b0",(0,o.kt)("strong",{parentName:"p"},"IRpcActionFilter"),"\u7684",(0,o.kt)("strong",{parentName:"p"},"\u7279\u6027\uff08Attribute\uff09"),"\uff0c\u8fdb\u884c\u76f8\u5173AOP\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u58f0\u660e\u7279\u6027"},"\u4e8c\u3001\u58f0\u660e\u7279\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyRpcActionFilterAttribute : RpcActionFilterAttribute\n{\n    public override void Executing(ICallContext callContext, object[] parameters, ref InvokeResult invokeResult)\n    {\n        //invokeResult = new InvokeResult()\n        //{\n        //    Status = InvokeStatus.UnEnable,\n        //    Message = "\u4e0d\u5141\u8bb8\u6267\u884c",\n        //    Result = default\n        //};\n        if (callContext.Caller is TcpTouchRpcSocketClient client)\n        {\n            client.Logger.Info($"\u5373\u5c06\u6267\u884cRPC-{callContext.MethodInstance.Name}");\n        }\n        base.Executing(callContext, parameters, ref invokeResult);\n    }\n\n    public override void Executed(ICallContext callContext, object[] parameters, ref InvokeResult invokeResult)\n    {\n        if (callContext.Caller is TcpTouchRpcSocketClient client)\n        {\n            client.Logger.Info($"\u6267\u884cRPC-{callContext.MethodInstance.Name}\u5b8c\u6210\uff0c\u72b6\u6001={invokeResult.Status}");\n        }\n        base.Executed(callContext, parameters, ref invokeResult);\n    }\n\n    public override void ExecutException(ICallContext callContext, object[] parameters, ref InvokeResult invokeResult, Exception exception)\n    {\n        if (callContext.Caller is TcpTouchRpcSocketClient client)\n        {\n            client.Logger.Info($"\u6267\u884cRPC-{callContext.MethodInstance.Name}\u5f02\u5e38\uff0c\u4fe1\u606f={invokeResult.Message}");\n        }\n\n        base.ExecutException(callContext, parameters, ref invokeResult, exception);\n    }\n}\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u6709\u8be6\u7ec6\u7684\u6ce8\u91ca\uff0c\u4ed4\u7ec6\u67e5\u770b\u53ef\u80fd\u4f1a\u4e8b\u534a\u529f\u500d\u3002")),(0,o.kt)("h2",{id:"\u4e09\u4f7f\u7528"},"\u4e09\u3001\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},' [Description("\u6027\u80fd\u6d4b\u8bd5")]\n [TouchRpc]\n [MyRpcActionFilter]\n public int Performance(int a)\n {\n     return a;\n }\n')))}u.isMDXComponent=!0}}]);