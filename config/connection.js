var mysql = require("mysql");

var connectionInfo = {

  host: "localhost",
  user: "root",
  password: "Tantdyalfsw#4",
  database: "burger_db"
};

if (process.env.JAWSDB_URL){

    connectionInfo = process.env.JAWSDB_URL;

}

var connection = mysql.createConnection(connectionInfo);

connection.connect(function(err){

  if (err) {

    console.error("error connectiong:" + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;