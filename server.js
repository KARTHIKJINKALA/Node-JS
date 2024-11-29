var http=require("http")


var server=http.createServer((req,res)=>{
    console.log(req.method)

 res.write("Karthik Jinkala")
 res.end()

})

var port=3003

server.listen(port,()=>{
     console.log("server has been started succesfully:"+"http://localhost:"+port)
     
})