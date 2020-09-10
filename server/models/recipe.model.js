const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ingredientSchema = new schema({
  name: String,
  quantite: Number,
});

const recipeSchema = new schema(
  {
    _id: schema.Types.ObjectId,
    title: { type: String, required: true },
    img: { type: Buffer },
    ingredients: [ingredientSchema],
    description: String,
    preparation: String,
  },
  { timestamps: true }
);

const recipe = mongoose.model("recipes", recipeSchema);

module.exports = recipe;
