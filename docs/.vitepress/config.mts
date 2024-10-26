import { defineConfig } from 'vitepress';
import themeConfig from './config/Theme';
import ViteConfig from './config/Vite';
import MarkdownConfig from './config/MarkdownConfig';

export default defineConfig({
	base: '/Frontier-Pulse/',
	// title: "Frontier Pulse",
	title: '子网枢纽',
	description: '前沿脉动｜个人前端生涯分享',
	themeConfig: themeConfig,
	markdown: MarkdownConfig,
	vite: ViteConfig,
	plugins: [],
	// outDir: "../public",
});
