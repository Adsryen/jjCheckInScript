// 配置文件
module.exports = {
  // 需要手动填写
  cookie: '_ga=GA1.2.704776625.1640487702; MONITOR_WEB_ID=c5d533be-fd08-4cbe-8095-a58c9cc4fad1; passport_csrf_token_default=0b65d43de96a7026639d1c12e5c7fd95; passport_csrf_token=0b65d43de96a7026639d1c12e5c7fd95; passport_auth_status=79213aa0d2b135ecb26f7e4a6c5b5a19,; passport_auth_status_ss=79213aa0d2b135ecb26f7e4a6c5b5a19,; sid_guard=ebe2b6bd3bbecaaf542a88061a406def|1640487730|5184000|Thu,+24-Feb-2022+03:02:10+GMT; uid_tt=f6ed78d297afcc5d70489842dfc07f77; uid_tt_ss=f6ed78d297afcc5d70489842dfc07f77; sid_tt=ebe2b6bd3bbecaaf542a88061a406def; sessionid=ebe2b6bd3bbecaaf542a88061a406def; sessionid_ss=ebe2b6bd3bbecaaf542a88061a406def; sid_ucp_v1=1.0.0-KDEwY2U1MDk0OTI4MWY2MDgzNzhhODJhMWQ3ZmM4OGI1YWNlODk3NTIKFwi3s_DA_fWVBBCytp-OBhiwFDgCQPEHGgJsZiIgZWJlMmI2YmQzYmJlY2FhZjU0MmE4ODA2MWE0MDZkZWY; ssid_ucp_v1=1.0.0-KDEwY2U1MDk0OTI4MWY2MDgzNzhhODJhMWQ3ZmM4OGI1YWNlODk3NTIKFwi3s_DA_fWVBBCytp-OBhiwFDgCQPEHGgJsZiIgZWJlMmI2YmQzYmJlY2FhZjU0MmE4ODA2MWE0MDZkZWY; n_mh=DI-bDWSdI2DCP4p4nGOcOxE4dlMg2yJnXXb9pGxWTSA; _gid=GA1.2.553389825.1641259470; _tea_utm_cache_2608={"utm_source":"gold_browser_extension"}',
  aid: '2608',
  uuid: '7045840987474527755',
  // 请求地址
  baseUrl: 'https://api.juejin.cn',
  // api地址
  api: {
    // 签到
    checkIn: '/growth_api/v1/check_in',
    // 查询签到
    getCheckStatus: 'https://api.juejin.cn/growth_api/v1/get_today_status',
    // 查询抽奖
    getlotteryStatus: '/growth_api/v1/lottery_config/get',
    // 抽奖
    lottery: '/growth_api/v1/lottery/draw',
    // 沾喜气
  }
}