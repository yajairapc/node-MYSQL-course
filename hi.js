var mysql= require('mysql');
//create connection 
var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:""
})

//connect to mysql
con.connect(function(err){
	if(err) throw err;
	console.log("Connected to the database");
	
	con.query("CREATE DATABASE nodeDB",function(err,result){
			if(err) throw err;
			console.log("Database created");
	});
});