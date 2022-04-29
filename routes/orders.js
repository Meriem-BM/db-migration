var express = require('express');
const ordersModel = require('../models/order');
var app = express();
const getData = require('../helpers/getdata')

async function clearOrder(){
  let orders = await getData(ordersModel, 2)
  let newData = []
  for (let i = 0; i < orders.length; i++) {
    let newOrder = {}
    for (orderKey of Object.keys(orders[i]._doc))
    {
      if(orderKey!="_id" && orderKey!="whendatetime" && orderKey!="__v"){
        newOrder[orderKey] = orders[i]._doc[orderKey]
        }
    }
    newData.push(newOrder)
  }
  return newData
}

app.post('/', async (req, res) => {
  return res.send(await clearOrder())
})

module.exports = app;
