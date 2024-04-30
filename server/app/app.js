const express = require("express");
const cors = require("cors");
const app = express();

const { notFoundHandler, errorHandler } = require("../src/utility/error/error");
// const routes = require("../src/routes/index.route");
const router = require("../src/routes/food.route");
// global middleware
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};
app.options("", cors(corsConfig));
app.use(require("../src/middlewares/global.middleware"));
// routers
// app.set("etag", false);
// app.use(routes);
app.use("/api/v1", router);
// app.use(express.static("client/dist"));
// global error handler
app.use(notFoundHandler);
app.use(errorHandler);

// Add React Front End Routing
/* app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "/client", "dist", "index.html"));
}); */

module.exports = app;
