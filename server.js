var express = require('express')
var app = express();

var bodyParser = require('body-parser');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
app.listen(port);
//var config = require('config.js')
//config.show("running");
console.log("server started at port "+ port);
student = {};
app.get('/',function(req,res){
	res.redirect("index.html");
})
app.get('/getAllStudents',function(req,res){

students = [{"id":"1","name":"ahmed","age":"22","address":"miraroad"},
{"id":"2","name":"raees","age":"62","address":"miraroad"},
{"id":"3","name":"viraj","age":"32","address":"miraroad"}];
	res.send(students);
});
app.post("/SaveStudentRecord",function(req,res){
	console.log(req.body);
	
	//console.log(req.body);
	var stu = req.body;
	for(var i=0;i<students.length;i++)
	{
		if(stu.id == students[i].id)
		{
			students[i].name = stu.name;
			students[i].age = stu.age;
			students[i].address = stu.address;
		}
	}
	res.send(students);
});
