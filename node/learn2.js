var http = require('http');

var port = 1337;

var ip = 'localhost';

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World lol\n');

}).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port + '/');