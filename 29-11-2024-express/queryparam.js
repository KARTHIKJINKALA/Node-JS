var express=require("express")
var app=express()

app.get("/products/:id",(req,res)=>{
  res.send({
    params:req.params,
    query:req.query
  })
})
var port=3005
app.listen(port,()=>{
  console.log("Server has been created succesfully"+"http://localhost:"+port)
})