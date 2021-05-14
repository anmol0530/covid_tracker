const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");
const { loginRequired, ensureCorrectUser } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
