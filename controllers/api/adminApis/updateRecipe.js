const Recipe=require("../../../models/Recipe");
const updateRecipe=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,description,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,category,calories,tags,author,mealType}=req.body;
        const recipe=await Recipe.findByIdAndUpdate(id,{
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
        res.status(200).json({
            status:true,
            message:"Recipe updated successfully",
            data:recipe
        });
    }catch(error){
        res.status(500).json({
            status:false,
            message:"Error occurred while updating recipe",
            error:error.message
        });
    }
}
module.exports=updateRecipe;   