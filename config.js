// 配置文件
module.exports = {
  // 需要手动填写
  cookie: '_ga=GA1.2.1718224477.1624473272; MONITOR_WEB_ID=384f27dc-0bed-49bf-bf61-5a208a9b970d; _gid=GA1.2.364858510.1641575797; passport_csrf_token_default=8b1658ad7127896226f4faa3362725ca; passport_csrf_token=8b1658ad7127896226f4faa3362725ca; _tea_utm_cache_2018=undefined; passport_auth_status=f15cd83c09a610e56861aae216bfa6fb,; passport_auth_status_ss=f15cd83c09a610e56861aae216bfa6fb,; sid_guard=28112c8b82c58c571cf2f0e2976d5446|1641575825|5184000|Tue,+08-Mar-2022+17:17:05+GMT; uid_tt=2718e20babe5753cd816c425b8df2258; uid_tt_ss=2718e20babe5753cd816c425b8df2258; sid_tt=28112c8b82c58c571cf2f0e2976d5446; sessionid=28112c8b82c58c571cf2f0e2976d5446; sessionid_ss=28112c8b82c58c571cf2f0e2976d5446; sid_ucp_v1=1.0.0-KGFkYTZmMWFmOWQzYzc2YjNjYTk4NmRjYzVjNWQwZWQ2MDQ2NDRmZTUKFwje69Heh4zMBRCR6-GOBhiwFDgCQPEHGgJsZiIgMjgxMTJjOGI4MmM1OGM1NzFjZjJmMGUyOTc2ZDU0NDY; ssid_ucp_v1=1.0.0-KGFkYTZmMWFmOWQzYzc2YjNjYTk4NmRjYzVjNWQwZWQ2MDQ2NDRmZTUKFwje69Heh4zMBRCR6-GOBhiwFDgCQPEHGgJsZiIgMjgxMTJjOGI4MmM1OGM1NzFjZjJmMGUyOTc2ZDU0NDY; n_mh=IHbT_k6UPxuqdpeeuf1jKxd35mROMBVSuGA3L0VN3WE',
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
    // 查寻当前矿石余额
    // 抽奖
    draw: '/growth_api/v1/lottery/draw',
    // 查询今天沾过喜气没
    getDipLuckyStatus: '/growth_api/v1/lottery_lucky/my_lucky',
    // 沾喜气
    dipLucky: '/growth_api/v1/lottery_lucky/dip_lucky'
  }
}
