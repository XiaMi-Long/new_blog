<script setup lang="ts">
import navigation from '@/components/navigation/index.vue'
import { GameControllerOutline, GameController } from '@vicons/ionicons5'
import { IosSearch } from '@vicons/ionicons4'
</script>

<template>
  <div class="container">
    <navigation />
    <div class="content-main">
      <div class="left">
        <div>GOLANG</div>
        <div>HTML5</div>
        <div>CSS3</div>
        <div>VUE</div>
        <div>JAVASCRIPT</div>
      </div>
      <div class="main">
        <div class="search">
          <div class="search-main">论如何找到女朋友的自我修养, 答：提高思想觉悟</div>
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
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
body {
  margin: 0px;
  padding: 0px;
}

.container {
  height: 100vh;
  width: 100vw;
  background-color: rgb(227, 227, 227);
  position: absolute
}

.content-main {
  /* display: flex; */
}

.main {
  width: 960px;
  background-color: rgb(240, 240, 240);
  padding: 20px 20px;
  margin: 0 auto;
  box-sizing: border-box;
  /* margin-left: 67px; */
  overflow: hidden;
}

.search {
  height: 66px;
  background-color: white;
}

.search-main {
  line-height: 66px;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
  width: 70%;
}

.n-icon {
  float: right;
  margin-right: 10px;
  margin-top: -55px;
}

.left {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 326px;
  margin-left: 100px;
  margin-top: 20px;
  padding: 5px;
  background-color: white;
}
.left>div {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px dashed black;
  box-sizing: border-box;
  
}
.context {
  width: 960px;
  display: flex;
  flex-direction: column;
 
}

.context>div::before{
  content: "";
  display: block;
  background: rgb(165, 214, 63);
  width: 10px;
  height: 10px;
  float: left;
  border-radius: 50%;
  margin-top: 33px;
  margin-left: 5px;
  margin-right: 5px;
}

.context>div {
  height: 74px;
  line-height: 74px;
  border-bottom: 3px solid rgb(229, 229, 229);
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 2px;
}

.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>