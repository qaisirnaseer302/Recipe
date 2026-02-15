const {adminViews}=require('../../path/paths')
const adminHomeController=(req,res)=>{
    res.sendFile(`${adminViews}/adminHome.html`);
};
const adminLoginController=(req,res)=>{
    res.sendFile(`${adminViews}/adminLogin.html`);
};
const addRecipeController=(req,res)=>{
    res.sendFile(`${adminViews}/addRecipe.html`);
};
const readRecipeController=(req,res)=>{
    res.sendFile(`${adminViews}/readRecipes.html`);
};
const updateRecipeController=(req,res)=>{
    res.sendFile(`${adminViews}/updateRecipe.html`);
};
const deleteRecipeController=(req,res)=>{
    res.sendFile(`${adminViews}/deleteRecipe.html`);
};

module.exports={adminHomeController,adminLoginController,addRecipeController,updateRecipeController,readRecipeController,deleteRecipeController};

