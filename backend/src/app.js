const express = require("express");
const { RouterLogin } = require("./Routers");
const app = express();

app.use(express.json());

app.use("/login", RouterLogin);

module.exports = app;
