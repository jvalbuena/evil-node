var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called");
		exec("ls -lahrt /", function (error, stdout, stderr) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write(stdout);
			response.end();
		});
	}

function upload(response) {
	console.log("Request handler 'upload' was called");
		response.writeHead(200, {"Content-Type": "text/plain}"});
		response.write("Hello Upload")
		response.end();
}

// Replace all of this - spawn a child process fix the evil sync(), free the event loop from slavery.
// function start() {
// 	console.log("Request handler 'start' was called");
// 	function sleep(milliseconds) {
// 		var startTime = new Date().getTime();
// 		while (new Date().getTime() < startTime + milliseconds);
// 	}

// 	sleep(10000);
// 	return "This is hello for Start"

// }

// function upload() {
// 	console.log("Request handler 'upload' was called");
// 	return "This is a hello for upload"
// }

exports.start = start;
exports.upload = upload;