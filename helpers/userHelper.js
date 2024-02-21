var writer = require ('../models/storyWriterSchema')
var teller = require('../models/storyTellerSchema')
var getInTouch = require('../models/getInTouchForm')
var subscription = require('../models/subscriptionSchema')


module.exports = {

    postWriter : async (data,file)=>{
        try {
            //storing into mongodb..
            var sourceLink = file.source.Location
            return new Promise((resolve,reject)=>{
                const newWriter = new writer({
                    category:data.category,
                    title:data.title,
                    source:sourceLink
                })
                newWriter.save().then((data)=>{
                    console.log(data,"mongooose");
                    resolve(data)
                }).catch((error)=>{
                    reject(error)
                })
            })
        } catch (error) {
            console.log(error);
            return({error:true})
        }
    },

    postStoryTelling : async(data,file)=>{
        try {
            var fileLink = file.file.Location;
            return new Promise((resolve,reject)=>{
                const newTeller = new teller({
                    category:data.category,
                    title:data.title,
                    file:fileLink
                })

                newTeller.save().then((storyTellingData)=>{
                    resolve(storyTellingData)
                }).catch((error)=>{
                    reject(error)
                })
            })
        } catch (error) {
            return ({error:true,error})
        }
    },

    postGet_in_touchForm:async (formData)=>{
        try {
           console.log(formData);
            return new Promise((resolve,reject)=>{
                const newData = new getInTouch({
                    name:formData.name,
                    email:formData.email,
                    mobile:formData.mobile,
                    message:formData.message
                })
                newData.save().then((result)=>{
                    resolve(result)
                })
            })
        } catch (error) {
            console.log(error);
            return ({error:true})
        }
    },

    subscribe:async(data)=>{
        try {
            return new Promise((resolve,reject)=>{
                const newSubscription = new subscription({
                    email:data.email
                })

                newSubscription.save().then((result)=>{
                    console.log(result,"in helper");
                    resolve(result)

                }).catch((error)=>{
                    reject(error)
                })
            })
        } catch (error) {
            console.log(error);
            return({error:true})
        }
    }

}