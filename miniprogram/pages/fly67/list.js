//获取公共ui操作类实例
const _page = require('../utils/abstract-page.js');
let modCalendar = require('../utils/calendar.js');
const models = require('../utils/demo-model.js')
const util = require('../utils/uti1l.js')
let selectedDate = new Date().toString();

console.log('list');

//获取应用实例
const app = getApp()

Page(_page.initPage({
  data: {
    listData: [],
    calendarSelectedDate: '东航周六航班',
    calendarSelectedDateStr: '东航周六航班',
    flightNameStart:'上海虹桥',
    flightNameEnd:''
  },
  // methods: uiUtil.getPageMethods(),
  methods: {
  },

  preDay: function () {
    this.setData({
      calendarSelectedDate: '周六',
      calendarSelectedDateStr: '东航周六航班'
    })
  
  },

  nextDay: function () {
   // let date = util.dateUtil.nextDay(this.data.calendarSelectedDate);
    this.setData({
      calendarSelectedDate: '周日',
      calendarSelectedDateStr: '东航周日航班'
    })
  },

  calendarHook: function (date) {
    this.index = 0;
    this.data.listData = [];
    this._initData({
      date: date.getTime()
    });
  },

  onShow: function () {
    global.sss = this;
    let scope = this;
  },

  _setDateInfo: function (date) {
    let selectedDate = new Date(date * 1);
    this.setData({
      calendarSelectedDate: selectedDate.toString(),
      calendarSelectedDateStr: util.dateUtil.format(selectedDate, 'Y年M月D日')
    });
  },

  _appendList: function (data) {

    for(let i = 0, len = data.length; i < len; i++) {
      data[i].dateStr = util.dateUtil.format(new Date(data[i].datetime * 1000), 'H:F' )
    }

    this.setData({
      listData: this.data.listData.concat(data)
    });
  },
  _initData: function (data) {
    let scope = this;
    let listModel = models.listModel;

    listModel.setParam({
      startcityid: this._sid,
      arrivalcityid: this._aid,
      startdatetime: data.date / 1000,
      page: this.index + 1
    });

    this.showLoading();
    listModel.execute(function(data) {
      scope.hideLoading();

      if(!data.schedules) return;
      scope._appendList(data.schedules);

    });
  },
  onLoad: function (data) {

    const _this = this;
        //调用应用实例的方法获取全局数据
        app.getSearchParams(function(params){      
          //更新数据
          _this.setData({
            dcity:params.dcity,
            flightNameStart: params.dcityName,
            acity:params.acity,
            flightNameEnd: params.acityName,
          })
        })
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/flight/findMUFlights7' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 500,
        airportNameStartCode:this.data.dcity,
        airportNameEndCode:this.data.acity
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        // 赋值
        _this.setData({
          list: res.data.data.data,
          loading: false // 关闭等待框
        })
      }
    })

  },

  onReady: function () {

  },
  onShow: function () {

    global.sss = this;
    let scope = this;
  }
  
}, {
  modCalendar: modCalendar
}))