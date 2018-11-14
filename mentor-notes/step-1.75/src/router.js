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

module.exports = router;
