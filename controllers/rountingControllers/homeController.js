const views=require('../../path/paths')
const homeController=(req,res)=>{;
    res.sendFile(`${views}/index.html`)
}
const recipeController=(req,res)=>{
    res.sendFile(`${views}/recipes.html`)
}
module.exports={homeController,recipeController};