const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ENV = require("../config.js");
const mysqlPool = require("../database/mysqlConnection.js");

const tableName = "newspaper";

const showAllNewspaper = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send(err.message);
    else if (connection) {
      const sqlQuery = `SELECT * FROM ${tableName}`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return res.send({ msg: err.message });
        else if (result) {
          return res.json(result);
        }
      });
    }
    connection.release();
  });
};

const addNewspaper = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      console.log("addNewspaper api activated");
      let company_id = req.body.company_id;
      let name = req.body.name;
      let city = req.body.city;
      let state = req.body.state;

      const location = `${city}, ${state}`;

      const sqlQuery = `INSERT INTO ${tableName} (company_id, name, location) VALUES(?,?,?)`;
      connection.query(
        sqlQuery,
        [company_id, name, location],
        (err, result) => {
          if (err) return res.send({ msg: err.message });
          else if (result) {
            return res.status(201).send({ msg: "success" });
          }
        }
      );
    }
    connection.release();
  });
};

module.exports = { showAllNewspaper, addNewspaper };
