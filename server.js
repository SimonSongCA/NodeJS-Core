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
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(hello);
});

// start listening at 'PORT' of the server
server.listen(PORT);
