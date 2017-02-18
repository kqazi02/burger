// require all the npm packages
var express = require("express");
var exphbs = require ("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function(){
    console.log("Listening on port", PORT);
});