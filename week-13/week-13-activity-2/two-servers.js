var http = require("http");

var PORT1 = 8000;
var PORT2 = 8080;

function handleRequest1(req, res){

    res.end("It works! Path Hit: " + req.url);
};

function handleRequest2(req, res){

    res.end("It works 2! Path Hit: " + req.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){

    console.log("Server listening on: http://localhost:" + PORT1);
})

server2.listen(PORT2, function(){

    console.log("Server listening on: http://localhost:" + PORT2);
})