// miniprogram/pages/personal/index/index.js
import store from '../../../store/store'
import create from '../../../utils/weStore/create'
const db = wx.cloud.database()

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

  // 数据库插入用户数据
  insert: function (name, avatar) {
    db.collection('users').add({
      data: {
        "name": name,
        "avatar": avatar
      }
    }).then(res => {
      console.log('insert success:', res)
    }).catch(err => {
      console.log('insert err:', err)
    })
  },

  // 用户授权
  getUserAuth: function () {
    let that = this
    wx.getUserInfo({
      success(res) {
        let neme = res.userInfo.nickName
        let avatar = res.userInfo.avatarUrl

        that.store.data.userName = neme
        that.store.data.userHead = avatar
        that.update()

        // 输入数据库
        // that.insert(neme, avatar)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.getUserAuth()
        } else {
          that.setData({
            isAuth: true
          })
        }
      }
    })
  },

  // 手动授权用户数据
  bindGetUserInfo(e) {
    this.setData({
      isAuth: false
    })

    this.getUserAuth()
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
    let that = this
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

  // 点击获取授权
  getAuth() {
    this.setData({
      isAuth: true
    })
  },
})