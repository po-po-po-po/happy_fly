let wxparse = require("../../wxParse/wxParse.js");
Page({
            data: {
              dkheight:300,
              dkcontent: "你好<br/>nihao, <br/><br/><br/><br/><br/><br/><br/>这个是测试<br/><br/>你同意了吗<br/><br/><br/>hehe<b>n你好啊，我加粗了kk</b >",

              },
              onLoad: function (options) {
                // 获得高度
                let winPage = this;
                wx.getSystemInfo({
                  success: function (res) {
                    let winHeight = res.windowHeight;
                    console.log(winHeight);
                    winPage.setData({
                      dkheight: winHeight - winHeight*0.05 - 80
                    })
                  }
                })
                wxparse.wxParse('dkcontent', 'html', this.data.dkcontent, this, 5);
              }
      })