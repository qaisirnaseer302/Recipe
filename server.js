const express=require('express');
const path=require('path');
const app=express();
const router=require('./routes/homeRoute')
app.use(express.static(path.join(__dirname,'public')));
app.use(router);
app.listen(3000,()=>{
    console.info(`server http://localhost:3000`);
})