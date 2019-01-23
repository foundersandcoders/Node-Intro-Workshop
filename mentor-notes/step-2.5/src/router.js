const fs = require('fs');
const path = require('path');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
    });
  } else if (url === '/yolo') {
    response.end('this is yolo');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 not found</h1>');
  }
};

module.exports = router;
