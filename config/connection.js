var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// I think this is correct
module.exports = con;