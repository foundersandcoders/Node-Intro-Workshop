const fs = require('fs');
const path = require('path');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    const html = fs.readFileSync(
      path.join(__dirname, '..', 'public', 'index.html')
    );
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(html);
  } else if (url === '/yolo') {
    response.end('this is yolo');
  } else {
    response.writeHead(404);
    response.end('404 not found');
  }
};

module.exports = router;
