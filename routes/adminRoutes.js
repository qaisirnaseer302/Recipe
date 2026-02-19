const express=require('express');
const adminRouter=express.Router();
const {adminHomeController,adminLoginController,addRecipeController,updateRecipeController,readRecipeController,deleteRecipeController}=require('../controllers/rountingControllers/adminControllers');

adminRouter.get('/dashboard',adminHomeController);
adminRouter.get('/login',adminLoginController);
adminRouter.get('/add',addRecipeController);
adminRouter.get('/update',updateRecipeController);
adminRouter.get('/read',readRecipeController);
adminRouter.get('/delete',deleteRecipeController);
module.exports=adminRouter;