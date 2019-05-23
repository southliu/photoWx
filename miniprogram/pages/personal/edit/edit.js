// pages/personal/edit/edit.js
import store from '../../../store/store'
import create from '../../../utils/weStore/create'
const db = wx.cloud.database()
let today = getApp().getToday()

create(store, {

  /**
   * 页面的初始数据
   */
  data: {
    avatarText: '头像 *',
    nameText: '名字 *',
    phoneText: '电话',
    emailText: '邮箱',
    name: '',
    avatar: '',
    phone: '',
    email: '',
    onSave: '保持信息',
    onCancel: '取消',
    input: '请输入',
    openId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openId = options.id
    let that = this

    if (openId) {
      // console.log('openId:', openId)

      // 查询用户信息
      db.collection('users').where({_openid: openId}).get()
      .then(res => {
        // res.data 包含该记录的数据
        // console.log(res.data)
        that.setData({
          openId: openId,
          name: res.data[0].name,
          avatar: res.data[0].avatar,
          phone: res.data[0].phone,
          email: res.data[0].email,
          update: today
        })
      })
      .catch(err => {
        console.log('users err:', err)
        wx.showToast({
          title: '服务器错误',
          icon: 'none',
          duration: 1500
        })
      })
    }
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

  // 输入信息
  enterInfo (e, value) {
    let val = e.detail.value
    
    this.setData({
      [value]: val
    })
  },

  // 输入名字
  enterName (e) {
    this.enterInfo(e, 'name')
  },

  // 输入电话
  enterPhone (e) {
    this.enterInfo(e, 'phone')
    console.log('phone:', this.data.phone)
  },

  // 输入邮箱
  enterEmail (e) {
    this.enterInfo(e, 'email')
  },


  // 保存修改信息
  onSave () {
    let avatar = this.data.avatar
    let name = this.data.name
    let phone = this.data.phone
    let email = this.data.email
    let openId = this.data.openId

    // 如果名字为空
    if (!name) {
      wx.showToast({
        title: '名字不能为空',
        icon: 'none',
        duration: 1500
      })
      return false
    }

    // 修改用户信息
    db.collection('users').where({_openid: openId}).update({
      // data 传入需要局部更新的数据
      data: {
        avatar: avatar,
        name: name,
        phone: phone,
        email: email
      }
    }).then(res => {
      console.log('update users:', res)
    }).catch(err => {
      console.log('update err:', err)
    })
  },

  // 取消保存信息
  onCancel () {
    wx.navigateTo({
      url: '../index/index'
    })
  }
})