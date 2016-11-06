var express = require('express')
var app = express();

app.use(express.static(__dirname+'/public'));

app.listen(3000);

console.log("server started at port 3000...")
app.get('/getAllStudents',function(req,res){

students = [{"name":"ahmed","age":"22","address":"miraroad"},
{"name":"raees","age":"62","address":"miraroad"},
{"name":"viraj","age":"32","address":"miraroad"}];

	res.send(students);
});


