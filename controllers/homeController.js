const views=require('../path/paths')

const homeController=(req,res)=>{
    res.sendFile(`${views}/index.html`)
}

module.exports=homeController