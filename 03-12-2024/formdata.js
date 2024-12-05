var express=require("express")
var app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/products",(req,res)=>{
 console.log(req.body)
 res.send(req.body)
})
var port=3002
app.listen(port,()=>{
console.log("Server has been started succesfully")
})