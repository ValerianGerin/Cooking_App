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
 * @param {*} body
 */
exports.createNewRecipe = (body) => {
  
  try {
    const [...ingredients] = body.ingredients

    const newRecipe = new recipe({
      _id: null,
      title: body.title,
      img: body.img,
      ingredients: ingredients,
      description: body.description,
      preparation: body.preparation
    })
    return newRecipe.save();

  } catch (error) {
    throw error

  }

  
};

/**
 * Query to delete one recipe
 * @param {*} id
 */
exports.deleteRecipe = (id) => {
  return recipe.deleteOne({ _id: id }).exec();
};


exports.searchBarQuery = (queryParam)=>{
  return recipe.find({title: new RegExp(queryParam,"i")}).exec()
}