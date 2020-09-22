const router = require("express").Router()
const {search} = require("../controllers/recipes.controller");

router.use(search)

module.exports =  router;