const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });

const middleware = [
  morgan("dev"),
  cors(),
  helmet(),
  hpp(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ extended: true, limit: "50mb" }),
  limiter,
];
module.exports = middleware;
