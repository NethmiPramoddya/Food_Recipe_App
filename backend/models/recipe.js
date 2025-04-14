const mongoose = require ('mongoose')

const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    ingrediants:{
        type:String,
        required:true
    },

    instructions:{
        type:String,
        required:true
    },

    time:{
        type:String,
    },

    coverImage:{
        type:String,
    },

},{timestamps:true})

module.exports = mongoose.model("recipes", recipeSchema)