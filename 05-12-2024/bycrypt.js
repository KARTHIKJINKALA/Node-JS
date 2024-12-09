var express=require("express")
var app=express()
var bcrypt=require("bcrypt")
var fs=require("fs")

app.use(express.json())


app.post("/products",async(req,res)=>{
//  console.log(req.body)
var salt=10
var hashed_password=await bcrypt.hash(req.body.password,salt)
var data1={
    username:req.body.username,
    hashed:hashed_password
    }

    fs.writeFile("./storedata.json",JSON.stringify(data1),"utf-8",(err)=>{
    if(err){
        res.status(400)
        res.send({
            status:400,
            message:err.message
        })
    }
    else{
        res.status(200)
        res.send({
            status:200,
            message:"data stored succsfully"
        })
    }
    })
 res.status(200).send({
    status:200,
    message:"succesful",
    dataa:data1
 })
})

app.post("/login",async(req,res)=>{
    var stored=fs.readFileSync("./storedata.json","utf-8")
    console.log(stored)


    var j=JSON.parse(stored)
    var {hashed}=j
    var userpass=req.body.password


    var match=await bcrypt.compare(userpass,hashed)
        // res.send({
        //     hash:hashed,
        //     userpassword:userpass
        // })
        res.send(match)

    


    // res.send()
})

var port=3002
app.listen(port,()=>{
console.log("Server has been started succesfully")
})