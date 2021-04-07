const apiResponse = require("../helpers/apiResponse");
const db = require("../models");
const moment = require("moment");

exports.getData = async function (req, res, next) {
  try {
    let covidata = await db.Covidata.findById(req.params.data_id);
    return apiResponse.successResponseWithData(
      res,
      "Login Successfull",
      covidata
    );
  } catch (err) {
    return next(err);
  }
};

exports.allData = async function (req, res, next) {
  let { location, gender, age, status, startDate, endDate } = req.query;
  let defaultDate = "01/05/2020";
  if (!startDate && !endDate) {
    startDate = moment(defaultDate, "DD/MM/YYYY")
      .subtract(6, "d")
      .format("YYYY-MM-DD");
    endDate = moment(defaultDate, "DD/MM/YYYY").format("YYYY-MM-DD");
  } else {
    startDate = moment(startDate, "DD/MM/YYYY").format("YYYY-MM-DD");
    endDate = moment(endDate, "DD/MM/YYYY").format("YYYY-MM-DD");
  }
  let filters = {
    dateAnnounced: { $gt: startDate, $lt: endDate },
  };
  if (location) filters["detectedState"] = location;
  if (gender) filters["gender"] = gender;
  if (age) filters["ageBracket"] = age;
  if (status) filters["currentStatus"] = status;
  try {
    let allData = await db.Covidata.find(filters);
    return apiResponse.successResponseWithData(
      res,
      "Data Fetched Successfully",
      allData
    );
  } catch (err) {
    return next(err);
  }
};
