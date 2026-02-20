const mongoose=require('mongoose');
const { use } = require('react');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }   
});   
module.exports=mongoose.model("Admin",userSchema);