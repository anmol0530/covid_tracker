const db = require("../models");

exports.getData = async function (req, res, next) {
  try {
    let covidata = await db.Covidata.findById(req.params.data_id);
    return res.status(200).json(covidata);
  } catch (err) {
    return next(err);
  }
};

exports.allData = async function (req, res, next) {
  try {
    let allData = await db.Covidata.find().sort({
      createdAt: "desc",
    });
    return res.status(200).json(allData);
  } catch (err) {
    return next(err);
  }
};
