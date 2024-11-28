// var http=require("http")

// var server=http.createServer((req,res)=>{

//     if(req.method=="GET"){
//         res.write("Get Method")
//     }
//     else if(req.method=="POST"){
//         res.write("This is Post Method")
//     }
//     else if(req.method=="PUT"){
//         res.write("This is PUT Method")
//     }
//     else if(req.method=="PATCH"){
//         res.write("This is Patch Method")
//     }
//     else if(req.method=="DELETE"){
//        res.write("This is Delete Method")
//     }
//     else{
//         res.write("Not a Method")
//     }
//     res.end()
// })
// var port=3001

// server.listen(port,()=>{

//     console.log("srevr has been created succesfully:"+"http://localhost:"+port)
// })