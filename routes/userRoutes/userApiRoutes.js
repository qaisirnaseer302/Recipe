const express=require('express');
const router=express.Router();
const signUpController=require('../../controllers/api/userApis/signUp');
const loginController=require('../../controllers/api/userApis/login');
router.post('/signup',signUpController);
router.post('/login',loginController);
module.exports=router;