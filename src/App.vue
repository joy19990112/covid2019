<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">国内</van-tabbar-item>
      <van-tabbar-item icon="friends-o">国外</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less">
</style>
