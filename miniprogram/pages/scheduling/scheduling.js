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
    var id=options.id;
    const _this = this;
        wx.request({
          // 传到自己的服务器上
          url: 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/userflight/findUserFlightById',
          method: 'POST',  
          data: {
            id:id
          } ,
           header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            console.log(res.data.data);
            // 赋值
            _this.setData({
              title: '我的行程',
              userflight: res.data.data,
            })
          }
        })
        }
  
})