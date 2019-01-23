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
  } else if (url === '/public/main.css') {
    const filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, { 'Content-Type': 'text/css' });
        response.end(file);
      }
    });
  } else if (url === '/public/index.js') {
    const filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, { 'Content-Type': 'application/javascript' });
        response.end(file);
      }
    });
  } else if (url === '/public/node-icon.ico') {
    const filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, { 'Content-Type': 'image/x-icon' });
        response.end(file);
      }
    });
  } else {
    response.writeHead(404);
    response.end('404 not found');
  }
};

module.exports = router;
