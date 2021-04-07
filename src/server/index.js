require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const errorHandler = require("./handlers/error");
const apiRouter = require("./routes/api");
const cors = require("cors");
const db = require("./models");

const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use("/api/", apiRouter);

app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
