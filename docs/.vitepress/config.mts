
import { defineConfig } from "vitepress";
// const a = createContentLoader("article/*.md")
// console.log(a);
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontier Pulse",
  description: "前沿脉动｜个人前端生涯分享",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "独立文章", link: "/article/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {

  }
});
