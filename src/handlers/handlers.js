var fs = require('fs');
var path = require('path');

var handlers = (module.exports = {});
// Replaced err with error in lines 9, 10, 11 so that the code is consistent with router.js
handlers.serveLanding = function(request, response) {
  fs.readFile(
    path.join(__dirname, '..', '..', 'public', 'index.html'),
    function(error, file) {
      if (error) {
        console.log(error);
        response.writeHead(500, 'Content-Type: text/html');
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      }
      response.writeHead(200, 'Content-Type: text/html');
      response.end(file);
    }
  );
};
