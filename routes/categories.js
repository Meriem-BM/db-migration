var express = require('express');
const categoryModel = require('../models/category');
const getData = require('../helpers/getdata')
const axios = require('axios')
var app = express();

async function clearCategory(){
  let categories = await getData(categoryModel)
  let newData = []
  for (let i = 0; i < categories.length; i++) {
    let newCategory = {}
    console.log(categories[i]);
    newCategory.name = categories[i]._doc.name || ''
    newCategory.img = categories[i]._doc.img
    newCategory.company = categories[i]._doc.description || ''
    newCategory.approved = false
    newCategory.created_at = companies[i]._doc.created_at
    newCategory.updated_at = companies[i]._doc.updated_at
    newData.push(newCategory)
  }
  return newData
}

app.post('/', async (req, res) => {
  const company = await clearCategory()
  console.log(company)
  let insertedData
  await axios.post(process.env.queryInterface, {
    collection: 'categories',
    data: company
  }).catch(e => {
    console.log(e);
    res.send(e)
  }).then(({ result }) => {
    insertedData = result
  });
  return res.send(insertedData)
})

module.exports = app;
