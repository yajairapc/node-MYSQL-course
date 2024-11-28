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

	var sql= "SELECT * FROM customers";
	con.query(sql, function (err, result, fields){
		if(err) throw err;
		var i;
		for (i=0; i<result.length; i++)
			console.log(result[i].id +"|"+ result[i].name +"|"+ result[i].email);
	});
	
});