// In the process of req and response model if we want to add
//  the extra information we use the middlewares
// If we want to add the middleware we use the usemethod
// for cross origin resource sharing(cors) donot allow the two cross domains sharing of data
// To remove the cors we use the module cors 

var express=require("express")
var app=express()
// var cors=require("cors")

// app.use(cors())
// app.use(express.json())

// app.use((req,res,next)=>{
// //  console.log("This is karthik jinkala")
// //  next()
// res.jk="this is karthik jinkala"
// next()
// })

app.post("/products",(req,res)=>{
console.log(req.body)
    // res.send(req.body)
    console.log(res.jk)
    res.send("hello")
})
var port=3004
app.listen(port,()=>{
    console.log("Server has been started succsfully")
})