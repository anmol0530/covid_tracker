const express = require("express");
const { loginRequired, ensureCorrectUser } = require("../middleware/auth");
const authRouter = require("./auth");
const covidRouter = require("./covid");

const app = express();

app.use("/auth/", authRouter);
app.use("/covid/", covidRouter);

// app.use(
//   "/api/users/:id/covidata",
//   loginRequired,
//   ensureCorrectUser,
//   covidataRoutes
// );

module.exports = app;
