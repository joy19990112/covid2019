<template>
  <div class="case-num">
    <div class="title">
      <span
        >截至
        {{ $utils.dateFormaterDate(modifyTime, "YYYY/MM/DD") }}
        全国数据统计</span
      >
    </div>
    <div class="item">
      <CaseNumItem
        v-bind="$attrs"
        v-on="$listeners"
        v-for="(item, index) in statisticsLiat"
        :key="index"
        :caseNumData="item"
      ></CaseNumItem>
    </div>
  </div>
</template>

<script>
import CaseNumItem from "./CaseNumItem.vue";
export default {
  name: "CaseNum",
  props: {
    statisticsLiat: {
      type: Array,
      default: () => {},
    },
    modifyTime: {
      type: Number,
      default: 0,
    },
  },
  components: {
    CaseNumItem,
  },
  mounted() {
    console.log("this.$attrs B", this.$attrs, this.$listeners);
  },
  methods: {},
};
</script>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.case-num {
  padding: 0.16rem;
  background: #fff;
}
.title {
  margin: -0.16rem 0 0;
  font-size: 0.12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.08rem 0 0.07rem;
  line-height: 0.24rem;
}
</style>