var express=require("express")
var app=express()

app.post("/products/1",async(req,res)=>{
    var api=await fetch("https://fakestoreapi.com/products/")
    var response=await api.json()

   res.send(response[0])
})
var port=3003
app.listen(port,()=>{
    console.log("SERVER STARTED SUCCESSFULLY")
})