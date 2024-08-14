const express=require("express");
const userRouter=express.Router();
const {}=require("../Model/userModel");
const { handelSignIn, handelLogin } = require("../controller/control");
userRouter.post("/",handelSignIn)
.post("/login",handelLogin)
module.exports=userRouter