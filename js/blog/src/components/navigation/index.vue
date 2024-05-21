<script setup lang="ts">
import { ref, onMounted, shallowRef } from 'vue'
import Home from '@/views/Home/index.vue'
import Article from '@/views/Article/index.vue'
import About from '@/views/About/index.vue'

const titles = ref([
  { name: '首页', selected: true },
  { name: '文章', selected: false },
  { name: '友链', selected: false },
  { name: '关于', selected: false }
])
const chooseComponent = shallowRef()
const emit = defineEmits(['send_title'])

function changeTitle(value:any) {
  console.log(value)
  titles.value.forEach(title => {
    title.selected = (title.name === value)
    console.log('1111', title.selected);
    if (value === '首页') {
      chooseComponent.value = Home
    } 
    else if (value === '文章') {
      chooseComponent.value = Article
    } 
    else if (value === '关于') {
      chooseComponent.value = About
    }
  })
}

onMounted(() => (chooseComponent.value = Home))
</script>

<template>
  <div class="navigation">
    <div class="version_heart">
      <div v-for="title in titles" :key="title.name"  :class="['title', { 'title--selected': title.selected }]" @click="changeTitle(title.name)">
        {{ title.name }}
      </div>
    </div>
  </div>
  
  <component :is="chooseComponent"></component>
</template>

<style lang="scss" scoped>
.navigation {
  background-color: rgb(247, 247, 247);

  .version_heart {
    width: 960px;
    height: 100px;

    margin: 0 auto;

    display: flex;
    justify-content: space-evenly;

    // background-color: brown;

    .title {
      line-height: 100px;
      color: rgb(42, 103, 228);

      font-size: 17px;
      font-weight: 400;
      width: 80px;
      text-align: center;
      // background-color: green;

      cursor: pointer;

      &::after {
        content: '';
        display: none;

        background-color: rgb(42, 103, 228);
        width: 45%;
        height: 4px;

        margin-top: -30px;
        margin-left: 23px;
        border-radius: 5px;

        text-align: center;
      }

      &.title--selected::after {
        display: block;
      }
    }
  }
}
</style>
