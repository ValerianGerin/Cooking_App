const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://appUser:quasar001@cluster0.cjdif.gcp.mongodb.net/Cooking_App?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
