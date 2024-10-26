<template>
  <div class="contain" @click="handleClick">
    <div class="wrapper">
      <span class="title">{{ post.title }}</span>
      <div class="excerpt" v-html="post.excerpt"/>
      <div class="footer">
        <span class="date"><el-icon><Clock/></el-icon> {{ post.date.string }}</span>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
  <el-divider/>
</template>


<script setup lang="ts">
import {defineProps, getCurrentInstance} from "vue";
import {ContentData, useRouter, withBase} from 'vitepress';


const props = defineProps({
  post: {
    type: Object as () => ContentData,
    required: true,
  }
});
const router = useRouter();
const handleClick = () => {
  router.go(withBase(props.post.url))
}
</script>
<style lang="scss" scoped>

.dark .contain {
  border: 1px solid #000000;
  box-shadow: var(--cus-shadow-indigo);

  &:hover {
    border-color: var(--cus-base-border-hover);
  }
}

.contain {
  padding: 1rem;
  border: 1px solid var(--cus-base-border);
  box-shadow: var(--cus-shadow-gray);

  &:hover {
    border-color: var(--cus-base-border-hover);
    cursor: pointer;
  }

}

.wrapper {

  display: flex;
  flex-direction: column;

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .excerpt {
    font-size: .8rem;
    margin-bottom: 0.5rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .8rem;
    color: var(--cus-text-secondary);

    .date {
      display: flex;
      align-items: center;

      > * {
        margin-right: 0.2rem;
      }
    }
  }


  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tag {
      padding: 0.2rem 0.5rem;
      border-radius: 0.2rem;
      background-color: var(--cus-base-bg);
      color: var(--cus-tag-text);
      font-size: 0.8rem;
    }
  }

}
</style>


