"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9772],{3905:(t,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>o});var e=a(7294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function p(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function i(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=e.createContext({}),u=function(t){var n=e.useContext(d),a=n;return t&&(a="function"==typeof t?t(n):p(p({},n),t)),a},m=function(t){var n=u(t.components);return e.createElement(d.Provider,{value:n},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},N=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=u(a),N=l,o=k["".concat(d,".").concat(N)]||k[N]||g[N]||r;return a?e.createElement(o,p(p({ref:n},m),{},{components:a})):e.createElement(o,p({ref:n},m))}));function o(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=N;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=t,i[k]="string"==typeof t?t:l,p[1]=i;for(var u=2;u<r;u++)p[u]=a[u];return e.createElement.apply(null,p)}return e.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3658:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var e=a(7462),l=(a(7294),a(3905));const r={id:"udptransmitbigdata",title:"\u4f20\u8f93\u5927\u4e8e64K\u7684\u6570\u636e"},p=void 0,i={unversionedId:"udptransmitbigdata",id:"version-1.3.9/udptransmitbigdata",title:"\u4f20\u8f93\u5927\u4e8e64K\u7684\u6570\u636e",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/udptransmitbigdata.mdx",sourceDirName:".",slug:"/udptransmitbigdata",permalink:"/touchsocket/docs/1.3.9/udptransmitbigdata",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/udptransmitbigdata.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"udptransmitbigdata",title:"\u4f20\u8f93\u5927\u4e8e64K\u7684\u6570\u636e"},sidebar:"docs",previous:{title:"Udp\u540c\u6b65\u8bf7\u6c42",permalink:"/touchsocket/docs/1.3.9/udpwaitingclient"},next:{title:"\u7ec4\u64ad\u3001\u5e7f\u64ad",permalink:"/touchsocket/docs/1.3.9/udpbroadcast"}},d={},u=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528",id:"\u4e8c\u4f7f\u7528",level:2},{value:"\u4e09\u3001\u539f\u7406",id:"\u4e09\u539f\u7406",level:2},{value:"3.1 \u6570\u636e\u683c\u5f0f",id:"31-\u6570\u636e\u683c\u5f0f",level:3}],m={toc:u},k="wrapper";function g(t){let{components:n,...a}=t;return(0,l.kt)(k,(0,e.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,l.kt)("p",null,"UDP\u7531\u4e8e\u81ea\u8eab\u9650\u5236\uff0c\u6bcf\u6b21\u53d1\u9001\u7684\u6570\u636e\u5305\u6700\u5927\u7ea664K\uff0c\u4f46\u662f\u5728\u5c40\u57df\u7f51\u5185\uff0c\u6709\u65f6\u5019\u5e0c\u671b\u4f20\u8f93\u66f4\u5927\u7684\u6570\u636e\u3002\u6240\u4ee5\u5fc5\u987b\u6709\u7b56\u7565\u53d1\u9001\u3002"),(0,l.kt)("p",null,"TouchSocket\u53ef\u901a\u8fc7\u7b80\u5355\u8bbe\u7f6e\uff0c\u5b9e\u73b0\u8be5\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u4e8c\u4f7f\u7528"},"\u4e8c\u3001\u4f7f\u7528"),(0,l.kt)("p",null,"\u53ea\u9700\u8981\u5728\u914d\u7f6e\u4e2d\uff0c\u8bbe\u7f6e\u5176\u9002\u914d\u5668\u4e3a",(0,l.kt)("strong",{parentName:"p"},"UdpPackageAdapter"),"\u7c7b\u578b\u5373\u53ef\uff08\u9ed8\u8ba4\u4e3a",(0,l.kt)("strong",{parentName:"p"},"NormalUdpDataHandlingAdapter"),"\uff09\u3002\u540c\u65f6\u53ef\u4ee5\u6839\u636e\u4f20\u8f93\u6570\u636e\u7684\u5927\u5c0f\uff0c\u4fee\u6539\u76f8\u5173\u5c5e\u6027\uff0c\u5982\uff1a",(0,l.kt)("strong",{parentName:"p"},"MTU"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"Timeout"),"\u7b49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'UdpSession udpSession = new UdpSession();\nudpSession.Received += (endpoint, byteBlock, requestInfo) =>\n{\n\n};\n\nudpSession.Setup(new TouchSocketConfig()\n    .SetBindIPHost(new IPHost($"127.0.0.1:7789"))\n    .SetUdpDataHandlingAdapter(()=> new UdpPackageAdapter()));//\u52a0\u8f7d\u914d\u7f6e\nudpSession.Start();//\u542f\u52a8\n')),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u6b64\u6a21\u5f0f\u4e0b\uff0c\u53d1\u9001\u7aef\u4e0e\u63a5\u6536\u7aef\u5747\u5fc5\u987b\u4e3aTouchSocket\uff08\u6216\u5b9e\u73b0\u76f8\u540c\u7b97\u6cd5\uff09\uff0c\u4e14\u4e3a\u76f8\u540c\u8bbe\u7f6e\u3002"))),(0,l.kt)("h2",{id:"\u4e09\u539f\u7406"},"\u4e09\u3001\u539f\u7406"),(0,l.kt)("p",null,"\u5728\u53d1\u9001\u65f6\uff0c\u4f1a\u5c06\u8981\u53d1\u9001\u7684\u6570\u636e\u5206\u5272\u6210MTU\u957f\u5ea6\u7684\u6570\u636e\u3002\u7136\u540e\u4e3a\u5176\u7f16\u53f7\uff0c\u7136\u540e\u53d1\u9001\uff0c\u6700\u540e\u7531\u63a5\u6536\u65b9\u91cd\u7ec4\u3002"),(0,l.kt)("h3",{id:"31-\u6570\u636e\u683c\u5f0f"},"3.1 \u6570\u636e\u683c\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ID\uff1a\u7531\u96ea\u82b1\u7b97\u6cd5\u751f\u6210\uff0c\u5728\u5e76\u53d1\u8bf7\u6c42\u65f61\u6beb\u79d2\u4e2d\u6709400w\u5206\u4e4b\u4e00\u7684\u6982\u7387\u53d1\u751fID\u91cd\u590d\u3002\u4f46\u57fa\u672c\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bit"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"7"),(0,l.kt)("th",{parentName:"tr",align:null},"6"),(0,l.kt)("th",{parentName:"tr",align:null},"5"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u540d"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte1"),(0,l.kt)("td",{parentName:"tr",align:null},"PackageID\u4e3along\u7c7b\u578b\uff0c\u5360\u75288\u5b57\u8282\uff0c\u6807\u8bc6\u6570\u636e\u5305\u552f\u4e00\u6027\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte6"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte7"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte8"),(0,l.kt)("td",{parentName:"tr",align:null},"SN\u4e3aUshort\u53602\u5b57\u8282\uff0c\u6807\u8bc6\u5e27\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte9"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte10"),(0,l.kt)("td",{parentName:"tr",align:null},"flag\uff0c\u53601\u5b57\u8282\uff0c\u6700\u9ad8\u4f4d\u6807\u8bc6\u662f\u5426\u4e3a\u7ed3\u675f\uff0c\u5176\u4ed6\u4f4d\u4fdd\u7559\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte\uff1f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548\u8f7d\u8377\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte^2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4e0d\u4e3a\u7ec8\u7ed3\u5e27\u65f6\uff0c\u6b64\u5904\u4ecd\u7136\u4e3a\u8f7d\u8377\u6570\u636e\u3002\u5f53\u662f\u7ec8\u7ed3\u5e27\u65f6\uff0c\u5012\u6570\u4e24\u4e2a\u5b57\u8282\u4e3aCrc16\u6821\u9a8c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte^1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);