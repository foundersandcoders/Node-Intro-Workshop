var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 4000;

var handler = function(request, response) {
  var url = request.url;
  if (url === '/') {
    fs.readFile(path.join(__dirname, '..', 'index.html'), function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(file);
    });
  }
  else if (url.indexOf('public') !== -1) {
    var extension = url.split('.')[1];
    var extensionType = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'ico': 'image/x-icon'
    };
    fs.readFile(path.join(__dirname, '..', url), function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': extensionType[extension]});
      response.end(file);
    });
  }
  else {
    response.writeHead(404,  {'Content-Type': 'text/html'});
    response.end('<h1> 404: Page Requested Not Found </h1>');
  }
}

var server = http.createServer(handler);

server.listen(port);

console.log('Server is running on port: ', port);
