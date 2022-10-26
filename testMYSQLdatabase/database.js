const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'onis1234',
    database: 'testdbnew',
});

connection.connect();

connection.query('select * FROM tasks', (error, results, fields) => {
    if (error) {
        return console.log(error);
    }
    return console.log(results);
});
connection.end();