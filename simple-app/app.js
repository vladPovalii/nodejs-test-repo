var url = require("url");
var fs = require("fs");

function renderHTML(path, response) {
	fs.readFile(path, null, function(error, data) {
		if(error) {
			response.writeHead(404);
			response.write("file not found");
		} else {
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest(request, response) {
		response.writeHead(200, {ContentType : "text/html"});
		var path = url.parse(request.url).pathname;
		switch(path){
			case "/":
				renderHTML("./index.html", response);
				break;
			case "/login": 
				renderHTML("./login.html", response);
				break;
			default:
				response.writeHead(404);
				response.write("page not found");
				response.end();
		}
	}
}