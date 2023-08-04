"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4929],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=l(n),f=o,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,c(c({ref:e},s),{},{components:n})):r.createElement(g,c({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8104:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"httpstaticpageplugin",title:"\u9759\u6001\u9875\u9762\u63d2\u4ef6"},c=void 0,i={unversionedId:"httpstaticpageplugin",id:"httpstaticpageplugin",title:"\u9759\u6001\u9875\u9762\u63d2\u4ef6",description:"\u5b9a\u4e49",source:"@site/docs/httpstaticpageplugin.mdx",sourceDirName:".",slug:"/httpstaticpageplugin",permalink:"/touchsocket/docs/httpstaticpageplugin",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/httpstaticpageplugin.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"httpstaticpageplugin",title:"\u9759\u6001\u9875\u9762\u63d2\u4ef6"},sidebar:"docs",previous:{title:"\u521b\u5efaHttpClient",permalink:"/touchsocket/docs/createhttpclient"},next:{title:"\u6587\u4ef6\u4f20\u8f93",permalink:"/touchsocket/docs/httpfiletransfer"}},p={},l=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u9759\u6001\u7f51\u9875\u6258\u7ba1\u63d2\u4ef6\u4ec5\u670d\u52a1\u5668\u652f\u6301",id:"\u9759\u6001\u7f51\u9875\u6258\u7ba1\u63d2\u4ef6\u4ec5\u670d\u52a1\u5668\u652f\u6301",level:2}],s={toc:l};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Http ",(0,o.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Http"},"TouchSocket.Http.dll")),(0,o.kt)("h2",{id:"\u9759\u6001\u7f51\u9875\u6258\u7ba1\u63d2\u4ef6\u4ec5\u670d\u52a1\u5668\u652f\u6301"},"\u9759\u6001\u7f51\u9875\u6258\u7ba1\u63d2\u4ef6\u4ec5\u670d\u52a1\u5668\u652f\u6301"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HttpStaticPagePlugin"),"\u9759\u6001\u7f51\u9875\u6258\u7ba1\u63d2\u4ef6\uff0c\u662f\u7528\u4e8eHttp\u7684\u5185\u5bb9\u54cd\u5e94\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\n\nvar config = new TouchSocketConfig();\nconfig.UsePlugin()\n    .SetReceiveType(ReceiveType.Auto)\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigurePlugins(a =>\n    {\n        a.Add<HttpStaticPagePlugin>().AddFolder("../../../../../api");//\u6dfb\u52a0\u9759\u6001\u9875\u9762\u6587\u4ef6\u5939\n    });\n\nservice.Setup(config).Start();\nConsole.WriteLine("Http\u670d\u52a1\u5668\u5df2\u542f\u52a8");\n')))}u.isMDXComponent=!0}}]);