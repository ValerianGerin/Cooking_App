require("./config/database/db.connect");

const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./routes");
const app = express();

app.use((res, req, next) => {
  res.set({
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  });
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routing);

app.listen(3000);
