/* simple socket io test */

// I dont know what this for ???
'use strict';

var countUp,
    http = require("http"),
    socketIo = require("socket.io"),
    express = require("express"),
    app = express(),
    server = http.createServer(app),
    // let socket io to listen server, keep the connection with server
    io = socketIo.listen(server),
    countIdx = 0;

//---begin utility modules
countUp = function(){
    countIdx ++;
    console.log(countIdx);
    io.sockets.send(countIdx);
};

app.configure(function(){
    app.use(express.static(__dirname + "/"));
});

app.get("/", function(req, res){
    res.redirect("/socket.html");
});

server.listen(3000);
setInterval(countUp, 1000);




