var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
app.listen(port);

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
	res.send(students);
});
