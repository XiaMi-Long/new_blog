<script setup lang="ts">
import { shallowRef } from 'vue'
const arr = shallowRef([
  {
    title: '诞生',
    context:
      '我家附近有棵很大的樱花树，到了春天，那棵树上的花瓣，大概也会以每秒五公分的速度飘落，而我则在想，要是春天也能和贵树一起迎接春天的来临该有多好啊'
  },
  {
    title: '博客技术选型',
    context:
      '我喜欢雨，因为它带来天空的味道。你啊！ 就一直那样吧， 总对重要的事情只字不提， 然后摆出一副若无其事的表情， 一直一个人， 过一辈子吧!我的确坠入爱河了，但如果因此变得脆弱，我绝对赢不了在那个人身边的其他大人。所以，我不可以因为恋爱而软弱，应该要藉助爱情的力量让自己变强。'
  },
  {
    title: '贡献者',
    context: '衷心感谢以下朋友对项目的帮助',
  }
])
</script>

<template>
  <div class="container">
    <div class="content-main">
      <div class="main">
        <div class="slot" v-for="(item, index) in arr" :key="index">

          <div class="title">{{ item.title }}</div>

          <div class="context">{{ item.context }}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {

  background-color: rgb(227, 227, 227);


  .content-main {
    .main {
      width: 960px;

      background-color: rgb(240, 240, 240);

      padding: 20px 20px;
      margin: 0 auto;

      box-sizing: border-box;
      overflow: hidden;

      .slot {
        background-color: antiquewhite;
        text-align: center;
        margin-top: 20px;

        .title {
          height: 41px;
          line-height: 41px;
          height: 100%;
          background-color: rgba(0, 186, 173, 1);
          color: white;
        }

        .context {
          background-color: white;
          font-size: 16px;
          font-weight: 400;
          line-height: 45px;
        }
      }
    }
  }
}
</style>
