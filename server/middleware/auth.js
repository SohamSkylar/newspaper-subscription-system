const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ENV = require("../config.js");
const otpGenerator = require("otp-generator");
const mysqlPool = require("../database/mysqlConnection");

const tableName = "customer";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(202).send({ msg: "AUTH_FAILED" });
  }
};

const verifyPassword = async (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      const currentpass = req.body.currentpass;
      const userid = req.user.userid;
      const sqlQuery = `Select * from ${tableName} where id=?`;
      connection.query(sqlQuery, userid, async (err, result) => {
        if (err) return res.send({ msg: err.message });
        else if (result) {
          const row = JSON.parse(JSON.stringify(result));
          const encryptpass = row[0].password;
          await bcrypt
            .compare(currentpass, encryptpass)
            .then((passwordCheck) => {
              if (!passwordCheck)
                return res.send({ msg: "Wrong Current Password" });
              next();
            })
            .catch((err) => {
              return res.send({ msg: err.message });
            });
        }
      });
    }
    connection.release();
  });
};

const localVariables = async (req, res, next) => {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };
  next();
};

const verifyUser = async (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ error: err.message });
    else if (connection) {
      const existUserQuery = `SELECT COUNT(*) as existUsers FROM ${tableName} WHERE username=?`;
      connection.query(existUserQuery, req.query.username, (err, result) => {
        if (err) return res.send({ error: err.message });
        else if (result) {
          const existUserVal = Number(result[0].existUsers.toString());
          if (existUserVal === 1) next();
          else if (existUserVal === 0)
            return res.status(404).send({ error: "NO_USER_AVAILABLE" });
          else
            return res.status(404).send({ error: "MULTIPLE_USER_AVAILABLE" });
        }
      });
    }
    connection.release();
  });
};

const checkDuplicateCustomer = async (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.status(500).send({ msg: err.message });
    else if (connection) {
      let email = req.body.email;
      if (email) {
        const existEmailQuery = `SELECT COUNT(*) as existEmail FROM ${tableName} WHERE email=?`;
        connection.query(existEmailQuery, email, (err, result) => {
          if (err) return res.status(500).send({ msg: err.message });
          else if (result) {
            const existEmailVal = Number(result[0].existEmail.toString());
            if (existEmailVal > 0) res.send({ msg: "DUPLICATE_EMAIL" });
            else next();
          }
        });
      } else {
        res.send({ msg: "NO_EMAIL_FOUND" });
      }
    }
    connection.release();
  });
};

const checkDuplicateAdmin = async (req, res, next) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.status(404).send({ msg: err.message });
    else if (connection) {
      let username = req.body.username;
      const existUserQuery = `SELECT COUNT(*) as existUsers FROM admin WHERE username=?`;
      connection.query(existUserQuery, username, (err, result) => {
        if (err) return res.send({ msg: err.message });
        else if (result) {
          const existUserVal = Number(result[0].existUsers.toString());
          if (existUserVal > 0) res.send({ msg: "DUPLICATE_USERNAME" });
          else next();
        }
      });
    }
    connection.release();
  });
};

module.exports = {
  auth,
  localVariables,
  verifyUser,
  checkDuplicateCustomer,
  checkDuplicateAdmin,
  verifyPassword,
};
