const router = require("express").Router();
const recipesRouter = require("./recipes.routes");
const ingredientsRouter = require("./ingredients.routes");
const categoryRouter = require("./category.routes");
const searchRouter = require("./search.routes");


router.use("/recipes", recipesRouter);
router.use("/ingredient", ingredientsRouter);
router.use("/category", categoryRouter);
router.use("/search?", searchRouter)


module.exports = router;
