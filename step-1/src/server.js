const http = require('http');

const port = 4000;

const router = (request, response) => {
  response.end('hello world');
};

const server = http.createServer(router);

server.listen(port);

console.log(`server up and running on localhost:${port}`);
