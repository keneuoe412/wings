// backend/config/database.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // default MySQL user
  password: '', // default password for XAMPP
  database: 'inventory_system', // Database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = db;
