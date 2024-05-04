const express = require("express");
const app = new express();
const { notFoundHandler, errorHandler } = require("./src/utility/error");
const baseRoute = require("./src/routes/base.route");
const routes = require("./src/routes/index.route");
// ? connectDB
const connectDB = require("./config/db").apply();
// ? use middleware
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use([
  morgan("dev"),
  cors(),
  helmet(),
  hpp(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ extended: true, limit: "50mb" }),
  limiter,
]);

// ?Routes
app.use("/", baseRoute);
app.use("/api/v1/foods", routes);
// ? error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
