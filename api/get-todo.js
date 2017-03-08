// packages 

var mongoose = require('mongoose');

// require database and schema

var db = require('./../db/connection.js'); 
var ToDo = require('./../db/todo.models.js'); 

// Require bluebird as promise 

var Promise = require('bluebird');

mongoose.Promise = Promise;

// export

module.exports = function(app) {

	app.get('/api/table', function(req, res){

		ToDo.find({}, function(err, data){

			if (err) throw err;
			res.json(data);

			})
		})
	}