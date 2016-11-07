var fs = require('fs');
var path = require('path');

var handlers = module.exports = {};

handlers.serveLanding = function(request, response) {
  fs.readFile(path.join(__dirname, '../..', 'index.html'), function(err, file) {
    if (err) throw err;
    response.writeHead(200, { "content-type": "text/html" });
    response.end(file);
  });
}

handlers.servePublic = function(request, response, url, extension) {
  fs.readFile(path.join(__dirname, '../..',  url), function(err, file) {
    if (err) throw err;
    var extension = url.split('.')[1];
    response.writeHead(200, { "content-type": "text/" + extension });
    response.end(file);
  });
}

handlers.pageNotFound = function(request, response) {
  response.writeHead(404, { "content-type": "text/html" });
  response.write('<h1>404 Page Requested Cannot be Found</h1>');
  response.end();
}
