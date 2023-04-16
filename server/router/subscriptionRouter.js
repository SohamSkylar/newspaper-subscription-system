const express = require("express");
const {
  createCustomerTable,
  addNewCustomer,
  showAllCustomers,
  activeCustomer,
  getCustomerData,
} = require("../controller/CustomerController");
const {
  showAllSubType,
  addNewSubType,
  addNewPaperSub,
  showAllPaperSubs,
  showSpecificPaperSub,
  addUserSub,
} = require("../controller/SubscriptionController");
const {
  checkDuplicateSubType,
  checkAllFieldsServerSub,
  verifyCustomer,
  checkAllFieldsCustomer,
  authCustomer,
  getAllCustomerTables,
} = require("../middleware/subscriptionAuth");

const subscriptionRouter = express.Router();

//get
subscriptionRouter.get("/type", showAllSubType);
subscriptionRouter.get("/paper", showAllPaperSubs);
subscriptionRouter.get("/paper/specific/:id", showSpecificPaperSub);
subscriptionRouter.get("/customer", showAllCustomers);
// subscriptionRouter.get("/customer/id", getCustomerData);
subscriptionRouter.get("/customer/auth", authCustomer, activeCustomer);
subscriptionRouter.get(
  "/customer/id/:userid",
  getAllCustomerTables,
  getCustomerData
);
subscriptionRouter.get(
  "/customer/username/:username",
  getAllCustomerTables,
  getCustomerData
);

//post
subscriptionRouter.post("/type/add", checkDuplicateSubType, addNewSubType);
subscriptionRouter.post("/paper/add", addNewPaperSub);
subscriptionRouter.post(
  "/customer/createTable",
  checkAllFieldsServerSub,
  createCustomerTable
);
// subscriptionRouter.post(
//   "/customer/add",
//   checkAllFieldsCustomer,
//   verifyCustomer,
//   addNewCustomer
// );
subscriptionRouter.post("/customer/add", authCustomer, addUserSub);

module.exports = subscriptionRouter;
