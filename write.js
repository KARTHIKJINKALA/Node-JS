var http=require("http")
var fs=require("fs")
var server=http.createServer(async(req,res)=>{

    var response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
     console.log(data)

     fs.writeFile("data1.json",JSON.stringify(data),"utf-8",(err,data)=>{


    if(err){
        console.log("Error")
    }
    else {
        res.write(data.toString());
    }
    res.end();
    

     })
})

var port=3001

server.listen(port,()=>{
    console.log("server has been started at port:"+"http://localhost:"+port)
})