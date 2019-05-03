// pages/home/index/components/photos/photos.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    left: 'float-left',
    right: 'float-right',
    cn: '婚纱摄影',
    title: '全球客片',
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
   * 组件的方法列表
   */
  methods: {
    // 点击图片
    onPic (e) {
      let id = e.currentTarget.dataset.index
      wx.navigateTo({
        url: '../article/article?type=travel&id='+id
      })
    }
  }
})
