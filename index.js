const http = require("http");

const server = http.createServer(function(req,res){
    
    if(req.url=="/"){
        res.end("This is the Home Page")
    }
    if(req.url=="/about"){
        res.end("This is the About Page")
    }
    if(req.url=="/contact"){
        res.end("This is the Contact Page")
    }


})
  

server.listen(5500, function(){
    console.log("server running on 5500")
})