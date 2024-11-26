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
	var sql="INSERT INTO customers( name, email) VALUES ('Eddie Perez Pierrez','eddiepp376@gmail.com')";
	con.query(sql,function (err,result){
		if(err) throw err;
		console.log("Data inserted into table");
	});
	
});