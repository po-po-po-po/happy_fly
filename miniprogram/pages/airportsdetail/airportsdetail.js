// pages/item/item.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    loading: true,
    movie: {}
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    // 拼接请求url
    const url = 'http://www.potucs.com:9999/airport/findAirportDetail/' + options.id;
    console.log(url);
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          airportDetail: res.data,
          loading: false // 隐藏等待框
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: this.data.title + '机场详情'
    })
  }
})