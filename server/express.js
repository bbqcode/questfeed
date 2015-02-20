var express = require('express');
var app = express();
var port = require('./configs/configurations').express.port;

app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port);