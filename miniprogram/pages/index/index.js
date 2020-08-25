//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/airlines/wechatIndexAirlines' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 250 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          title: '热门机场TOP50',
          airlines: res.data,
          loading: false // 关闭等待框
        })
      }
    })
  },



  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  }



})
