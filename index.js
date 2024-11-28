// // const { REFUSED } = require("dns")
// // var http=require("http")

// // var server=http.createServer((req,res)=>{
// //     console.log(req.url)

// // if(req.method=="GET"){
// //     res.write("get method")
// // }
// // else if(req.method=="PUT"){
// //     res.write("put method")
// // }
// // else if(req.method=="POST"){
// //     res.write("post method")
// // }
// // else if(req.method=="PATCH"){
// //     res.write("patch method")
// // }
// // else if(req.method=="DELETE")
// //       res.write("delete method")
// //     else{
// //       res.write("not a method")
// //     }

// //     res.end()
// // })

// // var port=3003
// // server.listen(port,()=>{
// //  console.log("server has been startedat port:"+"http://localhost:"+port)
// // })


// var http=require("http")
// var url=require("url")

// var server=http.createServer((req,res)=>{
//     // console.log(req.url)

//     var fetch_data=[{
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//           "rate": 3.9,
//           "count": 120
//         }
//       },
//       {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//           "rate": 4.1,
//           "count": 259
//         }
//       },
//       {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//           "rate": 4.7,
//           "count": 500
//         }
//       }]

//     var data=url.parse(req.url,true)
//     // console.log(data.query)
//     var param_data=data.pathname.split("/")[data.pathname.split("/").length-1]
//     // console.log(param)

//    var filter_data=fetch_data.filter((val,ind)=>{
         
//     return val.id==param_data
//    })

//    if(filter_data.length>0){

//    res.write(JSON.stringify(filter_data[0]))
// }
// else{
//     res.write("data not found")
// }
// res.end()
  
    
   



    
// })
// var port=3000

// server.listen(port,()=>{
//     console.log("server has been started"+"http://localhost:"+port)
// })




// // var http=require("http")
// // var url=require("url")

// // var server=http.createServer((req,res)=>{

// //     var fetch_data=[{
// //                 "id": 1,
// //                 "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// //                 "price": 109.95,
// //                 "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// //                 "category": "men's clothing",
// //                 "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// //                 "rating": {
// //                   "rate": 3.9,
// //                   "count": 120
// //                 }
// //               },
// //               {
// //                 "id": 2,
// //                 "title": "Mens Casual Premium Slim Fit T-Shirts ",
// //                 "price": 22.3,
// //                 "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
// //                 "category": "men's clothing",
// //                 "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
// //                 "rating": {
// //                   "rate": 4.1,
// //                   "count": 259
// //                 }
// //               },
// //               {
// //                 "id": 3,
// //                 "title": "Mens Cotton Jacket",
// //                 "price": 55.99,
// //                 "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
// //                 "category": "men's clothing",
// //                 "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
// //                 "rating": {
// //                   "rate": 4.7,
// //                   "count": 500
// //                 }
// //               }]

// //           var data=url.parse(req.url,true)
// //         //   console.log(data.pathname)

// //           var param_data=data.pathname.split("/").pop()
// //     // console.log(param_data)

// //     var filter_data=fetch_data.filter((val,ind)=>{
         

// //         return val.id==param_data
// //     })

// //     if(filter_data>0){
// //        res.write(JSON.stringify(filter_data)[0])
// //     }
// //     else{
// //         res.write("data not found")
// //     }
    
// //     res.end()

// // })
// // var port=3000
// // server.listen(port,()=>{
// //   console.log("server has been started"+"http://localhost:"+port)
// // })