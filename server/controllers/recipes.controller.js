const {
  findAllRecipes,
  findOneRecipeById,
  createNewRecipe,
  deleteRecipe,
  searchBarQuery
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
  console.log(req.body.img)
  try {
    const body = req.body;
    const newRecipe = await createNewRecipe(body);
    res.status(200);
    res.end();
  } catch (error) {
    res.send("Le champ titre est requis")
   
    
  }
};

exports.deleteOneRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    console.log(recipeId)
    const deleteOne = await deleteRecipe(recipeId);
    res.status(200);
    res.end();
  } catch (error) {
    throw error;
  }
};


exports.search = async (req, res)=>{
  try {
    const query = req.query.recipes
    const recipesResult = await searchBarQuery(query)
    console.log(recipesResult)
    res.send(recipesResult)
  } catch (error) {
    throw error
  }
  
}
