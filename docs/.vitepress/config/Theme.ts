import {DefaultTheme} from 'vitepress/types/default-theme';
import * as process from "process";
import {EProjectEnv} from "../../util/GetProjectEnv";


const getMessage = () => {
    if (process.env.ENVIRONMENT === EProjectEnv.DEV || process.env.ENVIRONMENT === EProjectEnv.PROD_Alibaba) {
        return `<img src='/images/police.png' style='width: 16px;height: 16px;display: inline-block;vertical-align: middle;' alt='China'/><a href='https://beian.mps.gov.cn/#/query/webSearch?code=42011102005514' rel='noreferrer' target='_blank'> 鄂公网安备42011102005514</a> <a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">鄂ICP备2024076957号-1</a>`;
    }
    return ``
}

const getCopyRight = () => {
    let base = process.env.ENVIRONMENT === EProjectEnv.PROD_GITHUB ? '/Frontier-Pulse/':'';
    return `Copyright © ${new Date().getUTCFullYear()} <img src="${base}images/license.png" alt="" style='width: 16px;height: 16px;display: inline-block;vertical-align: middle;'/> CC-BY-4.0 license`
}

const themeConfig: DefaultTheme.Config = {
    footer: {
        message: getMessage(),
        copyright: getCopyRight()
    },
    nav: [
        {text: '首页', link: '/'},
        {text: '独立文章', link: '/article/'},
        {text: 'Examples', link: '/markdown-examples'}
    ],
    sidebar: {
        '/': [
            {
                text: ' asd222',
                items: [
                    {text: '1111', link: '/markdown-examples'},
                    {text: '2222', link: '/api-examples'}
                ]
            }
        ],
        '/article/HTML/': [
            {
                text: 'HTML',
                items: [
                    {text: '啊实打实', link: '/markdown-examples'},
                    {text: '啊萨达', link: '/api-examples'}
                ]
            },
            {
                text: 'HTML2',
                items: [
                    {text: ' 萨达', link: '/markdown-examples'},
                    {text: '啊萨达', link: '/api-examples'}
                ]
            }
        ]
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/vuejs/vitepress'}]
};
export default themeConfig;
