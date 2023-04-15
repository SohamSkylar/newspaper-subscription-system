const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ENV = require("../config.js");
const mysqlPool = require("../database/mysqlConnection.js");

const tableName = "company";

const showAllNewsCompany = async (req, res) => {
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

const showAllNewsCompanyID = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send(err.message);
    else if (connection) {
      const sqlQuery = `SELECT company_id FROM ${tableName}`;
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

const addNewsCompany = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      console.log("add new company api activated");
      let company_id = req.body.company_id;
      let name = req.body.name;
      let email = req.body.email;
      let img1 = req.body.img1;
      let img2 = req.body.img2;

      let sqlQuery;
      if (img2) {
        sqlQuery = `INSERT INTO ${tableName} (company_id, name, email, img1, img2) VALUES(?,?,?,?,?)`;
        connection.query(
          sqlQuery,
          [company_id, name, email, img1, img2],
          (err, result) => {
            if (err) {
              if(err.message.includes('Duplicate')) return res.send({ msg: "DUPLICATE_ID" });
              else return res.send({ msg: err.message });
            }
            else if (result) {
              return res.status(201).send({ msg: "success" });
            }
          }
        );
      } else {
        sqlQuery = `INSERT INTO ${tableName} (company_id, name, email, img1) VALUES(?,?,?,?)`;
        connection.query(
          sqlQuery,
          [company_id, name, email, img1],
          (err, result) => {
            if (err) {
              if(err.message.includes('Duplicate')) return res.send({ msg: "DUPLICATE_ID" });
              else return res.send({ msg: err.message });
            }
            else if (result) {
              return res.status(201).send({ msg: "success" });
            }
          }
        );
      }
    }
    connection.release();
  });
};

module.exports = { showAllNewsCompany, addNewsCompany };
