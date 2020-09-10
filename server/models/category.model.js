const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categorySchema = new schema({
  _id: schema.Types.ObjectId,
  name: String,
  recipes: { types: schema.Types.ObjectId, ref: "recipes" },
});

const category = mongoose.model("categories", categorySchema);

module.exports = category;
