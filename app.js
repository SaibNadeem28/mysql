const connection = require('./db');
const { createEmployee, getEmployees, createDepartment, createSalary } = require('./crud');

createDepartment('Medical');
createEmployee('Fawad', 'fawad@gmail.com', 1);
createSalary(1, 5000.00);
getEmployees();

process.on('exit', () => {
    connection.end();
});
