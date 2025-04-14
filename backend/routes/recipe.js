const express = require ('express')
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require('../controller/recipe')
const router =express.Router()


router.get("/",getRecipes) //get all recipies 
router.get ("/:id", getRecipe) // get recipe by id
router.post ("/", addRecipe)// add new recipe
router.put ("/:id", editRecipe) // edit a recipe
router.delete ("/:id", deleteRecipe) // delete a recipie


module.exports = router
