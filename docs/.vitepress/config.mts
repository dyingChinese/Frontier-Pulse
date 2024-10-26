import {defineConfig} from 'vitepress';
import themeConfig from './config/Theme';
import ViteConfig from './config/Vite';
import MarkdownConfig from './config/MarkdownConfig';
import {getProjectEnv} from '../util/GetProjectEnv';
import headConfig from "./config/headConfig";

const env = getProjectEnv();

process.env.IENV = env;
export default defineConfig({
    head: headConfig,
    base: env.VITE_USER_BASE,
    // title: "Frontier Pulse",
    title: '子网枢纽',
    description: '前沿脉动｜个人前端生涯分享',
    themeConfig: themeConfig,
    markdown: MarkdownConfig,
    vite: ViteConfig,
    plugins: [],
    transformHead({ assets }) {
        // 相应地调整正则表达式以匹配字体
        const myFontFile = assets.find(file => /HarmonyOS_Sans_SC\.\w+\.woff2/)
        if (myFontFile) {
            return [
                [
                    'link',
                    {
                        rel: 'preload',
                        href: myFontFile,
                        as: 'font',
                        type: 'font/woff2',
                        crossorigin: ''
                    }
                ]
            ]
        }
    }
    // outDir: "../public",
});
