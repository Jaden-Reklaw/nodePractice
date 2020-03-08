//Type anything extra to http://localhost:8080/
//You can only do this after you run node demo_http_url.js from the terminal
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);