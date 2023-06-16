const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

$host = process.env.HOST;
$user = process.env.USERNAME;
$password = process.env.PASSWORD;
$database = process.env.DATABASE;
$port = process.env.PORT;

var http = require("http");
var app = require("./express.js")();

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express Server Running on port " + app.get("port"));
});

var mysqlConnection = mysql.createConnection({
  host: $host,
  user: $user,
  password: $password,
  database: $database,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Db connection succeeded");
  } else {
    console.log(
      "DB connection failed Error:" + JSON.stringify(err, undefined, 2)
    );
  }
});

//CRUD Methods

//Get all Plants
app.get("/plants", (req, res) => {
  mysqlConnection.query("SELECT * FROM plants", (err, rows) => {
    if (!err) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header();
      res.send(rows);
    } else console.log(err);
  });
});

//Get all populated pins
app.get("/pins", (req, res) => {
  mysqlConnection.query(
    "SELECT gpioNum, relayPinNum FROM pins WHERE isPopulated=1",
    (err, rows) => {
      if (!err) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(rows);
      } else console.log(err);
    }
  );
});

//Get singular plant
app.get("/plants/:latinName", (req, res) => {
  mysqlConnection.query("SELECT ");
});

//Update watering time
app.put("/updatePlants", (req, res) => {
  mysqlConnection.query(
    "UPDATE `plants` SET `lastWatered`=? WHERE `latinName`=?",
    [req.body.lastWatered, req.body.latinName],
    (err, rows) => {
      if (!err) {
        res.send(rows);
      } else console.log(err);
    }
  );
});
