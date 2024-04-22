const http = require("http");
const app = require("./app/app");
const PORT = require("./config/config").app.port;
const chalk = require("chalk");
const server = http.createServer(app);
const connectDB = require("./config/db");

server.listen(PORT, async () => {
  console.log(
    chalk.black.bgBlueBright(`server is running at http://localhost:${PORT}`)
  );
  await connectDB();
});
