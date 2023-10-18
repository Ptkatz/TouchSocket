"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,k=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(k,c(c({ref:t},m),{},{components:n})):r.createElement(k,c({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"dmtpcustomactor",title:"\u81ea\u5b9a\u4e49DmtpActor"},c=void 0,p={unversionedId:"dmtpcustomactor",id:"dmtpcustomactor",title:"\u81ea\u5b9a\u4e49DmtpActor",description:"\u5b9a\u4e49",source:"@site/docs/dmtpcustomactor.mdx",sourceDirName:".",slug:"/dmtpcustomactor",permalink:"/touchsocket/docs/current/dmtpcustomactor",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dmtpcustomactor.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"dmtpcustomactor",title:"\u81ea\u5b9a\u4e49DmtpActor"},sidebar:"docs",previous:{title:"\u8fde\u63a5\u53caId\u540c\u6b65",permalink:"/touchsocket/docs/current/dmtpbase"},next:{title:"Rpc\u529f\u80fd",permalink:"/touchsocket/docs/current/dmtprpc"}},i={},l=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528Actor\u5f00\u53d1\u7684\u4f18\u70b9",id:"\u4e8c\u4f7f\u7528actor\u5f00\u53d1\u7684\u4f18\u70b9",level:2},{value:"\u4e09\u3001\u5b9e\u73b0",id:"\u4e09\u5b9e\u73b0",level:2},{value:"3.1 \u58f0\u660eActor",id:"31-\u58f0\u660eactor",level:3},{value:"3.2 \u58f0\u660e\u6269\u5c55",id:"32-\u58f0\u660e\u6269\u5c55",level:3},{value:"3.3 \u58f0\u660e\u529f\u80fd\u63d2\u4ef6",id:"33-\u58f0\u660e\u529f\u80fd\u63d2\u4ef6",level:3},{value:"\u56db\u3001\u4f7f\u7528",id:"\u56db\u4f7f\u7528",level:2}],m={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Dmtp ",(0,a.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Dmtp"},"TouchSocket.Dmtp.dll")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DmtpActor"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Dmtp"),"\u534f\u8bae\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Actor"),"\uff0c\u8d1f\u8d23",(0,a.kt)("inlineCode",{parentName:"p"},"Dmtp"),"\u534f\u8bae\u7684\u4ea4\u4e92\u3002\u89c4\u8303\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Actor"),"\u53ef\u4ee5\u505a\u5230\u4e00\u6b21\u5f00\u53d1\uff0c\u591a\u79cd\u534f\u8bae\u9002\u7528\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"DmtpRpcActor"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"DmtpFileTransferActor"),"\u7b49\u3002\u6240\u4ee5\u5b66\u4e60",(0,a.kt)("inlineCode",{parentName:"p"},"Dmtp\u7684Actor"),"\u5f00\u53d1\uff0c\u662f\u8fdb\u9636\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Dmtp"),"\u7684\u5fc5\u8981\u9014\u5f84\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u4f7f\u7528actor\u5f00\u53d1\u7684\u4f18\u70b9"},"\u4e8c\u3001\u4f7f\u7528Actor\u5f00\u53d1\u7684\u4f18\u70b9"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"./dmtpbase"},"\u534f\u8bae\u6269\u5c55"),"\u5373\u53ef\u6269\u5c55Dmtp\u7684\u529f\u80fd\uff0c\u4f46\u662f\u4f7f\u7528Actor\u5f00\u53d1\uff0c\u5219\u66f4\u5177\u4f18\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f88\u597d\u7684\u5206\u79bb\u4e86\u534f\u8bae\u7684\u4ea4\u4e92\u903b\u8f91\u548c\u534f\u8bae\u7684\u5b9e\u73b0\u903b\u8f91\u3002\u53ef\u4ee5\u505a\u5230\u4e00\u6b21\u5f00\u53d1\uff0c\u591a\u79cd\u534f\u8bae\u9002\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167\u89c4\u8303\u7684\u5f00\u53d1\uff0c\u53ef\u4ee5\u975e\u5e38\u597d\u7684\u652f\u6301\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\u3001\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\u3001\u5ba2\u6237\u7aef\u5230\u5ba2\u6237\u7aef\u7684\u4ea4\u4e92\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u9ad8\u7b49\u7ea7\u7684\u4ee3\u7801\u5c01\u88c5\uff0c\u8ba9\u7a0b\u5e8f\u66f4\u6613\u7ef4\u62a4\u3002")),(0,a.kt)("h2",{id:"\u4e09\u5b9e\u73b0"},"\u4e09\u3001\u5b9e\u73b0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Actor"),"\u901a\u8baf\u7684\u539f\u7406\uff0c\u5c31\u662f\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"DmtpActor"),"\uff08\u4e3b\u901a\u8baf\u5668\uff09\u6536\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"DmtpMessage"),"\u540e\uff0c\u4f1a\u4f9d\u6b21\u6295\u9012\u7ed9\u6240\u6709\u7684Dmtp\u63d2\u4ef6\uff0c\u5f53\u67d0\u4e2a\u63d2\u4ef6\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"ProtocolFlag"),"\u5224\u65ad\u6b63\u786e\u540e\uff0c\u7531\u672c\u63d2\u4ef6\u652f\u6301\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Actor"),"\u8fdb\u884c\u5904\u7406\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684Rpc\u8c03\u7528\u6765\u719f\u6089Actor\u901a\u8baf\u3002"),(0,a.kt)("p",null,"\u57fa\u672c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("h3",{id:"31-\u58f0\u660eactor"},"3.1 \u58f0\u660eActor"),(0,a.kt)("p",null,"\u9996\u5148\u65b0\u5efa\u4e00\u4e2a\u63a5\u53e3",(0,a.kt)("inlineCode",{parentName:"p"},"ISimpleDmtpRpcActor"),"\uff0c\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"p"},"IActor"),"\u3002\u7136\u540e\u65b0\u5efa\u4e00\u4e2a\u7c7b",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleDmtpRpcActor"),"\uff0c\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"ISimpleDmtpRpcActor"),"\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"m_invoke_Request"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"m_invoke_Response"),"\u4e24\u4e2a\u53d8\u91cf\uff0c\u7528\u4e8e\u5224\u65ad",(0,a.kt)("inlineCode",{parentName:"p"},"ProtocolFlags"),"\u80fd\u5426\u5728\u5f53\u524dActor\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u58f0\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"TryFindMethod"),"\u59d4\u6258\uff0c\u7528\u4e8e\u5411\u5916\u9762\u63d2\u4ef6\u901a\u8fc7\u65b9\u6cd5\u540d\u641c\u7d22Rpc\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'interface ISimpleDmtpRpcActor : IActor\n{\n    void Invoke(string methodName);\n    void Invoke(string targetId, string methodName);\n}\n\nclass SimpleDmtpRpcActor : ISimpleDmtpRpcActor\n{\n    private ushort m_invoke_Request=1000;\n    private ushort m_invoke_Response=1001;\n\n    public IDmtpActor DmtpActor { get; private set; }\n    public Func<string, MethodModel> TryFindMethod { get; set; }\n\n    public SimpleDmtpRpcActor(IDmtpActor dmtpActor)\n    {\n        this.DmtpActor = dmtpActor;\n    }\n\n    public bool InputReceivedData(DmtpMessage message)\n    {\n        var byteBlock = message.BodyByteBlock;\n        if (message.ProtocolFlags == this.m_invoke_Request)\n        {\n            try\n            {\n                var rpcPackage = new SimpleDmtpRpcPackage();\n                rpcPackage.UnpackageRouter(byteBlock);\n                if (rpcPackage.Route && this.DmtpActor.AllowRoute)\n                {\n                    if (this.DmtpActor.TryRoute(new RouteType("SimpleRpc"), rpcPackage))\n                    {\n                        if (this.DmtpActor.TryFindDmtpActor(rpcPackage.TargetId, out var actor))\n                        {\n                            actor.Send(this.m_invoke_Request, byteBlock);\n                            return true;\n                        }\n                        else\n                        {\n                            rpcPackage.Status = 2;\n                        }\n                    }\n                    else\n                    {\n                        rpcPackage.Status = 3;\n                    }\n\n                    byteBlock.Reset();\n                    rpcPackage.SwitchId();\n\n                    rpcPackage.Package(byteBlock);\n                    this.DmtpActor.Send(this.m_invoke_Response, byteBlock);\n                }\n                else\n                {\n                    rpcPackage.UnpackageBody(byteBlock);\n                    Task.Factory.StartNew(this.InvokeThis, rpcPackage);\n                }\n            }\n            catch (Exception ex)\n            {\n                this.DmtpActor.Logger.Error(this, $"\u5728protocol={message.ProtocolFlags}\u4e2d\u53d1\u751f\u9519\u8bef\u3002\u4fe1\u606f:{ex.Message}");\n            }\n            return true;\n        }\n        else if (message.ProtocolFlags == this.m_invoke_Response)\n        {\n            try\n            {\n                var rpcPackage = new SimpleDmtpRpcPackage();\n                rpcPackage.UnpackageRouter(byteBlock);\n                if (this.DmtpActor.AllowRoute && rpcPackage.Route)\n                {\n                    if (this.DmtpActor.TryFindDmtpActor(rpcPackage.TargetId, out var actor))\n                    {\n                        actor.Send(this.m_invoke_Response, byteBlock);\n                    }\n                }\n                else\n                {\n                    rpcPackage.UnpackageBody(byteBlock);\n                    this.DmtpActor.WaitHandlePool.SetRun(rpcPackage);\n                }\n            }\n            catch (Exception ex)\n            {\n                this.DmtpActor.Logger.Error(this, $"\u5728protocol={message.ProtocolFlags}\u4e2d\u53d1\u751f\u9519\u8bef\u3002\u4fe1\u606f:{ex.Message}");\n            }\n            return true;\n        }\n        return false;\n    }\n\n    private void InvokeThis(object obj)\n    {\n        var package = (SimpleDmtpRpcPackage)obj;\n\n        var methodModel = this.TryFindMethod.Invoke(package.MethodName);\n        if (methodModel == null)\n        {\n            using (var byteBlock=new ByteBlock())\n            {\n                package.Status = 4;\n                package.SwitchId();\n                package.Package(byteBlock);\n                this.DmtpActor.Send(this.m_invoke_Response, byteBlock);\n                return;\n            }\n        }\n\n        try\n        {\n            methodModel.Method.Invoke(methodModel.Target,default);\n            using (var byteBlock = new ByteBlock())\n            {\n                package.Status = 1;\n                package.SwitchId();\n                package.Package(byteBlock);\n                this.DmtpActor.Send(this.m_invoke_Response, byteBlock);\n                return;\n            }\n        }\n        catch (Exception ex)\n        {\n            using (var byteBlock = new ByteBlock())\n            {\n                package.Status = 5;\n                package.Message = ex.Message;\n                package.SwitchId();\n                package.Package(byteBlock);\n                this.DmtpActor.Send(this.m_invoke_Response, byteBlock);\n                return;\n            }\n        }\n    }\n\n    private bool TryFindDmtpRpcActor(string targetId, out SimpleDmtpRpcActor rpcActor)\n    {\n        if (targetId == this.DmtpActor.Id)\n        {\n            rpcActor = this;\n            return true;\n        }\n        if (this.DmtpActor.TryFindDmtpActor(targetId, out var smtpActor))\n        {\n            if (smtpActor.GetSimpleDmtpRpcActor() is SimpleDmtpRpcActor newActor)\n            {\n                rpcActor = newActor;\n                return true;\n            }\n        }\n\n        rpcActor = default;\n        return false;\n    }\n\n    public void Invoke(string methodName)\n    {\n        this.PrivateInvoke(default, methodName);\n    }\n    public void Invoke(string targetId, string methodName)\n    {\n        if (string.IsNullOrEmpty(targetId))\n        {\n            throw new ArgumentException($"\u201c{nameof(targetId)}\u201d\u4e0d\u80fd\u4e3a null \u6216\u7a7a\u3002", nameof(targetId));\n        }\n\n        if (string.IsNullOrEmpty(methodName))\n        {\n            throw new ArgumentException($"\u201c{nameof(methodName)}\u201d\u4e0d\u80fd\u4e3a null \u6216\u7a7a\u3002", nameof(methodName));\n        }\n\n        if (this.DmtpActor.AllowRoute && this.TryFindDmtpRpcActor(targetId, out var actor))\n        {\n            actor.Invoke(methodName);\n            return;\n        }\n\n        this.PrivateInvoke(targetId,methodName);\n    }\n\n    private void PrivateInvoke(string id, string methodName)\n    {\n        var package = new SimpleDmtpRpcPackage()\n        {\n            MethodName = methodName,\n            Route = id.HasValue(),\n            SourceId = this.DmtpActor.Id,\n            TargetId = id\n        };\n\n        var waitData = this.DmtpActor.WaitHandlePool.GetWaitData(package);\n\n        try\n        {\n            using (var byteBlock = new ByteBlock())\n            {\n                package.Package(byteBlock);\n                this.DmtpActor.Send(this.m_invoke_Request, byteBlock);\n            }\n            switch (waitData.Wait(5000))\n            {\n                case WaitDataStatus.SetRunning:\n                    var result = (SimpleDmtpRpcPackage)waitData.WaitResult;\n                    result.CheckStatus();\n                    return;\n                case WaitDataStatus.Overtime:\n                    throw new TimeoutException();\n                case WaitDataStatus.Canceled:\n                    break;\n                case WaitDataStatus.Default:\n                case WaitDataStatus.Disposed:\n                default:\n                    throw new Exception("\u672a\u77e5\u5f02\u5e38");\n            }\n        }\n        finally\n        {\n            this.DmtpActor.WaitHandlePool.Destroy(waitData);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u989d\u5916\u6a21\u578b\u7c7b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MethodModel"),"\u7528\u4e8e\u50a8\u5b58\u53cd\u5c04\u8c03\u7528\u76f8\u5173\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"class MethodModel\n{\n    public MethodModel(MethodInfo method, object target)\n    {\n        this.Method = method;\n        this.Target = target;\n    }\n\n    public MethodInfo Method { get; private set; }\n    public object Target { get; private set; }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SimpleDmtpRpcPackage"),"\u7c7b\uff0c\u7528\u4e8e\u6253\u5305Rpc\u8bf7\u6c42\uff0c\u5173\u4e8e\u6253\u5305\u7684\u4f7f\u7528\u8be6\u60c5\uff0c\u53ef\u4ee5\u770b",(0,a.kt)("a",{parentName:"p",href:"./ipackage"},"\u5305\u5e8f\u5217\u5316")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'class SimpleDmtpRpcPackage : WaitRouterPackage\n{\n    protected override bool IncludedRouter => true;\n\n    public string MethodName { get; set; }\n\n    public override void PackageBody(in ByteBlock byteBlock)\n    {\n        base.PackageBody(byteBlock);\n        byteBlock.Write(this.MethodName);\n    }\n\n    public override void UnpackageBody(in ByteBlock byteBlock)\n    {\n        base.UnpackageBody(byteBlock);\n        this.MethodName = byteBlock.ReadString();\n    }\n\n    public void CheckStatus()\n    {\n        switch (this.Status)\n        {\n            case 0:\n                throw new TimeoutException();\n            case 1: return;\n            case 2: throw new Exception("\u6ca1\u6709\u627e\u5230\u76ee\u6807Id");\n            case 3: throw new Exception("\u4e0d\u5141\u8bb8\u8def\u7531");\n            case 4: throw new Exception("\u6ca1\u627e\u5230Rpc");\n            case 5: throw new Exception($"\u5176\u4ed6\u5f02\u5e38\uff1a{this.Message}");\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"32-\u58f0\u660e\u6269\u5c55"},"3.2 \u58f0\u660e\u6269\u5c55"),(0,a.kt)("p",null,"\u6269\u5c55\u65b9\u6cd5\u662f\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"IPluginsManager"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"IDmtpActor"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"IDmtpActorObject"),"\u7b49\u63d0\u4f9b\u6269\u5c55\u529f\u80fd\u7684\u9759\u6001\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'static class SimpleDmtpRpcExtension\n{\n    #region DependencyProperty\n\n    /// <summary>\n    /// SimpleDmtpRpcActor\n    /// </summary>\n    public static readonly DependencyProperty<ISimpleDmtpRpcActor> SimpleDmtpRpcActorProperty =\n        DependencyProperty<ISimpleDmtpRpcActor>.Register("SimpleDmtpRpcActor", default);\n\n    #endregion DependencyProperty\n\n    #region \u63d2\u4ef6\u6269\u5c55\n\n    /// <summary>\n    /// \u4f7f\u7528SimpleDmtpRpc\u63d2\u4ef6\n    /// </summary>\n    /// <param name="pluginsManager"></param>\n    /// <returns></returns>\n    public static SimpleDmtpRpcFeature UseSimpleDmtpRpc(this IPluginsManager pluginsManager)\n    {\n        return pluginsManager.Add<SimpleDmtpRpcFeature>();\n    }\n    #endregion \u63d2\u4ef6\u6269\u5c55\n\n    /// <summary>\n    /// \u4ece<see cref="DmtpActor"/>\u4e2d\u83b7\u53d6<see cref="ISimpleDmtpRpcActor"/>\n    /// </summary>\n    /// <param name="smtpActor"></param>\n    /// <returns></returns>\n    public static ISimpleDmtpRpcActor GetSimpleDmtpRpcActor(this IDmtpActor smtpActor)\n    {\n        return smtpActor.GetValue(SimpleDmtpRpcActorProperty);\n    }\n\n    /// <summary>\n    /// \u4ece<see cref="IDmtpActorObject"/>\u4e2d\u83b7\u53d6<see cref="ISimpleDmtpRpcActor"/>\uff0c\u4ee5\u5b9e\u73b0Rpc\u8c03\u7528\u529f\u80fd\u3002\n    /// </summary>\n    /// <param name="client"></param>\n    /// <returns></returns>\n    /// <exception cref="ArgumentNullException"></exception>\n    public static ISimpleDmtpRpcActor GetSimpleDmtpRpcActor(this IDmtpActorObject client)\n    {\n        var smtpRpcActor = client.DmtpActor.GetSimpleDmtpRpcActor();\n        if (smtpRpcActor is null)\n        {\n            throw new ArgumentNullException(nameof(smtpRpcActor), "SimpleRpcAcotr\u4e3a\u7a7a\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u5df2\u542f\u7528UseSimpleDmtpRpc");\n        }\n        return smtpRpcActor;\n    }\n\n    /// <summary>\n    /// \u5411<see cref="DmtpActor"/>\u4e2d\u8bbe\u7f6e<see cref="ISimpleDmtpRpcActor"/>\n    /// </summary>\n    /// <param name="smtpActor"></param>\n    /// <param name="smtpRpcActor"></param>\n    internal static void SetSimpleDmtpRpcActor(this IDmtpActor smtpActor, ISimpleDmtpRpcActor smtpRpcActor)\n    {\n        smtpActor.SetValue(SimpleDmtpRpcActorProperty, smtpRpcActor);\n    }\n}\n')),(0,a.kt)("h3",{id:"33-\u58f0\u660e\u529f\u80fd\u63d2\u4ef6"},"3.3 \u58f0\u660e\u529f\u80fd\u63d2\u4ef6"),(0,a.kt)("p",null,"\u529f\u80fd\u63d2\u4ef6\u662f\u4e3aActor\u63d0\u4f9b\u521b\u5efa\u65f6\u673a\uff0c\u548c\u5fc5\u8981\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5982\u679c\u6709\u9700\u8981\uff0c\u8fd8\u53ef\u4ee5\u629b\u51fa\u63d2\u4ef6\u4fe1\u606f\uff08\u4f8b\u5982",(0,a.kt)("a",{parentName:"p",href:"./dmtptransferfile"},"\u6587\u4ef6\u4f20\u8f93")," \uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"}," class SimpleDmtpRpcFeature : PluginBase, IDmtpHandshakingPlugin,IDmtpReceivedPlugin\n {\n     readonly Dictionary<string, MethodModel> m_pairs = new Dictionary<string, MethodModel>();\n     public async Task OnDmtpHandshaking(IDmtpActorObject client, DmtpVerifyEventArgs e)\n     {\n         var actor = new SimpleDmtpRpcActor(client.DmtpActor)\n         {\n             TryFindMethod = this.TryFindMethod\n         };\n         client.DmtpActor.SetSimpleDmtpRpcActor(actor);\n         await e.InvokeNext();\n     }\n\n     private MethodModel TryFindMethod(string methodName)\n     {\n         if (this.m_pairs.TryGetValue(methodName,out var methodModel))\n         {\n             return methodModel;\n         }\n         return default;\n     }\n\n     public void RegisterRpc(object server)\n     {\n         if (server is null)\n         {\n             throw new ArgumentNullException(nameof(server));\n         }\n\n         foreach (var item in server.GetType().GetMethods( BindingFlags.Default|BindingFlags.Instance | BindingFlags.Public))\n         {\n             m_pairs.Add(item.Name,new MethodModel(item,server));\n         }\n     }\n\n     public async Task OnDmtpReceived(IDmtpActorObject client, DmtpMessageEventArgs e)\n     {\n         if (client.DmtpActor.GetSimpleDmtpRpcActor() is SimpleDmtpRpcActor actor)\n         {\n             if (actor.InputReceivedData(e.DmtpMessage))\n             {\n                 e.Handled = true;\n                 return;\n             }\n         }\n\n         await e.InvokeNext();\n     }\n }\n")),(0,a.kt)("h2",{id:"\u56db\u4f7f\u7528"},"\u56db\u3001\u4f7f\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u57fa\u672c\u548c\u73b0\u6709\u7684\u529f\u80fd\u63d2\u4ef6\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"\u3010\u670d\u52a1\u5668\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{15-16}","{15-16}":!0},'private static TcpDmtpService GetTcpDmtpService()\n{\n    var service = new TcpDmtpService();\n\n    var config = new TouchSocketConfig()//\u914d\u7f6e\n           .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n           .ConfigureContainer(a =>\n           {\n               a.AddConsoleLogger();\n\n               a.AddDmtpRouteService();//\u6dfb\u52a0\u8def\u7531\u7b56\u7565\n           })\n           .ConfigurePlugins(a =>\n           {\n               a.UseSimpleDmtpRpc()\n               .RegisterRpc(new MyServer());\n           })\n           .SetVerifyToken("File");//\u8fde\u63a5\u9a8c\u8bc1\u53e3\u4ee4\u3002\n\n    service.Setup(config)\n        .Start();\n    service.Logger.Info("\u670d\u52a1\u5668\u6210\u529f\u542f\u52a8");\n    return service;\n}\n')),(0,a.kt)("p",null,"\u3010\u5ba2\u6237\u7aef\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{12}","{12}":!0},'private static TcpDmtpClient GetTcpDmtpClient()\n{\n    var client = new TouchSocketConfig()\n           .SetRemoteIPHost("127.0.0.1:7789")\n           .SetVerifyToken("File")\n           .ConfigureContainer(a =>\n           {\n               a.AddConsoleLogger();\n           })\n           .ConfigurePlugins(a =>\n           {\n               a.UseSimpleDmtpRpc();\n\n               a.UseDmtpHeartbeat()//\u4f7f\u7528Dmtp\u5fc3\u8df3\n               .SetTick(TimeSpan.FromSeconds(3))\n               .SetMaxFailCount(3);\n           })\n           .BuildWithTcpDmtpClient();\n\n    client.Logger.Info("\u8fde\u63a5\u6210\u529f");\n    return client;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'static void Main(string[] args)\n{\n    var service = GetTcpDmtpService();\n    var client = GetTcpDmtpClient();\n\n    while (true)\n    {\n        string methodName = Console.ReadLine();\n        var actor = client.GetSimpleDmtpRpcActor();\n\n        try\n        {\n            actor.Invoke(methodName);\n            Console.WriteLine("\u8c03\u7528\u6210\u529f");\n        }\n        catch (Exception ex)\n        {\n            Console.WriteLine(ex.Message);\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Dmtp/CustomDmtpActorConsoleApp"},"\u672c\u6587\u793a\u4f8bDemo")))}s.isMDXComponent=!0}}]);