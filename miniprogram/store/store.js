export default {
  data: {
    // 用户数据
    userHead: '',
    userName: '',

    orderList: [
      {
        id: '01',
        select: '套餐1',
        date: '13-13-13',
        name: '0001',
        phone: '1123213213',
      }, {
        id: '02',
        select: '套餐1',
        date: '13-13-13',
        name: '0002',
        phone: '1123213213',
      }, {
        id: '03',
        select: '套餐1',
        date: '13-13-13',
        name: '0003',
        phone: '1123213213',
      }, {
        id: '04',
        select: '套餐1',
        date: '13-13-13',
        name: '0004',
        phone: '1123213213',
      }, 
    ]
  },
  globalData: ['globalPropTest', 'ccc.ddd'],
  logMotto: function () {
    console.log(this.data.motto)
  },
  //默认 false，为 true 会无脑更新所有实例
  //updateAll: true
}