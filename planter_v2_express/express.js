const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
$port = process.env.PORT;

var express = require("express");
module.exports = function () {
  var app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  app.set("port", $port);
  return app;
};
