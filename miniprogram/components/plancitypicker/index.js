const city = require('../../pages/utils/cities1.js')
// const _ = require('../../libs/underscore.js')
// const util = require('../../utils/util.js')
const App = getApp()

Page({
  data: {
    cityList: [],
    scrollTop: 0,//置顶高度
    scrollTopId: '',//置顶id
    city: '',
    hotcityList: [],
    searchWord: ''
  },
  onLoad: function () {
    // 生命周期函数--监听页面加载
    city.cities.sort(function(a,b){
      const x = a[0] > b[0] ? 1 : -1
      // console.log(a[0] + ' - ' + b[0] + ' = ' + x)
      return x
    })

    const cityList = city.cities
    const hotCities = city.hotCities

    this.setData({
      cityList: cityList,
      hotcityList: hotCities
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    var self = this
    App.getCityName(function(newVal) {
      self.setData({
        city: newVal
      })
    })
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  bindScroll: function (e) {
    // console.log(e)
  },  
  //选择城市
  bindHotCity: function (e) {
    console.log("bindHotCity")
    console.log(e)
    const citycode = e.currentTarget.dataset.citycode
    const cityname = e.currentTarget.dataset.cityname
    this.setData({
      city: cityname
    })

    App.setCityInfo(
      {
        'citycode': citycode,
        'cityname': cityname
      }
    )

    wx.navigateBack({
      delta: 2
    })
  },
  searchWordInputEvent: function (e) {
    const searchWord = e.detail.value.toUpperCase()
    this.setData({
      searchWord: searchWord
    })

    const self = this

    const returnCities = city.cities.filter(function (city) {
        return city[0].indexOf(searchWord) > -1 || city[1].indexOf(searchWord) > -1 || city[2].indexOf(searchWord) > -1 || city[3].indexOf(searchWord) > -1
    })

    self.setData({
      cityList: returnCities
    })    
  }
})