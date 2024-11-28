var http=require("http")
var fs=require("fs")
var server=http.createServer((req,res)=>{

     fs.readFile("newfile1/karthik1/practice.html","utf-8",(err,data)=>{

    if(err){
        res.write(JSON.stringify(err.message))
        res.end()
    }
    else {
        res.write(JSON.stringify(data));
        res.end();
    }
    

     })
})

var port=3004

server.listen(port,()=>{
    console.log("server has been started")
})

