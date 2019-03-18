var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");