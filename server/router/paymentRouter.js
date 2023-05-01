const express = require("express");
const { UUIDV4 } = require("sequelize");
const stripe = require("stripe")("sk_test_51MhcS0SEQsEMOguBR6ICyqGYVurDG0Fy3gEIaRs1em8WPYSUtnfZO4WGORZe9qQod4JuboIRLeB4ukiPfiFGJawA00QXFRmHjj");

const paymentRouter = express.Router();

paymentRouter.post("/create-payment-intent", async (req, res) => {
    
  const {token, amount,email, sub_id, paper_id, cust_id} = req.body;
  try {
      const customer = await stripe.customers.create({
        email:email,
        source:token
      });
      const payment = await stripe.charges.create({
        amount: amount * 100,
        currency: 'USD',
        customer:customer.id,
        receipt_email:email
      },{
        idempotencyKey: UUIDV4()
      })
      if(payment){
        res.send('Payment Success')
      }else{
        res.send('Payment Failed')
      }
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });

module.exports = paymentRouter;