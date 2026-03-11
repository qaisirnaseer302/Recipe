const Recipe=require("../../../models/Recipe");
const addRecipe=async(req,res)=>{
    try{
        const {name,description,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,category,calories,tags,author,mealType}=req.body;
        const recipe=await Recipe.create({
            name,
            description,
            ingredients,
            instructions,
            prepTimeMinutes,
            cookTimeMinutes,
            servings,
            difficulty,
            category,
            calories,
            tags,
            author,
            mealType
        });
        res.status(201).json({
            status:true,
            message:"Recipe added successfully",
            data:recipe
        });
    }catch(error){
        res.status(500).json({
            status:false,
            message:"Error occurred while adding recipe",
            error:error.message
        });
    }
}