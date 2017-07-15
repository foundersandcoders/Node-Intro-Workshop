var fs = require('fs');
var path = require('path');
var handlers = require('./../handlers/handlers.js');

module.exports = function(request, response) {
  var url = request.url;

  if (url === '/') {
    handlers.serveLanding(request, response);
  } else if (url.indexOf('public') !== -1) {
    var extension = url.split('.')[1];
    var extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon',
    };
    fs.readFile(path.join(__dirname, '..', '..', url), function(err, file) {
      if (err) {
        console.log(err);
        response.writeHead(500, 'Content-Type: text/html');
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
        response.end(file);
      }
    });
    console.log(url);
  } else {
    response.writeHead(404, 'Content-Type: text/html');
    response.end('<h1>404: file not found</h1>');
  }
};
