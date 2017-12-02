// Import MySQL connection
var connection = require('../config/connection.js');

// Creates an array of question marks and converts it to strings
// for ORMs
function printQuestionMarks(num) {
    // Initialize empty array
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    // Convert array to string
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    // Initialize empty array
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + value)
        }
    }

    return arr.toString();

}

// Object for all SQL statement functions
var orm = {

    // Function that returns all table entries / Gets ALL BURGERS!
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';

        // Run database query
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            // Return result in callback
            cb(result);
        });
    },

    // Function to insert a single table entry / Add a new burger
    create: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        // **TESTING**
        console.log(queryString);

        // Run database query
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            // Return result in callback
            cb(result);
        });
    },

    // Function that udates a table entry / Changes a burger
    update: function (table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        // **TESTING**
        console.log(queryString);

        // Run database query
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            // Return result in callback
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;