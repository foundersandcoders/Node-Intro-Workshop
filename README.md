# Node-Intro-Workshop

### What is Node?

node.js is:

* an open source project designed to help you write javascript programs that talk
to networks, file systems or other I/O (input/ output, reading/writing) sources.
* mainly used for web servers or file system utilities.
* runs on the V8 Javascript engine used in Chrome.
* uses an asynchronous (non-blocking), single-threaded, event-driven I/O model.

In essence, javascript for the server!

### What is a server?

What is a server? What's a front-end and back-end?

What's the difference between the src and public folders here? They both run in completely different environments!

A server is a computer program that receives requests from other programs, the client, and sends back a response, e.g. to share data, information or hardware and software resources.

In a typical web app a server could perform some of these functions:

* Handle manipulation of data in the database.
* File manipulation.
* Authentication.
* Secret Logic
* Client side sends requests to a server which sends back data to the front end to be displayed.

Client-side javascript runs in the visitor's browser, whereas server-side code runs on a website's web server.

### How node works

Node handles I/O with: callbacks, events, streams and modules.

If you learn how these four things work then you will be able to go into any module in node core and have a basic understanding about how to interface with it. You'll learn more about these topics with your readme research and as we progress.

### Modules

Modules are just small programs you can integrate with the bigger program you are writing.
They package programs so that they can be exported to be imported and used by other programs.
Node's core library is made up of modules you can import into your programs as needed to make use
of their methods.

There are three types of modules in node.js:

* core modules - the node core library is made up of about two dozen modules, some lower level like events and stream some higher like http. They come installed with node automatically.

We will mainly be covering the following core modules this week:

* assert
* fs
* http
* path
* querystring
* url

The other types are:

* third-party modules - there are thousands of open-source, 3rd-party node modules created by other people.
* your own modules!

### npm

You can download useful 3rd-party modules (also known as "packages") from the Node Package Manager (npm). It's a tool for managing Node's ecosystem of modules in your projects. It allows us to install tools, packages as dependencies for our projects, and also publish our own packages.

Anyone can create a new node module that adds some functionality and publish it to npm. As of the time of this writing there are 34,000 modules on npm.

npm comes with its own command-line interface you can use in your terminal. Its main commands are:

* `npm init`: Initialise a package and create a `package.json` with the definition of that package.
* `npm search MODULE_NAME`: Search a module in the npm registry.
* `npm install MODULE_NAME`: Install MODULE\_NAME locally.
* `npm install -g MODULE_NAME`: install MODULE\_NAME globally.
* `npm install --save MODULE_NAME`: install MODULE\_NAME locally and add it as a dependency in the package.json.
* `npm install --save-dev MODULE_NAME`: install MODULE\_NAME locally and add it as a development dependency in the package.json.
