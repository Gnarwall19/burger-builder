// Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "delilah",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// Export connection for ORM usage
module.exports = connection;