const {userViews}=require('../../path/paths')
const homeController=(req,res)=>{
    res.sendFile(`${userViews}/index.html`)
};
const recipeController=(req,res)=>{
    res.sendFile(`${userViews}/recipes.html`)
};
const userProofileController=(req,res)=>{
    res.sendFile(`${userViews}/userprofile.html`)
};
const signUpController=(req,res)=>{
    res.sendFile(`${userViews}/signUp.html`)
};
const logInController=(req,res)=>{
    res.sendFile(`${userViews}/logIn.html`)
};
const editProfileController=(req,res)=>{
    res.sendFile(`${userViews}/editprofile.html`)
};
const allRecipesController=(req,res)=>{
    res.sendFile(`${userViews}/allRecipes.html`);
};
module.exports={homeController,recipeController,userProofileController,signUpController,logInController,editProfileController,allRecipesController};