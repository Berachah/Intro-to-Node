/*  URL Access

var http = require('http');
var url = require('url');

// running localhost:8080?year=2019&month=february in webpage
http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	/*var q = url.parse(req.url, true).query;
	var dates = q.year + " " + q.month;
	res.write(dates);
	res.end();
}).listen(8080); */


// file system
/*
var http = require('http');
var fs = require('fs');


http.createServer(function (req,res){
	fs.readFile('index.html', function(err,data){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(data);
	console.log(".....Incoming Request: " + req.url);
	res.end();
	});
}).listen(8080);


console.log("Server listening on Port 8080...");*/


//Different web pages
var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000


http.createServer(function (req,res){
	var q = url.parse(req.url, true);
	console.log(q.pathname);
	var filename = "." + q.pathname;
	if(filename == './'){
		filename='./index';
	}
	filename = filename+ ".html";
	console.log(filename);
	fs.readFile(filename, function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type' : 'text/html'});
			return res.end("404 Not Found");
		}
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(data);
	console.log(".....Incoming Request: " + req.url);
	res.end();
	});
}).listen(PORT);
//.listen(8080)

console.log("Server listening on Port 8080...");
