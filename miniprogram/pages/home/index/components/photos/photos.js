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
    list: [
      {
        cn: '极致古风系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: `http://173.242.123.141/images/antiquity/01.jpg`,
        picList: [
          `http://173.242.123.141/images/antiquity/02.jpg`,
          `http://173.242.123.141/images/antiquity/03.jpg`,
          `http://173.242.123.141/images/antiquity/04.jpg`,
          `http://173.242.123.141/images/antiquity/05.jpg`,
          `http://173.242.123.141/images/antiquity/06.jpg`,
        ]
      }, {
        cn: '极致文艺系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: `http://173.242.123.141/images/literature/01.jpg`,
        picList: [
          `http://173.242.123.141/images/literature/02.jpg`,
          `http://173.242.123.141/images/literature/03.jpg`,
          `http://173.242.123.141/images/literature/04.jpg`,
          `http://173.242.123.141/images/literature/05.jpg`,
        ]
      }, {
        cn: '极致时尚系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: `http://173.242.123.141/images/fashion/01.jpg`,
        picList: [
          `http://173.242.123.141/images/fashion/02.jpg`,
          `http://173.242.123.141/images/fashion/03.jpg`,
          `http://173.242.123.141/images/fashion/04.jpg`,
          `http://173.242.123.141/images/fashion/05.jpg`,
          `http://173.242.123.141/images/fashion/06.jpg`,
        ]
      }, {
        cn: '极致甜美系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: `http://173.242.123.141/images/sweet/01.jpg`,
        picList: [
          `http://173.242.123.141/images/sweet/02.jpg`,
          `http://173.242.123.141/images/sweet/03.jpg`,
          `http://173.242.123.141/images/sweet/04.jpg`,
          `http://173.242.123.141/images/sweet/05.jpg`,
          `http://173.242.123.141/images/sweet/06.jpg`,
          `http://173.242.123.141/images/sweet/07.jpg`,
          `http://173.242.123.141/images/sweet/08.jpg`,
        ]
      }
    ],
    travel: [
      {
        cn: '暗黑萝莉塔',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: `http://173.242.123.141/images/lolita/01.jpg`,
        picList: [
          `http://173.242.123.141/images/lolita/02.jpg`,
          `http://173.242.123.141/images/lolita/04.jpg`,
          `http://173.242.123.141/images/lolita/05.jpg`,
        ]
      }, {
        cn: '冬日古风',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/winter/01.jpg',
        picList: [
          `http://173.242.123.141/images/winter/02.jpg`,
          `http://173.242.123.141/images/winter/03.jpg`,
          `http://173.242.123.141/images/winter/04.jpg`,
          `http://173.242.123.141/images/winter/05.jpg`,
          `http://173.242.123.141/images/winter/06.jpg`,
        ]
      }, {
        cn: '角色扮演',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/cosplay/01.jpg',
        picList: [
          `http://173.242.123.141/images/cosplay/02.jpg`,
          `http://173.242.123.141/images/cosplay/03.jpg`,
          `http://173.242.123.141/images/cosplay/04.jpg`,
          `http://173.242.123.141/images/cosplay/05.jpg`,
        ]
      }, {
        cn: '圣诞专辑',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/christmas/01.jpg',
        picList: [
          `http://173.242.123.141/images/christmas/02.jpg`,
          `http://173.242.123.141/images/christmas/03.jpg`,
          `http://173.242.123.141/images/christmas/04.jpg`,
          `http://173.242.123.141/images/christmas/05.jpg`,
          `http://173.242.123.141/images/christmas/06.jpg`,
        ]
      }, {
        cn: '童话系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/tales/01.jpg',
        picList: [
          `http://173.242.123.141/images/tales/02.jpg`,
          `http://173.242.123.141/images/tales/03.jpg`,
          `http://173.242.123.141/images/tales/04.jpg`,
          `http://173.242.123.141/images/tales/05.jpg`,
          `http://173.242.123.141/images/tales/06.jpg`,
          `http://173.242.123.141/images/tales/07.jpg`,
          `http://173.242.123.141/images/tales/08.jpg`,
        ]
      }, {
        cn: '傣服写真',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/daiClothing/01.jpg',
        picList: [
          `http://173.242.123.141/images/daiClothing/02.jpg`,
          `http://173.242.123.141/images/daiClothing/03.jpg`,
          `http://173.242.123.141/images/daiClothing/04.jpg`,
          `http://173.242.123.141/images/daiClothing/05.jpg`,
        ]
      }
    ]
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击图片
    onPic(e) {
      const { values } = e.currentTarget.dataset
      wx.setStorageSync('list', values);
      wx.navigateTo({
        url: '../article/article?type=home'
        // url: '../article/article?type=home&id='+id
      })
    }
  }
})
