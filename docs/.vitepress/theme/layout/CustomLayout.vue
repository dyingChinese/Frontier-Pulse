<template>

  <CustomPostPage v-if="frontmatter.layout==='CustomPost' || frontmatter.category==='post'"/>

  <ArticleLayout v-else-if="frontmatter.layout === 'ArticleLayout'"/>

  <Layout v-else-if="frontmatter.layout !== 'ArticleLayout'">
    <Content/>
  </Layout>
</template>


<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import {useData, Content} from "vitepress";
import ArticleLayout from "./ArticleLayout.vue";
import CustomPostPage from "../customTheme/components/CustomPostPage.vue";

const {Layout} = DefaultTheme;
const data = useData();
const {frontmatter} = data;
</script>
<style scoped>

</style>
<script setup lang="ts">
</script>
