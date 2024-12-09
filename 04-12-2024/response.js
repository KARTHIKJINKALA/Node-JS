var express=require("express")
var app=express()
var fs=require("fs")

app.get("/products",(req,res)=>{

    fs.readFile("../data1.json","utf8",(err,data)=>{
        if(err){
            res.status(400)
            res.send({
                status:400,
                message:err.message
            })
           
        }
        else{
            res.status(201)
            res.send({
                status:201,
                message:JSON.parse(data)
            })
            

        }
    })
    //    res.status(201)
    //    res.send({
    //     status:201,
    //     message:"data sent success"
    //    })
  
})

var port=3006
app.listen(port,()=>{
console.log("Server started"+"http://localhost:"+port)
})