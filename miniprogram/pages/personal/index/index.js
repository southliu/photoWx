// miniprogram/pages/personal/index/index.js
import store from '../../../store/store'
import create from '../../../utils/weStore/create'
const db = wx.cloud.database()
let today = getApp().getToday()

create(store, {


  /**
   * 页面的初始数据
   */
  data: {
    isAuth: false,
    headImg: '../../../images/icon/head.png',
    names: '点击获取数据',
    userHead: '',
    userName: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取用户信息
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 获取用户信息
  getUserInfo () {
    let that = this

    // 查看是否获取用户值
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userHead: userInfo.avatar,
        userName: userInfo.name
      })
    } else {
      wx.showLoading({
        title: '加载中',
      })

      // 获取openId
      const openId = wx.getStorageSync('openId')

      // 数据库查询是否存在用户信息
      db.collection('users').where({_openid: openId}).get()
      .then(res => {
        console.log('find users:', res)
        wx.hideLoading()

        // 查看数据库是否有值
        if (res.data.length > 0) {
          let name = res.data[0].name
          let avatar = res.data[0].avatar

          let userInfo = {
            'name': name,
            'avatar': avatar
          }
      
          // 用户信息保存缓存
          wx.setStorage({
            key: 'userInfo',
            data: userInfo
          })

          that.setData({
            userHead: avatar,
            userName: name
          })
        } else {
          // 查看是否授权
          wx.getSetting({
            success(res) {
              if (!res.authSetting['scope.userInfo']) {
                that.setData({
                  isAuth: true
                })
              }
            }
          })
        }
        
      })
      .catch(err => {
        console.log('find users err:', err)
        wx.hideLoading()

        wx.showToast({
          title: '服务器错误',
          icon: 'none',
          duration: 2000
        })
      })
    }
  },

  // 数据库插入用户数据
  insert(name, avatar) {

    let userInfo = {
      'name': name,
      'avatar': avatar
    }

    // 用户信息保存缓存
    wx.setStorage({
      key: 'userInfo',
      data: userInfo
    })

    // 添加数据
    db.collection('users').add({
      data: {
        "name": name,
        "avatar": avatar,
        "realName": name,
        "date": today
      }
    }).then(res => {
      console.log('insert success:', res)
    }).catch(err => {
      console.log('insert err:', err)
      wx.showToast({
        title: '服务器错误',
        icon: 'none',
        duration: 2000
      })
    })
  },

  // 用户授权
  getUserAuth: function () {
    let that = this
    wx.getUserInfo({
      success(res) {
        let name = res.userInfo.nickName
        let avatar = res.userInfo.avatarUrl

        that.setData({
          userHead: avatar,
          userName: name,
        })

        // 输入数据库
        that.insert(name, avatar)
      }
    })
  },

  // 手动授权用户数据
  bindGetUserInfo(e) {
    this.setData({
      isAuth: false
    })

    this.getUserAuth()
  }
})