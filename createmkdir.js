var http=require("http")
var fs=require("fs")


var server=http.createServer((req,res)=>{


    fs.mkdir("newfile1/karthik1",{recursive:true},(err)=>{
       if(err){
        res.write(JSON.stringify(err.message))
        res.end()
       }
       else{
        res.write("file created succesfully")
        res.end()
       }
    })
})
var port=3002
server.listen(port,()=>{


    console.log("server has been created succefully")

})