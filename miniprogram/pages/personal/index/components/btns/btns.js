// pages/personal/index/components/btns/btns.js
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
    arrow: '../../../../../images/icon/arrow.png',
    list: [
      {
        src: '../../../../../images/icon/order.png',
        name: '我的订单'
      }, {
        src: '../../../../../images/icon/reserve.png',
        name: '我要预约'
      }, {
        src: '../../../../../images/icon/phone.png',
        name: '联系我们'
      }, {
        src: '../../../../../images/icon/wait.png',
        name: '敬请期待'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onIcon (e) {
      console.log(e.currentTarget.dataset.name)
      let name = e.currentTarget.dataset.name

      switch (name) {
        case '我的订单':
          wx.navigateTo({
            url: '../order/order'
          })
          break

        case '我要预约':
          wx.navigateTo({
            url: '../reserve/reserve'
          })
          break

        case '联系我们':
          wx.makePhoneCall({
            phoneNumber: '13510173428'
          })
          break

        case '敬请期待':
          wx.showToast({
            title: '敬请期待',
            icon: 'none',
            duration: 1500
          })
          break
      }
    }
  }
})
