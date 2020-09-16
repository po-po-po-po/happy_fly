// pages/flight/list.js
const api = require('../utils/api.js')
const app = getApp()

Page({
  data:{
    dcity: '',
    dcityName: '',
    acity: '',
    acityName: '',
    ddate: '',
    ddate1: '',
    startPosition: -1,
    airlinesCode:'',
    flightDate:'',
    flightInfos: []
  },
  getSearchParams: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getSearchParams(function(params){      
      //更新数据
      console.log(params)
      let ddate=params.ddate;
      let ddate1=params.ddate1;
      if(ddate===''){
        ddate='00:00'
      }
      if(ddate1===''){
        ddate1='24:00'
      }
      that.setData({
        dcity:params.dcity,
        flightNameStart: params.dcityName,
        acity:params.acity,
        flightNameEnd: params.acityName,
        airlinesCode:params.airlineCode,
        flightDate: ddate+"-"+ ddate1
        //ddate: params.ddate,
        //ddate1: params.ddate1
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
      flightNameStart: this.data.flightNameStart,
      flightNameEnd: this.data.flightNameEnd,
      airlinesCode:this.data.airlinesCode,
      flightDate: this.data.flightDate
      //ddate: this.data.ddate,
      //startPosition: this.data.startPosition
    }
    api.rav(params, this.ravDone)
  },
  ravDone: function (jsonResult) {
    console.log(jsonResult)
    this.setData({
      airwayList: jsonResult.data.airwayList,
      airlines:jsonResult.data.airlines
    })

    if (jsonResult.data.flightList !== '') {
      console.log('Searching is done.')
      wx.hideLoading()
    } else if (jsonResult.data.flightList === '') {
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