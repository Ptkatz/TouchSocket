"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||c;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={id:"touchrpcbase",title:"\u57fa\u7840\u529f\u80fd"},a=void 0,l={unversionedId:"touchrpcbase",id:"version-1.3.9/touchrpcbase",title:"\u57fa\u7840\u529f\u80fd",description:"\u4e00\u3001\u8fde\u63a5\u9a8c\u8bc1",source:"@site/versioned_docs/version-1.3.9/touchrpcbase.mdx",sourceDirName:".",slug:"/touchrpcbase",permalink:"/touchsocket/docs/1.3.9/touchrpcbase",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/touchrpcbase.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"touchrpcbase",title:"\u57fa\u7840\u529f\u80fd"},sidebar:"docs",previous:{title:"\u521b\u5efaTouchRpc\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/1.3.9/createtouchrpcclient"},next:{title:"\u521b\u5efarpc\u670d\u52a1",permalink:"/touchsocket/docs/1.3.9/createandcallrpc"}},i={},p=[{value:"\u4e00\u3001\u8fde\u63a5\u9a8c\u8bc1",id:"\u4e00\u8fde\u63a5\u9a8c\u8bc1",level:2},{value:"1.1 Token\u9a8c\u8bc1",id:"11-token\u9a8c\u8bc1",level:3},{value:"1.2 \u52a8\u6001\u9a8c\u8bc1",id:"12-\u52a8\u6001\u9a8c\u8bc1",level:3},{value:"\u4e8c\u3001ID\u540c\u6b65",id:"\u4e8cid\u540c\u6b65",level:2},{value:"\u4e09\u3001\u534f\u8bae\u6269\u5c55",id:"\u4e09\u534f\u8bae\u6269\u5c55",level:2},{value:"3.1 \u4f7f\u7528",id:"31-\u4f7f\u7528",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8fde\u63a5\u9a8c\u8bc1"},"\u4e00\u3001\u8fde\u63a5\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u8fde\u63a5\u9a8c\u8bc1\u53ef\u4ee5\u521d\u6b65\u4fdd\u8bc1\u8fde\u63a5\u5ba2\u6237\u7aef\u7684\u5b89\u5168\u6027\u3002\u6846\u67b6\u5185\u90e8\u9ed8\u8ba4\u4f7f\u7528\u4e00\u4e2astring\u7c7b\u578b\u7684Token\u4f5c\u4e3a\u9a8c\u8bc1\u51ed\u8bc1\u3002\u5f53\u7136\u4e5f\u5141\u8bb8\u670d\u52a1\u5668\u8fdb\u884c\u5176\u4ed6\u9a8c\u8bc1\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("h3",{id:"11-token\u9a8c\u8bc1"},"1.1 Token\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u5728\u670d\u52a1\u5668\u6216\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4e0a\uff0c\u8bbe\u7f6eVerifyToken\uff0c\u5373\u53ef\u5b9e\u73b0\u5b57\u7b26\u4e32Token\u9a8c\u8bc1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var config = new TouchSocketConfig()//\u914d\u7f6e\n       .SetVerifyToken("TouchRpc");\n\n')),(0,o.kt)("h3",{id:"12-\u52a8\u6001\u9a8c\u8bc1"},"1.2 \u52a8\u6001\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\uff0c\u91cd\u5199",(0,o.kt)("strong",{parentName:"p"},"OnHandshaking"),"\u76f8\u5173\u3002\u7136\u540e\u53ef\u4ee5\u81ea\u884c\u5224\u65ad\u4e00\u4e9b\u4fe1\u606f\uff0c\u6bd4\u5982\uff1aIP\u5730\u5740\u3001\u5143\u6570\u636e\u7b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class MyTouchRpcPlugin : TouchRpcPluginBase\n{\n    protected override void OnHandshaking(ITouchRpc client, VerifyOptionEventArgs e)\n    {\n        if (e.Metadata["a"] != "a")\n        {\n            e.IsPermitOperation = false;//\u4e0d\u5141\u8bb8\u8fde\u63a5\n            e.Message = "\u5143\u6570\u636e\u4e0d\u5bf9";//\u540c\u65f6\u8fd4\u56de\u6d88\u606f\n            e.Handled= true;//\u8868\u793a\u8be5\u6d88\u606f\u5df2\u5728\u6b64\u5904\u5904\u7406\u3002\n            return;\n        }\n        if (e.Token == "123")\n        {\n            e.IsPermitOperation = true;\n            e.Handled = true;\n            return;\n        }\n        base.OnHandshaking(client, e);\n    }\n}\n')),(0,o.kt)("h2",{id:"\u4e8cid\u540c\u6b65"},"\u4e8c\u3001ID\u540c\u6b65"),(0,o.kt)("p",null,"\u5728TouchRpc\u4e2d\uff0c\u5b58\u5728\u4e8e\u670d\u52a1\u5668\u7684\u8f85\u52a9\u5ba2\u6237\u7aef\uff08SocketClient\uff09\uff0c\u4e0e\u8fdc\u7a0b\u5ba2\u6237\u7aef\uff08Client\uff09\u662f\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\uff0c\u5176ID\u4e5f",(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u4e00\u81f4"),"\u3002\u6240\u4ee5\u5728\u4efb\u610f\u4e00\u65b9\u4fee\u6539ID\uff08\u8c03\u7528ResetID\uff09\uff0c\u90fd\u4f1a\u540c\u65f6\u4fee\u6539\u8fdc\u7a0bID\u3002\u6240\u4ee5\u5408\u7406\u4f7f\u7528\u8be5\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5b8c\u6210\u590d\u7528ID\uff08\u91cd\u7f6eID\uff09\u7684\u9700\u6c42\u3002"),(0,o.kt)("h2",{id:"\u4e09\u534f\u8bae\u6269\u5c55"},"\u4e09\u3001\u534f\u8bae\u6269\u5c55"),(0,o.kt)("p",null,"\u534f\u8bae\u6269\u5c55\u529f\u80fd\uff0c\u5c31\u662f\u5bf9\u73b0\u6709\u7684TouchRpc\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u534f\u8bae\u3002\u5176\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u5e94\u5bf9\u66f4\u52a0\u590d\u6742\uff0c\u9ad8\u8981\u6c42\u7684\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u4f8b1\uff1a\u5f53\u9700\u8981\u5e7f\u64ad\u6d88\u606f\u65f6\uff0c\u53ef\u80fd\u5927\u5bb6\u90fd\u4f1a\u60f3\u5230\u4f7f\u7528rpc\u76f4\u63a5\u8fdb\u884c\u5e7f\u64ad\u3002\u4f46\u662f\u5982\u6b64\u4e00\u6765\uff0c\u6bcf\u5e7f\u64ad\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u5c31\u9700\u8981\u5e8f\u5217\u5316\u4e00\u6b21\u3002\u56e0\u4e3a\u6570\u636e\u90fd\u662f\u4e00\u6837\u7684\uff0c\u6240\u4ee5\u591a\u6b21\u5e8f\u5217\u5316\u663e\u5f97\u975e\u5e38\u6ca1\u6709\u5fc5\u8981\u3002\u90a3\u4e48\u8fd9\u65f6\u5019\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u534f\u8bae\uff0c\u7136\u540e\u5148\u5e8f\u5217\u5316\uff0c\u7136\u540e\u76f4\u63a5\u5e7f\u64ad\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u534f\u8bae\u6548\u7387\u5982\u4f55\u5462\uff1f\n\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u6548\u7387\u662f\u975e\u5e38\u9ad8\u7684\uff0c99%\u63a5\u8fd1\u4e8e\u5e95\u5c42\u534f\u8bae\uff08\u53ef\u80fd\u662ftcp\u3001udp\u3001websocket\uff09\u6548\u7387\u3002"),(0,o.kt)("h3",{id:"31-\u4f7f\u7528"},"3.1 \u4f7f\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528\u8d77\u6765\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u6bcf\u4e2aTouchRpc\u5ba2\u6237\u7aef\u6216\u8005TouchRpc\u670d\u52a1\u7aef\uff0c\u90fd\u5b9e\u73b0\u4e86Send\u65b9\u6cd5\u63a5\u53e3\u3002\n\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3ashort\u7c7b\u578b\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u4efb\u610f\u5927\u4e8e0\u6570\u503c"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'client.Send(10,Encoding.UTF8.GetBytes("RRQM"));\n')),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Protocol\u4e0d\u8981\u4f7f\u7528\u5c0f\u4e8e0\u7684\uff0c\u56e0\u4e3a\u6846\u67b6\u5185\u90e8\u5728\u4f7f\u7528")),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u63a5\u6536\u65b9"),"\u5728OnReceivedProtocolData\u51fd\u6570\u4e2d\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u534f\u8bae\u53c2\u6570\uff0c\u6240\u4ee5\u76f4\u63a5\u81ea\u884c\u7b5b\u9009\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"internal class MyTouchRpcPlugin : TouchRpcPluginBase\n{\n    protected override void OnReceivedProtocolData(ITouchRpc client, ProtocolDataEventArgs e)\n    {\n        if (e.Protocol == 10)\n        {\n            //\u5224\u65ad\u5b8c\u534f\u8bae\u4ee5\u540e\uff0c\u4ecee.ByteBlock\u53ef\u4ee5\u62ff\u5230\u5b9e\u9645\u7684\u6570\u636e\n            //\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u771f\u5b9e\u6570\u636e\u4f1a\u6574\u4f53\u5411\u53f3\u504f\u79fb2\u4e2a\u5b57\u8282\u3002\n            string msg = Encoding.UTF8.GetString(e.ByteBlock.Buffer, 2, e.ByteBlock.Len - 2);\n        }\n        base.OnReceivedProtocolData(client, e);\n    }\n}\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4eceProtocolDataEventArgs\u89e3\u6790\u7684ByteBlock\uff0c\u5176\u771f\u5b9e\u6570\u636e\u4f1a\u6574\u4f53\u5411\u53f3\u504f\u79fb2\u4e2a\u5b57\u8282\u3002\u56e0\u4e3a\u524d\u4e24\u4e2a\u5b57\u8282\u662fushort\u7684Protocol\u3002")))}u.isMDXComponent=!0}}]);