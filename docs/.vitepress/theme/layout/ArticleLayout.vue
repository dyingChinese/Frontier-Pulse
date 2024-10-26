<template>
  <!-- 您可以在这里添加自定义的布局元素 -->
  <div class="article-layout" :class="frontmatter.pageClass">

      <VPNav/>
      <!--    <div class="container top-tip">-->
      <!--      <Card/>-->
      <!--      <Card/>-->
      <!--      <Card/>-->
      <!--      <el-divider/>-->
      <!--    </div>-->
      <div class="article-layout-list">
        <ArticleLayoutList :posts="posts"/>
      </div>

  </div>
</template>

<script setup lang="ts">
import {Content, useData, useRoute, withBase} from "vitepress";

import VPNav from './theme-default/components/VPNav.vue'
import {data as posts} from './posts.data.js'
import ArticleLayoutList from "../customTheme/components/ArticleLayoutList.vue";
import CustomPostPage from "../customTheme/components/CustomPostPage.vue";

const {frontmatter} = useData()


</script>

<style lang="scss" scoped>

.VPContent {
  flex-grow: 1;
  flex-shrink: 0;
  margin: var(--vp-layout-top-height, 0px) auto 0;
  width: 100%;
}

.VPContent.is-home {
  width: 100%;
  max-width: 100%;
}

.VPContent.has-sidebar {
  margin: 0;
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: var(--vp-nav-height);
  }

  .VPContent.has-sidebar {
    margin: var(--vp-layout-top-height, 0px) 0 0;
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2);
    padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}

.container {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--cus-color-bg);
  border-radius: 10px;
}

.top-tip {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

}

@media (max-width: 960px) {
  .top-tip {
    grid-template-columns: 1fr;
  }
}

.article-layout-list {
  margin: 0 10em;
  padding: 20px;
  @media (max-width: 960px) {
    margin: 0;
  }
}

</style>
