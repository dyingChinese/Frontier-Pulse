<script setup lang="ts">
 import {useData} from "vitepress";

 const {page, title, description} = useData();
</script>

<template>
  <div class="paper-excerpt">
    <p class="excerpt">
      <span style="font-weight: bold">摘要: </span><slot class="excerpt">Default slot content</slot>
    </p>
    <div class="paper-tag">
      <el-tag type="info" v-for="tag in page.frontmatter.tags">{{tag}}</el-tag>
    </div>

  </div>
</template>

<style scoped>
.paper-excerpt {
  width: 100%;
  padding: 1rem;

  .excerpt {
    text-indent: hanging;
    text-shadow: #2e2e32;
    font-weight: 200;
  }
}

.paper-tag{
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>
