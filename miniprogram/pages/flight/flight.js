Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中...', // 状态
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
    const url = 'http://www.potucs.com:9999/flight/findAllFlights' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data.data);
        // 赋值
        _this.setData({
          title: '航班列表',
          list: res.data.data.data,
          loading: false // 关闭等待框
        })
      }
    })
  },

  bindInput(e) { 
    let that = this;
    let inputValue =e.detail.value; //获取表单所有name=id的值 
    wx.showLoading({ title: '正在搜索' })
    console.log(inputValue)
    wx.request({
     url: 'http://www.potucs.com:9999/flight/findAllFlights',
     method: 'post',
     data: {
      "flightNo": inputValue            //搜索内容     
    },
    dataType: 'json',
     header: { 'Content-Type': 'application/json' },
     success: function (res) {
      wx.hideLoading()
      console.log(res.data.data)
      that.setData({
        list: res.data.data.data
      })
     }
    })
   }
})
