'user strict';
//国外新冠信息
const state = {
  ncovaInfo: {}
};
const mutations = {
  setNcovaInfo(state, ncovaInfo) {
    state.ncovaInfo = {
      ...state.ncovaInfo,
      ...ncovaInfo
    };
  }
};
const actions = {
  getNcovaInfo(context, obj) {
    context.commit('setNcovaInfo', obj)
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};

