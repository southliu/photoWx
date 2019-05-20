// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  
  try {
    return await db.collection('orders').add({
      data: {
        "select": event.select,
        "date": event.date,
        "name": event.name,
        "phone": event.phone,
        "creatDate": event.creatDate
      }
    })
  } catch (e) {
    console.error(e)
  }

}