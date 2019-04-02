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
	deleteOne: function(table, id, cb) {
		var queryString = "DELETE FROM " + table;
		queryString += " WHERE id = ";
		queryString += id;
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}

};

module.exports = orm;
