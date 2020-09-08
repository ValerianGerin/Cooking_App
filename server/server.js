require("./config/database/db.connect");
const express = require("express");
const bodyParser = require("body-parser");
const routing = require("./routes");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(routing);


app.listen(3000)

