// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    
 connection = mysql.createConnection({
  host: "localhost",
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

connection.connect();

connection.on('error', function(err) {
  console.log("[mysql error]",err);
});

// Export connection for our ORM to use.
module.exports = connection;
