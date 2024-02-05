// models/db.js

require('dotenv').config();
const mysql = require('mysql2');

// 데이터베이스 연결 설정
const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbConnection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = dbConnection;
