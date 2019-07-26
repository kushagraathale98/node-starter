var faker = require('faker');
var http = require('http');
const loader=require("loader");
var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();
http.createServer(function(req,res){
	res.writeHead(200,"Content-Type":"text/html");
    for(var i=0 ; i< 10 ; i++){
    	res.write('<p>"randomProduct" + "randomPrice"');
    }
    res.end();
}).listen(8080);