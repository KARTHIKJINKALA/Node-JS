var express=require("express")
var app=express()
var {filter}=require("./reusecode")

app.get("/products/",async(req,res)=>{
   var api=await fetch("https://fakestoreapi.com/products/")
   var response=await api.json()

   if(Object.keys(req.query).length>0){
    // res.send(req.query)
    if(req.query.order=="asc"){
        response.sort((a,b)=>{
            return a.price - b.price
            
        })
        if(req.query.cat=="m"){
            // var filter_data=response.filter((val,ind)=>{
            //    return val.category== "men's clothing"
            // }) 
            // // console.log(filter_data)

            var filter_data=filter("men's clothing",response)
            res.send(filter_data)
        }
        if(req.query.cat=="j"){
            // var filter_data=response.filter((val,ind)=>{
            //    return val.category== "jewelery"
            // }) 
            // console.log(filter_data)
            var filter_data=filter("jewelery",response)
            res.send(filter_data)
        }
        if(req.query.cat=" "){
            var filter_data=response.filter((val,ind)=>{
                return val
             }) 
             // console.log(filter_data)
             res.send(filter_data)
        }
    }
    else if(req.query.order=="desc"){
        response.sort((a,b)=>{
            return b.price - a.price
        })

        if(req.query.cat=="m"){
            // var filter_data1=response.filter((val,ind)=>{
            //    return val.category== "men's clothing"
            // }) 
            // console.log(filter_data)
            var filter_data=filter("men's clothing",response)
            res.send(filter_data)
        }
        if(req.query.cat=="j"){
            // var filter_data1=response.filter((val,ind)=>{
            //    return val.category== "jewelery"
            // }) 
            // console.log(filter_data)
            var filter_data=filter("jewelery",response)
            res.send(filter_data)
        }
        if(req.query.cat=" "){
            var filter_data1=response.filter((val,ind)=>{
                return val
             }) 
             // console.log(filter_data)
             res.send(filter_data1)
        }
       

    }
    else{
        res.send(response)
    }

   }
   else{
    res.send("Plase provide the query")
   }
})
var port=3006
app.listen(port,()=>{
    console.log("Server created successfully"+"http://localhost:"+port)
})



























































// var express=require("express")
// var app=express()

// app.get("/products",async(req,res)=>{
//     var api=await fetch("https://fakestoreapi.com/products/")
//     var response=await api.json()

//     // if(Object.keys(req.query).length>0){
//         var res_arr=response.map((val)=>{
//             return val
//         })
//         for(i=0;i<res_arr.length;i++){
//             for(j=i+1; j<res_arr.length;j++){
                
//                 if(res_arr[j]<res_arr[i]){
//                     x=res_arr[i]
//                     res_arr[i]=res_arr[j]
//                     res_arr[j]=x
//                 }
//             }
//         }
//         res.send(response)

        
//         // if(req.query.order=="desc"){
//         //    var res_arr=Object.keys(response)
//         //    console.log(res_arr)
           
//         // //    for(i=0;i<res_arr.length;i++){
//         // //     for(j=i+1; j<res_arr.length;j++){

//         // //         if(res_arr[j]<res_arr[i]){
//         // //             x=res_arr[i]
//         // //             res_arr[i]=res_arr[j]
//         // //             res_arr[j]=x
//         // //     }
                
//         // //       }


//         // //    }
//         // //    console.log(res_arr)
            
//         // }
//         // if(req.query.cat=="jewels"){

//         // }
//         // if(req.query.cat=="womens"){

//         // }
//         // // res.send(req.query)
// //     }
// //     else{
// //         res.send("Please send the query")
// //     }
// // //  res.send(response)
// })
// var port=3003
// app.listen(port,()=>{
//     console.log("Server created succesfully")
// })