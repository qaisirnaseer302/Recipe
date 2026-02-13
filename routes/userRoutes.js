const express=require('express');
const route=express.Router();

const {homeController,recipeController,userProofileController,signUpController,logInController,wellcomeController,editProfileController}=require('../controllers/rountingControllers/userControllers');

route.get('/',wellcomeController);
route.get('/login',logInController);
route.get('/signup',signUpController);
route.get('/profile',userProofileController);
route.get('/editprofile',editProfileController);    
route.get('/home',homeController);
route.get('/recipeDetails',recipeController);
module.exports=route;