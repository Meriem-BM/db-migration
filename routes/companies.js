var express = require('express');
const companyModel = require('../models/company');
const getData = require('../helpers/getdata')
const axios = require('axios')
var app = express();

async function clearCompnay(){
  let companies = await getData(companyModel)
  let newData = []
  for (let i = 0; i < companies.length; i++) {
    let newCompany = {}
    console.log(companies[i]);
    newCompany.oid = companies[i]._doc._id
    newCompany.name = companies[i]._doc.company_info.name || ''
    newCompany.address = companies[i]._doc.company_info.address
    newCompany.description = companies[i]._doc.description || ''
    newCompany.logo = companies[i]._doc.logo || ''
    newCompany.created_at = companies[i]._doc.created_at
    newCompany.updated_at = companies[i]._doc.updated_at
    newData.push(newCompany)
  }
  return newData
}

app.post('/', async (req, res) => {
  const company = await clearCompnay()
  console.log(company)
  let insertedcharge
  await axios.post(process.env.queryInterface, {
    collection: 'companies',
    data: company
  }).catch(e => {
    console.log(e);
    res.send(e)
  }).then(({ result }) => {
    insertedcharge = result
  });
  return res.send(insertedcharge)
})

module.exports = app;
