//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    // 查看是否有open ID的缓存
    wx.getStorage({
      key: 'openId',
      fail(err) {
        console.log('not openId')
        
        // 调用云函数login获取openId
        wx.cloud.callFunction({
          name: 'login'
        }).then(res => {
          wx.setStorageSync('openId', res.result.event.userInfo.openId)
        }).catch(err => {
          console.log('login err:', err)
        })
      }
    })

    

    this.globalData = {}
  }
})
