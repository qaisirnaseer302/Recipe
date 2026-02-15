const express=require('express');
const userRouter=express.Router();

const {homeController,recipeController,userProofileController,signUpController,logInController,editProfileController,allRecipesController}=require('../controllers/rountingControllers/userControllers');

userRouter.get('/home',homeController);
userRouter.get('/login',logInController);
userRouter.get('/signup',signUpController);
userRouter.get('/profile',userProofileController);
userRouter.get('/editprofile',editProfileController);    
userRouter.get('/recipe-details',recipeController);
userRouter.get('/all-recipes',allRecipesController);
module.exports=userRouter;