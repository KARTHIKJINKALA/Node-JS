// var http=require("http")
// var url=require("url")
// var server=http.createServer(async(req,res)=>{
 
// var fetch_data=await fetch("https://fakestoreapi.com/products")
//              var data1=await fetch_data.json()
//             //  res.write(JSON.stringify(data1))
//             var param=url.parse(req.url,true)
//             console.log(param)

//             var param_data=param.pathname.split("/")[param.pathname.split("/").length-1]
//             console.log(param_data)
      
//           var filter_data=data1.filter((val)=>{
//             return val.id==param_data
            
//            })

//            if(filter_data.length>0){
//           res.write(JSON.stringify(filter_data[0]))
//            }
//            else{
//             res.write("no data")
//            }
        
// res.end()
// })
// var port=3002

// server.listen(port,()=>{
//     console.log("Server has been started:"+"http://localhost:"+port)
// })