var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MSQabraxa$7",
    database: "burgers_db"
  });
// } else {
//   connection = mysql.createConnection({
//     host: "us-cdbr-iron-east-02.cleardb.net",
//     port: 3306,
//     user: "b830d517332ea6",
//     password: "43028d09",
//     database: "heroku_1a9a89e61f1406a"
//   });

}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
