const app = getApp()
Page({

  data: {
    region: ['广东省', '广州市', '梅州梅州'],
    swiperimg: ['banner4', 'banner2', 'banner3', 'banner4'], //轮播
    tablist: [{
      img: 'tabicon01',
      name: "清洁清洗"
    },
    {
      img: 'tabicon02',
      name: "保姆月嫂"
    },
    {
      img: 'tabicon03',
      name: "管道疏通"
    },

    {
      img: 'tabicon04',
      name: "新闻资讯",
      url:'News/News'
    },

    {
      img: 'tabicon05',
      name: "就业申请"
    },

    {
      img: 'tabicon06',
      name: "就业培训"
    },
    {
      img: 'tabicon07',
      name: "优惠活动"
    },
    {
      img: 'tabicon08',
      name: "家具维修"
    },
    {
      img: 'tabicon09',
      name: "绿化除草"
    }, {
      img: 'tabicon10',
      name: "荒地开垦"
    }, {
      img: 'tabicon11',
      name: "家庭教师"
    }, {
      img: 'tabicon12',
      name: "商家入驻",
      url:'DowCenter/DowCenter'

    }, {
      img: 'shouqi',
      name: "收起"
    },
    ],

    shoplist: [{
      img: 'shop',
      shopname: '勤鸽家政服务有限公司',
      evaluate: '100',
      volume: '1200',
      goldls:"goldl"
    },

    {
      img: 'shop',
      shopname: '勤鸽家政服务有限公司',
      evaluate: '100',
      volume: '1200',
      goldls:"goldl",
      goldls:"goldl"

    },
    {
      img: 'shop',
      shopname: '勤鸽家政服务有限公司',
      evaluate: '100',
      volume: '1200',
      goldls:"goldl"

    },
    {
      img: 'shop',
      shopname: '勤鸽家政服务有限公司',
      evaluate: '100',
      volume: '1200',
      goldls:"goldl"

    }],
    waiterlist: [
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人',
        }

      },
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人'
        }

      },
      {
        img: 'waiter01',
        name: '王贵芳',
        age: '45',
        price: '45',
        skill: {
          skill01: '清洁清洗',
          skill02: '保姆月嫂'
        },
        badge: {
          badge01: '金牌员工',
          badge02: '广东人'
        }

      }
    ]

  },

 

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

 
})
