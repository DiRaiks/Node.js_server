var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

var server = http.createServer().listen(8080);

server.addListener('request', function(req, res) {
		file.serve(req, res);
});