const express=require('express');
const route=express.Router();
const {homeController,recipeController}=require('../controllers/homeController')
route.get('/',homeController);
route.get('/recipeDetails',recipeController);
module.exports=route;