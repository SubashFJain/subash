var express = require('express');
var app = express();   //to connect to server..to start server..
var mongoose = require('mongoose');   //to connect to mongo DB
var bodyParser = require('body-parser');   // structure and
var methodOverride = require('method-override');
var morgan = require('morgan');   // to have log file for errors
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendfile(__dirname+'/public/index.html');
})

app.listen(8000,function(){
    console.log("Welcome to MySite")
})

exports = module.exports = app;



