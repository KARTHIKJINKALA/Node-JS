var express=require("express")
var app=express()

app.get("/",(req,res)=>{
  res.send("karthik jinkala")
})
app.get("/products",(req,res)=>{
    res.send("This is products")

})
var port=3008
app.listen(port,()=>{
    console.log("Server created succesfullyy")
})