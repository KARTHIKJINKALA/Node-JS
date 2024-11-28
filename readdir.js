var http=require("http")
var fs=require("fs")
const { setServers } = require("dns")


var server=http.createServer((req,res)=>{

    fs.readdir("newfile1/karthik1",(err,files)=>{

        if(err){
            res.write(JSON.stringify(err.message))
          res.end()
        }
        else{
          res.write(JSON.stringify(files))
          res.end()
        }

    })

})
var port=3003

server.listen(port,()=>{
 console.log("server has been created succesfully")
})