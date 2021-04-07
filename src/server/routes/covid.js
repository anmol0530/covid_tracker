const express = require("express");
const router = express.Router();
const { getData, allData } = require("../controllers/CovidController");

// prefix - /api/users/:id/covidata
router.get("/", allData);
router.get("/:data_id", getData);

module.exports = router;
