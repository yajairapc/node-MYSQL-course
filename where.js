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

	var sql= "SELECT * FROM customers WHERE name like 'e%'";
	con.query(sql, function (err, result, fields){
		if(err) throw err;
		console.log(result);
	});
	
});