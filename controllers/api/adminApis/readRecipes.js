const readAllRecipes=(req,res)=>{
    res.status(200).json({
        status:true,
        message:"All recipes retrieved successfully",
        data:[]
    });
}