import {defineConfig} from 'vitepress';
import themeConfig from './config/Theme';
import ViteConfig from './config/Vite';
import MarkdownConfig from './config/MarkdownConfig';
import {getProjectEnv} from '../util/GetProjectEnv';

const env = getProjectEnv();

export default defineConfig({
    base: env.VITE_USER_BASE,
    // title: "Frontier Pulse",
    title: '子网枢纽',
    description: '前沿脉动｜个人前端生涯分享',
    themeConfig: themeConfig,
    markdown: MarkdownConfig,
    vite: ViteConfig,
    plugins: [],
    // outDir: "../public",
});
