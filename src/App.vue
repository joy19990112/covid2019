<template>
  <div id="app">
    <router-view></router-view>
    <!-- <bottomNav class="fixed bottom-0 left-0" style="z-index: 1000"></bottomNav> -->
  </div>
</template>
<script>
const bottomNav = () => import("@/components/common/bottomNav");

export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    bottomNav,
  },
};
</script>

<style lang="less">
</style>
