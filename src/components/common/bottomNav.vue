<template>
  <div class="flex justify-between">
    <div v-for="(item, index) in bottomMenuList" :key="index">
      <div class="w-36">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      active: 0,
      bottomMenuList: [
        {
          name: "国内",
          router: "/Home",
          icon_width: 24,
          iconUrl: "home-o",
        },
        {
          name: "国外",
          router: "/salesList",
          icon_width: 24,
          iconUrl: "friends-o",
        },
        {
          name: "搜索",
          router: "/account",
          icon_width: 24,
          iconUrl: "search",
        },
      ],
    };
  },

  created() {},
  mounted() {},
  methods: {},
  computed: {},
};
</script>
<style scoped>
</style>