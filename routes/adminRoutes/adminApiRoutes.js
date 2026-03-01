const express=require('express');
const router=express.Router();
const adminLoginController=require('../../controllers/api/adminApis/adminLogin');
router.post('/login',adminLoginController);
module.exports=router;