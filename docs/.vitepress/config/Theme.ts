import { DefaultTheme } from 'vitepress/types/default-theme';

const themeConfig: DefaultTheme.Config = {
	footer: {
		message:"这是一个自定义的页脚",
		copyright: `Copyright © ${new Date().getUTCFullYear()} <img src="/images/license.png" alt="" style='width: 16px;height: 16px;display: inline-block;vertical-align: middle;'/> CC-BY-4.0 license`
	},
	nav: [
		{ text: 'Home', link: '/' },
		{ text: 'Article', link: '/article/' },
		{ text: 'Examples', link: '/markdown-examples' }
	],
	sidebar: {
		'/': [
			{
				text: ' asd222',
				items: [
					{ text: '1111', link: '/markdown-examples' },
					{ text: '2222', link: '/api-examples' }
				]
			}
		],
		'/article/HTML/': [
			{
				text: 'HTML',
				items: [
					{ text: '啊实打实', link: '/markdown-examples' },
					{ text: '啊萨达', link: '/api-examples' }
				]
			},
			{
				text: 'HTML2',
				items: [
					{ text: ' 萨达', link: '/markdown-examples' },
					{ text: '啊萨达', link: '/api-examples' }
				]
			}
		]
	},
	socialLinks: [{ icon: 'github', link: 'https://github.com/dyingChinese/Frontier-Pulse/tree/gh-pages' }]
};
export default themeConfig;
