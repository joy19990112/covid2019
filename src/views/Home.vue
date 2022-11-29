<template>
  <div class="home">
    <Header />
    <Info :infoData="infoData" />
    <CaseNum :statisticsLiat="statisticsLiat" :modifyTime="modifyTime" />
    <Map />
    <TreeChart />
    <News :newsData="newsData" />
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
    return {
      infoData: {},
      caseNumData: {},
      newsData: [],
    };
  },
  created() {
    this.$store.dispatch(
      "ncovaDataStatistics/ncovaDataStatistics/queryStatisticsInfo"
    );
  },
  computed: {
    ...mapState("ncovaDataStatistics/ncovaDataStatistics", [
      "modifyTime",
      "statisticsLiat",
    ]),
  },
};
</script>
<style scoped>
</style>
