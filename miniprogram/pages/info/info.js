// pages/inf/inf.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'headLineList': [
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    var userinfo=app.globalData.userInfo;
    console.log(userinfo)
    if (userinfo==null ) { 
      wx.showModal({
        title: '提示',
        content: '请先获取头像昵称',
      })
    }else{
      wx.login({
        success: function (res) {
          var code = res.code;
          if (code) {
            console.log('获取用户登录凭证：' + code);
            console.log(res);
            // --------- 发送凭证 ------------------
                // 将这个数据发送给后端
        wx.request({
          // 传到自己的服务器上
          url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/userflight/findUserFlightsByCondition',
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
          } else {
            console.log('获取用户登录态失败：' + res.errMsg);
          }
        }
      });
    }
    
  },
  // 资讯
  jumpDetails: function (e) {
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
      url: '../news/news?title=' + e.currentTarget.dataset.title,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})