// miniprogram/pages/home/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '图片详情',
    src: '',
    list: [
      {
        cn: '极致简约系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201901/201901241548306694.jpg'
      }, {
        cn: '极致简约系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201901/201901241548305666.jpg'
      }, {
        cn: '极致时尚系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201901/201901241548305061.jpg'
      }, {
        cn: '极致肖像婚纱照',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201901/201901161547639627.jpg'
      }
    ],
    travel: [
      {
        cn: '马尔代夫velassaru',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201807/201807231532333141.jpg'
      }, {
        cn: '永远是个密密&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471874564.jpg'
      }, {
        cn: '文海&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471874250.jpg'
      }, {
        cn: '花之恋&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471873341.jpg'
      }, {
        cn: '拉市海&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471873036.jpg'
      }, {
        cn: '康定情歌&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471872317.jpg'
      }, {
        cn: '唯有夏花浓&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471870288.jpg'
      }, {
        cn: '斑马&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471869964.jpg'
      }, {
        cn: '我和你&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608221471865150.jpg'
      }, {
        cn: '爱情巴士&WEDDING',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://www.lvtu-vision.com/upload/201608/201608141471167547.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let type = options.type
    let id = options.id

    if (type == 'home') {
      console.log('home')
      if (id > 4) {
        let index = id - 5
        this.setData({
          title: this.data.travel[index].cn,
          src: this.data.travel[index].src
        })
      } else {
        this.setData({
          title: this.data.list[id].cn,
          src: this.data.list[id].src
        })
      }
    }

    if (type == 'travel') {
      this.setData({
        title: this.data.travel[id].cn,
        src: this.data.travel[id].src
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