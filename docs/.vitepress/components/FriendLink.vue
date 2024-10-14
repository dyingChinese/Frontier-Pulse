<template>
  <div class="friend-link">
    <h2>友情链接</h2>
    <ul>
      <li v-for="link in friendLink" :key="link.title">
        <a :href="link.link" target="_blank">
          <img v-if="link.logo" :src="link.logo" :alt="link.title" />
          <span>{{ link.title }}</span>
        </a>
        <p>{{ link.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    friendLink() {
      return this.$site.themeConfig.friendLink || [];
    }
  }
}
</script>

<style>
.friend-link h2 {
  /* 样式自定义 */
}
.friend-link ul {
  /* 样式自定义 */
}
.friend-link li {
  /* 样式自定义 */
}
.friend-link a {
  /* 样式自定义 */
}
.friend-link img {
  /* 样式自定义 */
}
</style>
