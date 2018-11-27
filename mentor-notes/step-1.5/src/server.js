const http = require('http');

const port = 4000;

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    response.end('hello world');
  } else if (url === '/yolo') {
    response.end('this is yolo');
  } else {
    response.writeHead(404);
    response.end('404 not found');
  }
};

const server = http.createServer(router);

server.listen(port);

console.log(`server up and running on localhost:${port}`);
