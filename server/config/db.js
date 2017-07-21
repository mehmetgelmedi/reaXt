const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'megdb'
});

connection.connect((err)=>{
    console.log(err);
});

module.exports = connection;