const express = require("express");
const mysqlPool = require("../database/mysqlConnection");

const tableName = "newspaper";

const checkDuplicateNewspaper = async (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      let name = req.body.name;
      let company_id = req.body.company_id
      const existPaperQuery = `SELECT COUNT(*) as existPaper FROM ${tableName} WHERE name=? and company_id=?`;
      connection.query(existPaperQuery, [name, company_id], (err, result) => {
        if (err) return res.send({ msg: err.message });
        else if (result) {
          const existPaperVal = Number(result[0].existPaper.toString());
          if (existPaperVal > 0) return res.send({ msg: "DUPLICATE_PAPER" });
          else next();
        }
      });
    }
    connection.release();
  });
};

module.exports = checkDuplicateNewspaper;