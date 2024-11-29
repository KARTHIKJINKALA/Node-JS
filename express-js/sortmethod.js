var express=require("express")
var app=express()

app.get("/products",async(req,res)=>{
    var api=await fetch("https://fakestoreapi.com/products/")
    var response=await api.json()

    // if(Object.keys(req.query).length>0){
        var res_arr=response.map((val)=>{
            return val.price
        })
        for(i=0;i<res_arr.length;i++){
            for(j=i+1; j<res_arr.length;j++){
                
                if(res_arr[j]<res_arr[i]){
                    x=res_arr[i]
                    res_arr[i]=res_arr[j]
                    res_arr[j]=x
                }
            }
        }
        res.send(res_arr)

        
        // if(req.query.order=="desc"){
        //    var res_arr=Object.keys(response)
        //    console.log(res_arr)
           
        // //    for(i=0;i<res_arr.length;i++){
        // //     for(j=i+1; j<res_arr.length;j++){

        // //         if(res_arr[j]<res_arr[i]){
        // //             x=res_arr[i]
        // //             res_arr[i]=res_arr[j]
        // //             res_arr[j]=x
        // //     }
                
        // //       }


        // //    }
        // //    console.log(res_arr)
            
        // }
        // if(req.query.cat=="jewels"){

        // }
        // if(req.query.cat=="womens"){

        // }
        // // res.send(req.query)
//     }
//     else{
//         res.send("Please send the query")
//     }
// //  res.send(response)
})
var port=3003
app.listen(port,()=>{
    console.log("Server created succesfully")
})