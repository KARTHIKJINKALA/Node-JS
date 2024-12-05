var express=require("express")
var app=express()
var fs=require("fs")
var cors=require("cors")

app.use(cors())

app.get("/",(req,res)=>{
    fs.readFile("./data2.json","utf-8",(err,data)=>{
    if(err){
        res.status(400)
        res.send({
            status:200,
            message:err.message
        })
    }
    else{
        res.status(200)
        res.send({
           status:200,
           message:JSON.parse(data)
        })
    }
    })
   
})
var port=3006
app.listen(port,()=>{
    console.log("Server has been started successfully")
})