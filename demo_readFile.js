//You can use node as a file server.
//Create the file you want to send back to a user once they go to your home page
//index.html will open from the directory you are in.
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);