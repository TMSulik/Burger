/*
Object Relational Mapping (ORM) accesses a relational database. ORM enables JS to manage database data by mapping database tables to classes and instances of classes to rows in those tables.

For example, if you have a class User, you should have a table called users in your database. Instances of the User class in your program should map to rows in the users table in the database. Properties of an instance of a User in your program should map to the columns in the users table.
*/

var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}
// Helper function for generating My SQL syntax
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
      console.log('orm: ',result);
      callback(result);
    });    
  },
  insertOne: function(table, cols, vals, cb) {

    connection.query(queryString, [], function(err, result) {
      if (err) throw err;
      console.log(result);
      // callback(result);
    }); 
    		// Construct the query string that inserts a single row into the target table
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    
		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			// Return results in callback
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

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) throw err;
		
			// Return results in callback
			cb(result);
		});

  }
};

module.exports = orm;
