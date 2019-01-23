const handlers = require('./handlers.js');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.handleHomeRoute(request, response);
  } else if (url.indexOf('public') !== -1) {
    handlers.handlePublic(request, response, url);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 file not found</h1>');
  }
};

module.exports = router;
