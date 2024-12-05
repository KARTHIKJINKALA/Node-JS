var express=require("express")
var app=express()
var fs=require("fs")
var cors=require("cors")
app.use(cors())

app.get("/products",(req,res)=>{
    fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(data)
        }
    })

})
var port=3003
app.listen(port,()=>{
    console.log("Servver created succesfully"+"http://localhost:"+port) 
})