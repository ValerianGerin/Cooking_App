const recipes = require("../models/recipe.model");
const recipe = require("../models/recipe.model");

//Query to recover all recipes
exports.findAllRecipes = () => {
  return recipe.find({}).exec();
};

/**
 * Query to recover one recipe by id
 * @param {*} id 
 */
exports.findOneRecipeById = (id) => {
  return recipe.findById(id).exec();
};


/**
 * Query to create one recipe
 * Have to create a object on the fly because ingredient is embeded in recipe
 * @param {*} body
 */
exports.createNewRecipe = (body) => {
  const newRecipe = new recipe();

  newRecipe._id = null;
  newRecipe.title = body.title;
  newRecipe.img = body.img;
  body.ingredient.map((ingredient) => newRecipe.ingredients.push(ingredient));
  newRecipe.description = body.description;
  newRecipe.preparation = body.preparation;

  return newRecipe.save();
};


/**
 * Query to delete one recipe
 * @param {*} id 
 */
exports.deleteRecipe = (id) => {

  return recipe.deleteOne({ _id: id }).exec();
};
