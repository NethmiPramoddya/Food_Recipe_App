const { json } = require('express')
const recipe = require('../models/recipe')
const Recipes = require('../models/recipe')

const getRecipes =async(req,res)=>{
   const recipes = await Recipes.find()
   return res.json(recipes)
}

const getRecipe =async(req,res)=>{
    const recipes = await Recipes.findById(req.params.id)
    res.json(recipes)
}

const addRecipe =async (req,res)=>{
    const {title,ingrediants,instructions,time,coverImage} = req.body

    if(!title || !ingrediants || !instructions){
        res.json({message:"Required feiled can't be empty"})
    }

    const newRecipe = await Recipes.create({
        title,ingrediants,instructions,time,coverImage
    })

    return res.json(newRecipe)
}

const editRecipe =async(req,res)=>{
   const {title,ingrediants,instructions,time,coverImage} = req.body
   let recipe = await Recipes.findById(req.params.id)
  try{
    if (recipe){
        await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({title,ingrediants,instructions,time,coverImage})
      }
  }catch(err){
    return res.status(404).json({message:"error"})
  }
}

const deleteRecipe =(req,res)=>{
    res.json({message:"hello"})
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}