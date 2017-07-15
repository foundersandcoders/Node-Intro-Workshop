var fs = require('fs');
var path = require('path');

var handlers = (module.exports = {});

handlers.serveLanding = function(request, response) {
  fs.readFile(
    path.join(__dirname, '..', '..', 'public', 'index.html'),
    function(err, file) {
      if (err) {
        console.log(err);
        response.writeHead(500, 'Content-Type: text/html');
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      }
      response.writeHead(200, 'Content-Type: text/html');
      response.end(file);
    }
  );
};
