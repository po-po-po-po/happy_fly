Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list: [] // 数据列表
  },
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/airlines/findAirlinesIndex' ;
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
        console.log(res.data.data);
        // 赋值
        _this.setData({
          title: '航空公司',
          airlines: res.data.data,
          loading: false // 关闭等待框
        })
      }
    })
  }


})
