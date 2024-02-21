
var category = require('../models/categorySchema')
module.exports = {
    
    //adding category into database

    addCategory:async (cate)=>{
        console.log(cate,"11111111");
        try {
            const res = await category.create(cate)
            return res
        } catch (error) {
            res.json({message:error})
        }

    },
}