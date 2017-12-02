// Import the ORM to create functions that will interact with the database
var orm = require('../config/orm.js');

var burger = {

    // Selecting all burgers from the table
    all: function (cb) {
        orm.all('burgers', function (res) {
            cb(res);
        });
    },

    // Create for adding a new burger
    // The variables cols and vals are ARRAYS
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    // Update for changing an existing burger
    // objColVals is an object that specifies cols as key/value pairs
    update: function (objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js)
module.exports = burger;