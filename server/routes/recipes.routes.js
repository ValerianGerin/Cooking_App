const router = require("express").Router();

router.get("/", findAllRecipes); //Router for all recipes
router.get("/:id", findOneRecipe); //Router for one recipe
router.post("/new", createRecipes); //Router to create one recipe
router.delete("/delete/:id", deleteRecipe); //Router to delete one recipe
router.post("/update/:id", updateRecipe); //Router to update one recipes

module.exports = router;
