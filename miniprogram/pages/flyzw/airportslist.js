Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '航线详情', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true, // 显示等待框
    tabTxt: ['出发机场','到达机场'],//分类
    tab: [true, true],
    airlinesList: [],
    airlinesCode: '',//航司id
    pinpai_txt: '',
    flight_date_start: '',//价格
    jiage_txt: '',
    sort_id: 0,//销量
    xiaoliang_txt: '',
    flightNameStart: '',
    flightNameEnd: '',
    flightList: []
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    const _this = this;
    // 拼接请求url
    const url = 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/flight/findFlights820' ;
    // 请求数据
    wx.request({
      url: url,
      method: 'post',
      data: {
        airlinesCode:options.airline_id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data.data.airwayList)
        // 赋值
        _this.setData({
          flightList: res.data.data.flightList,
          airportStartList: res.data.data.airportStartList,
          airportEndList: res.data.data.airportEndList,
          airlines:res.data.data.airlines,
          airwayList: res.data.data.airwayList,
          airlinesCode:res.data.data.airlines.airlinesCode,
          loading: false // 关闭等待框
        })
      }
    })
  },
    // 选项卡
    filterTab: function (e) {
      var data = [true, true], 
      index = e.currentTarget.dataset.index;
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
          tab: [true,  true],
          tabTxt: tabTxt,
          //airline_id: id,
          flightNameStart: id
        });
        break;

        case '1':
          tabTxt[1] = txt;
          self.setData({
            tab: [true, true],
            tabTxt: tabTxt,
            //airline_id: id,
            flightNameEnd: id
          });
          break;
    }
    //数据筛选
    self.getDataList();
  },
    //调用数据接口，获取数据
    getDataList:function(){
      let that = this;
      //console.log("flightNameStart::::"+that.data.flightNameStart);
      //console.log("airlinesCode::::"+that.data.airlinesCode);
      //console.log("sortId::::"+that.data.sort_id);
      //console.log("flightDate::::"+that.data.flight_date_start);
      wx.request({
       url: 'https://www.potucs.com/flytosky-2.0-SNAPSHOT/flight/findFlights67',
       method: 'post',
       data: {
        flightNameStart:that.data.flightNameStart,
        flightNameEnd:that.data.flightNameEnd,
        airlinesCode:that.data.airlinesCode,
        sortId:that.data.sort_id,
        flightDate:that.data.flight_date_start
      },
      dataType: 'json',
       header: { 'Content-Type': 'application/json' },
       success: function (res) {
        wx.hideLoading()
        console.log(res.data.data.flightCondition)
        that.setData({
          flightList: res.data.data.flightList,
          airportStartList: res.data.data.airportStartList,
          airportEndList: res.data.data.airportEndList,
          airlines:res.data.data.airlines,
          airwayList: res.data.data.airwayList,
          airlinesCode:res.data.data.airlines.airlinesCode,
          condition:res.data.data.flightCondition
        })
       }
      })
    }
})
