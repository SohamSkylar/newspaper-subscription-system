const express = require("express");
const { showAllNewsCompany, addNewsCompany } = require("../controller/NewsCompanyController");
const checkDuplicateCompany = require("../middleware/serverAuth");

const newsCompanyRouter = express.Router();

//get
newsCompanyRouter.get('/', showAllNewsCompany);

//post
newsCompanyRouter.post('/add', checkDuplicateCompany, addNewsCompany);

module.exports = newsCompanyRouter;