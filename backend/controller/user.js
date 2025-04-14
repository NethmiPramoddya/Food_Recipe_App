const { json } = require('express')
const User = require('../models/user')

const userSignUp =async (req,res)=>{
    const {email,password} =req.body
    if(!email || !password){
        res.status(400).json({message:"Email and Password is required"})
    }
    let user = await UserActivation.findOne({email})
}

const userLogin =async (req,res)=>{
    
}

const getUser =async (req,res)=>{
    
}

module.exports = {userSignUp, userLogin, getUser}