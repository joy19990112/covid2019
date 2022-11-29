'user strict';
import api from "@/api/index"
//疫情数据统计
const state = {
  modifyTime: 0, //截止日期
  statisticsLiat: [] //总数
};
const mutations = {
  setModifyTime(state, str) {
    state.modifyTime = str
  },
  setStatisticsList(state, list) {
    state.statisticsLiat = list
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
          // 截止日期
          context.commit('setModifyTime', res.newslist[0].desc.modifyTime)
          // 总数
          const caseNumDataList = [
            {
              title: '现存确诊',
              addVal: res.newslist[0].desc.currentConfirmedIncr,
              totalVal: res.newslist[0].desc.currentConfirmedCount,
            },
            {
              title: '现存疑似',
              addVal: res.newslist[0].desc.suspectedIncr,
              totalVal: res.newslist[0].desc.suspectedCount,
            },
            {
              title: '现存重症',
              addVal: res.newslist[0].desc.seriousIncr,
              totalVal: res.newslist[0].desc.seriousCount,
            },
            {
              title: '累计确诊',
              addVal: res.newslist[0].desc.confirmedIncr,
              totalVal: res.newslist[0].desc.confirmedCount,
            },
            {
              title: '累计死亡',
              addVal: res.newslist[0].desc.deadIncr,
              totalVal: res.newslist[0].desc.deadCount,
            },
            {
              title: '累计治愈',
              addVal: res.newslist[0].desc.curedIncr,
              totalVal: res.newslist[0].desc.curedCount,
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

