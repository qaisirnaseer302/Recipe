const Recipe=require("../../../models/Recipe");
const deleteRecipe=async(req,res)=>{
    try{
        console.log(`Deleting recipe with ID: ${req.params.id}`);
        const recipe=await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:true,
            message:"Recipe deleted successfully",
            data:recipe
        });
    }catch(error){
        res.status(500).json({
            status:false,
            message:"Error occurred while deleting recipe",
            error:error.message
        });
    }
}
module.exports=deleteRecipe;