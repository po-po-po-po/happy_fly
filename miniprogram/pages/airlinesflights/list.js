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
    selectArray: [
      {
      "id": "10",
      "value": "会计类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }, 
    {
      "id": "21",
      "text": "工程类"
    }
  
  ],
    listData: [],
    calendarSelectedDate: '东航周六航班',
    calendarSelectedDateStr: '东航周六航班',
    flightNameStart:'上海虹桥',
    flightNameEnd:'',
    day:''
  },

  select: function(e) {
    console.log(e.detail)
  },
  onLoad: function (options) {
    const _this = this;
    console.log("1111")
    //调用应用实例的方法获取全局数据
    app.getSearchParams(function(params){
      //更新数据
      _this.setData({
        dcity:params.dcity,
        flightNameStart: params.dcityName,
        acity:params.acity,
        flightNameEnd: params.acityName,
        airlinesCode: params.airlineCode,
        flightRequency: params.weekCode
      })
    })
    var day=App.globalData.searchParams.day;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/flight/findFlightsForSUIXINFEI';
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 500,
        airportNameStartCode:this.data.dcity,
        airportNameEndCode:this.data.acity,
        airlinesCode:this.data.airlinesCode,
        flightRequency:day
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function(res) {
        console.log(res.data.data.data);
        // 赋值
        _this.setData({
          list: res.data.data.data,
          loading: false // 关闭等待框
        })
        console.log(res.data.data.data.length)
      }
    })

  }

})