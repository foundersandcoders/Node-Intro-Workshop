var http = require('http'); //require is how you import a node core module
var router = require('./router/router.js');

//now we need to specify a host and a port, on a local server the host is allocated automatically. we also need to set up a port to make sure our server only "listens" to things coming through that port.

var port = 4000; //port can be any number, usually 4 digits. just tells our server where to listen.

var server = http.createServer(router);

server.listen(port);

console.log(`server up and running on port: ${port}`);

// can navigate to this page with localhost:<your-port-here> in your browser

// to make changes to the page produced by the server we much kill the server and rerun it

// unless you use nodemon

// add the npm modules you use to your package.json so that anyone who clones repo can run "npm install" in the root directory of the repo

// you can add shortcuts for your npm modules i nyour package.json

// custom script tags must be run with "npm run" rather than just npm
