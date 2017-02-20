var employees = [{"id":100,"name":"King","email":"king@example.com","department":10},
{"id":101,"name":"Scott","email":"scott@example.com","department":20},
{"id":102,"name":"Rosy","email":"rosy@example.com","department":30}
];
//Get All Employees
exports.getEmployees = function(req,res){
res.send(employees);
}

//Post an Employees
exports.addEmployee = function(req,res){
var data = req.body;
employees.push(data);
res.send(employees);
}

//Delete an Employee
exports.deleteEmployee = function(req,res){
var id = parseInt(req.params.id)-1;
var employeedeleted = employees.splice(id,1)
if (employeedeleted ===undefined){
res.send("Employee Not Found")
}
else{
res.send(employees);
}
}

//Update Employee
exports.updateEmployee = function(req,res){
var id = parseInt(req.params.id)-1;
var employeeToUpdate = employees[id];
var data = req.body;

if (employeeToUpdate===undefined){
res.send("Employee Not Found");
}
else{
employeeToUpdate.name = data.name;
employeeToUpdate.email = data.email;
employeeToUpdate.department = data.department;

res.send(employees);

}
}
