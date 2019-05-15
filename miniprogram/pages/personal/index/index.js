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
          wx.getUserInfo({
            success(res) {
              that.store.data.userHead = res.userInfo.avatarUrl
              that.store.data.userName = res.userInfo.nickName
              that.update()
            }
          })
        } else {
          that.setData({
            isAuth: true
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    let that = this
    console.log('bindGetUserInfo:',e)
    this.setData({
      isAuth: false
    })

    wx.getUserInfo({
      success(res) {
        that.store.data.userHead = res.userInfo.avatarUrl
        that.store.data.userName = res.userInfo.nickName
        that.update()
      }
    })
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
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              that.store.data.userHead = res.userInfo.avatarUrl
              that.store.data.userName = res.userInfo.nickName
              that.update()
            }
          })
        } else {
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
  getAuth () {
    this.setData({
      isAuth: true
    })
  },

  // 插入数据
  insert: function () {
    db.collection('users').add({
      data: {
        name: 'south'
      },
      success(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      },
      fail (err) {
        console.log(err)
      }
    })
    
  }
})