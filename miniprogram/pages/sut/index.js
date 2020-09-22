//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menuitems: [
      { text: '问题|建议', url: '../message/message?userInfo=userInfo', icon: 'http://www.potucs.com:9998/wechat/logo/fankui.png', tips: '' }
      /** ,
      { text: '使用说明', url: '../info/info', icon: 'http://www.potucs.com:9998/wechat/logo/use.png', tips: '' }*/
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(app)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
      // 将这个数据发送给后端
      wx.request({
      url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/wxUser/saveWxUser',
      method:"POST",
      data:{
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl,
        gender: e.detail.userInfo.gender,
        city: e.detail.userInfo.city,
        country: e.detail.userInfo.country,
        province: e.detail.userInfo.province,
        avatarUrl: e.detail.userInfo.avatarUrl,
        signature: e.detail.signature,
        iv: e.detail.iv,
        rawData: e.detail.rawData,
        encryptedData: e.detail.encryptedData
      },
       success: (e) => {
        }
    })
  },
  login: function () {
    console.log(111)
    var that = this
    wx.login({
      success: function (res) {
        var code = res.code;
        console.log(code);
        wx.getUserInfo({
          success: function (res) {
            console.log(7);
            app.globalData.userInfo = res.userInfo
            that.setData({
              getUserInfoFail: false,
              userInfo: res.userInfo,
              hasUserInfo: true
              
            })
            //平台登录
          }
        })
      }
    })
  },
  //跳转设置页面授权
  //跳转设置页面授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          console.log(9);
          //尝试再次登录
          that.login()
        }
      })
    } else {
      console.log(10);
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  }
  
})
