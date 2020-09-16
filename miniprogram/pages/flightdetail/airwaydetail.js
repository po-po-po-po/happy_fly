Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '航线详情', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true, // 显示等待框
    tabTxt: ['航空公司', '起飞时间', '排序'],//分类
    tab: [true, true, true],
    airlinesCode: '',//航司id,
    flightNameStart: '',
    flightNameEnd: ''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/flight/findAllFlightsByAirline' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        airlinesCode:options.airlinesCode,
        flightNameStart:options.flightNameStart,
        flightNameEnd:options.flightNameEnd,
        flightDate:options.flightDate
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data);
        // 赋值
        _this.setData({
          airlinesCode:'',
          title: '航线详情',
          airwayDetail: res.data.data.airway,
          list: res.data.data.flightList,
          airlinesList: res.data.data.airlinesList,
          flightNameStart: res.data.data.airway.airwayNameStart,
          flightNameEnd: res.data.data.airway.airwayNameEnd,
          loading: false // 关闭等待框
        })
      }
    })
  },
      // 选项卡
      filterTab: function (e) {
        var data = [true, true, true, true], index = e.currentTarget.dataset.index;
        data[index] = !this.data.tab[index];
        this.setData({
          tab: data
        })
      },
        //筛选项点击操作
    filter: function (e) {
      var self = this, 
      id = e.currentTarget.dataset.id, 
      txt = e.currentTarget.dataset.txt, 
      tabTxt = this.data.tabTxt;
      switch (e.currentTarget.dataset.index) {
        case '0':
          tabTxt[0] = txt;
          self.setData({
            tab: [true, true, true],
            tabTxt: tabTxt,
            //airline_id: id,
            airlinesCode: id
          });
          break;
        case '1':
          tabTxt[1] = txt;
          self.setData({
            tab: [true, true, true],
            tabTxt: tabTxt,
            //flight_date_start: txt,
            flight_date_start: txt
          });
          break;
        case '2':
          tabTxt[2] = txt;
          self.setData({
            tab: [true, true, true],
            tabTxt: tabTxt,
            sort_id: id,
            xiaoliang_txt: txt
          });
          break;
      }
      //数据筛选
      self.getDataList();
    },
      //调用数据接口，获取数据
      getDataList:function(){
        let that = this;
        console.log("airlinesCode::::"+that.data.airlinesCode);
        console.log("flightNameStart::::"+this.data.flightNameStart);
        console.log("flightNameEnd::::"+this.data.flightNameEnd);
        wx.request({
         url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/flight/findAllFlightsByAirline',
         method: 'post',
         data: {
       
          airlinesCode:that.data.airlinesCode,
          flightNameStart: this.data.flightNameStart,
          flightNameEnd: this.data.flightNameEnd,
          sortId:that.data.sort_id,
          flightDate:that.data.flight_date_start
        },
        dataType: 'json',
         header: { 'Content-Type': 'application/json' },
         success: function (res) {
          wx.hideLoading()
          console.log(res.data.data)
          that.setData({
            airlinesList: res.data.data.airlinesList,
            list: res.data.data.flightList
          })
         }
        })
      }
})
