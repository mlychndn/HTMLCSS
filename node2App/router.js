const express = require("express");
const { postPageHandler, homePageHandler } = require("./handlers");

const router = express.Router();

router.route("/").get(homePageHandler);

router.route("/newPage").post(postPageHandler);

module.exports = router;
