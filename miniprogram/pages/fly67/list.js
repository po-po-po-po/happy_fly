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
    calendarSelectedDateStr: '东航周六航班'
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

    if(!data || !data.sid || !data.aid || !data.date) {
      this.showToast('参数错误');
      return
    }
    this.index = 0;
    this._aid = data.aid;
    this._sid = data.sid;

    this._setDateInfo(data.date);
    this._initData(data);

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