//app.js
import utils from 'pages/utils/sutil.js'
App({
  globalData:{
    userInfo:null,
    searchParams: {
      dcity: 'CTU',
      dcityName: '成都双流',
      acity: 'SHA',
      acityName: '上海虹桥',
      airlineCode: 'MU',
      airlineName: '东方航空',
      ddate: ''
    },
    cityTarget: '',

    flightDetail: null,
    flightInfos: [],
  },
  getCityName: function (cb) {
    if (this.globalData.cityTarget === 'dcity') {
      cb(this.globalData.searchParams.dcityName)
    } else if (this.globalData.cityTarget === 'acity') {
      cb(this.globalData.searchParams.acityName)
    } else if (this.globalData.cityTarget === 'airlineCode') {
      cb(this.globalData.searchParams.airlineName)
    }
  },
  setCityTarget: function (newValue) {
    //console.log('setTarget: ' + newValue)
    this.globalData.cityTarget = newValue
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
    }
  },
  setDcity : function (newValue) {
    this.globalData.searchParams.dcity = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setAcity : function (newValue) {
    this.globalData.searchParams.acity = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setAirlineCode : function (newValue) {
    this.globalData.searchParams.airlineName = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  setDdate : function (newValue) {
    //this.globalData.searchParams.ddate = newValue.toUpperCase()
    //console.log(this.globalData)
  },
  getSearchParams: function(cb) {
    //console.log(cb)
    cb(this.globalData.searchParams)
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
