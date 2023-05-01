const express = require("express");
const mysqlPool = require("../database/mysqlConnection");
const StripePaymentRequest = require("../controller/PaymentController");
const { auth } = require("../middleware/auth");

const paymentRouter = express.Router();

paymentRouter.post("/create-payment-intent", auth, StripePaymentRequest);

module.exports = paymentRouter;