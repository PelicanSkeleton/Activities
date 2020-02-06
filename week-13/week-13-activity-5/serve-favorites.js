var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/index.html":
            displayRoot(res);
            break;
        case "/foods.html":
            displayFood(res);
            break;
        case "/movies.html":
            displayMovie(res);
            break;
        default:
            display404(res);
    };
};

function displayRoot(res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFood(res) {
    fs.readFile(__dirname + "/foods.html", function (err, data) {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovie(res){
    fs.readFile(__dirname + "/movies.html", function (err, data){
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(res) {
    fs.readFile(__dirname + "/404.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
    });
}


server.listen(PORT, function () {
    console.log("Server is listening on: http://localhost:" + PORT);
});