const express = require("express");
const app = express();

// global middleware
app.use(require("../src/middlewares/global.middleware"));

module.exports = app;
