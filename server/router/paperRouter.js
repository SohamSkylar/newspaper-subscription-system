const express = require("express");
const { showAllNewspaper, addNewspaper, showAllNewspaperSubs } = require("../controller/PaperController");
const checkDuplicateNewspaper = require("../middleware/paperAuth");

const paperRouter = express.Router();

//get
paperRouter.get('/', showAllNewspaper);
paperRouter.get('/sub', showAllNewspaperSubs);

//post
paperRouter.post('/add', checkDuplicateNewspaper, addNewspaper);

module.exports = paperRouter;