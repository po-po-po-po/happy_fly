// pages/flight/list.js
const api = require('../../utils/api.js')
const app = getApp()

Page({
  data:{
    dcity: '',
    dcityName: '',
    acity: '',
    acityName: '',
    ddate: '',
    startPosition: -1,

    flightInfos: []
  },
  getSearchParams: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getSearchParams(function(params){      
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
  searchFlight: function() {
    // wx.showToast({
    //   title: '查询中......',
    //   icon: 'loading'
    // })
    wx.showLoading({
      title: '查询中......'
    })

    const params = {
      dcity: this.data.dcity,
      acity: this.data.acity,
      ddate: this.data.ddate,
      startPosition: this.data.startPosition
    }
    api.rav(params, this.ravDone)
  },
  ravDone: function (jsonResult) {
    console.log(jsonResult)
    this.setData({
      flightInfos: jsonResult.dataList 
    })

    if (jsonResult.status === 1) {
      console.log('Searching is done.')
      wx.hideLoading()
    } else if (jsonResult.status === 101) {
      console.log('No direct flight.')
      wx.hideLoading()
    } else if (jsonResult.status === -1) {
      console.log('error')
      wx.hideLoading()
    } else if (jsonResult.status === 0) {
      //searching...
      console.log('searching....')
      setTimeout(this.searchFlight, 1500)
      // wx.showToast({
      //   title: '查询中......',
      //   icon: 'loading'
      // })
    }
  },
  showFlightDetail: function (item) {
    // console.log(item)
    // console.log(item.currentTarget)
    // console.log(item.currentTarget.dataset)

    app.setFlightDetail(item.currentTarget.dataset.flightInfo)
    
    wx.navigateTo({
      url: 'detail'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad')
    this.getSearchParams()
    const that = this
    wx.setNavigationBarTitle({
      'title': that.data.dcityName + '-' + that.data.acityName + ' ' + this.data.ddate
    })

    this.searchFlight()
  },
  onReady:function(){
    // 页面渲染完成
    console.log('onReady')
  },
  onShow:function(){
    // 页面显示
    console.log('onShow')

  },
  onHide:function(){
    // 页面隐藏
    console.log('onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('onUnload')
  }
})

// Object
// arrCity
// :
// "TAO"
// arrCityName
// :
// "青岛"
// arrDate
// :
// "2017-05-10"
// arrPort
// :
// "TAO"
// arrPortName
// :
// "青岛"
// arrTerminal
// :
// ""
// arrTime
// :
// "0830"
// carrierCode
// :
// "FM"
// carrierFlightNo
// :
// ""
// carrierName
// :
// "上航"
// codeShared
// :
// "0"
// depCity
// :
// "SHA"
// depCityName
// :
// "上海"
// depDate
// :
// "2017-05-10"
// depPort
// :
// "SHA"
// depPortName
// :
// "上海虹桥"
// depTerminal
// :
// "T2"
// depTime
// :
// "0650"
// dinner
// :
// "S"
// flightNo
// :
// "FM9231"
// freshness
// :
// 535
// id
// :
// 24714
// lowestPrice
// :
// Object
// planeType
// :
// "73G"
// shortSubClassDesc
// :
// "F5 P5 J2 C2 YA BA MA EA HA KA LA NA "
// showArrTime
// :
// "08:30"
// showDepTime
// :
// "06:50"
// stopover
// :
// "0"
// subClassList
// :
// Array[12]
// subclassDesc
// :
// "UQ F5 P5 J2 C2 DQ IQ WQ YA BA MA EA HA KA LA NA RS SQ VQ TQ GQ ZQ QQ"
// taxCN
// :
// 0
// taxYQ