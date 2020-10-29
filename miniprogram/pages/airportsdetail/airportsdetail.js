// pages/item/item.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    loading: true,
    movie: {},
    flightNameStart: ''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/airport/findAirportDetail/' + options.id;
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
          flightNameStart: res.data.airport.airportAbbreviate,
          cityList: res.data.airportsList.data,
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
      //title: this.data.title + '机场详情'
    })
  },
  bindInput(e) { 
    let that = this;
    let inputValue =e.detail.value; //获取表单所有name=id的值 
    wx.showLoading({ title: '正在搜索' })
    wx.request({
     url: 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/airport/findAirwaysDestination',
     method: 'post',
     data: {
      "pageSize": 250  ,
      "airportAbbreviate": this.data.flightNameStart,
      "search": inputValue 
     },
     dataType: 'json',
     header: { 'Content-Type': 'application/json' },
     success:function(res) {
      console.log(res.data.data);
      wx.hideLoading()
      // 赋值
      that.setData({
        cityList: res.data.data.data,
        airlines: res.data.data.airlines,
        loading: false // 隐藏等待框
      })
    }
    })
   }
})