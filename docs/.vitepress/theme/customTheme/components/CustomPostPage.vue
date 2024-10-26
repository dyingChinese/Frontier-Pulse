<script setup lang="ts">
import {Content, useData} from "vitepress";
import VPNav from "../../layout/theme-default/components/VPNav.vue";

const {page, title, description} = useData();
console.log("asda", page, title, description);
</script>

<template>
  <VPNav/>
  <div class="content-container custom-post-page">
    <Content/>
  </div>
</template>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 10rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
</style>
