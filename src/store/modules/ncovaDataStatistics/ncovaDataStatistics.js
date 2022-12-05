'user strict';
import api from "@/api/index"
//疫情数据统计
const state = {
  modifyTime: 0, //截止日期
  statisticsLiat: [], //总数
  newsDataList: [] //新闻数据列表
};
const mutations = {
  setModifyTime(state, str) {
    state.modifyTime = str
  },
  setStatisticsList(state, list) {
    state.statisticsLiat = list
  },
  setNewsDataList(state, list) {
    state.newsDataList = list
  }
};
const actions = {
  // 查询新冠信息
  queryStatisticsInfo(context) {
    // 清空信息
    context.commit('setModifyTime', '');
    context.commit('setStatisticsList', []);
    return new Promise((resolve, reject) => {
      api.getDataInfo({
        key: "d7c335f2e7856ec48c1962a99fcc6f98"
      }).then(res => {
        if (res.code == '200') {
          const addData = res.newslist[0].desc
          // 最新新闻
          context.commit('setNewsDataList', res.newslist[0].news)
          // 截止日期
          context.commit('setModifyTime', addData.modifyTime)
          // 总数
          const caseNumDataList = [
            {
              title: '现存确诊',
              addVal: addData.currentConfirmedIncr,
              totalVal: addData.currentConfirmedCount,
            },
            {
              title: '现存疑似',
              addVal: addData.suspectedIncr,
              totalVal: addData.suspectedCount,
            },
            {
              title: '现存重症',
              addVal: addData.seriousIncr,
              totalVal: addData.seriousCount,
            },
            {
              title: '累计确诊',
              addVal: addData.confirmedIncr,
              totalVal: addData.confirmedCount,
            },
            {
              title: '累计死亡',
              addVal: addData.deadIncr,
              totalVal: addData.deadCount,
            },
            {
              title: '累计治愈',
              addVal: addData.curedIncr,
              totalVal: addData.curedCount,
            }
          ]
          context.commit('setStatisticsList', caseNumDataList)
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};

