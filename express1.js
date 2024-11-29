var express=require("express")
var app=express()
// console.log(app)

app.get("/products/3",async(req,res)=>{
    var api=await fetch("https://fakestoreapi.com/products/")
    var response=await api.json()

   res.send(response[2])
})
var port=3003
app.listen(port,()=>{
    console.log("SERVER STARTED SUCCESSFULLY")
})