//let's connect the mongoDB
// const user=require("./MVC/Model/model")
const {connection}=require("./MVC/connection.js")
// const  mongoose  = require("mongoose");
// const mongo=require("mongoose");
//const { type } = require("os");
// let's create the schema 
// const userSchema=new mongo.Schema({
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     car:{
//         type:String,
//     }
// },{timestamps:true})


// // creating the model to perform crud operation

// const user=mongoose.model("user",userSchema)

connection("mongodb://127.0.0.1:27017/youtube-app").then(()=>{
console.log("connected to the database");
}).catch((err)=>{
 console.log(err);
})
const router=require("./MVC/routes/route")
// let perform the crud operation with help of express all method
const express=require("express");
const app=express();
app.use(express.urlencoded({extends:false}));
app.use("/user",router)
app.listen(8000,()=>{console.log("server has started at "+8000)})
