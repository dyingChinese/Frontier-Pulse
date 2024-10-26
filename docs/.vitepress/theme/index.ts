// https://vitepress.dev/guide/custom-theme

import type {Theme} from 'vitepress';
import type {Component} from 'vue';
import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'


import CustomLayout from "./layout/CustomLayout.vue";
import ArticleExcerpt from "./customTheme/components/ArticleExcerpt.vue";

import "./customTheme/style/index.scss";

interface IModulesType {
    [k: string]: Component;
}

export default {
    extends: DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({app, router, siteData}) {
        // console.log(app,router);
        // @ts-ignore
        // const modules:IModulesType[] = import.meta.glob("./layout/*.vue",{ eager: true });
        // for (const [key, component] of Object.entries(modules)) {
        //   app.component(key, component);
        // }
        // app.component("ArticleLayout", ArticleLayout);
        app.use(ElementPlus);
        app.component("ArticleExcerpt", ArticleExcerpt);
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
} satisfies Theme;
