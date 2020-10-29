// pages/flight/index.js

const utils = require('../utils/sutil.js')
const App = getApp()

Page({
  data:{
    dcity: '',
    dcityName: '',
    acity: '',
    acityName: '',
    airlineCode:'',
    irlineName:'',
    ddate: '',
    ddate1: ''
  },
  bindKeyInput: function(e) {
    const inputId = e.currentTarget.id
    if (inputId === 'dcity') {  
      App.setDcity1(e.detail.value)
    } else if (inputId === 'acity') {
      App.setAcity1(e.detail.value)
    } else if (inputId === 'ddate') {
      App.setDdate2(e.detail.value)
    }else if (inputId === 'airlineCode') {
      App.setDdate2(e.detail.value)
    }else if (inputId === 'ddate1') {
      App.setDdate2(e.detail.value)
    }
    
    this.getSearchParams1()
  },
  dcityfocusEvent: function(e) {
    App.setCityTarget1(e.currentTarget.id)
    wx.navigateTo({
      url: '/components/plancitypicker/index'
    })
  },
  acityfocusEvent: function(e) {
    App.setCityTarget1(e.currentTarget.id)
    //console.log(e.currentTarget)
    wx.navigateTo({
      url: '/components/plancitypicker/index'
    })
  },
  airlineCodefocusEvent: function(e) {
    App.setCityTarget1(e.currentTarget.id)
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/components/planairlinepicker/index'
    })
  },
  getSearchParams1: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    App.getSearchParams1(function(params){
      //更新数据
       console.log(params)
      that.setData({
        dcity:params.dcity,
        dcityName: params.dcityName,
        acity:params.acity,
        acityName: params.acityName,
        airlineCode:params.airlineCode,
        airlineName: params.airlineName,
        ddate: params.ddate,
        ddate1: params.ddate1
      })
    })
  },

   // 获取富文本中的内容，并提交留言
 bindFormSubmit: function(e) {
  var that = this;
  this.getSearchParams1();
  // 获取输入的内容
  var airlinesCode=that.data.airlineCode;
  var flightNo=e.detail.value.flightNo;
  var userplan=e.detail.value.userplan;
  var flightNameStart=that.data.dcityName;
  var flightNameEnd=that.data.acityName;
  var flightDate=that.data.ddate;
  if (flightNameStart=="" || flightNameEnd=="" || airlinesCode =='' || flightNo=='' || flightDate=='' ) { 
    wx.showModal({
      title: '提示',
      content: '添加数据不能为空',
    })
  }
   else {
    // 提交留言
        // 提交留言
        wx.login({
          success: function (res) {
            var code = res.code;
            if (code) {
              console.log('获取用户登录凭证：' + code);
              console.log(res);
              // --------- 发送凭证 ------------------
                  // 将这个数据发送给后端
    wx.request({
      // 传到自己的服务器上
      url: 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/userflight/saveUserflight',
      method: 'POST',  
      data: {
        code:code,
        airlinesCode:that.data.airlineCode,
        flightNo:e.detail.value.flightNo,
        userplan:e.detail.value.userplan,
        flightNameStart:that.data.dcityName,
        airportNameStart:that.data.dcityName,
        airportNameEnd:that.data.acityName,
        flightNameEnd:that.data.acityName,
        flightDate:that.data.ddate
      }
    })
    // 提交完成后的显示
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
  }else {
    console.log('获取用户登录态失败：' + res.errMsg);
  }    
}
});
}
},
  onLoad:function(options){    
   // App.setDdate(utils.tomorrow())
  },
  onReady:function(){
    // 页面渲染完成
    console.log('onReady')
  },
  onShow:function(){
    // 页面显示
    console.log('onShow')
    this.getSearchParams1()
  },
  onHide:function(){
    // 页面隐藏
    console.log('onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('onUnload')
  },
  bindDateChange: function (e) {
    App.setDdate2(e.detail.value)
    this.getSearchParams1()
  },
  bindDateChange1: function (e) {
    App.setDdate2(e.detail.value)
    this.getSearchParams1()
  }
})