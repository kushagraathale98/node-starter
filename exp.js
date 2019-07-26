var express = require('express');
var app = express();
app.get("/",function(req,res){
    res.send("hi there");
});
app.listen(8080,function(){
    console.log("server has started");
});