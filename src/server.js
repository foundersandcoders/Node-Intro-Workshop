var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 4000;

var server = http.createServer(function(request, response) {
  var url = request.url;
  if (url === '/') {
    fs.readFile(path.join(__dirname, '..', 'index.html'), function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(file);
    });
  }
  else if (url === '/public/main.css') {
    fs.readFile(path.join(__dirname, '..', 'public', 'main.css'), function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.end(file);
    });
  }
  else if (url === '/public/index.js') {
    fs.readFile(path.join(__dirname, '..', 'public', 'index.js'), function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': 'application/javascript'});
      response.end(file);
    });
  }
  else if (url === '/public/node-icon.ico') {
    fs.readFile(path.join(__dirname, '..', 'public', 'node-icon.ico'), function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': 'image/x-icon'});
      response.end(file);
    });
  }
  else {
    response.writeHead(404,  {'Content-Type': 'text/html'});
    response.end('<h1> 404: Page Requested Not Found </h1>');
  }
});

server.listen(port);

console.log('Server is running on port: ', port);
