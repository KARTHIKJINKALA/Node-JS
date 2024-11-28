var http=require("http")
var server=http.createServer((req,res)=>{

    res.write("This is body")
   var body=""

   req.on("data",(chunk)=>{
     body+=chunk.toString()
   })

   req.on("end",()=>{

    console.log((JSON.parse(body)))
    res.end()
   })
})

var port=3000

server.listen(port,()=>{
    console.log("Server has been succesfully started"+"http://localhost:"+port)
})