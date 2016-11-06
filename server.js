var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.listen(3000);

console.log("server started at port 3000...")
student = {};
app.get('/getAllStudents',function(req,res){

students = [{"id":"1","name":"ahmed","age":"22","address":"miraroad"},
{"id":"2","name":"raees","age":"62","address":"miraroad"},
{"id":"3","name":"viraj","age":"32","address":"miraroad"}];

	res.send(students);
});

app.post("/SaveStudentRecord",function(req,res){
	console.log(req.body);
	//students.push(req.body);
	res.send(students);
});
