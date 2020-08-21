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
    wx.request({
      // 传到自己的服务器上
      url: 'http://www.potucs.com:9999/wxMessage/saveWxMessage',
      method: 'POST',  
      data: {
        content: value,
        userId: 1
      }
    })
    // 提交完成后的显示
    wx.showToast({
      title: '感谢反馈',
      icon: 'success',
      duration: 2000
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'http://www.potucs.com:9999/wxMessage/findAllWxMessage' ;
    // 请求数据
    wx.request({
      url: url,
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
        console.log(res.data.data);
        // 赋值
        _this.setData({
          title: '留言',
          list: res.data.data,
          loading: false // 关闭等待框
        })
      }
    })
  }
})
