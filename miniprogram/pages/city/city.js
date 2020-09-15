// pages/flight/index.js

const utils = require('../utils/sutil.js')
const App = getApp()

Page({
  data:{
    dcity: '',
    dcityName: '',
    acity: '',
    acityName: '',
    ddate: ''
  },
  bindKeyInput: function(e) {
    const inputId = e.currentTarget.id
    if (inputId === 'dcity') {  
      App.setDcity(e.detail.value)
    } else if (inputId === 'acity') {
      App.setAcity(e.detail.value)
    } else if (inputId === 'ddate') {
      App.setDdate(e.detail.value)
    }
    
    this.getSearchParams()
  },
  dcityfocusEvent: function(e) {
    App.setCityTarget(e.currentTarget.id)
    wx.navigateTo({
      url: '/components/citypicker/index'
    })
  },
  acityfocusEvent: function(e) {
    App.setCityTarget(e.currentTarget.id)
    //console.log(e.currentTarget)
    wx.navigateTo({
      url: '/components/citypicker/index'
    })
  },
  getSearchParams: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    App.getSearchParams(function(params){
      //更新数据
       console.log(params)
      that.setData({
        dcity:params.dcity,
        dcityName: params.dcityName,
        acity:params.acity,
        acityName: params.acityName,
        ddate: params.ddate
      })
    })
  },
  searchFlight: function () {
    wx.navigateTo({
      url: 'list'
    })
  },
  onLoad:function(options){    
    App.setDdate(utils.tomorrow())
  },
  onReady:function(){
    // 页面渲染完成
    console.log('onReady')
  },
  onShow:function(){
    // 页面显示
    console.log('onShow')
    this.getSearchParams()
  },
  onHide:function(){
    // 页面隐藏
    console.log('onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('onUnload')
  },
  bindDateChange: function (e) {
    App.setDdate(e.detail.value)
    this.getSearchParams()
  }
})