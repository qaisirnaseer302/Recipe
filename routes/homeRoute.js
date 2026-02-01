const express=require('express');
const route=express.Router();
const homeController=require('../controllers/homeController')
route.get('/',homeController);
// route.get('/google',google);


module.exports=route;