var express=require("express")
var app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/products",(req,res)=>{
res.send(req.body)
})
var port=3003
app.listen(port,()=>{
    console.log("Servver created succesfully"+"http://localhost:"+port) 
})