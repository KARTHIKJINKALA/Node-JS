
var mysql=require("mysql2")

var connection = mysql.createConnection({
    host: 'localhost',    
    port: 3306,           
    database: 'practice',      
    user: 'root',         
    password: '5555'      
});


connection.connect((err)=>{
    if (err) {
        console.log(err.message);
    } else {
        console.log("connection created with mysql successfully");
    }
});

module.exports=connection