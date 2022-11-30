import { get } from '../utils/request'

const api = {
  // 国内
  getDataInfo(
    params
  ) {
    return get(
      'http://api.tianapi.com/txapi/ncov/index',
      params
    )
  },
  getCaseNum(
    params
  ) {
    return get(
      'http://api.tianapi.com/txapi/ncovcity/index',
      params
    )
  },
  // 海外肺炎疫情
  getAbroadInfo(
    params
  ) {
    return get(
      'http://api.tianapi.com/txapi/ncovabroad/index',
      params
    )
  },
  // 出行政策
  getTravelPolicy(
    params
  ) {
    return get(
      'http://iwenwiki.com/wapicovid19/query.php',
      params
    )
  },
  // 城市列表清单
  getCityInfo(
    params
  ) {
    return get(
      'http://iwenwiki.com/wapicovid19/citys.php',
      params
    )
  },
}

export default api
