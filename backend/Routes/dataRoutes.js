const express = require("express");
const router = express.Router();
const { getData, cityData } = require("../controllers/dataController");

router.get("/data", getData);

router.get("/data/Id", cityData);

module.exports = router;