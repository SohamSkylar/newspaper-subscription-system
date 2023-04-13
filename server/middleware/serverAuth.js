const express = require("express");
const mysqlPool = require("../database/mysqlConnection");

const tableName = "company";

const checkDuplicateCompany = async (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      let name = req.body.name;
      const existPartnerQuery = `SELECT COUNT(*) as existPartner FROM ${tableName} WHERE name=?`;
      connection.query(existPartnerQuery, name, (err, result) => {
        if (err) return res.send({ msg: err.message });
        else if (result) {
          const existPartnerVal = Number(result[0].existPartner.toString());
          if (existPartnerVal > 0) return res.send({ msg: "DUPLICATE_NAME" });
          else next();
        }
      });
    }
    connection.release();
  });
};

module.exports = checkDuplicateCompany;
