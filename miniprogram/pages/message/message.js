//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中...', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true // 显示等待框
  },
 // 获取富文本中的内容，并提交留言
 bindFormSubmit: function(e) {
  var that = this;
  // 获取输入的内容
  var value = e.detail.value.textarea;
  if (value.length < 4) {
    wx.showModal({
      title: '提示',
      content: '字数少于4个字',
    })
  } else {
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
        url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/wxMessage/saveWxMessage',
        method: 'POST',  
        data: {
          code:code,
          content: value
        }
      })
          // ------------------------------------
        // 提交完成后的显示
        wx.showToast({
          title: '感谢反馈',
          icon: 'success',
          duration: 2000
        })
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });


  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    //const url = 'http://www.potucs.com:9999/wxMessage/findAllWxMessage' ;
    // 请求数据
    wx.request({
      //url: url,
      method: 'post',
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      data: {
         //userInfo:options.userInfo
         "userId": "1"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        /** 
        console.log(res.data.data);
        // 赋值
        _this.setData({
          title: '留言',
          list: res.data.data,
          loading: false // 关闭等待框
        })
        */
      }
    })
  }
})
