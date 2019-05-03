// conponents/bottom/bottom.js
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
    phone: '幸福热线: 13510173428',
    en: 'Do you need help?',
    cn: '点击号码直接拨打',
    brandEn: '(C) 2019-2019 TEST-DATA.COM ALL RIGHTS RESERVE',
    brandCn: '版权所有 (C) 2019-2019 深圳市测试数据工作室 工作时间：AM9:00-PM21:00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    callPhone () {
      wx.makePhoneCall({
        phoneNumber: '13510173428'
      })
    }
  }
})
