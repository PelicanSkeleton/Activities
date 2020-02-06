var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",

  // Your port; if not 3306
//   port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "ice_cream"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    console.log('---Results---');
    console.log(results);
  });

  connection.end();
});