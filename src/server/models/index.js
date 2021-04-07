const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/covid_tracker", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useMongoClient: true,
});

module.exports.User = require("./user");
module.exports.Covidata = require("./covidata");
