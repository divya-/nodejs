var http = require('http');
var mustache = require("mustache");

requestHandler = function(req, res) {
	console.log('Inside Req');
	if(req.url == '/') {
		
		result = mustache.render("Hello {{first_name}} {{last_name}}", {
				"first_name": "Divya",
				"last_name": "K"
			})
		res.end(result);
	}else {
		res.end("Don't wander away from home")
	}
}

var server = http.createServer(requestHandler);


server.listen(4000, function(){
	console.log('server started')
})