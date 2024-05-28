const connection = require('./db');

function createEmployee(name, email, department_id) {
    const sql = 'INSERT INTO employee (name, email, department_id) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, department_id], (err, result) => {
        if (err) throw err;
        console.log('Employee record inserted:', result.insertId);
    });
}

function getEmployees() {
    const sql = 'SELECT * FROM employee';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log('Employees:', results);
    });
}

function createDepartment(name) {
    const sql = 'INSERT INTO departments (name) VALUES (?)';
    connection.query(sql, [name], (err, result) => {
        if (err) throw err;
        console.log('Department record inserted:', result.insertId);
    });
}

function createSalary(employee_id, amount) {
    const sql = 'INSERT INTO salaries (employee_id, amount) VALUES (?, ?)';
    connection.query(sql, [employee_id, amount], (err, result) => {
        if (err) throw err;
        console.log('Salary record inserted:', result.insertId);
    });
}

module.exports = {
    createEmployee,
    getEmployees,
    createDepartment,
    createSalary
};
