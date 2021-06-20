//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.Dependency;

namespace RRQMSocket
{
    /// <summary>
    /// TokenTcp服务配置
    /// </summary>
    public class TokenServerConfig : TcpServerConfig
    {
        /// <summary>
        /// 连接令箭,当为null或空时，重置为默认值“rrqm”
        /// </summary>
        public string VerifyToken
        {
            get { return (string)GetValue(VerifyTokenProperty); }
            set
            {
                SetValue(VerifyTokenProperty, value);
            }
        }

        /// <summary>
        /// 连接令箭,当为null或空时，重置为默认值“rrqm”, 所需类型<see cref="string"/>
        /// </summary>
        public static readonly DependencyProperty VerifyTokenProperty =
            DependencyProperty.Register("VerifyToken", typeof(string), typeof(TokenServerConfig), "rrqm");

        /// <summary>
        /// 验证超时时间,默认为3秒；
        /// </summary>
        public int VerifyTimeout
        {
            get { return (int)GetValue(VerifyTimeoutProperty); }
            set
            {
                SetValue(VerifyTimeoutProperty, value);
            }
        }

        /// <summary>
        /// 验证超时时间,默认为3秒, 所需类型<see cref="int"/>
        /// </summary>
        public static readonly DependencyProperty VerifyTimeoutProperty =
            DependencyProperty.Register("VerifyTimeout", typeof(int), typeof(TokenServerConfig), 3);
    }
}