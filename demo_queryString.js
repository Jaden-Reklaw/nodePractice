//The way to get query strings from the url is by this syntax after the url
//http://localhost:8080/?year=2017&month=July
//You see this input to the screen if you are running node demo_queryString.js from the terminal
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);