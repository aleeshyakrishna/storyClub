const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storyWritingSchema = new Schema({

    category:{
        
        type:String
    },
    title:{
        type:String
    },
    source:{
          
        type:String
    }
   
},
{
    timestamps:true
}
)

module.exports = mongoose.model('storyWriters',storyWritingSchema)
