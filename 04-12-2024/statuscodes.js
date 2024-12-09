var express=require("express")
var app=express()

app.get("/products",(req,res)=>{
//    res.status(201)
//     res.send("karthik jinkala")

       res.status(201)
       res.send({
        status:201,
        message:"data sent success"
       })
  
})
var port=3006
app.listen(port,()=>{
console.log("Server has been started succesfully");

})