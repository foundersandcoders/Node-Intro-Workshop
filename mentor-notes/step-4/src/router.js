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
  } else if (url.indexOf('public') !== -1) {
    const extension = url.split('.')[1];
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon',
    };

    // Replaced err with error in line 31
    const filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>404 file not found</h1>');
      } else {
        response.writeHead(200, { 'Content-Type': extensionType[extension] });
        response.end(file);
      }
    });
    console.log(url);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 file not found</h1>');
  }
};

module.exports = router;
