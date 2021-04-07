const mongoose = require("mongoose");

const covidataSchema = new mongoose.Schema(
  {
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
  },
  { collection: "covid_data" }
);

const Covidata = mongoose.model("covid_data", covidataSchema);

module.exports = Covidata;
