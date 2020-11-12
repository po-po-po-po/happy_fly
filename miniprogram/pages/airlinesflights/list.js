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
    airlinesList: []
  },

  select1: function(e) {
    console.log(e.detail)
  },
  select2: function(e) {
    console.log(e.detail)
  },
  select3: function(e) {
    console.log(e.detail)
  },
  select4: function(e) {
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