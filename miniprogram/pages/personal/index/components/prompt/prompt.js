// pages/personal/index/components/prompt/prompt.js
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
    title: '需要您的授权',
    server: '为了提高更好的服务',
    info: '请在稍后的提示框中点击"允许"',
    authImg: '../../../../../images/personal/authImg.jpg',
    btn: '我知道了'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindGetUserInfo () {
      this.triggerEvent('bindGetUserInfo')
    }
  }
})
