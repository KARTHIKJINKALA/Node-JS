var express=require("express")
var app=express()
var multer=require("multer")

var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"")

    }
})

app.post("/products",(req,res)=>{
    res.send("multer")
})
var port=3008
app.listen(port,()=>{
    console.log("Server has been started succesfully")
})