const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const User=require('../../../models/usersModel');
const signUp=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const existingUser=await User.findOne({$or:[{email:{$regex:email,$options:'i'}},{username:username}]});
        if(existingUser){
            return res.status(400).json({
                status:false,
                message:"user already exists",
            })
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=await User.create({
            username,
            email,
            password:hashedPassword,
        });
        if(!newUser){
            return res.status(400).json({
                status:false,
                message:"user creation failed",
            })
        }
        return res.status(201).json({
            status:true,
            message:"user created successfully",
            user:newUser,
        })
    }catch(error){
        return res.status(500).json({
            status:false,
            message:"server error",
            error,
        })
    }

}
module.exports=signUp;