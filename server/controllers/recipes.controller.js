const {
  findAllRecipes,
  findOneRecipeById,
  createNewRecipe,
  deleteRecipe,
} = require("../queries/recipes.queries");

exports.findAllRecipes = async (req, res) => {
  try {
    const allRecipes = await findAllRecipes();
    res.send(allRecipes);
  } catch (error) {
    throw error;
  }
};

exports.findOneRecipe = async (req, res) => {
  const recipeId = req.params.id;
  try {
    const oneRecipe = await findOneRecipeById(recipeId);
    res.send(oneRecipe);
  } catch (error) {
    throw error;
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const body = req.body;
    const newRecipe = await createNewRecipe(body);
    res.status(200);
    res.end();
  } catch (error) {
    throw error;
  }
};

exports.deleteOneRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const deleteOne = await deleteRecipe(recipeId);
    res.status(200);
    res.end();
  } catch (error) {
    throw error;
  }
};
