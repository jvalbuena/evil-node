var http = require('http');
 
http.createServer(function (q, r) {
  r.writeHead(200, {'Content-Type': 'image/x-icon'} );
  r.end();
  console.log('favicon requested');
  return;
  }
 
  // // not the favicon? say hai
  // console.log('hello');
  // r.writeHead(200, {'Content-Type': 'text/plain'} );
  // r.write('Hello, world!');
  // r.end();