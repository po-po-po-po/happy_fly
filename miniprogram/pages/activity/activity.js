Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list: [] // 数据列表
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/activity/activityList' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
       
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data);
        // 赋值
        _this.setData({
          list: res.data.data
        })
      }
    })
  }


})
