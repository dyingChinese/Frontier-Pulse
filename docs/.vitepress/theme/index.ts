// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import type { Component } from "vue";
import DefaultTheme from "vitepress/theme";
import ArticleLayout from "./layout/articleLayout.vue";
import "./style.css";
import DefaultLayout from "./layout/DefaultLayout.vue";

interface IModulesType {
  [k: string]: Component;
}

export default {
  extends: DefaultTheme,
  Layout: DefaultLayout,
    // return h(DefaultTheme.Layout, null, {
    // // https://vitepress.dev/guide/extending-default-theme#layout-slots
    // })
    // DefaultLayout: DefaultTheme.Layout,
    // ArticleLayout: ArticleLayout,
  
  enhanceApp({ app, router, siteData }) {
    // console.log(app,router);
    const modules:IModulesType[] = import.meta.glob("./layout/*.vue",{ eager: true });

    for (const [key, component] of Object.entries(modules)) {
      app.component(key, component);
    }

    // app.component("ArticleLayout", ArticleLayout);
  },
} satisfies Theme;
