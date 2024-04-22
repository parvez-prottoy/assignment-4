const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("../src/utility/error/error");

// global middleware
app.use(require("../src/middlewares/global.middleware"));
// global error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
