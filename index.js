const axios = require('axios')
const config = require('./config')

axios.defaults.baseURL = config.baseUrl
axios.defaults.headers['cookie'] = config.cookie

/**
 * 查看今天是否已经签到
 *
 * @return {Boolean} 是否签到过 
 */
getCheckStatus = async () => {
  try {
    const { data } = await axios({
      url: config.api.getCheckStatus,
      method: 'get'
    })
    if (data.err_msg === 'success' && data.err_no === 0) {
      return data.data
    } else {
      console.warn('❌ 查询签到失败！')
      throw `getCheckStatus requies error【${data.err_msg}】`
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * 查询免费抽奖次数
 *
 * @return {Boolean} 是否有免费抽奖次数
 */
const getlotteryStatus = async () => {
  try {
    const { data } = await axios({ url: config.api.getlotteryStatus, method: 'get' })
    if (data.err_msg === 'success' && data.err_no === 0) {
      return data.data.free_count === 0
    } else {
      console.warn('❌ 查询免费抽奖失败！')
      throw `getlotteryStatus requies error【${data.err_msg}】`
    }
  } catch (error) {
    console.error(error)
  }
}


/**
 * 抽奖 先查询是否有免费抽奖次数
 *
 */
const draw = async () => {
  const freeCount = await getlotteryStatus()
  if (freeCount) {
    // 没有免费抽奖次数
    console.warn('今日免费抽奖以用完 🥲')
    return
  }

  // 开始抽奖
  const { data } = await axios({ url: config.api.draw, method: 'post' })
  if (data.err_no === 0 && data.err_msg === 'success') {
    console.log(`恭喜你抽到【${data.data.lottery_name}】🎉`)
  } else {
    console.error(`抽奖失败! 🙁【${data.err_msg}】`)
  }
  console.log(data, '----draw')
}


/**
 * 签到
 * 
 */
const checkIn = async () => {
  const checkRes = await getCheckStatus()

  if (checkRes) {
    console.log('今日已经签到 ✅')
    // TODO: 发送邮件
    return
  }

  // 签到
  const { data } = await axios({ url: config.api.checkIn, method: 'post' })
  console.log(data, '-----checkInRes')
  if (data.err_no === 0 && data.err_msg === 'success') {
    console.log('签到成功! 🎉')
    // 签到成功 去抽奖
    draw()
  } else {
    // 签到失败
    console.log(`签到失败 😔:: 【${data.err_msg}】`)
  }
}

checkIn()