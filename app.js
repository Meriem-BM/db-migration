var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect("mongodb://mrrestoadmin:--%2a%2ar1e2s3t4o5%2a%2a--@147.135.1.51:27017/resto?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => console.log(err))
  
var companiesRouter = require('./routes/companies');
var ordersRouter = require('./routes/orders');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/companies', companiesRouter)

module.exports = app;
