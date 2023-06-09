const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./router/userRouter");
const dotenv = require("dotenv").config({ path: "./server/.env" });
var fs = require("fs");
const path = require("path");
const partnerRouter = require("./router/newsCompanyRouter");
const subscriptionRouter = require("./router/subscriptionRouter");
const mysqlPool = require("./database/mysqlConnection");
const paperRouter = require("./router/paperRouter");

const PORT = process.env.PORT;

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.options("*", cors());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("homepage");
});

//api routes
app.use("/api/user", userRouter);
app.use("/api/partner", partnerRouter);
app.use("/api/paper", paperRouter);
app.use("/api/subs", subscriptionRouter);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

const autoCreateTable = () => {
  mysqlPool.getConnection((err, connection) => {
    if (err) console.log(err.message);
    else if (connection) {
      const tableFiles = [
        "admin.sql",
        "company.sql",
        "customer.sql",
        "newspaper.sql",
        "subscription_type.sql",
        "subscription.sql",
        "news_subbed.sql"
      ];
      tableFiles.forEach(async (tableName) => {
        const generatedScript = fs
          .readFileSync(path.join(__dirname, `./models/${tableName}`))
          .toString();
        connection.query(generatedScript, (err, result) => {
          if (err) console.log(err.message);
        });
      });
      console.log("default table creation executed");
    }
    connection.release();
  });
};
autoCreateTable();
