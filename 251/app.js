var http, server;

http = require("http");
server = http.createServer(function(request, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("FUCK off");
}).listen(3000);

console.log("listening on %d", server.address().port);