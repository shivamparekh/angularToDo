// packages

var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');

// port

var PORT = process.env.PORT || 3000;

// create app

var app = express();

var db = require('./models/connection.js');
var Todo = require('./models/todo.model.js');

// morgan

app.use(logger("dev"));

// body-parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// static directory

app.use(express.static(__dirname + "/app"));

// listener

app.listen(3000, function() {

  console.log("listening on " + PORT);

});
