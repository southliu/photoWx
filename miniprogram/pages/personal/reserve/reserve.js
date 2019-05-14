// miniprogram/pages/personal/reserve/reserve.js
import store from '../../../store/store'
import create from '../../../utils/weStore/create'

create(store, {

  /**
   * 页面的初始数据
   */
  data: {
    camera: '../../../images/icon/camera.png',
    selectIcon: '../../../images/icon/reserve-select.png',
    dateIcon: '../../../images/icon/reserve-date.png',
    nameIcon: '../../../images/icon/reserve-personal.png',
    phoneIcon: '../../../images/icon/reserve-phone.png',
    arrowIcon: '../../../images/icon/seserve-arrow.png',
    title: '你的预约',
    selectKey: '预约套餐:',
    dateKey: '拍摄时间:',
    nameKey: '联系人:',
    phoneKey: '联系电话:',
    select: '',
    date: '',
    name: '',
    phone: '',
    array: ['套餐1', '套餐2', '套餐3', '套餐4'],
    selectText: '请选择预约套餐',
    dateText: '请选择拍摄时间',
    nameText: '请输入您的名字',
    phoneText: '请输入您的手机号码',
    btn: '立即预约',
    orderList: [],
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

  // 选择套餐
  pickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      select: this.data.array[e.detail.value]
    })
  },

  // 获取名字
  getName (e) {
    let val = e.detail.value
    this.setData({
      name: e.detail.value
    })
  },

  // 获取电话
  getPhone (e) {
    let val = e.detail.value
    this.setData({
      phone: e.detail.value
    })
  },

  // 选择日期
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  // 点击预约
  onBtn () {
    let select = this.data.select
    let date = this.data.date
    let name = this.data.name
    let phone = this.data.phone
    let that = this

    // 没有输入选择套餐
    if (!select) {
      wx.showToast({
        title: '请选择预约套餐',
        icon: 'none',
        duration: 1500
      })
      return false
    }

    // 没有输入选择拍摄时间
    if (!date) {
      wx.showToast({
        title: '请选择拍摄时间',
        icon: 'none',
        duration: 1500
      })
      return false
    }

    // 没有输入姓名
    if (!name) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 1500
      })
      return false
    }

    // 没有输入联系电话
    if (!phone) {
      wx.showToast({
        title: '请输入联系电话',
        icon: 'none',
        duration: 1500
      })
      return false
    }

    // 判断手机格式是否正确
    if (!(/^1[345789]\d{9}$/.test(phone))) {
      console.log(2)
      wx.showToast({
        title: '手机号码有误',
        icon: 'none',
        duration: 1500
      })
      return false
    } else {
      console.log(3)
      wx.showToast({
        title: '预约成功',
        icon: 'success',
        duration: 1500,
        success () {
          // TODO 优化：随机码为时间戳
          let rand = Math.floor(Math.random()*1000000+1)
          let order = {
            id: rand,
            select: select,
            date: date,
            name: name,
            phone: phone,
          }
          that.store.data.orderList.push(order)
          that.update()
          console.log('that.store.data.orderList:', that.store.data.orderList)
          setTimeout(() => {
            wx.switchTab({
              url: '../index/index'
            })
          }, 1000)
        }
      })
    }
  }
})