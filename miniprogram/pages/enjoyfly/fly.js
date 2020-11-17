Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '航线详情', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true, // 显示等待框
    airlinesList: [],
    airlinesCode: '',//航司id
    flight_date_start: '',//价格
    flightList: []
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    wx.showLoading({ title: '搜索中...' })
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/fly/flyList' ;
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
        wx.hideLoading()
        // 赋值
        _this.setData({
          title: '随心飞',
          list: res.data.data,
          loading: false // 关闭等待框
        })
      }
    })
  }
})
