var express=require("express")
var db=require("./database")
 var app=express()

 app.get("/products",(req,res)=>{

    
    db.query("SELECT * FROM  EMP", (err,data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Database query failed.');
        }
        else{
            res.send(data)
        }
    })

 })
 var port=3004
 app.listen(port,()=>{
    console.log("server has been started")
 })