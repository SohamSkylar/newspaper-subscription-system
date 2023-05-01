const ENV = require("../config.js");
const mysqlPool = require("../database/mysqlConnection");
const stripe = require("stripe")("sk_test_51MhcS0SEQsEMOguBR6ICyqGYVurDG0Fy3gEIaRs1em8WPYSUtnfZO4WGORZe9qQod4JuboIRLeB4ukiPfiFGJawA00QXFRmHjj");
const { uuid } = require('uuidv4');


const CustomerSubtableName = "news_subbed";

const StripePaymentRequest = async (req, res) => {
  const { token, amount, email, sub_id, paper_id } = req.body;
  const cust_id = req.user.custid;
  console.log(req.body);
  try {
    const customer = await stripe.customers.create({
      email: email,
      source: token,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: amount * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: email,
      },
      {
        idempotencyKey: uuid(),
      }
    );
    if (payment) {
      mysqlPool.getConnection((err, connection) => {
        if (err) return res.send({ msg: err.message });
        else if (connection) {
          console.log("user sub api activated");
          console.log("exec");
          console.log(sub_id);
          const sqlQuery = `INSERT INTO ${CustomerSubtableName} (sub_id, paper_id, cust_id) VALUES(?,?,?)`;
          connection.query(
            sqlQuery,
            [sub_id, paper_id, cust_id],
            (err, result) => {
              if (err) {
                if (err.message.includes("Duplicate" || "Duplicates"))
                  return res.send({ msg: "ALREADY_EXISTS" });
                else return res.send({ msg: err.message });
              } else if (result) {
                return res.status(201).send({ msg: "success" });
              }
            }
          );
        }
        connection.release();
      });
    } else {
      res.send({ msg: "PAYMENT_FAILED" });
    }
  } catch (err) {
    return res.send({ msg: err.message });
  }
};

module.exports = StripePaymentRequest;
