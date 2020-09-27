// pages/flight/index.js

const utils = require('../utils/sutil.js')
const App = getApp()

Page({
  data:{
    dcity: '',
    dcityName: '',
    acity: '',
    acityName: '',
    airlineCode:'',
    irlineName:'',
    ddate: '',
    ddate1: ''
  },
  bindKeyInput: function(e) {
    const inputId = e.currentTarget.id
    if (inputId === 'dcity') {  
      App.setDcity(e.detail.value)
    } else if (inputId === 'acity') {
      App.setAcity(e.detail.value)
    } else if (inputId === 'ddate') {
      App.setDdate(e.detail.value)
    }else if (inputId === 'airlineCode') {
      App.setDdate(e.detail.value)
    }else if (inputId === 'ddate1') {
      App.setDdate1(e.detail.value)
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
  airlineCodefocusEvent: function(e) {
    App.setCityTarget(e.currentTarget.id)
    //console.log(e.currentTarget)
    wx.navigateTo({
      url: '/components/airlinepicker/index'
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
        airlineCode:params.airlineCode,
        airlineName: params.airlineName,
        ddate: params.ddate,
        ddate1: params.ddate1
      })
    })
  },

   // 获取富文本中的内容，并提交留言
 bindFormSubmit: function(e) {
  var that = this;
  // 获取输入的内容
  var flightNameStart = e.detail.value.flightNameStart;
  var flightNameEnd = e.detail.value.flightNameEnd;
  if (flightNameStart=="不限" || flightNameEnd=="不限") {
    wx.showModal({
      title: '提示',
      content: '请选择出发机场和到达机场',
    })
  }
   else {
    // 提交留言
    wx.request({
      // 传到自己的服务器上
      url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/userflight/saveUserflight',
      method: 'POST',  
      data: {
        airlinesCode:e.detail.value.airlinesCode,
        flightNo:e.detail.value.flightNo,
        flightNameStart:e.detail.value.flightNameStart,
        flightNameEnd:e.detail.value.flightNameEnd,
        flightDate:e.detail.value.flightDate
      }
    })
    // 提交完成后的显示
    wx.showToast({
      title: '感谢反馈',
      icon: 'success',
      duration: 2000
    })
  }
},
  onLoad:function(options){    
   // App.setDdate(utils.tomorrow())
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
  },
  bindDateChange1: function (e) {
    App.setDdate1(e.detail.value)
    this.getSearchParams()
  }
})