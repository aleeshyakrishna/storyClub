const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscriptionSchema = new Schema({

    email:{
        
        type:String
    }
   
})

module.exports = mongoose.model('subscribedUsers',subscriptionSchema)