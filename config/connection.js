// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    
 connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "Lakeshow23!",
  database: "burgers_db"
});

}

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected to  Mysql server`);
// });

connection.connect(console.log("im connected!"));



// Export connection for our ORM to use.
module.exports = connection;
