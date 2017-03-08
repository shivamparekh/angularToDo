// packages

var mongoose = require("mongoose");

// set mongoose to leverage built in JavaScript ES6 Promises

mongoose.Promise = Promise;

// create schema

var Schema = mongoose.Schema;

// toDo schema

var ToDoSchema = new Schema({

  toDo: {

    type: String,

  },

  completeBy: {

    type: Date,

  },

});

// create the ToDo model with the ToDoSchema

var ToDo = mongoose.model("ToDo", ToDoSchema);

// export

module.exports = ToDo;