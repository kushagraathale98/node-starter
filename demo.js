const http = require('http');
const server = http.createServer((req,res)=>{
	res.write('Hello');
	res.end();
}).listen(5000);


