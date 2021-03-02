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
        cn: '暗黑萝莉塔',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/lolita/01.jpg',
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
      }, {
        cn: 'JK少女',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/jk/01.jpg',
        picList: [
          `http://173.242.123.141/images/jk/02.jpg`,
          `http://173.242.123.141/images/jk/03.jpg`,
          `http://173.242.123.141/images/jk/04.jpg`,
          `http://173.242.123.141/images/jk/05.jpg`,
          `http://173.242.123.141/images/jk/06.jpg`,
          `http://173.242.123.141/images/jk/07.jpg`,
          `http://173.242.123.141/images/jk/08.jpg`,
          `http://173.242.123.141/images/jk/09.jpg`,
          `http://173.242.123.141/images/jk/10.jpg`,
          `http://173.242.123.141/images/jk/11.jpg`,
        ]
      }, {
        cn: '小清新系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/refresh/01.jpg',
        picList: [
          `http://173.242.123.141/images/refresh/02.jpg`,
          `http://173.242.123.141/images/refresh/03.jpg`,
          `http://173.242.123.141/images/refresh/04.jpg`,
          `http://173.242.123.141/images/refresh/05.jpg`,
          `http://173.242.123.141/images/refresh/06.jpg`,
          `http://173.242.123.141/images/refresh/07.jpg`,
        ]
      }, {
        cn: '日服写真',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/japanese/01.jpg',
        picList: [
          `http://173.242.123.141/images/japanese/02.jpg`,
          `http://173.242.123.141/images/japanese/03.jpg`,
          `http://173.242.123.141/images/japanese/04.jpg`,
          `http://173.242.123.141/images/japanese/05.jpg`,
          `http://173.242.123.141/images/japanese/06.jpg`,
        ]
      }, {
        cn: '婚纱系列',
        en: 'JOURNEY VISION WEDDING PHOTOGRAPHY',
        src: 'http://173.242.123.141/images/marry/01.jpg',
        picList: [
          `http://173.242.123.141/images/marry/02.jpg`,
          `http://173.242.123.141/images/marry/03.jpg`,
          `http://173.242.123.141/images/marry/04.jpg`,
          `http://173.242.123.141/images/marry/05.jpg`,
          `http://173.242.123.141/images/marry/06.jpg`,
        ]
      }
    ]
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击图片
    onPic (e) {
      const { values } = e.currentTarget.dataset
      wx.setStorageSync('list', values);
      wx.navigateTo({
        url: '../article/article?type=travel'
      })
    }
  }
})
