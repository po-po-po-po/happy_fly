const DOMAIN_URL = 'https://www.potucs.com/flytosky-1.0-SNAPSHOT'

const RAV_URL = DOMAIN_URL + '/flight/findAllFlightsByAirline' 

function rav(params, done, fail, always) {
  wx.request({
    url: RAV_URL, 
    method: 'post',
    data: params,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function(res) {
      console.log(res.data.data);
      //res: {errMsg: "request:ok", data: Object, statusCode: 200}
      done(res.data)
    }
  })
}

module.exports = {
  rav: rav
}