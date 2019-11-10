// miniprogram/pages/personal/order/order.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    camera: '../../../images/icon/camera.png',
    orderList: [],
    del: '删除',
    not: '当前用户没有数据',
    startX: 0
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.listOrders()
  },

  // 查询orders数据库
  listOrders () {
    const that = this
    const openId = wx.getStorageSync('openId')
    wx.showLoading({
      title: '加载中',
    })

    db.collection('orders').where({_openid: openId}).get()
    .then(res => {
      // console.log('orders suc:', res.data)

      wx.hideLoading()
      that.setData({
        orderList: res.data
      })
    })
    .catch(err => {
      console.log('orders err:', err)

      wx.hideLoading()
      wx.showToast({
        title: '服务器错误',
        icon: 'none',
        duration: 2000
      })
    })
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (index, xmove) {
    let orderList = this.data.orderList
    orderList[index].xmove = xmove

    this.setData({
      orderList: orderList
    })
  },

  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let index = e.currentTarget.dataset.index
    this.setXmove(index, -160)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let index = e.currentTarget.dataset.index

    this.setXmove(index, 0)
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    /*if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }*/
  },

  // 删除方法
  del:function(e) {
    const id = e.currentTarget.dataset.id
    const that = this
    // 是否选择模态框
    wx.showModal({
      title: '提示',
      content: '您确定删除当前数据吗？',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '加载中',
          })

          // 数据库删除当前数据
          db.collection('orders').doc(id).remove()
          .then(res => {
            console.log('del suc:', res)
            wx.hideLoading()

            // TODO: BUG删除数据刷新问题
            // 清除对应的数据
            // let newOrderList = []
            // this.data.orderList.forEach(e => {
            //   if (e.id !== id) {
            //     newOrderList.push(e)
            //   }
            // })
            // this.data.orderList = newOrderList

            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1500,
              success (res) {
                const pages = getCurrentPages()
                const perpage = pages[pages.length - 1]
                perpage.onLoad()
              }
            })

            that.listOrders()
          })
          .catch(err => {
            console.log('del err:', err)
            wx.hideLoading()

            wx.showToast({
              title: '服务器错误',
              icon: 'none',
              duration: 1500
            })
          })
        }
      }
    })
  },

  // 滑动删除
  delItem (e) {
    this.del(e)
  },

  // 删除
  onDel (e) {
    this.del(e)
  }
})