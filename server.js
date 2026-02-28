const express=require('express');
const path=require('path');
const app=express();
const userRouter=require('./routes/userRoutes');
const adminRouter=require('./routes/adminRoutes');
const connectDB=require('./config/database');
const userApiRoutes=require('./routes/userApiRoutes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
connectDB();
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/api/user',userApiRoutes);
app.listen(3000,()=>{
    console.info(`server http://localhost:3000`);
});