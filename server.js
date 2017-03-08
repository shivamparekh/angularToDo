// packages

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var logger = require('morgan');

// port

var PORT = process.env.PORT || 3000;

// set mongoose to leverage built in JavaScript ES6 Promises

mongoose.Promise = Promise;

// create app

var app = express();

// morgan

app.use(logger("dev"));

// body-parser

app.use(bodyParser.urlencoded({ extended: false }));

// static directory

app.use(express.static(__dirname + "/app"));

// listener

app.listen(3000, function() {

  console.log("listening on " + PORT);

});
