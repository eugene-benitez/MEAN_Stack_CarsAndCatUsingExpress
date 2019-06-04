var express = require("express");

var app = express();

app.get('/', function (request, response) {

    response.send("<h1>Hello Express</h1>");
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})


app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


app.get("/cars", function (request, response) {
    response.render('cars', );
})


app.get("/cats", function (request, response) {
    response.render('cats', );
})

app.get("/form", function (request, response) {
    response.render('form', );
})