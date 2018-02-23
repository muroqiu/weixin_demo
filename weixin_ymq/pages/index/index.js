//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  onClick_Map: function (e) {
    wx.openLocation({
      latitude: 26.10461,
      longitude: 119.28485,
      scale: 15,
      name: 'AONE运动公园羽毛球场',
      address: '鼓楼区屏西路110号'
    })
  }
})
