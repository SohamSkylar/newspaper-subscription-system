const mysql = require("mysql2");
const dotenv = require("dotenv").config({ path: "./server/.env" });

const mysqlPool = mysql.createPool({
  host: "13.232.78.205",
  user: "reactdev",
  password: "react@123",
  database: "newsdb",
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});

module.exports = mysqlPool;