Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '航线详情', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true // 显示等待框
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'http://www.potucs.com:9999/flight/findAllFlightsByAirline' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        flightNameStart:options.flightNameStart,
        flightNameEnd:options.flightNameEnd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data);
        // 赋值
        _this.setData({
          title: '航线详情',
          airwayDetail: res.data.data.airway,
          list: res.data.data.flightList,
          loading: false // 关闭等待框
        })
      }
    })
  }
})
