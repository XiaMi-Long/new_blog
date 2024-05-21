<script setup lang="ts">
import { ref } from 'vue';
import { IosSearch } from '@vicons/ionicons4'

const context = ref([
  { paragraph: '如何布置进行洛琪希女朋友的攻略', selected: true },
  { paragraph: '人的脆弱和坚强都超乎自己的想象', selected: false },
  { paragraph: '有时，我可能脆弱得一句话就泪流满面', selected: false },
  { paragraph: '有时，也发现自己咬着牙走了很长的路', selected: false },
  { paragraph: '我们的人生就是：为了某些瞬间活着', selected: false },
  { paragraph: '我们无法判断某个瞬间的价值 直到这个瞬间成为永恒', selected: false },
  { paragraph: '那像大西洋一样蔚蓝的眼睛，使我像泰坦尼克号般不受控制地沉溺其中', selected: false },
  { paragraph: '樱花飘落的速度，每秒五厘米。', selected: false },
  { paragraph: '就算我们来往一千条信息，心却可能仅仅接近一厘米而已', selected: false },
  { paragraph: '隐约雷鸣，阴霾天空，但盼风雨来，能留你在此', selected: false },
  { paragraph: '隐约雷鸣，阴霾天空，即使天无雨，我亦留此地', selected: false },
])

const change_paragraph = function(value:any) {
  console.log(value);
  context.value.forEach(item => {
    item.selected = (item.paragraph === value)
  })
}
</script>

<template>
  <div class="container">
    <div class="content-main">
      <div class="main">
        <div class="search">
          <div class="search-main">
            论如何找到女朋友的自我修养, 答：就算来往一千条信息，心却可能仅仅接近一厘米而已
          </div>
          <n-icon size="50">
            <IosSearch />
          </n-icon>
        </div>
         <div class="context" v-for="(item, index) in context" :key="index">
          <div @click="change_paragraph(item.paragraph)" :class="{ active: item.selected }">{{  item.paragraph }}</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {

  box-sizing: border-box;

  background-color: rgb(227, 227, 227);

  .content-main {
    .main {
      width: 960px;

      background-color: rgb(240, 240, 240);

      padding: 20px 20px 0px 20px;
      margin: 0 auto;

      overflow: hidden;

      .search {
        height: 66px;
        background-color: white;

        .search-main {
          line-height: 66px;

          font-size: 16px;
          font-weight: 400;

          margin-left: 10px;
          width: 70%;
        }

        .n-icon {
          float: right;
          margin-top: -55px;
        }
      }

      .context {
        box-sizing: border-box;
        width: 960px;

        display: flex;
        flex-direction: column;

        div {
          // height: 74px;
          line-height: 70px;

          border-bottom: 3px solid rgb(229, 229, 229);

          font-size: 19px;
          font-weight: 400;

          letter-spacing: 2px;

          position: relative; 

          &:before {
            content: '';
            display: block;
            background: rgb(165, 214, 63);

            width: 10px;
            height: 10px;

            float: left;
            border-radius: 50%;

            margin: 33px 5px 0px 5px;

            margin-right: 15px;
          }
        }

        .active {
          border-bottom: 3px solid rgba(212, 48, 48, 1);
          position: relative;
;
          &:before {
            content: '';
            display: block;
            background:  rgba(255, 87, 51, 1);
;

            width: 10px;
            height: 10px;

            float: left;
            border-radius: 50%;

            margin: 33px 5px 0px 5px;

            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
