var userHelper = require('../helpers/userHelper');
var s3Model = require ('../models/s3Model.js');
module.exports = {
    getHome : (req,res) =>{
        try {
            
            console.log("welcome home");
            res.status(200).json({message:"welcome"})
        } catch (error) {
            console.log();
        }
        
    },
    postStory_writer :async(req,res) => {
        try {
            console.log("this is post writer!",req.body,req.file);
            const result = await s3Model.uploadFile(req.file);
            if(result){
                await userHelper.postWriter(req.body,result).then((ress)=>{
                    if(ress){
                        console.log(ress,"responses");
                        res.status(200).json({message:"successfully added your story"})
                    }else{
                        res.status(404).json({message:"something went wrong!!"})
                    }
                    if(ress.error){
                        res.status(500).json({message:"internal error"})
                    }
                })
            }
            // userHelper.postWriter(req.body,req.file)
        } catch (error) {
            console.log(error);
            res.status(500).json("internal error!!")
        }
    },
    postStory_teller :async(req,res)=>{
        try {
            console.log(req.body,req.file,"formmmm");
            const result = await s3Model.uploadTellings(req.file)
            if(result){
               await userHelper.postStoryTelling(req.body,result).then((result)=>{
                res.status(200).json({message:"successfully submitted your story!",result})
               })
            }else{
                res.status(404).json({message:"something went wrong!!"})
            }
        } catch (error) {
            res.status(500).json({message:"internal error occured!"});
        }
    },
    postGetInTouch : async(req,res)=>{
        try {
            console.log("entered dataaa",req.body);
            userHelper.postGet_in_touchForm(req.body).then((data)=>{
                if(data.error){
                    res.status(500).json({message:"something went wrong!!please try again later!"})
                }else{
                    res.status(200).json({message:"succesfully submitted the form!we will get in touch as soon as possible!"})
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"internal server error!!"})
        }
    },

    postSubscription_request : async(req,res)=>{
        try {
            console.log(req.body,"daaaata");
            await userHelper.subscribe(req.body).then((data)=>{
                if(data.error){
                    res.status(500).json({message:"something went wrong!please try again later!!"})
                }else{
                    res.status(200).json({message:"successfully subscribed"})
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"internal server error occured!!!"})
        }
    },

    signup :async(req,res)=>{
        try {
            console.log(req.body,"..........>>>");
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"internal server occured!"})
        }
    }

    
}