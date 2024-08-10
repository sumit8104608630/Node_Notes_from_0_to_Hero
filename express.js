const express=require("express")
const app=express();
const fs=require("fs")
app.get("/",(req,res)=>{
    res.send("Hello "+req.query.name);
}).get("/file",(req,res)=>{
    fs.appendFile("./expressRequest.txt",Date.now().toString(),()=>{
        res.end("file has been created")
    })
    res.send("This is about page");
})
const port =5000
app.listen(port,()=>console.log(`ser ver has started at ${port}`))
