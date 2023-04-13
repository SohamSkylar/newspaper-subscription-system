const express = require("express");
const { showAllNewspaper, addNewspaper } = require("../controller/PaperController");
const checkDuplicateNewspaper = require("../middleware/paperAuth");

const paperRouter = express.Router();

//get
paperRouter.get('/', showAllNewspaper);

//post
paperRouter.post('/add', checkDuplicateNewspaper, addNewspaper);

module.exports = paperRouter;