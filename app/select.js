var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'auroradb-cluster.cluster-cbmsk0ueujd7.eu-west-1.rds.amazonaws.com',
  user     : 'admin',
  password : '12345678',
  database : 'test'
    // host     : 'localhost',
    // user     : 'root',
    // password : 'password',
    // database : 'test'
});

connection.connect();

connection.query('SELECT * FROM test.people', function (error, results, fields) {
  if (error) throw error;
  console.log('Name ', results[0].name);
});

connection.end();