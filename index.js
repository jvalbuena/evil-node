var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//var favicon_interceptor = require("./favicon_interceptor")

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/favicon.ico"] = requestHandlers.start;


server.start(router.route, handle);