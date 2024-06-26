const jwt=require('jsonwebtoken');
const user=require('./models/userModel');
const express=require("express");
const router=express.Router();


module.exports.isLoggedIn=async(req,res,next)=>{
    const token=req.cookies.jwtToken;
    //check if the token exists 
    if(token)
    {
        let res1=await jwt.verify(token,"mysecretkey");
        const dbuser1=await user.findOne({_id:res1._id});
        console.log(dbuser1);
        next();
    }else{
        // console.log("token not found");
        res.status(400).send("token not found");
    }
}