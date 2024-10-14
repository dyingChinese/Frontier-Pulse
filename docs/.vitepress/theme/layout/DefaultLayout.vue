<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import ArticleLayout from "./articleLayout.vue";

const { Layout } = DefaultTheme;
const data = useData();
const { frontmatter, page } = data;
</script>

<template>
  <template v-if="frontmatter.layout === 'ArticleLayout'">
    <ArticleLayout />
  </template>
  <Layout v-else/> 
</template>
