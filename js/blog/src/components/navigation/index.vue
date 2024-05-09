<script setup>
</script>

<template>
  <div class="navigation">
    <div class="version_heart">
      <div class="title">首页</div>
      <div class="title">文章</div>
      <div class="title">友链</div>
      <div class="title">关于</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.navigation {
  background-color: rgb(247, 247, 247);

  .version_heart {
    width: 960px;
    height: 100px;

    margin: 0 auto;

    display: flex;
    justify-content: space-evenly;

    .title {
      line-height: 100px;
      color: rgb(42, 103, 228);

      font-size: 17px;
      font-weight: 400;

      &:after {
        content: "";
        display: block;
  
        background-color: rgb(42, 103, 228);
        width: 100%;
        height: 4px;
  
        margin-top: -30px;
        border-radius: 5px;
      }
    }
  }
}

.font {
  
}
</style>