//app.js
import utils from 'pages/utils/sutil.js'
import touch from 'pages/utils/touch.js'//新加
App({
  globalData:{
    userInfo:null,
    searchParams: {
      dcity: 'SHA',
      dcityName: '上海虹桥',
      acity: '',
      acityName: '不限',
      airlineCode: 'MU',
      airlineName: '东方航空',
      weekName: '周日',
      weekCode: '7',
      ddate: '',
      ddate1: '',
      day:''
    },
    searchParams1: {
      dcity: '',
      dcityName: '',
      acity: '',
      acityName: '',
      airlineCode: '',
      airlineName: '',
      weekName: '',
      weekCode: '',
      ddate: '',
      ddate1: ''
    },
    cityTarget: '',
    cityTarget1: '',
    flightDetail: null,
    flightDetail1: null,
    flightInfos: [],
    flightInfos1: [],
  },
  touch: new touch(),//新加
  getCityName: function (cb) {
    if (this.globalData.cityTarget === 'dcity') {
      cb(this.globalData.searchParams.dcityName)
    } else if (this.globalData.cityTarget === 'acity') {
      cb(this.globalData.searchParams.acityName)
    } else if (this.globalData.cityTarget === 'airlineCode') {
      cb(this.globalData.searchParams.airlineName)
    }
    else if (this.globalData.cityTarget === 'weekCode') {
      cb(this.globalData.searchParams.weekName)
    }
  },
  getCityName1: function (cb) {
    console.log(this.globalData.cityTarget1)
    if (this.globalData.cityTarget1 === 'flightNameStart') {
      cb(this.globalData.searchParams1.dcityName)
    } else if (this.globalData.cityTarget1 === 'flightNameEnd') {
      cb(this.globalData.searchParams1.acityName)
    } else if (this.globalData.cityTarget1 === 'airlineCode') {
      cb(this.globalData.searchParams1.airlineName)
    }
  },
  setCityTarget: function (newValue) {
    //console.log('setTarget: ' + newValue)
    this.globalData.cityTarget = newValue
  },
  setCityTarget1: function (newValue) {
    //console.log('setTarget: ' + newValue)
    this.globalData.cityTarget1 = newValue
  },
  setCityInfo: function (cityInfo) {
    console.log(cityInfo)
    if (this.globalData.cityTarget === 'dcity') {
      this.globalData.searchParams.dcityName = cityInfo.cityname
      this.globalData.searchParams.dcity = cityInfo.citycode
    } else if (this.globalData.cityTarget === 'acity') {
      this.globalData.searchParams.acityName = cityInfo.cityname
      this.globalData.searchParams.acity = cityInfo.citycode
    }else if (this.globalData.cityTarget === 'airlineCode') {
      this.globalData.searchParams.airlineName = cityInfo.airlineName
      this.globalData.searchParams.airlineCode = cityInfo.airlineCode
    }else if (this.globalData.cityTarget === 'weekCode') {
      this.globalData.searchParams.weekName = cityInfo.weekName
      this.globalData.searchParams.weekCode = cityInfo.weekCode
    }
  },
  setCityInfo1: function (cityInfo) {
    console.log(cityInfo)
    console.log(this.globalData)
    if (this.globalData.cityTarget1 === 'flightNameStart') {
      this.globalData.searchParams1.dcityName = cityInfo.cityname
      this.globalData.searchParams1.dcity = cityInfo.citycode
    } else if (this.globalData.cityTarget1 === 'flightNameEnd') {
      this.globalData.searchParams1.acityName = cityInfo.cityname
      this.globalData.searchParams1.acity = cityInfo.citycode
    }else if (this.globalData.cityTarget1 === 'airlineCode') {
      this.globalData.searchParams1.airlineName = cityInfo.airlineName
      this.globalData.searchParams1.airlineCode = cityInfo.airlineCode
    }
  },
  setDcity : function (newValue) {
    this.globalData.searchParams.dcity = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setDcity1 : function (newValue) {
    this.globalData.searchParams1.dcity = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setAcity : function (newValue) {
    this.globalData.searchParams.acity = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setAcity1 : function (newValue) {
    this.globalData.searchParams1.acity = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setAirlineCode : function (newValue) {
    this.globalData.searchParams.airlineName = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setAirlineCode1 : function (newValue) {
    this.globalData.searchParams1.airlineName = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setDdate : function (newValue) {
    this.globalData.searchParams.ddate = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setDdate1 : function (newValue) {
    this.globalData.searchParams.ddate1 = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setDdate2 : function (newValue) {
    this.globalData.searchParams1.ddate = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setWeekCode : function (newValue) {
    this.globalData.searchParams1.weekCode = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setDay : function (newValue) {
    this.globalData.searchParams.day = newValue
    //console.log(this.globalData)
  },
  getSearchParams: function(cb) {
    //console.log(cb)
    cb(this.globalData.searchParams)
  },
  getSearchParams1: function(cb) {
    //console.log(cb)
    cb(this.globalData.searchParams1)
  },
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

  }
})
