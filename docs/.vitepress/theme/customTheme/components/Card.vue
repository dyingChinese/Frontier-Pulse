<template>

  <div class="card">
    <div class="wrapper">
      <div class="date"></div>
      <img class="alert"
           :src="image"
           alt="placeholder"/>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <span class=bottom>
        <span><el-icon><Clock/></el-icon> {{ date }}</span>
      </span>
    </div>
  </div>

</template>

<script setup lang="ts">
import {withDefaults} from 'vue';

//利用接口声明类型
interface CardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
  frontmatter?: object;
}

const props = withDefaults(defineProps<CardProps>(), {
  url: '#',
  frontmatter: () => ({}),
  title: 'Card Title',
  description: 'Card DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard DescriptioCard Description',
  date: '2021-09-01',
  image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
})


function getFormattedDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

</script>


<style lang="scss" scoped>
.card {
  background-color: var(--cus-base-bg);
  min-height: 1rem;
  min-width: 1rem;
  width: 100%;
  max-height: 20rem;
  border-radius: 0.25rem;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: var(--cus-shadow-gray);
  position: relative;

  &:hover {
    background: var(--cus-code-bg-soft);
    box-shadow: var(--cus-shadow-hover);
  }

  img.alert {
    object-fit: cover;
    width: 100%;
    height: 170px;
    border-radius: .3em;
  }
}

.wrapper {
  padding: .2rem;
}

.date {
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  background: white;
  color: var(--cus-base-bg);
  right: 20px;
  top: 20px;
  border-radius: 50%;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出的文本 */
  text-overflow: ellipsis; /* 显示省略号来代表被隐藏的文本 */
  text-indent: hanging;
  color: var(--cus-text-primary);
}

p {
  font-size: .8rem;
  color: var(--cus-text-secondary);
  margin: 0;
  display: -webkit-box; /* 必须结合使用，适用于旧版Webkit浏览器 */
  -webkit-line-clamp: 3; /* 限制文本行数为3行 */
  -webkit-box-orient: vertical; /* 必须结合使用，设置文本垂直排列 */
  overflow: hidden; /* 隐藏溢出的文本 */
  text-overflow: ellipsis; /* 显示省略号来代表被隐藏的文本 */
}
</style>
