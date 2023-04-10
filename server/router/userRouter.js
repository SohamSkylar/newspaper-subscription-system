const express = require("express");
const {
  localVariables,
  verifyUser,
  auth,
  checkDuplicateCustomer,
  checkDuplicateAdmin,
  verifyPassword,
} = require("../middleware/auth.js");

const {
  getAllCustomer,
  getSpecificUser,
  registerCustomer,
  loginUser,
  updateUser,
  resetPassword,
  activeUser,
  loginAdmin,
  addAdmin,
  checkSteamID,
  getSpecificUserID,
  changePassword,
} = require("../controller/UserController");
const { generateOTP, verifyOTP } = require("../controller/OTPController.js");

const userRouter = express.Router();

//Get method
userRouter.get("/", getAllCustomer);
userRouter.get("/:username", getSpecificUser);
// userRouter.get("/generateOTP", verifyUser, localVariables, generateOTP);
// userRouter.get("/verifyOTP", verifyOTP);
userRouter.get("/auth", auth, activeUser);
userRouter.get("/userid/:username", getSpecificUserID);

//Patch method
userRouter.patch("/update", auth, checkDuplicateCustomer, updateUser);
userRouter.patch("/update/pass", auth, verifyPassword, changePassword);

//put method
userRouter.put("/resetPassword", verifyUser, resetPassword);

//Post method
userRouter.post("/adminlogger", loginAdmin);
userRouter.post("/login", loginUser);
userRouter.post("/register", checkDuplicateCustomer, registerCustomer);
userRouter.post("/addadmin", checkDuplicateAdmin, addAdmin);
userRouter.post("/steamid", checkSteamID);

//delete method

module.exports = userRouter;
