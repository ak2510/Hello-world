var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function(request, response){
	response.send("Hello world from node app");
});

app.get('/time', function(request, response) {
	response.send("Current time is 23:76:89");
});

app.post('/login', function(request, response) {
	var user = request.body.user;
	var password = request.body.password;
	console.log("Username: " + user + " and Password: " + password );
	response.send("Login verified");
});

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
});