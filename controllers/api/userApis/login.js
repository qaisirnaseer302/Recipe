const mongoose=require('mongoose');
const User=require('../../../models/usersModel');
const bcrypt=require('bcrypt');
const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(404).json({
                status:false,
                message:"user not found",
            })
        }
        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                status:false,
                message:"invalid credentials",
            })
        }
        return res.status(200).json({
            status:true,
            message:"login successful",
            user:user,
        })
    }catch(error){
        return res.status(500).json({
            status:false,
            message:"server error",
            error:error.message,
        })
    }
}
module.exports=login;