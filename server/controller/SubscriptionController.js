const ENV = require("../config.js");
const mysqlPool = require("../database/mysqlConnection");

const SubtableName = "subscription_type";
const PaperSubtableName = "subscription";

const showAllSubType = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      const sqlQuery = `SELECT * FROM ${SubtableName}`;
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

const addNewSubType = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      console.log("add new subType api activated");
      let sub_name = req.body.sub_name;
      let duration = req.body.duration;

      const sqlQuery = `INSERT INTO ${SubtableName} (sub_name, duration) VALUES(?,?)`;
      connection.query(sqlQuery, [sub_name, duration], (err, result) => {
        if (err) return res.send({ msg: err.message });
        else if (result) {
          return res.status(201).send({
            msg: "success",
            sub_id: Number(result.insertId.toString()),
          });
        }
      });
    }
    connection.release();
  });
};

//////////////////////// serversub /////////////////////

const showAllPaperSubs = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      const sqlQuery = `SELECT * FROM ${PaperSubtableName}`;
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

const addNewPaperSub = async (req, res) => {
  mysqlPool.getConnection((err, connection) => {
    if (err) return res.send({ msg: err.message });
    else if (connection) {
      console.log("paper sub api activated");
      let sub_id = req.body.sub_id;
      let paper_id = req.body.paper_id;
      let price = req.body.price;

      const sqlQuery = `INSERT INTO ${PaperSubtableName} (sub_id, paper_id, price) VALUES(?,?,?)`;
      connection.query(sqlQuery, [sub_id, paper_id, price], (err, result) => {
        if (err) {
          if (err.message.includes('Duplicate' || 'Duplicates')) return res.send({msg: "ALREADY_EXISTS"})
          else return res.send({ msg: err.message });
        }
        else if (result) {
          return res.status(201).send({ msg: "success" });
        }
      });
    }
    connection.release();
  });
};
module.exports = {
  showAllSubType,
  addNewSubType,
  showAllPaperSubs,
  addNewPaperSub,
};
