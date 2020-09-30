// pages/inf/inf.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      
            {"code":"01","text":"text1","type":"type1"},
      
            {"code":"02","text":"text2","type":"type2"},
      
            {"code":"03","text":"text3","type":"type3"},
      
            {"code":"04","text":"text4","type":"type4"},
      
            {"code":"05","text":"text5","type":"type5"},
      
            {"code":"06","text":"text6","type":"type6"},
      
            {"code":"07","text":"text7","type":"type7"}
      
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