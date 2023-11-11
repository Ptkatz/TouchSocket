"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"dmtpbase",title:"\u8fde\u63a5\u53caId\u540c\u6b65"},l=void 0,s={unversionedId:"dmtpbase",id:"dmtpbase",title:"\u8fde\u63a5\u53caId\u540c\u6b65",description:"\u5b9a\u4e49",source:"@site/docs/dmtpbase.mdx",sourceDirName:".",slug:"/dmtpbase",permalink:"/touchsocket/docs/current/dmtpbase",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dmtpbase.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1698938937,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{id:"dmtpbase",title:"\u8fde\u63a5\u53caId\u540c\u6b65"},sidebar:"docs",previous:{title:"\u521b\u5efaDmtp\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/current/dmtplient"},next:{title:"\u81ea\u5b9a\u4e49DmtpActor",permalink:"/touchsocket/docs/current/dmtpcustomactor"}},i={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8fde\u63a5",id:"\u4e00\u8fde\u63a5",level:2},{value:"1.1 Token\u9a8c\u8bc1",id:"11-token\u9a8c\u8bc1",level:3},{value:"1.2 \u52a8\u6001\u9a8c\u8bc1",id:"12-\u52a8\u6001\u9a8c\u8bc1",level:3},{value:"1.4 \u8de8\u8bed\u8a00",id:"14-\u8de8\u8bed\u8a00",level:3},{value:"\u4e8c\u3001ID\u540c\u6b65",id:"\u4e8cid\u540c\u6b65",level:2},{value:"\u4e09\u3001\u534f\u8bae\u6269\u5c55",id:"\u4e09\u534f\u8bae\u6269\u5c55",level:2},{value:"3.1 \u4f7f\u7528",id:"31-\u4f7f\u7528",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Dmtp ",(0,r.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Dmtp"},"TouchSocket.Dmtp.dll")),(0,r.kt)("h2",{id:"\u4e00\u8fde\u63a5"},"\u4e00\u3001\u8fde\u63a5"),(0,r.kt)("p",null,"\u8fde\u63a5\u9a8c\u8bc1\u53ef\u4ee5\u521d\u6b65\u4fdd\u8bc1\u8fde\u63a5\u5ba2\u6237\u7aef\u7684\u5b89\u5168\u6027\u3002\u6846\u67b6\u5185\u90e8\u9ed8\u8ba4\u4f7f\u7528\u4e00\u4e2astring\u7c7b\u578b\u7684Token\u4f5c\u4e3a\u9a8c\u8bc1\u51ed\u8bc1\u3002\u5f53\u7136\u4e5f\u5141\u8bb8\u670d\u52a1\u5668\u8fdb\u884c\u5176\u4ed6\u9a8c\u8bc1\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"11-token\u9a8c\u8bc1"},"1.1 Token\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5668\u6216\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4e0a\uff0c\u8bbe\u7f6eVerifyToken\uff0c\u5373\u53ef\u5b9e\u73b0\u5b57\u7b26\u4e32Token\u9a8c\u8bc1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var config = new TouchSocketConfig()\n    .SetDmtpOption(new DmtpOption()\n    {\n        VerifyToken = "Dmtp"\n    });\n')),(0,r.kt)("h3",{id:"12-\u52a8\u6001\u9a8c\u8bc1"},"1.2 \u52a8\u6001\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\uff0c\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"IDmtpHandshakingPlugin"),"\u63d2\u4ef6\u3002\u7136\u540e\u53ef\u4ee5\u81ea\u884c\u5224\u65ad\u4e00\u4e9b\u4fe1\u606f\uff0c\u6bd4\u5982\uff1aIP\u5730\u5740\u3001\u5143\u6570\u636e\u7b49\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5143\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'var config = new TouchSocketConfig()\n    .SetDmtpOption(new DmtpOption()\n    {\n        VerifyToken = "Dmtp",\n        Metadata=new Metadata().Add("a","a")\n    });\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'internal class MyVerifyPlugin : PluginBase,IDmtpHandshakingPlugin\n{\n\n    public async Task OnDmtpHandshaking(IDmtpActorObject client, DmtpVerifyEventArgs e)\n    {\n        if (e.Metadata["a"] != "a")\n        {\n            e.IsPermitOperation = false;//\u4e0d\u5141\u8bb8\u8fde\u63a5\n            e.Message = "\u5143\u6570\u636e\u4e0d\u5bf9";//\u540c\u65f6\u8fd4\u56de\u6d88\u606f\n            e.Handled = true;//\u8868\u793a\u8be5\u6d88\u606f\u5df2\u5728\u6b64\u5904\u5904\u7406\u3002\n            return;\n        }\n        if (e.Token == "Dmtp")\n        {\n            e.IsPermitOperation = true;\n            e.Handled = true;\n            return;\n        }\n\n        await e.InvokeNext();\n    }\n}\n')),(0,r.kt)("h3",{id:"14-\u8de8\u8bed\u8a00"},"1.4 \u8de8\u8bed\u8a00"),(0,r.kt)("p",null,"\u4e3a\u4f7fDmtp\u670d\u52a1\u5668\u652f\u6301\u8de8\u8bed\u8a00\uff0cDmtp\u5728\u8bbe\u8ba1\u4e4b\u521d\u5c31\u9884\u7559\u4e86\u8de8\u8bed\u8a00\u8fde\u63a5\u7684\u4fbf\u5229\u6027\u3002\u8bda\u5982",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/current/dmtpdescription"},"Dmtp\u63cf\u8ff0"),"\u6240\u793a\uff0c\u5176\u57fa\u7840\u6570\u636e\u62a5\u6587\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Flags+Length+Data"),"\u3002\u800c\u6846\u67b6\u5185\u90e8\u7684Handshake\u3001Ping\u3001Pong\u3001Close\u7b49\u6307\u4ee4\u5747\u662f\u91c7\u7528Json\u6570\u636e\u683c\u5f0f\u3002\u4f46\u662f\u53ca\u65f6\u5982\u6b64\uff0c\u8fde\u63a5\u65f6\u7684\u771f\u6b63\u6570\u636e\uff0c\u8fd8\u4e0e\u5176\u57fa\u7840\u534f\u8bae\u6709\u5173\u3002\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"\u4ee5\u8fde\u63a5\u3001\u64cd\u4f5cTcpDmtpService\u4e3a\u4f8b\u3002\u5176\u57fa\u7840\u534f\u8bae\u5373\u4e3atcp\uff0c\u5219\u4f7f\u7528\u5e38\u89c4\u7684tcp\u5ba2\u6237\u7aef\u5373\u53ef\u6a21\u62df\u94fe\u63a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'using var tcpClient = new TcpClient();//\u521b\u5efa\u4e00\u4e2a\u666e\u901a\u7684tcp\u5ba2\u6237\u7aef\u3002\ntcpClient.Received = (client, e) =>\n{\n    //\u6b64\u5904\u63a5\u6536\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f\n    var flags = byteBlock.ReadUInt16(bigEndian: true);\n    var length = byteBlock.ReadInt32(bigEndian: true);\n\n    var json = Encoding.UTF8.GetString(e.ByteBlock.Buffer,0, e.ByteBlock.CanReadLen);\n\n    ConsoleLogger.Default.Info($"\u6536\u5230\u54cd\u5e94\uff1aflags={flags}\uff0clength={length}\uff0cjson={json}");\n};\n\n//\u5f00\u59cb\u94fe\u63a5\u670d\u52a1\u5668\ntcpClient.Connect("127.0.0.1:7789");\n\n//\u4ee5json\u7684\u6570\u636e\u65b9\u5f0f\u3002\n//\u5176\u4e2dToken\u3001Metadata\u4e3a\u8fde\u63a5\u7684\u9a8c\u8bc1\u6570\u636e\uff0c\u5206\u522b\u4e3a\u5b57\u7b26\u4e32\u3001\u5b57\u7b26\u4e32\u5b57\u5178\u7c7b\u578b\u3002\n//Id\u5219\u8868\u793a\u6307\u5b9a\u7684\u9ed8\u8ba4id\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\n//Sign\u4e3a\u672c\u6b21\u8bf7\u6c42\u7684\u5e8f\u53f7\uff0c\u4e00\u822c\u5728\u8fde\u63a5\u65f6\u6307\u5b9a\u4e00\u4e2a\u5927\u4e8e0\u7684\u4efb\u610f\u6570\u5b57\u5373\u53ef\u3002\nvar json = @"{""Token"":""Dmtp"",""Metadata"":{""a"":""a""},""Id"":null,""Sign"":1}";\n\n//\u5c06json\u8f6c\u4e3autf-8\u7f16\u7801\u3002\nvar jsonBytes = Encoding.UTF8.GetBytes(json);\n\nusing (var byteBlock = new ByteBlock())\n{\n    //\u6309\u7167Flags+Length+Data\u7684\u683c\u5f0f\u3002\n    byteBlock.Write(TouchSocketBitConverter.BigEndian.GetBytes((ushort)1));\n    byteBlock.Write(TouchSocketBitConverter.BigEndian.GetBytes((int)jsonBytes.Length));\n    byteBlock.Write(jsonBytes);\n\n    tcpClient.Send(byteBlock);\n}\n\nawait Task.Delay(2000);\n')),(0,r.kt)("p",null,"\u63a5\u6536\u8f93\u51fa\uff1a"),(0,r.kt)("p",null,"\u6536\u5230\u7684Json\u5b57\u7b26\u4e32\uff0c\u4f1a\u8fd4\u56de\u670d\u52a1\u5668\u6700\u7ec8\u4fee\u6539\u7684Token\u3001Metadata\u3002\u540c\u65f6\u8fd8\u5305\u62ec\u5206\u914d\u6216\u6307\u5b9a\u7684Id\u3002Sign\u4f1a\u4e0e\u8bf7\u6c42\u65f6\u4e00\u81f4\uff0c\u8868\u793a\u8fd9\u662f\u540c\u4e00\u7ec4\u8bf7\u6c42\u3002Status\u7b49\u4e8e1\u5373\u4e3a\u8fde\u63a5\u6210\u529f\u3002\u5176\u4ed6\u503c\u5219\u53ef\u80fd\u5728Message\u8868\u660e\u8fde\u63a5\u5931\u8d25\u7684\u539f\u56e0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u6536\u5230\u54cd\u5e94\uff1aflags=2\uff0clength=81\uff0cjson={"Token":"Dmtp","Metadata":{"a":"a"},"Id":"2","Message":null,"Sign":1,"Status":1}\n')),(0,r.kt)("p",null,"\u5176\u4ed6Json\u8bf7\u6c42\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("p",null,"\u3010\u8bf7\u6c42\u8fde\u63a5\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{"Token":"Dmtp","Metadata":{"a":"a"},"Id":null,"Sign":1}\n')),(0,r.kt)("p",null,"\u5f85\u7eed\u3002\u3002\u3002"),(0,r.kt)("h2",{id:"\u4e8cid\u540c\u6b65"},"\u4e8c\u3001ID\u540c\u6b65"),(0,r.kt)("p",null,"\u5728Dmtp\u4e2d\uff0c\u5b58\u5728\u4e8e\u670d\u52a1\u5668\u7684\u8f85\u52a9\u5ba2\u6237\u7aef\uff08SocketClient\uff09\uff0c\u4e0e\u8fdc\u7a0b\u5ba2\u6237\u7aef\uff08Client\uff09\u662f\u4e00\u4e00\u5bf9\u5e94\u5173\u7cfb\uff0c\u5176ID\u4e5f",(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u4e00\u81f4"),"\u3002\u6240\u4ee5\u5728\u4efb\u610f\u4e00\u65b9\u4fee\u6539ID\uff08\u8c03\u7528ResetID\uff09\uff0c\u90fd\u4f1a\u540c\u65f6\u4fee\u6539\u8fdc\u7a0bID\u3002\u6240\u4ee5\u5408\u7406\u4f7f\u7528\u8be5\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5b8c\u6210\u590d\u7528ID\uff08\u91cd\u7f6eID\uff09\u7684\u9700\u6c42\u3002"),(0,r.kt)("h2",{id:"\u4e09\u534f\u8bae\u6269\u5c55"},"\u4e09\u3001\u534f\u8bae\u6269\u5c55"),(0,r.kt)("p",null,"\u534f\u8bae\u6269\u5c55\u529f\u80fd\uff0c\u5c31\u662f\u5bf9\u73b0\u6709\u7684Dmtp\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u534f\u8bae\u3002\u5176\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u5e94\u5bf9\u66f4\u52a0\u590d\u6742\uff0c\u9ad8\u8981\u6c42\u7684\u9700\u6c42\u3002"),(0,r.kt)("p",null,"\u4f8b1\uff1a\u5f53\u9700\u8981\u5e7f\u64ad\u6d88\u606f\u65f6\uff0c\u53ef\u80fd\u5927\u5bb6\u90fd\u4f1a\u60f3\u5230\u4f7f\u7528rpc\u76f4\u63a5\u8fdb\u884c\u5e7f\u64ad\u3002\u4f46\u662f\u5982\u6b64\u4e00\u6765\uff0c\u6bcf\u5e7f\u64ad\u4e00\u4e2a\u5ba2\u6237\u7aef\uff0c\u5c31\u9700\u8981\u5e8f\u5217\u5316\u4e00\u6b21\u3002\u56e0\u4e3a\u6570\u636e\u90fd\u662f\u4e00\u6837\u7684\uff0c\u6240\u4ee5\u591a\u6b21\u5e8f\u5217\u5316\u663e\u5f97\u975e\u5e38\u6ca1\u6709\u5fc5\u8981\u3002\u90a3\u4e48\u8fd9\u65f6\u5019\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u534f\u8bae\uff0c\u7136\u540e\u5148\u5e8f\u5217\u5316\uff0c\u7136\u540e\u76f4\u63a5\u5e7f\u64ad\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u534f\u8bae\u6548\u7387\u5982\u4f55\u5462\uff1f\n\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u6548\u7387\u662f\u975e\u5e38\u9ad8\u7684\uff0c99%\u63a5\u8fd1\u4e8e\u5e95\u5c42\u534f\u8bae\uff08\u53ef\u80fd\u662ftcp\u3001udp\u3001websocket\uff09\u6548\u7387\u3002"),(0,r.kt)("h3",{id:"31-\u4f7f\u7528"},"3.1 \u4f7f\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528\u8d77\u6765\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u6bcf\u4e2aDmtpActor\uff0c\u90fd\u5b9e\u73b0\u4e86Send\u65b9\u6cd5\u63a5\u53e3\u3002\n\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3aushort\u7c7b\u578b\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u4efb\u610f\u5927\u4e8e20\u6570\u503c"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'client.Send(20,Encoding.UTF8.GetBytes("RRQM"));\n')),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Flags\u4e0d\u8981\u4f7f\u7528\u5c0f\u4e8e20\u7684\uff0c\u56e0\u4e3a\u6846\u67b6\u5185\u90e8\u5728\u4f7f\u7528\u3002\u5e76\u4e14\u5c0f\u4e8e100\u7684\u4e5f\u6700\u597d\u4e0d\u8981\u4f7f\u7528\uff0c\u56e0\u4e3a\u53ef\u80fd\u5176\u4ed6\u7ec4\u4ef6\u4e5f\u5728\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u63a5\u6536\u65b9"),"\u8ba2\u9605",(0,r.kt)("inlineCode",{parentName:"p"},"IDmtpReceivedPlugin"),"\uff0c\u5df2\u7ecf\u5305\u542b\u4e86\u534f\u8bae\u53c2\u6570\uff0c\u6240\u4ee5\u76f4\u63a5\u81ea\u884c\u7b5b\u9009\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"internal class MyFlagsPlugin : PluginBase, IDmtpReceivedPlugin\n{\n    public async Task OnDmtpReceived(IDmtpActorObject client, DmtpMessageEventArgs e)\n    {\n        if (e.DmtpMessage.ProtocolFlags == 10)\n        {\n            //\u5224\u65ad\u5b8c\u534f\u8bae\u4ee5\u540e\uff0c\u4ece e.DmtpMessage.BodyByteBlock\u53ef\u4ee5\u62ff\u5230\u5b9e\u9645\u7684\u6570\u636e\n            string msg = e.DmtpMessage.BodyByteBlock.ToString();\n\n            return;\n        }\n\n        //flags\u4e0d\u6ee1\u8db3\uff0c\u8c03\u7528\u4e0b\u4e00\u4e2a\u63d2\u4ef6\n        await e.InvokeNext();\n    }\n}\n")))}d.isMDXComponent=!0}}]);