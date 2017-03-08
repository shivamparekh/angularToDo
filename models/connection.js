// packages

var mongoose = require('mongoose');

// database 

mongoose.connect("mongodb://localhost/angularToDo");

var db = mongoose.connection;

// log errors

db.on("error", function(error) {

	console.log(error);

});

// log success

db.once("open", function() {

	console.log("Connection successful");

});

module.exports = db;
