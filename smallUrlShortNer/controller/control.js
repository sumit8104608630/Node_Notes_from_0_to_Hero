const { timeStamp } = require("console");
const url =require("../Model/model")
const user=require("../Model/userModel")
//const nanoId=require("nanoid")
const {setUser,getUser}=require("../service/auth")
const {v4:uuidv4}=require("uuid");
const { Domain } = require("domain");


const nanoId=(len)=>{
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}_+-~`";
    let id="";
    for (let i=0;i<len;i++){
        let ids=Math.floor(Math.random()*char.length);
        id +=char.charAt(ids);
    }
    return id;
}

async function handelPost(req,res) {
    const body=req.body;
    if(!body){res.status(404).end("incomplete information")}
        const shortIds=nanoId(8);
     await url.create({
        shortId:shortIds,
        url:body.url,
        visitHistory:[], 
        createdBy:req.user._id,
     }) 
    
    res.render("index",{id:shortIds})
} 

async function handelGet(req,res){
    const urls=req.params.url; 
   const entry= await url.findOneAndUpdate({
        shortId:urls
    },{
        $push:{
            visitHistory:{timeStamp:Date.now()}
        }
    }) 
    console.log(entry)
    res.redirect(entry.url);  
}    

async function handelSignIn(req,res) {
    const {name,email,password}=req.body;
    const users=await user.create({
        name:name,
        email:email,
        password:password,
    })
    console.log(users)
    res.render("index");
}
async function handelLogin(req,res) {
    const {email,password}=req.body;
    const users=await user.findOne({email,password})
    if(!users){
      return  res.render("login")
    }
    else{
     const  token=  setUser(users)
        res.cookie("uid",token,{
            domain:".urbancompany.com",
        });
       return res.redirect("/");
       
    }
}

module.exports={ 
    handelPost, 
    handelGet,
    handelSignIn,
    handelLogin,
}