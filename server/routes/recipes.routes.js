const router = require("express").Router();
const {
  findAllRecipes,
  findOneRecipe,
  createRecipe,
  deleteOneRecipe,
} = require("../controllers/recipes.controller");

router.get("/", findAllRecipes); //Router for all recipes
router.get("/:id", findOneRecipe); //Router for one recipe
router.post("/new", createRecipe); //Router to create one recipe
router.delete("/delete/:id", deleteOneRecipe); //Router to delete one recipe
//router.post("/update/:id", updateRecipe); //Router to update one recipes

module.exports = router;
