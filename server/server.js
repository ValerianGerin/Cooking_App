require("./config/database/db.connect");

const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./routes");
const app = express();

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  });
  next();
});

app.use(express.static(__dirname + "/public" ));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routing);

app.listen(3000);
