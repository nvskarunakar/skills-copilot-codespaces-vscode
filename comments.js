// Create web servers and listen to incoming requests
// Load the HTTP module
var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");
var comments = [];

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url);
    var pathName = parsedUrl.pathname;
    var query = querystring.parse(parsedUrl.query);
    if (pathName === "/") {
        fs.readFile("./index.html", function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write(data);
                res.end();
            }
        });
    } else if (pathName === "/comment") {
        comments.push(query.comment);
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.write("Comment added");
        res.end();
    } else if (pathName === "/getComments") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(JSON.stringify(comments));
        res.end();
    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.write("Page not found");
        res.end();
    }
});

server.listen(3000, function () {
    console.log("Server is running on port 3000");
});
