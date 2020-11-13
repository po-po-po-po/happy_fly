//获取公共ui操作类实例
const _page = require('../utils/abstract-page.js');
let modCalendar = require('../utils/calendar.js');
const models = require('../utils/demo-model.js')
const util = require('../utils/uti1l.js')
let selectedDate = new Date().toString();
const App  = getApp()
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    times: [
      {
      "id": "00:00-08:00",
      "value": "00:00-08:00"
    }, 
    {
      "id": "08:00-12:00",
      "text": "08:00-12:00"
    }, 
    {
      "id": "12:00-18:00",
      "text": "12:00-18:00"
    }, 
    {
      "id": "18:00-20:00",
      "text": "18:00-20:00"
    }, 
    {
      "id": "20:00-24:00",
      "text": "20:00-24:00"
    }
  
  ],
    airportStartList: [],
    airportEndList: [],
    airlinesList: [],
    airportNameStartCode:"",
    airportNameEndCode:"",
    flightDate:"",
    airlinesCode:"",
    flightCondition :[]
  },

  select1: function(e) {
    var self = this
    console.log(e.detail.airportCode)
    self.setData({
      airportNameStartCode: e.detail.airportCode
    })
    self.getDataList(e);
  },
  select2: function(e) {
    var self = this
    self.setData({
      airlinesCode: e.detail.airlinesCode
    })
    self.getDataList(e);
  },
  select3: function(e) {
    var self = this
    self.setData({
      flightDate: e.detail.id
    })
    self.getDataList(e);
  },
  select4: function(e) {
    var self = this
    self.setData({
      airportNameEndCode: e.detail.airportCode
    })
    self.getDataList(e);
  },
  onLoad: function (options) {
    wx.showLoading({ title: '搜索中...' })
    const _this = this;
    // 请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/flight/findFlightsForSUIXINFEIHX';
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 200
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function(res) {
        console.log(res.data.data);
        wx.hideLoading()
        // 赋值
        _this.setData({
          airlines: res.data.data.airlines,
          airlinesList: res.data.data.airlinesList,
          airwayList: res.data.data.airwayList,
          airportStartList: res.data.data.airportStartList,
          airportEndList: res.data.data.airportEndList,
          flightCondition: res.data.data.flightCondition,
          loading: false // 关闭等待框
        })
      }
    })

  },
  //调用数据接口，获取数据
  getDataList:function(e){
    wx.showLoading({ title: '搜索中...' })
    const _this = this;
    // 请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/flight/findFlightsForSUIXINFEIHX';
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 500,
        airportNameStartCode:_this.data.airportNameStartCode,
        airportNameEndCode:_this.data.airportNameEndCode,
        airlinesCode:_this.data.airlinesCode,
        flightDateStart:_this.data.flightDate,
        flightDateEnd:_this.data.flightDate
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function(res) {
        console.log(res.data.data);
        wx.hideLoading()
        // 赋值
        _this.setData({
          airlines: res.data.data.airlines,
          airlinesList: res.data.data.airlinesList,
          airwayList: res.data.data.airwayList,
          airportStartList: res.data.data.airportStartList,
          airportEndList: res.data.data.airportEndList,
          flightCondition: res.data.data.flightCondition,
          loading: false // 关闭等待框
        })
      }
    })

         

        }

})