const express=require('express');
const path=require('path');
const app=express();
const connectDB=require('./config/database');
const router=require('./routes/homeRoute')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
connectDB();
app.use(router);
app.listen(3000,()=>{
    console.info(`server http://localhost:3000`);
});