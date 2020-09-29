// 引入SDK核心类
var QQMapWX = require('../utils/qqmap-wx-jssdk.min');
// 数据
let lingyuanData = require('../utils/data')

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'xxxxx'
});
const app = getApp()

Page({
  data: {
    // centerX: 113.3345211,
    // centerY: 23.10229,
    markers: [],
    showDialog: false,
    mapId: "myMap", //wxml中的map的Id值
    avatarUrl:"",
    routeList:"",
    nickName:""
  },
  // 点击回到原点
  moveTolocation: function () {
    // console.log(123)
    let Id = this.data.mapId
    var mapCtx = wx.createMapContext(Id);
    mapCtx.moveToLocation();
  },

  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function () {
    // console.log('地图定位！')
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        console.log(res)
        let latitude = res.latitude;
        let longitude = res.longitude;
        //let marker = this.createMarker(res);
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
            url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/userflight/findUseRoutes',
            method: 'POST',  
            data: {
              code:code
            } ,
             header: {
              'content-type': 'application/json' // 默认值
            },
            success: function(res) {
            console.log(res.data.data.userFlightRouteListserFlightRoute);
          
              // 赋值
              that.setData({
                avatarUrl: res.data.data.avatarUrl,
                routeList: res.data.data.userFlightRouteListserFlightRoute,
                nickName: res.data.data.nickName,
                centerX: longitude,
                centerY: latitude,
                markers: that.getLingyuanMarkers(res.data.data.userFlightRouteListserFlightRoute),
              })
            }
          })
            } else {
              console.log('获取用户登录态失败：' + res.errMsg);
            }
          }
        });
        //let datas= require('../utils/data');
      }
    });
  },
  regionchange(e) {
    // console.log(e.type)
  },
  // 点击标点获取数据
  markertap(e) {
    var id = e.markerId
    var d = this.data.markers[id - 1].name
    console.log(name)
    this.setData({
      lingyuanName: name,
      showDialog: true,
    })
  },
  toggleDialog: function () {
    this.setData({
      showDialog: false,
    })
  },

  getLingyuanMarkers(datas) {
    let markers = [];
    var index = 0;
    for (let item of datas) {
      index++;
      let marker = this.createMarker(item,index);
      markers.push(marker)
    }
    console.log(markers)
    return markers;
  },
  // moveToLocation: function () {
  //   this.mapCtx.moveToLocation()

  // },
  createMarker(point,index) {
    let latitude = point.latitude;
    let longitude = point.longitude;
    let marker = {
      iconPath: "https://www.potucs.com/wechat/logo/hongqi.png",
      id: index || 0,
      name: point.destination || '',
      latitude: latitude,
      longitude: longitude,
      width: 30,
      height: 30,
      label: {
        content: point.destination,
        color: '#22ac38',
        fontSize: 12,
        bgColor: "#fff",
        borderRadius: 30,
        borderColor: "#22ac38",
        borderWidth: 1,
        padding: 3
      },
      callout: {
        content: point.destination,
        fontSize: 0,
      }
    };
    return marker;

  }
})