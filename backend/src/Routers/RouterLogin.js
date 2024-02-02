const express = require("express");

const { ControllerLogin } = require("../Controller");

const router = express.Router();

router.post("/", ControllerLogin.register)

module.exports = router;
