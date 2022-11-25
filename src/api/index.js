import { get } from "../utils/request"

const api = {
  // 国内
    getDataInfo(params){
        return get("http://api.tianapi.com/txapi/ncov/index",params);
    },
    getCaseNum(params){
        return get("http://api.tianapi.com/txapi/ncovcity/index",params)
    },
    // 海外肺炎疫情
    getAbroadInfo(params){
      return get("http://api.tianapi.com/txapi/ncovabroad/index",params)
  }
}

export default api;