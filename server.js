var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// app.use(express.static("public"));
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static(__dirname + '/public'));
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);

/* Didn't make any difference.

app.get('/', function(req, res){
  res.render('form');
  // res.sendFile(__dirname + '/form.html'); 
  res.sendFile("index.html");
});

app.post('/',function(req,res){
   var username = req.body.username;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);
});

*/

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
