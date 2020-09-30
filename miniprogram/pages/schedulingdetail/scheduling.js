// pages/inf/inf.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
            {"code":"01","text":"南方航空","type":"45"},
            {"code":"02","text":"东方航空","type":"32"},
            {"code":"03","text":"深圳航空","type":"31"},
            {"code":"04","text":"中国国航","type":"23"},
            {"code":"05","text":"海南航空","type":"23"},
            {"code":"06","text":"四川航空","type":"12"},
            {"code":"07","text":"厦门航空","type":"5"}
          ]
        }
  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id;
    const _this = this;
        wx.request({
          // 传到自己的服务器上
          url: '',
          method: 'POST',  
          data: {
            id:id
          } ,
           header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
        
          }
        })
        }
  
})