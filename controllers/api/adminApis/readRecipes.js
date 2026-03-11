const Recipe=require("../../../models/Recipe");
const readAllRecipes=async(req,res)=>{
    try{
        const recipes=await Recipe.find();
        res.status(200).json({
            status:true,
            message:"Recipes retrieved successfully",
            data:recipes
        });
    }catch
    (error){
    res.status(500).json({
        status:false,
        message:"Error occurred while retrieving recipes",
        data:[]
    });}
}