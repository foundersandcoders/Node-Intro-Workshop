# Node intro workshop notes
## Step 1
1. `npm init` (anything you input can be edited so don't worry)
  * package name: usually name of the repo, can be anything you want
  * version: leave as is
  * description: some stuff about your app
  * entry point: leave as is
  * text command: don't worry for now 
  * git repo, author and license: don't worry for now 
  * (you can just mash enter through these if you want)
2. first open `src` 
  * `src` (aka source) is where we put everything that doesn't get sent to the user
  * (so this is where our server lives)
  * the public folder is the stuff that does get sent to the user
3. open `server.js` and `require` in the `http` module
  * explain what `const` is
  * ```const http = require('http');```
  * using this syntax and 'requiring' in a module makes that module available in the file you are writing.
  * (you have to _tell_ node which core modules you're going to use so you don't load in unecessary ones)
4. now we need to specify a host and a port, on a local server the host is allocated automatically (to `localhost`). we also need to set up a port to make sure our server only "listens" to things coming through that port.
5. create the server
  * ```const server = http.createServer(router)```
  * the `http.createServer` method takes a single argument of a function. That function takes two arguments. ```request``` and ```response```.
  * `request` is an object with information about the request that has been sent to you
  * `response` is an object with methods on it which allow you to send things back to the user.
6. define the `router` function
  *  define an arrow function named router above where you have created the server
  *  explain that functions declared with `const` are not hoisted and so need to be defined before they are used 
  
         const router = (request, response) => {
         response.end('hello world')
         }      
  *  explain that the end method on the response object is a way to close the connection that has been opened between you and the user, sending the user the string that you have passed to the end method.
  
7. start the server
  * ```server.listen(port)```
  * write the log to let the user know the server is now running
  * ```console.log(`server up and running on localhost:${port}`)```
8. run the server by running ```node src/server.js```
  * navigate to `localhost:4000` in your browser
  * show that the plaintext we typed in is now coming up in our browser
  * show that no matter what path you give to `localhost:4000` (eg. `localhost:4000/yolo`) you still get the same response
  * this is because currently in our router function we don't look at the request, we just send the same response no matter what
9. Now is a good time to make sure everyone is at the same point and everything is working

## Step 1.5
1. Add ```const url = request.url``` to top of router function
 * this will be a string with whatever is in the url bar in the browser (apart from ```localhost:4000```)
 * so we check what it is, for the home route it will be '/'
 * so add
 
          if (url === '/') {
          response.end('hello world');
          } else if (url === '/yolo') {
          response.end('this is yolo');
          }
          
2. restart the server, navigate to both pages and show that different things are being shown in the browser.
3. Then show if you try to navigate to a path that we haven't defined that the page just keeps loading
  * This is because the client has opened a connection to the server and is waiting for a response, since our router function does not send anything back, or end the connection, the client is just left 'hanging', until the browser gets bored of waiting and closes the connection
4. Introduce adding an 'else' to the conditional chain, so that if we do not have an option we always response with something.
  ```
  else {
    response.writeHead(404);
    response.end('404 not found');
  }
  ```
  * introduce writehead and that the first argument is the code for the http request (students should be familiar with these from API week)
  * add writeHead to the prev 2 branches

## Step 1.75
5. now this function is getting a bit big, so it's a good time to make our code a bit more modular
 * create a file in src called router.js, copy and paste the router function to this new file and delete it from server.js
 * put ```module.exports = router``` at the bottom of the file
 * this is the way you tell node that you want to use a use this function in another file
 * go back to server.js and require in the router file
 * ```const router = require('./router');```
 * explain that if you are requiring in a node module (either one from core or one you downloaded from `npm`) you just write the name, if you are requiring in a local file (that you've used module.exports in) then put './' before the file path (relative to file you are requiring it into).
6. restart your server again and make sure everything stil works
7. it's getting a bit annoying having to restart the server any time we make a change
  * get everyone to install nodemon as a dev dependancy and write an npm script for starting the server file with nodemon
  * run the server with nodemon

## Step 2
1. we've sent some plain text, now lets send some actual files!
2. use `fs.readFileSync()` first to not use callbacks
3. introduce the path module and use ```path.join(__dirname, '..', 'public', 'index.html')``` as the argument to `readFileSync`
4. assign the result of readFileSync to a variable
5. add ```response.writeHead(200, { 'Content-Type': 'text/html' })``` above the response.end()
6. pass the variable with the contents of readFile to response.end()
7. go look in the browser and see that there is actual html there now

## Step 2.5
1. update this to use `readFile` rather than `readFileSync` (lpop to ask someone why we might want to do that)
```
const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
 ```
2. update the 404 route to send with ```{ 'Content-Type': 'text/html' }``` and a h1 tag with '404: not found'
  * use this as a way to introduce good error handling, letting the user know what has happened by sending something through even if there's a problem
  * update ```error``` if branch to send a response back to user, with 500 for internal server error
   ```
   if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
   ```
   * explain that this error will only happen if there is a problem whilst reading the file.
3. remove 'yolo' route.

## Step 3

1. now we want to serve our CSS
  * we can do this in much the same way as we serve our html
  * add another else if branch
  * check if the url is ```/public/main.css```
  * branch will look like this:

  ```

  else if (url === '/public/main.css') {
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
  }

  ```
2. we also need to serve our JS
  * again, much the same way:
  ```
  else if (url === '/public/index.js') {
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
  }
  ```
3. finally, we can serve the favicon
  ```
  else if (url === '/public/node-icon.ico') {
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
  }
  ```
## Step 4
1. we now are serving all of the files needed for our site! awesome!
2. but our code is quite repetitive, and we want to make it DRY!
3. remove all of the else if branches (for serving css, js and ico)
4. add an else if branch where the conditional is ```if (url.indexOf('/public/') !== -1)```
  * This checks if the url has public in it, so this route can potentially serve anything from our public directory.
4. we then check what the file extension is by splitting the url on the ```.``` and taking the second half
  * ```const extension = url.split('.')[1]```
5. then we can create a little library of filetypes for when we send the file to the client
```
const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon',
    };
```
6. Then we can construct the `filepath` the same as before

  * ```    const filePath = path.join(__dirname, '..', url);```
  
  // Replaced err with error in line 205
7. We then read the file and send it off to the client
  
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
  * We respond with a 404 if there is an error because the error will generally because the client has requested something with ```/public/``` in the url, but that we don't actually have in the public folder.
  * And we use a template literal to send off the ```Content-Type```
  * Now would be a good time to lpop to ask anyone if they know why we have to use square bracket notation to access the object's values (rather than dot notation)

## Step 5
* We can finish off by just modularising out the handlers a little bit
* It's good when the router just contains the logic of which route goes where, and what _happens_ in those routes is contained in a handlers file
* in SRC create a ```handlers.js``` file
* in `handlers.js` create a function called `handleHomeRoute` which takes two arguments, `request` and `response`
* Now copy everything inside of the first if statement branch in `router.js` in the function you just made in `handlers.js`
* you should now have something which looks like this:
```js
const handleHomeRoute = (request, response) => {
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
};
```
* now we want to do the same with the second `else if` branch
* go into `handlers.js` and create a function called `handlePublic` it should take 3 arguments - `request`, `response` and `url`
* now copy the body of the `else if` statement in `router.js` (the one with `url.indexOf('public') !== -1` as the condition) and paste it into the body of your `handlePublic` function in `handlers.js`
* you should now have something that looks like this:
```js
const handlePublic = (request, response, url) => {
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
  };
  
  // Replaced err with error in line 256
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
};
```
* now, in our `handlers.js` file we are using path and fs so we need to require those in at the top
* we're going to need to export these functions so that we can use them in `router.js` so add this to the bottom of the file:
```js
module.exports = {
  handleHomeRoute,
  handlePublic,
};
```
Explain that in ES6 if you want the value of a key in an object to be the same as the key you can just put the name of the key with a comma (as opposed to `handleHomeRoute: handleHomeRoute` etc).

* now in `router.js` we can remove the require statements bringing in `fs` and `path` as we no longer use them in this file
  * when using modules you have to require them into only into files that actually use things from that module
* but we will need our handlers file so let's bring that in.
* `const handlers = require('./handlers.js')`
* now we can replace the content of the if branches with the functions we just made
* so our `router.js` file ends up looking like this:
```js
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
```
* we don't modularise the 404 functionality as it is only two lines, to add it to our handlers file we would be adding more lines of code, without making anything clearer. The 404-ness of a route also kind of falls into the concerns of the router that we defined as well, declaring that a file is not found/does not exist can be seen to be part of the router's job.
