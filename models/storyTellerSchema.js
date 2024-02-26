const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storyTellingSchema = new Schema({

    category:{
        
        type:String
    },
    title:{
        type:String
    },
    file:{
          
        type:String
    }
   
},
{
    timestamps:true
}
)

module.exports = mongoose.model('storyTellers',storyTellingSchema)