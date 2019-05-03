// miniprogram/pages/personal/order/order.js
import store from '../../../store/store'
import create from '../../../utils/weStore/create'

create(store, {

  /**
   * 页面的初始数据
   */
  data: {
    camera: '../../../images/icon/camera.png',
    orderList: [],
    del: '删除',
    not: '当前用户没有数据'
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

  // 滑动开始
  bindtouchstart (e) {
    console.log('bindtouchstart:', e.changedTouches[0].clientX)
  },

  // 滑动移动
  bindtouchmove (e) {
    console.log('bindtouchmove:', e.changedTouches[0].clientX)
  },

  // 滑动结束
  bindtouchend (e) {
    console.log('bindtouchend:', e.changedTouches[0].clientX)
  },

  // 删除
  onDel (e) {
    let id = e.currentTarget.dataset.id
    let that = this

    wx.showModal({
      title: '提示',
      content: '您确定要删除当前数据吗？',
      success(res) {
        if (res.confirm) {
          let arr = []
          that.store.data.orderList.forEach(e => {
            if (e.id !== id) {
              arr.push(e)
            }
          })
          that.store.data.orderList = arr
          that.update()
          console.log('that.store.data.orderList:', that.store.data.orderList)
          console.log('arr:', arr)

          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1500
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})