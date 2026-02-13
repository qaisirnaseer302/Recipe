const express=require('express');
const path=require('path');
const app=express();
const router=require('./routes/userRoutes')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/user',router);
app.listen(3000,()=>{
    console.info(`server http://localhost:3000`);
});