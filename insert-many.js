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

	//Insert into
	var sql="INSERT INTO customers(name, email) VALUES ?";
	var values= [
		['Abi Perez', 'abisaip.rw@gmail.com'],
		['Mikel Perez', 'mikel@gmail.com'],
		['Damaris Carrillo', 'dama.pc95@gmail.com'],
	]
	con.query(sql, [values], function (err, result){
		if(err) throw err;
		console.log("Records inserted " + result.affectedRows);
	});
	
});