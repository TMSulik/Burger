var express = require("express");
var app = express();
var db = require('./db');
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
var mysql = require("mysql");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

con.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + con.threadId);
});

// Not sure what this does
app.get('/save',function(req,res){
  var post  = {from:'me', to:'you', msg:'hi'};
  db.query('INSERT INTO messages SET ?', post, function(err, result) {
    if (err) throw err;
  });
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
