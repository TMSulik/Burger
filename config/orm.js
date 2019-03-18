/*
Object Relational Mapping (ORM) accesses a relational database. ORM enables JS to manage database data by mapping database tables to classes and instances of classes to rows in those tables.

For example, if you have a class User, you should have a table called users in your database. Instances of the User class in your program should map to rows in the users table in the database. Properties of an instance of a User in your program should map to the columns in the users table.

*/


/*
* Import (require) `connection.js` into `orm.js`
* In the `orm.js` file, create the methods 
that will execute the necessary MySQL 
commands in the controllers. 
These are the methods you will need to use 
in order to retrieve and store data in your database.
  * `selectAll()`
  * `insertOne()`
  * `updateOne()`
* Export the ORM object in `module.exports`.
*/
var orm = require('connection.js');

var ormObject = new orm.Collection({
  // Not clear what is supposed to go here 
});

function selectAll() {
}
function insertOne() { 
}
function updateOne() {
}

module.exports = ormObject;
