// pages/personal/edit/edit.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarText: '头像 *',
    nameText: '名字 *',
    phoneText: '电话',
    name: '',
    avatar: '',
    phone: '',
    onSave: '保持信息',
    onCancel: '取消'
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
          name: res.data[0].name,
          avatar: res.data[0].avatar,
          phone: res.data[0].phone
        })
        console.log('name:', that.data.name)
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

  }
})