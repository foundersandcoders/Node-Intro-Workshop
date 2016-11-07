var http = require('http');
var router = require('./router/router');

var app = function(request, response) {
  router(request, response);
};

var port = 4000;

var server = http.createServer(app);

server.listen(port);

console.log('server is running on port: ', port);
