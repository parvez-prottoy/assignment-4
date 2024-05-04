const express = require("express");
const app = new express();

const { notFoundHandler, errorHandler } = require("./src/utility/error/error");
const routes = require("./src/routes/index.route");
// global middleware
app.use(require("./src/middlewares/global.middleware"));
app.set("etag", false);
app.use(routes);
app.use(express.static("client/dist"));
// global error handler
app.use(notFoundHandler);
app.use(errorHandler);

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "/client", "dist", "index.html"));
});

module.exports = app;
