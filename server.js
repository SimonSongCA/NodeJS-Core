"use strict";

// set up the http object
const http = require("http");
// set up the port
const PORT = process.env.PORT || 3000;

const url = require("url");
const { STATUS_CODES } = http;

// set up an HTML object named under 'hello'
const hello = `<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   h1 { color: #EEE; font-family: sans-serif }
  </style>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`;

// set up an HTML object named under 'root'
const root = `<html> 
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>Hello</a>
</body>
</html>`;

// set up the http server
// A callback function is passed to '.createServer' method
// The callback function is called everytime when the HTTP server receives a request
// the 'req' & 'res' are the request object & the response object.
// These two objects are created for every request & then passed to the callback function that is supplied to 'createServer'
const server = http.createServer((req, res) => {
  // set the header of the response body
  res.setHeader("Content-Type", "text/html");
  // return a '405' if the method is not 'GET'
  if (req.method != "GET") {
    res.statusCode = 405;
    res.end(STATUS_CODES[res.statusCode] + "\r\n");
    return;
  }
  // return a 'root' object if the current pathname is '/'
  const { pathname } = url.parse(req.url);
  if (pathname == "/") {
    res.end(root);
    return;
  }
  // return a 'hello' object if the current pathname is '/hello'
  if (pathname === "/hello") {
    res.end(hello);
    return;
  }
  // if none of the if statements are triggered, return a '404'
  res.statusCode = 404;
  res.end(STATUS_CODES[res.statusCode] + "\r\n");

  // res inherits from <-- 'http.ServerResponse' inherits from <-- http.OutGoingMessage inherits from <-- stream.Stream
  // 'res' is a writable stream, which is why calling 'end' writes our content and also closes the connection
});

// start listening at 'PORT' of the server
server.listen(PORT);
