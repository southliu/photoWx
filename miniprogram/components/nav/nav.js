// conponents/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nav: [
      {
        name: '首页',
        title: 'HOME'
      },
      {
        name: '全球旅拍',
        title: 'TRAVEL'
      },
      {
        name: '关于我们',
        title: 'ABOUT'
      },
      {
        name: '联系我们',
        title: 'CONTACT'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNav (e) {
      let index = e.currentTarget.dataset.index
      switch (index) {
        case 0:
          wx.switchTab({
            url: '../index/index'
          })
          break

        case 1:
          wx.navigateTo({
            url: '../travel/travel'
          })
          break

        case 2:
          wx.navigateTo({
            url: '../about/about'
          })
          break

        case 3:
          wx.navigateTo({
            url: '../contact/contact'
          })
          break
      }
    }
  }
})
