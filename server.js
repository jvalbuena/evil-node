var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname; 
		console.log("Request for " + pathname + " received beutch.");
			
			route(handle, pathname);

		response.writeHead(200,{"Content-type": "text/plain"});
		response.write("Hello" + pathname + "World");
		response.end();		
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started on port 8888");
}

exports.start = start;