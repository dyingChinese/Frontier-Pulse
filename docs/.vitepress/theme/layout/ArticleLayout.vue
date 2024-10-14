<template>
  <!-- 您可以在这里添加自定义的布局元素 -->
  <div class="article-layout"  :class="frontmatter.pageClass">
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav />

    <div class="VPContent" id="VPContent" :class="{'has-sidebar': hasSidebar}">
      <ul>
        <li v-for="post in posts" :key="post.url">
          {{ post.frontmatter.desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCloseSidebarOnEscape, useSidebar } from './theme-default/composables/sidebar'
import { computed, provide, useSlots, watch } from "vue";
import { Content, useData,useRoute } from "vitepress";

import VPBackdrop from './theme-default/components/VPBackdrop.vue'
import VPNav from './theme-default/components/VPNav.vue'
import VPSkipLink from './theme-default/components/VPSkipLink.vue'
import { data as posts } from './posts.data.js'


console.log(posts);


const { frontmatter } = useData()
const {
  isOpen: isSidebarOpen,
  close: closeSidebar,
  hasSidebar:hasSidebar
} = useSidebar()
const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)



const slots = useSlots()
const heroImageSlotExists = computed(() => !!slots['home-hero-image'])

provide('hero-image-slot-exists', heroImageSlotExists)
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
</style>
