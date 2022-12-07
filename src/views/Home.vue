<template>
  <div class="home">
    <!-- 顶部背景图片 -->
    <Header />
    <!-- 新冠信息 -->
    <!-- <Info :infoData="infoData" /> -->
    <!-- 新增信息 -->
    <CaseNum
      :statisticsLiat="statisticsLiat"
      :modifyTime="modifyTime"
      :test1="test1"
      :test2="test2"
      @getTestOne="getTestOne"
    />
    <!-- 地图 -->
    <Map />
    <!-- 折线图 -->
    <TreeChart />
    <!-- 新闻 -->
    <News :newsDataList="newsDataList" />
    <!-- 底部背景图片 -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import testMixin from "@/mixins/test.js";
import Header from "../components/Header";
import Info from "../components/Info";
import CaseNum from "../components/CaseNum";
import Map from "../components/Map";
import TreeChart from "../components/TreeChart";
import News from "../components/News";
import Footer from "../components/Footer";

export default {
  mixins: [testMixin],
  name: "Home",
  components: {
    Header,
    Info,
    CaseNum,
    Map,
    TreeChart,
    News,
    Footer,
  },
  data() {
    return {
      test1: "test one",
      test2: "test two",
    };
  },
  created() {
    // testMixin方法
    this.getData();
    // 调用增长数据、最新新闻
    this.$store.dispatch(
      "ncovaDataStatistics/ncovaDataStatistics/queryStatisticsInfo"
    );
    // TODO 有次数限制！！！
    // this.$api
    //   .getTravelPolicy({
    //     from: 10309,
    //     to: 10123,
    //     key: "171e165a7d991c5f6ecd5194c54778ef",
    //   })
    //   .then((res) => {
    //     console.log("resmmm", res);
    //   });
  },
  methods: {
    getTestOne(e) {
      console.log("我是孙调用的方法返回的数据:", e);
    },
    getTestTwo() {
      console.log("test two");
    },
  },
  computed: {
    // 更新时间、统计数据、最新新闻
    ...mapState("ncovaDataStatistics/ncovaDataStatistics", [
      "modifyTime",
      "statisticsLiat",
      "newsDataList",
    ]),
  },
};
</script>
<style scoped>
</style>
