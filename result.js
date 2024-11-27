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

	var sql= "INSERT INTO customers (name, email) VALUES ('steve','steve@gmail.com')";
	con.query(sql, function (err, result){
		if(err) throw err;
		console.log("Records inserted " + result.affectedRows);
	});
	
});