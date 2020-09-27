// pages/inf/inf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friends: [{
      'name': '破',
      'post': '12',
      'airline':'https://www.potucs.com/wechat/airline/ca.png',
      'fans': '23',
      'timeStart': '08:00',
      'timeEnd': '12:00',
      'source': '中国东方航空',
      'avatarUrl': '2017-9-10'
    }],
    'headLineList': [
      {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'airline':'https://www.potucs.com/wechat/airline/mu.png',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },  {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'airline':'https://www.potucs.com/wechat/airline/sc.png',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      }, {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },
      {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'flightEnd': '杭州萧山',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },  {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'flightEnd': '杭州萧山',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },
      {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'flightEnd': '杭州萧山',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },  {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },
      {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },  {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'flightEnd': '杭州萧山',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },
      {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      },  {
        'title': 'MU7850',
        'flightStart': '广州白云',
        'airline':'https://www.potucs.com/wechat/airline/cz.png',
        'flightEnd': '杭州萧山',
        'timeStart': '08:00',
        'timeEnd': '12:00',
        'source': '中国东方航空',
        'date': '2017-9-10'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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