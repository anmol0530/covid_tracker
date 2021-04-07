const db = require("../models");
const jwt = require("jsonwebtoken");
const apiResponse = require("../helpers/apiResponse");

exports.signin = async function (req, res, next) {
  try {
    let user = await db.User.findOne({
      $or: [
        {
          email: req.body.email,
        },
        {
          username: req.body.username,
        },
      ],
    });

    let { id, username } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
        },
        process.env.SECRET_KEY
      );
      return apiResponse.successResponseWithData(res, "Login Successfull", {
        id,
        username,
        token,
      });
    } else {
      return apiResponse.ErrorResponse(res, "Invalid Username/Email/Password");
    }
  } catch (e) {
    return apiResponse.ErrorResponse(res, "Invalid Username/Email/Password");
  }
};

exports.signup = async function (req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username } = user;
    let token = jwt.sign(
      {
        id,
        username,
      },
      process.env.SECRET_KEY
    );
    return apiResponse.successResponseWithData(res, "Login Successfull", {
      id,
      username,
      token,
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, this username and/or email is already taken!";
    }
    return apiResponse.ErrorResponse(res, err.message);
  }
};
