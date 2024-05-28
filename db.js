const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin1@3$',
    database: 'salary'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the MySQL server:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});

module.exports = connection;
