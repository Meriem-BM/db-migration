var express = require('express');
const companyModel = require('../models/company');
var app = express();
const getData = require('../helpers/getdata')

async function clearCompnay(){
  let companies = await getData(companyModel, 1)
  let newData = []
  for (let i = 0; i < companies.length; i++) {
    let newCompany = {}
    console.log(companies[i]);
    newCompany.name = companies[i].company_info.name
    newCompany.address = companies[i].company_info.address
    newCompany.description = companies[i].description
    newCompany.logo = companies[i].logo
    newCompany.created_at = companies[i].created_at
    newData.push(newCompany)
  }
  return newData
}

app.post('/', async (req, res) => {
  return res.send(await clearCompnay())
})

module.exports = app;
