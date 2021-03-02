// miniprogram/pages/home/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '图片详情',
    src: '',
    list: [],
    picList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
    const list = wx.getStorageSync('list');
    list.picList.unshift(list.src);
    this.setData({
      list,
      picList:list.picList
    })
    console.log('list.src:', list.src)
    console.log('list.picList:', list.picList)
    // let type = options.type
    // let id = options.id
    // if (type == 'home') {
    //   console.log('home')
    //   if (id > 4) {
    //     let index = id - 5
    //     this.setData({
    //       title: this.data.travel[index].cn,
    //       src: this.data.travel[index].src
    //     })
    //   } else {
    //     this.setData({
    //       title: this.data.list[id].cn,
    //       src: this.data.list[id].src
    //     })
    //   }
    // }

    // if (type == 'travel') {
    //   this.setData({
    //     title: this.data.travel[id].cn,
    //     src: this.data.travel[id].src
    //   })
    // }
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