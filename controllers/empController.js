var Employee = require('../models/employees').employee;

function getAllEmps(req,res) {
    Employee.getAllEmps(req,res);
}

function saveEmp(req,res) {
    let emp = new Employee(req.body);
    emp.saveEmp(req,res);
}

function findEmp(req,res) {
    Employee.findEmp(req,res);
}

function updateEmp(req,res) {
    Employee.updateEmp(req,res);
}

function deleteEmp(req,res) {
    Employee.deleteEmp(req,res);
}


module.exports = {
    getAllEmps : getAllEmps,
    findEmp : findEmp,
    saveEmp : saveEmp,
    updateEmp : updateEmp,
    deleteEmp : deleteEmp
}