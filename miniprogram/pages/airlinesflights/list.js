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
        // 赋值
        _this.setData({
          airlines: res.data.data.airlines,
          airlinesList: res.data.data.airlinesList,
          airwayList: res.data.data.airwayList,
          airportStartList: res.data.data.airportStartList,
          airportEndList: res.data.data.airportEndList,
          loading: false // 关闭等待框
        })
      }
    })

  }

})