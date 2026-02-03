const mongoose=require('mongoose');
const url='mongodb://localhost:27017/recipeDB'; 
const connectDB= async () => {
    try{
        await mongoose.connect(url);
        console.log("database connected");
    }catch(error){
        console.error(`connection failed ${error}`)
    }
}
module.exports=connectDB;