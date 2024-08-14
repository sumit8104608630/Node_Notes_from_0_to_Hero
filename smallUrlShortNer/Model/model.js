//const { timeStamp } = require("console");
const { timeStamp } = require("console");
const mongoose=require("mongoose");
//const { type } = require("os");
const urlSchema=mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    url:{
        type:String,
        required:true,
        unique:true
    },
    visitHistory:[{timeStamp:{type:Number}}],
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
}
},    {timestamps:true}) 
 
const url=mongoose.model("url",urlSchema)
module.exports=url   