const express=require("express");
const url=require("../Model/model");
const { restrictTo } = require("../middleWare/auth");
const uiRouter=express.Router()

uiRouter.get("/",restrictTo(["NORMAL"]),async(req,res)=>{
    if(!req.user){return res.redirect("/login")}
    const Data=await url.find({createdBy:req.user._id});
   return res.render("index",{data:Data});
}).get("/signin",(req,res)=>{
    res.render("signIn")
}).get("/login",async(req,res)=>{
    res.render("login")
})
module.exports=uiRouter;   