let wxparse = require("../../wxParse/wxParse.js");
Page({
            data: {
              dkheight:300,
              dkcontent: "",
              },
              onLoad: function (options) {
                // 获得高度
                let winPage = this;
                wx.getSystemInfo({
                  success: function (res) {
                    let winHeight = res.windowHeight;
                    console.log(winHeight);
                    winPage.setData({
                      dkheight: winHeight
                    })
                  }
                }),
                wx.request({
                  url: 'https://www.potucs.com/flytosky-1.0-SNAPSHOT/activity/activityDetail',
                  method: 'post',
                  data: {
                    id:options.id,
                    airportCode:options.airportCode
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success: function(res) {
                    // 赋值
                    winPage.setData({
                      dkcontent:  wxparse.wxParse('dkcontent', 'html', res.data.data.content, winPage, 5)
                    })
                  }
                })
              
              },
            
      })