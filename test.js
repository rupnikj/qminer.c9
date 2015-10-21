var http = require('http');
var qm = require('qminer');


var startString = new Date().toString();

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var msg = 'Random matrix generator started at ' + startString + '.\n\nHere\'s a random matrix:\n\n' + new qm.la.Matrix({random:true, cols:3, rows: 3}).toString();
  response.end(msg);
}).listen(process.env.PORT, process.env.IP);

console.log(process.version, process.env.IP, process.env.PORT, new Date());