const express = require("express");
const cors = require("cors");
const { RouterLogin } = require("./Routers");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", RouterLogin);

module.exports = app;
