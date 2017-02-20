var data = require('./data.js');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());

app.get('/',function(req,res){
res.send('Welcome to Employee Management Tool')
}
);

app.get('/employees',data.getEmployees);
app.post('/employees',data.addEmployee);
app.delete('/employees/:id',data.deleteEmployee);
app.put('/employees/:id',data.updateEmployee);

app.listen(3000,function(){
console.log('Example Listening in port 3000')
}
)