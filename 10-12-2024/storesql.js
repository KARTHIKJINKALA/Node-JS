var express=require("express")
var app=express()
var connect=require("./database")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/formdata",(req,res)=>{
    var username=req.body.username
    var password=req.body.password



    console.log(req.body);
    // var squery="CREATE TABLE NODESQL (USERNAME VARCHAR(20),PASSWORD VARCHAR(20))"

var sinsert="INSERT INTO NODESQL (USERNAME,PASSWORD) VALUES(?,?)"

    connect.query(sinsert,[username,password],(err,data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Database query failed.');
        }
        else{
            res.send(req.body)
        }
    })
    
//    res.send("this is body data")
})
var port=3006
app.listen(port,()=>{
    console.log("Server has been created succesfully")
})