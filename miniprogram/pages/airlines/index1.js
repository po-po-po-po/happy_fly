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
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/airlines/findAirlinesIndex' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 250 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data);
        // 赋值
        _this.setData({
          title: '航空公司',
          list: res.data.data,
          loading: false // 关闭等待框
        })
      }
    })
  },

  bindInput(e) { 
    let that = this;
    let inputValue =e.detail.value; //获取表单所有name=id的值 
    wx.showLoading({ title: '正在搜索' })
    console.log(inputValue)
   // 拼接请求url
   const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/airlines/findAirlinesIndex' ;
    wx.request({
      url: url,
      method: 'post',
      data: {
        "pageSize": 250 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data);
        // 赋值
        _this.setData({
          title: '航空公司',
          airlines: res.data.data,
          loading: false // 关闭等待框
        })
      }
    })
   }
})
