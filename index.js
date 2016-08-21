var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var server = require('http').Server(app);

server.listen(port);

app.use('/app', express.static('app'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});