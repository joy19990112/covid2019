<template>
  <div class="home">
    <!-- 顶部背景图片 -->
    <Header />
    <!-- 新冠信息 -->
    <!-- <Info :infoData="infoData" /> -->
    <!-- 新增信息 -->
    <CaseNum :statisticsLiat="statisticsLiat" :modifyTime="modifyTime" />
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
import Header from "../components/Header";
import Info from "../components/Info";
import CaseNum from "../components/CaseNum";
import Map from "../components/Map";
import TreeChart from "../components/TreeChart";
import News from "../components/News";
import Footer from "../components/Footer";

export default {
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
    return {};
  },
  created() {
    // 调用增长数据、最新新闻
    this.$store.dispatch(
      "ncovaDataStatistics/ncovaDataStatistics/queryStatisticsInfo"
    );
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
