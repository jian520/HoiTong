/**
 * 用户实体 偷懒,使用JSON格式,想要new User需要使用 Object.create(ServiceItem)
 */
  var ServiceItem = {
    type:'',
    code: "",
    name:  "",
    price: 0,
    amount: 0,
    month: 0,
}


module.exports = ServiceItem;
