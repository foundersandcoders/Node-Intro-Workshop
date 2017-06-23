# Node-Intro-Workshop

**Author**: [@bradreeder](https://github.com/bradreeder)  

**Maintainer**: TBC  

### Introduction

By the end of this workshop you'll be able to answer the following questions:

* How do you setup a Node server?
* What is npm? How do you use it?
* What is a module and what different types of modules exist?
* What is a `package.json`?
* What are `module.exports` and `require`?

We'll be doing the following things:

* Initialising a project's package.json
* Creating a basic http server
* Creating a router for your server
* Learning how to use the `fs` core module to read and write from the file system
* Learning how to communicate with your http server from the front-end
* Setting up `nodemon` for your development environment
* Learning about how to modularise your server code

### What is Node?

Node.js:

* is an open source project designed to help you write JavaScript programs that talk
to networks, file systems or other I/O (input/output, reading/writing) sources.
* is mainly used for web servers or file system utilities.
* runs on the V8 JavaScript engine used in Chrome.
* uses an asynchronous (non-blocking), single-threaded, event-driven I/O model.

It doesn't have:

* a DOM (hallelujah)
* a window object, etc. (global variables are stored in the `global` object.)

because it's not run in the browser, and doesn't have access to browser APIs!

### REPL (Read-Eval-Print Loop) to run Node in the command-line

To demonstrate that Node allows you to use JavaScript on your computer you can try experimenting
with Node's REPL.

If you type `node` into your command-line you will see a `>` prompt. You can now type JavaScript
into your command-line to experiment with JavaScript code. Press ctrl + c to exit the REPL mode.

The command-line command `node path_to_program.js` also allows you to execute JavaScript programs you've
written (that don't use browser features) and will print what the program returns to the console. I recommend using this to test your code to get more comfortable with your command-line.

### What is a server?

What is a server? What's a front-end and back-end?

What's the difference between the src and public folders in this repo? They both run in different environments!

A server is a computer program that receives requests from other programs, the client, and sends back a response, e.g. to share data, information or hardware and software resources.

In a typical web app a server could perform some of these functions:

* Handle manipulation of data in the database
* File manipulation
* Authentication
* Secret Logic
* Client side sends requests to a server which sends back data to the front end to be displayed

Client-side JavaScript runs in the visitor's browser, whereas server-side code runs on a website's web server

### How Node works

Node handles I/O with: callbacks, events, streams and modules.

If you learn how these four things work then you will be able to go into any module in Node core and have a basic understanding about how to interface with it. You'll learn more about these topics with your readme research and as we progress.

This article presents a great summary of these topics and Node as a whole: [the art of Node](https://github.com/maxogden/art-of-Node).

### Modules

Modules are just small programs you can integrate with the other programs you are writing.
They package programs so that they can be exported to be used by other programs.
Node's core library is made up of modules you can import into your programs as needed to make use
of their functionality.

There are three types of modules in Node.js:

* core modules - the Node core library is made up of about two dozen modules, some lower level like events and stream some higher like http. They come installed with Node automatically.

We will mainly be using the following core modules this week:

* fs
* http
* path
* querystring
* url

There are also other types of modules:

* third-party modules - there are thousands of open-source, 3rd-party Node modules created by other people.
* your own modules!

### npm

You can download useful 3rd-party modules (also known as "packages") from the Node Package Manager (npm). It's a tool, installed with Node, for managing Node's ecosystem of modules in your projects. It allows us to install tools, packages as dependencies for our projects, and also publish our own packages.

Anyone can create a new Node module that adds some functionality and publish it to npm. As of the time of this writing there are over 400,000 modules on npm [resource here](http://www.modulecounts.com/).

npm comes with its own command-line interface you can use in your terminal while within your relevant project folder. Its main commands are:

* `npm init`: Initialise a package and create a `package.json` with the definition of that package.
* `npm search MODULE_NAME`: Search a module in the npm registry.
* `npm install MODULE_NAME`: Install MODULE\_NAME locally.
* `npm install -g MODULE_NAME`: install MODULE\_NAME globally.
* `npm install --save MODULE_NAME`: install MODULE\_NAME locally and add it as a dependency in the package.json.
* `npm install --save-dev MODULE_NAME`: install MODULE\_NAME locally and add it as a development dependency in the package.json. i.e. a dependency that is only needed for development and not the live version of the project.

### package.json

You can initialise Node within your project by calling `npm init` in the terminal. You will get
a series of prompts, feel free to press enter through them or answer them.

The `package.json` created by `npm init` contains meta-information about your project, including any third-party modules you install (with the use of `npm install`), and will install a Node virtual environment within your project under a folder called `Node_modules`. This is where all the Node modules are located in your project.

### Installing modules

If you use `npm install MODULE_NAME --save` now it will install the named module into your project. You will now be able to find it in the `node_modules` folder and it will be listed under the dependencies in your `package.json`.

Be sure to add `node_modules` to your list of files to ignore on .gitignore or it will be pushed up
when you commit to github. When you deploy your project on a server, it will use the `package.json` in order to install its own node virtual environment and `node_modules` folder, so no need to worry!

note: use global module installations sparingly and only for development purposes. Unless you install them locally to the project, they won't appear in your `package.json` and so won't be installed on the server when you deploy the project.

### http server

We now have everything we need to start writing Node code in this repo and create our first http server!

The next part of this tutorial will be done as a code along.
