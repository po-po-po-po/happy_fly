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
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/airlines/findFlightsAndAirportsByAirlines' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        airlinesCode:'MU'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        // 赋值
        _this.setData({
          flightList: res.data.data.flightList,
          airportStartList: res.data.data.airportStartList,
          airportEndList: res.data.data.airportEndList,
          airlines:res.data.data.airlines,
          airwayList: res.data.data.airwayList,
          airlinesCode:res.data.data.airlines.airlinesCode,
          loading: false // 关闭等待框
        })
      }
    })
  }
})
