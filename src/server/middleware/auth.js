require("dotenv").config({ path: "../.env" });
const jwt = require("jsonwebtoken");
const { unauthenticatedResponse } = require("../helpers/apiResponse");

// making sure the user is logged in
exports.loginRequired = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        return next();
      } else {
        return unauthenticatedResponse(res, "Please login first!");
      }
    });
  } catch (e) {
    return unauthenticatedResponse(res, "Please login first!");
  }
};

exports.ensureCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return unauthenticatedResponse(res, "Unauthorized");
      }
    });
  } catch (e) {
    return unauthenticatedResponse(res, "Unauthorized");
  }
};
