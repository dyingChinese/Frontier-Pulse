<template>
  <div class="typography">
    <ListItem v-for="post in filterPosts" :key="post.url" :post="post"/>
    <el-pagination background layout="prev, pager, next" :total="pagination.total"
                   @current-change="handleCurrentChange"/>
  </div>
</template>


<script setup lang="ts">
import {defineProps, reactive, ref} from "vue";
import ListItem from "./ListItem.vue";


const props = defineProps({
  posts: Array,
});

const filterPosts = ref(props.posts);

const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: props.posts.length,
});

const handleCurrentChange = (val: number) => {
  pagination.currentPage = val;
  filterPosts.value = props.posts.slice((val - 1) * pagination.pageSize, val * pagination.pageSize);
}

console.log("阿圣诞节哦啊死", props);
</script>
<style scoped>

@font-face {
  font-family: 'HarmonyOS Sans SC Bold';
  src: url('/fonts/HarmonyOS_Sans_SC_Bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.typography {
  font-family: 'HarmonyOS Sans SC Bold', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
}

:deep(.el-pagination) {
  .btn-prev, .btn-next {
    background: var(--cus-color-brand-3) !important;
    color: var(--cus-base-white) !important;
  }

  .el-pager {
    .number {
      background: var(--cus-color-green-3) !important;
      color: var(--cus-color-blue-soft) !important;
    }

    .active {
      color: var(--cus-color-brand-3) !important;
    }
  }
}
</style>
