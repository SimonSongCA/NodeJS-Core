"use strict";

// set up the http object
const http = require("http");
// set up the port
const PORT = process.env.PORT || 3000;

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

// set up the http server
// A callback function is passed to '.createServer' method
// The callback function is called everytime when the HTTP server receives a request
// the 'req' & 'res' are the request object & the response object.
// These two objects are created for every request & then passed to the callback function that is supplied to 'createServer'
const server = http.createServer((req, res) => {
  // set the header of the response body
  res.setHeader("Content-Type", "text/html");
  // send a String of HTML assigned to the 'hello' object, and close the connection
  res.end(hello);
  // res inherits from <-- 'http.ServerResponse' inherits from <-- http.OutGoingMessage inherits from <-- stream.Stream
  // 'res' is a writable stream, which is why calling 'end' writes our content and also closes the connection
});

// start listening at 'PORT' of the server
server.listen(PORT);
