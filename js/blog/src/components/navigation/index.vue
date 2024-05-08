<script setup>
</script>

<template>
  <div class="navigation">
    <div class="versionHeart">
      <div>首页</div>
      <div>文章</div>
      <div>友链</div>
      <div>关于</div>
    </div>
  </div>
</template>

<style>
.navigation {
  background-color: rgb(247, 247, 247);
}
.versionHeart {
  width: 960px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
.versionHeart>div {
  line-height: 100px;
  color: rgb(42, 103, 228);
  font-size: 17px;
  font-weight: 400;
 
}
.versionHeart>div::after {
 content: "";
 display: block;
 background-color: rgb(42, 103, 228);
 width: 100%;
 height: 4px;
 margin-top: -30px;
 border-radius: 5px;
}
</style>