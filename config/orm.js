/*
Object Relational Mapping (ORM) accesses a relational database. ORM enables JS to manage database data by mapping database tables to classes and instances of classes to rows in those tables.

For example, if you have a class User, you should have a table called `users` in your database. Instances of the User class in your program should map to rows in the users table in the database. Properties of an instance of a User in your program should map to the columns in the users table.
*/

var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

// Helper function for generating MySQL syntax
function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

var orm = {
  selectAll: function(input, callback) {
    var queryString = `SELECT * FROM ${input}`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });    
  },
  insertOne: function(table, cols, vals, cb) {
		
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		
    connection.query(queryString, [vals], function(err, result) {
			if (err) throw err;
			cb(result);
    }); 
  },
	// Function that updates a single table entry
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	// Function that clears the columns
	removeAll: function(cb) {
		console.log("Remove all activated");
		// var queryString = "DROP TABLE burgers";
		var queryString = "DELETE * FROM burgers";

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;
