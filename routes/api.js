var express = require('express');
var publicRouter = require('./public');
var authRouter = require('./auth');
var productRouter = require('./product');

var app = express();

app.use('/public/', publicRouter);
app.use('/auth/', authRouter);
app.use('/product/', productRouter);

module.exports = app;
