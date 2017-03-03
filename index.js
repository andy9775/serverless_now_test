const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  path = req.url;
  method = req.method;

  var data = 'Hello World';
  switch (path) {
    case '/':
      data = 'Home page'
      break;
    case '/todo':
      data = 'Todo page';
      break;
  }

  res.end(`<html><body><div><h1>${data}</h1></div></body></html>`);
});

server.listen(3000);
