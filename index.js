var http = require('http');

requestHandler = function(req, res) {
	console.log('Inside Req');
	if(req.url == '/') {
		res.end('Welcome Home');
	}
	else {
		res.end("Don't wander away from home")
	}
}

var server = http.createServer(requestHandler);


server.listen(4000, function(){
	console.log('server started')
})