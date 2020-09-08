const router = require("express").Router();
const recipesRouter = require("./recipes.routes");
const ingredientsRouter = require("./ingredients.routes");
const categoryRouter = require("./category.routes");

router.use("/recipes")
router.use("/ingredient");
router.use("/category")

module.exports = router;