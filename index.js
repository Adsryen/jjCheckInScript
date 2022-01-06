const axios = require('axios')
const config = require('./config')
axios.defaults.baseURL = config.baseUrl
/**
 * 签到
 * 
 */
const checkIn = async () => {
}

const getCheckStatus = async () => {
  const aid = config.aid
  const uuid = config.uuid
  const {data} = await axios({
    url: config.api.getCheckStatus,
    method: 'get',
    data: {
      aid,
      uuid
    },
    headers: {
      Coolie: config.cookie
    },
  })
  console.log(data, '---checkStatus')
}
getCheckStatus()