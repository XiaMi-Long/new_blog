<script setup lang="ts">
import { IosSearch } from '@vicons/ionicons4'

// function title(value:string) {
//   accptTitle = value
// }
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
        <div class="context">
          <div>如何布置进行洛琪希女朋友的攻略</div>
          <div>人的脆弱和坚强都超乎自己的想象。</div>
          <div>有时，我可能脆弱得一句话就泪流满面</div>
          <div>有时，也发现自己咬着牙走了很长的路</div>
          <div>我们的人生就是：为了某些瞬间活着</div>
          <div>我们无法判断某个瞬间的价值 直到这个瞬间成为永恒</div>
          <div>那像大西洋一样蔚蓝的眼睛，使我像泰坦尼克号般不受控制地沉溺其中</div>
          <div>樱花飘落的速度，每秒五厘米。</div>
          <div>就算我们来往一千条信息，心却可能仅仅接近一厘米而已</div>
          <div>隐约雷鸣，阴霾天空，但盼风雨来，能留你在此</div>
          <div>隐约雷鸣，阴霾天空，即使天无雨，我亦留此地</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  height: 120vh;
  width: 100vw;

  background-color: rgb(227, 227, 227);
  position: absolute;

  .content-main {
    .main {
      width: 960px;

      background-color: rgb(240, 240, 240);

      padding: 20px 20px;
      margin: 0 auto;

      box-sizing: border-box;
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
        width: 960px;

        display: flex;
        flex-direction: column;

        div {
          height: 74px;
          line-height: 74px;

          border-bottom: 3px solid rgb(229, 229, 229);

          font-size: 19px;
          font-weight: 400;

          letter-spacing: 2px;

          &:before {
            content: '';
            display: block;
            background: rgb(165, 214, 63);

            width: 10px;
            height: 10px;

            float: left;
            border-radius: 50%;

            margin: 33px 5px 0px 5px;
          }
        }
      }
    }
  }
}
</style>
