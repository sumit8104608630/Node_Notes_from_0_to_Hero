const mongo=require("mongoose")


const userSchema=new mongo.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    car:{
        type:String,
    }
},{timestamps:true})

const user=mongo.model("user",userSchema);

module.exports=user
