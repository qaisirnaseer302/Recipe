require('dotenv').config();
const adminLogin=(req,res)=>{
    const {username,password}=req.body;
    if(username===process.env.ADMIN_USERNAME && password===process.env.ADMIN_PASSWORD){
        res.status(200).json({
            status:true,
            message:"Admin login successful"});
    }else{
        res.status(401).json({
            status:false,
            message:"Invalid credentials"
        });
    }
}