// pages/home/article/components/photos/photos.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    ids: '',
    src: '',
    picList: [
      'http://www.lvtu-vision.com/upload/201608/201608221471870288.jpg',
      'http://www.lvtu-vision.com/upload/201608/201608221471869964.jpg',
      'http://www.lvtu-vision.com/upload/201608/201608141471167547.jpg',
      'http://www.lvtu-vision.com/upload/201608/201608221471865150.jpg',
      'http://www.lvtu-vision.com/upload/201608/201608131471089415.jpg'
    ],
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
      }
    ]
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
