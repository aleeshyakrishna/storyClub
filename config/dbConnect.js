const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://teammentoons:X7koBGSEEEWMk7qy@cluster0.oarpsxu.mongodb.net/storyClub')
mongoose.connection.once('open',()=>console.log('database connected successfullly!!')).on('error',error=>{
    console.log(error);
})