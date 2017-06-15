var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'521521',
	port:3306,
	database:'dingming'
});


connection.connect(function(err){
	if(err){
		console.log('err connecting:'+err.stack);
		return
	}
	console.log('connected as id'+connection.threadId);
});

connection.query('create database if not exists jike ;',(err,result)=>{
	connection.query('create table if not exists(course VARCHAR(20),teacher VERCHAR(20),open DATE);',
	(err,result)=>{
		connection.query("insert into course values('mysql','mofei','2017-10-22');",(err,resule)=>{
			console.log(err)
		})
	})
})

// connection.query('select * from news',(err,result)=>{
// 	if(err)
// 	{
// 		console.log(err);
// 		return false;
// 	}
// 	else{
// 		console.log(result);
// 	}
// 	// connection.query('use jike;'(err,result)=>{
// 	// 	connection.query('CREATE TABLE IF NOT EXISTS course(course VARCHAR(20), teacher VARCHAR(20), OPEN date);',
// 	// 		(err,result)=>{
// 	// 			connection.query('INSERT INTO course VALUES(node,dingming,2017-10-22);',(err,result)=>{
// 	// 				console.log(err)
// 	// 			})
// 	// 		})
// 	// })
// })