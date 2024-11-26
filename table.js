var mysql= require('mysql');
//create connection 
var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"nodedb",
})

//connect to mysql
con.connect(function(err){
	if(err) throw err;
	console.log("Connected to the database");

	//create table 
	var sql="CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
	con.query(sql,function (err,result){
		if(err) throw err;
		console.log("Table has been created");
	});
	
});