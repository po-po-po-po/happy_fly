// pages/inf/inf.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'flightList': '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
        wx.request({
          // 传到自己的服务器上
          url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/userflight/findUserFlightById',
          method: 'POST',  
          data: {
            code:code
          } ,
           header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            console.log(res.data.data);
            // 赋值
            _this.setData({
              title: '我的航班',
              flightList: res.data.data.userFlightVoList,
              citiesNo: res.data.data.citiesNo,
              flightsNo: res.data.data.flightsNo,
              wxUser: res.data.data.wxUser,
              loading: false // 关闭等待框
            })
          }
        })
        }
  
})