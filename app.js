var express = require('express');
var app = express();

console.log("Starting application")

app.use(express.static('static'))

app.listen(3000, ()=> {
	console.log("Application running...")
});